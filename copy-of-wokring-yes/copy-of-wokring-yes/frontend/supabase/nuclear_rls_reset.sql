-- ==========================================
-- NUCLEAR RLS RESET & FIX
-- Run this in Supabase SQL Editor
-- This script dynamically drops ALL policies on 'profiles' to ensure no hidden ones remain.
-- ==========================================

BEGIN;

-- 1. Dynamic Drop of ALL Policies on 'profiles'
DO $$
DECLARE
    pol record;
BEGIN
    FOR pol IN 
        SELECT policyname 
        FROM pg_policies 
        WHERE tablename = 'profiles' 
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON profiles', pol.policyname);
    END LOOP;
END $$;

-- 2. Ensure RLS is Enabled
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- 3. Re-Apply Simplified Policies (Non-Recursive)

-- 3a. SELECT POLICY (Allow Authenticated Read All - Simple)
CREATE POLICY "Allow authenticated read all"
ON profiles FOR SELECT
TO authenticated
USING (true); 

-- 3b. UPDATE POLICY (Self-Update Only)
CREATE POLICY "Allow users update own"
ON profiles FOR UPDATE
TO authenticated
USING (auth.uid() = id);

-- 3c. INSERT POLICY (Self-Insert Only)
CREATE POLICY "Allow users insert own"
ON profiles FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = id);

-- 3d. SERVICE ROLE POLICY (Fixes Edge Function Timeout/Blocks)
-- Explicitly allow service_role to do ANYTHING
-- Note: Service Role bypasses RLS by default, but if you have restrictive USING clauses without checking role...
-- Actually, Service Role bypass is automatic if using service_role key.
-- But the Trigger we added might block it.

-- 4. Update Trigger Function to be ABSOLUTELY SAFE
CREATE OR REPLACE FUNCTION prevent_sensitive_updates()
RETURNS TRIGGER AS $$
BEGIN
  -- Allow Service Role / Superadmins (CRITICAL FIX)
  IF (auth.jwt() ->> 'role') = 'service_role' OR (auth.jwt() ->> 'role') = 'supabase_admin' THEN
    RETURN NEW;
  END IF;

  -- Allow if Admin (User)
  -- Note: We assume is_admin() is correct. If is_admin() fails, we default to block.
  -- But to avoid recursion in is_admin(), we trust SECURITY DEFINER there.
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

COMMIT;
