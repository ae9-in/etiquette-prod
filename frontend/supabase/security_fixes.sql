-- ==========================================
-- SECURITY FIXES & RLS POLICY UPDATE
-- Run this in Supabase SQL Editor
-- ==========================================

BEGIN;

-- 1. Helper Function: Check if user is admin
-- SECURITY DEFINER allows this function to bypass RLS to check roles
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() AND role = 'platform_admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 2. Trigger Function: Prevent unauthorized sensitive updates
CREATE OR REPLACE FUNCTION prevent_sensitive_updates()
RETURNS TRIGGER AS $$
BEGIN
  -- Allow if Admin
  IF is_admin() THEN
    RETURN NEW;
  END IF;

  -- Allow if inside our secure RPC
  IF current_setting('app.in_rpc', true) = 'true' THEN
    RETURN NEW;
  END IF;

  -- Checks
  IF (OLD.role IS DISTINCT FROM NEW.role) THEN
    RAISE EXCEPTION 'Unauthorized: You cannot change your own role.';
  END IF;

  IF (OLD.xp IS DISTINCT FROM NEW.xp) THEN
    RAISE EXCEPTION 'Unauthorized: XP can only be updated via system events.';
  END IF;

  IF (OLD.progress IS DISTINCT FROM NEW.progress) THEN
     RAISE EXCEPTION 'Unauthorized: Progress actions must use update_module_progress() or submit_course_completion().';
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 3. Create Trigger
DROP TRIGGER IF EXISTS check_sensitive_updates ON profiles;
CREATE TRIGGER check_sensitive_updates
BEFORE UPDATE ON profiles
FOR EACH ROW
EXECUTE FUNCTION prevent_sensitive_updates();


-- 4. RPC: Submit Course Completion (Server-Side Logic)
-- securely updates XP and Progress
CREATE OR REPLACE FUNCTION submit_course_completion(
  course_id TEXT,
  score INT,
  metadata JSONB DEFAULT '{}'::jsonb
)
RETURNS JSONB AS $$
DECLARE
  current_progress JSONB;
  user_profile profiles%ROWTYPE;
  xp_reward INT := 500; -- ASSESSMENT_PASS value
  new_xp INT;
  is_passed BOOLEAN;
  course_data JSONB;
BEGIN
  -- Get current profile
  SELECT * INTO user_profile FROM profiles WHERE id = auth.uid();
  
  IF NOT FOUND THEN
    RAISE EXCEPTION 'User not found';
  END IF;

  -- Logic
  is_passed := score >= 70;
  current_progress := COALESCE(user_profile.progress, '{}'::jsonb);
  course_data := COALESCE(current_progress->course_id, '{}'::jsonb);

  -- Check if already completed to prevent farming XP
  IF (course_data->>'isCompleted')::boolean THEN
     xp_reward := 0;
  ELSIF is_passed THEN
     xp_reward := 500;
  ELSE
     xp_reward := 0; 
  END IF;

  new_xp := COALESCE(user_profile.xp, 0) + xp_reward;

  -- Update Progress JSON
  -- We merge the new assessment data while preserving existing module progress
  course_data := course_data || jsonb_build_object(
      'isCompleted', is_passed,
      'assessmentScore', score,
      'completionDate', now(),
      'metadata', metadata
  );
  
  -- Update the progress object
  current_progress := current_progress || jsonb_build_object(course_id, course_data);

  -- PERFORM UPDATE (Bypassing Trigger Checks via Config Variable)
  PERFORM set_config('app.in_rpc', 'true', true);

  UPDATE profiles 
  SET 
    progress = current_progress,
    xp = new_xp
  WHERE id = auth.uid();

  return jsonb_build_object('success', true, 'new_xp', new_xp, 'is_passed', is_passed, 'xp_gained', xp_reward);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;


-- 5. RPC: Update Module Progress
CREATE OR REPLACE FUNCTION update_module_progress(
  course_id TEXT,
  module_id TEXT
)
RETURNS JSONB AS $$
DECLARE
  current_progress JSONB;
  user_profile profiles%ROWTYPE;
  xp_reward INT := 200; -- MODULE_COMPLETE value
  new_xp INT;
  course_data JSONB;
  completed_modules JSONB;
  modules_array TEXT[];
  already_completed BOOLEAN;
BEGIN
  -- Get current profile
  SELECT * INTO user_profile FROM profiles WHERE id = auth.uid();
  
  IF NOT FOUND THEN
    RAISE EXCEPTION 'User not found';
  END IF;

  current_progress := COALESCE(user_profile.progress, '{}'::jsonb);
  course_data := COALESCE(current_progress->course_id, '{}'::jsonb);
  completed_modules := COALESCE(course_data->'completedModules', '[]'::jsonb);
  
  -- Convert JSONB array to TEXT array for easier checking
  SELECT ARRAY(SELECT jsonb_array_elements_text(completed_modules)) INTO modules_array;

  -- Check if module already completed
  IF module_id = ANY(modules_array) THEN
    already_completed := true;
    xp_reward := 0;
  ELSE
    already_completed := false;
    -- Append new module
    modules_array := array_append(modules_array, module_id);
    -- Convert back to JSONB
    completed_modules := to_jsonb(modules_array);
  END IF;

  new_xp := COALESCE(user_profile.xp, 0) + xp_reward;

  -- Update Progress JSON
  course_data := course_data || jsonb_build_object(
      'courseId', course_id,
      'completedModules', completed_modules,
      -- Ensure other fields exist if not present
      'isCompleted', COALESCE((course_data->>'isCompleted')::boolean, false)
  );
  
  current_progress := current_progress || jsonb_build_object(course_id, course_data);

  -- PERFORM UPDATE
  PERFORM set_config('app.in_rpc', 'true', true);

  UPDATE profiles 
  SET 
    progress = current_progress,
    xp = new_xp
  WHERE id = auth.uid();

  return jsonb_build_object('success', true, 'new_xp', new_xp, 'xp_gained', xp_reward);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;


-- 6. RLS Policies (Refined)

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- 6a. SELECT POLICY
DROP POLICY IF EXISTS "Allow authenticated read all" ON profiles;
-- Allow authenticated users to read profiles (for now, for leaderboard)
CREATE POLICY "Allow authenticated read all"
ON profiles FOR SELECT
TO authenticated
USING (true); 

-- 6b. UPDATE POLICY
DROP POLICY IF EXISTS "Allow users update own" ON profiles;
DROP POLICY IF EXISTS "Admin Update All" ON profiles;

-- Users can update basic info like avatar/name if they want, but NOT sensitive columns due to TRIGGER
CREATE POLICY "Allow users update own"
ON profiles FOR UPDATE
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Admin Update All"
ON profiles FOR UPDATE
TO authenticated
USING (is_admin()); 

-- 6c. INSERT POLICY
DROP POLICY IF EXISTS "Allow users insert own" ON profiles;
DROP POLICY IF EXISTS "Admin Insert All" ON profiles;

CREATE POLICY "Allow users insert own"
ON profiles FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = id);

CREATE POLICY "Admin Insert All"
ON profiles FOR INSERT
TO authenticated
WITH CHECK (is_admin());

-- 6d. DELETE POLICY
DROP POLICY IF EXISTS "Admin Delete All" ON profiles;

CREATE POLICY "Admin Delete All"
ON profiles FOR DELETE
TO authenticated
USING (is_admin());

COMMIT;
