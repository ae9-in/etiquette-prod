-- ==========================================
-- SECURITY FIXES V2 & RLS POLICY CLEANUP
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
  -- Allow Service Role (Edge Functions) and Superadmins
  -- This fixes the issue where inviteUserByEmail was being blocked
  IF (auth.jwt() ->> 'role') = 'service_role' OR (auth.jwt() ->> 'role') = 'supabase_admin' THEN
    RETURN NEW;
  END IF;

  -- Allow if Admin (User)
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


-- 4. RPCs (No changes, but included for completeness if needed, shortened here)
-- ... (Assuming RPCs are already correct from V1)

-- 5. RLS Policies (Aggressive Cleanup)

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Drop ALL potential interfering policies
DROP POLICY IF EXISTS "Allow authenticated read all" ON profiles;
DROP POLICY IF EXISTS "Enable read access for all users" ON profiles;
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON profiles;
DROP POLICY IF EXISTS "Users can see their own profile" ON profiles;
DROP POLICY IF EXISTS "Allow users update own" ON profiles;
DROP POLICY IF EXISTS "Admin Update All" ON profiles;
DROP POLICY IF EXISTS "Allow users insert own" ON profiles;
DROP POLICY IF EXISTS "Admin Insert All" ON profiles;
DROP POLICY IF EXISTS "Admin Delete All" ON profiles;

-- 6a. SELECT POLICY
-- Simple, non-recursive policy.
CREATE POLICY "Allow authenticated read all"
ON profiles FOR SELECT
TO authenticated
USING (true); 

-- 6b. UPDATE POLICY
CREATE POLICY "Allow users update own"
ON profiles FOR UPDATE
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Admin Update All"
ON profiles FOR UPDATE
TO authenticated
USING (is_admin()); 

-- 6c. INSERT POLICY
CREATE POLICY "Allow users insert own"
ON profiles FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = id);

CREATE POLICY "Admin Insert All"
ON profiles FOR INSERT
TO authenticated
WITH CHECK (is_admin());

-- 6d. DELETE POLICY
CREATE POLICY "Admin Delete All"
ON profiles FOR DELETE
TO authenticated
USING (is_admin());

COMMIT;
