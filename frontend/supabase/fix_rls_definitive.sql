-- DEFINITIVE RLS FIX WITH SECURITY DEFINER
-- This script breaks any potential infinite recursion loops by using a
-- SECURITY DEFINER function for admin checks.

BEGIN;

-- 1. Create Security Definer Function to check Admin status
-- This function runs with the privileges of the creator (postgres), bypassing RLS.
CREATE OR REPLACE FUNCTION public.is_platform_admin()
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() AND role = 'platform_admin'
  );
END;
$$;

-- 2. RESET PROFILES
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Drop ALL known/potential policies on profiles
DROP POLICY IF EXISTS "Public profiles are viewable by everyone." ON profiles;
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile." ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Allow authenticated selective read" ON profiles;
DROP POLICY IF EXISTS "Allow authenticated read all" ON profiles;
DROP POLICY IF EXISTS "Enable read access for all users" ON profiles;
DROP POLICY IF EXISTS "Users can see their own profile" ON profiles;
DROP POLICY IF EXISTS "Allow users update own" ON profiles;
DROP POLICY IF EXISTS "Admin Update All" ON profiles;
DROP POLICY IF EXISTS "Allow users insert own" ON profiles;
DROP POLICY IF EXISTS "Admin Insert All" ON profiles;
DROP POLICY IF EXISTS "Admin Delete All" ON profiles;
DROP POLICY IF EXISTS "Admins can insert profiles" ON profiles;
DROP POLICY IF EXISTS "Admins can update profiles" ON profiles;

-- Create Safe Policies for Profiles
CREATE POLICY "Profiles are viewable by everyone" 
ON profiles FOR SELECT TO authenticated USING (true);

CREATE POLICY "Users can update own profile" 
ON profiles FOR UPDATE TO authenticated USING (auth.uid() = id);

CREATE POLICY "Admins can insert profiles" 
ON profiles FOR INSERT TO authenticated 
WITH CHECK (is_platform_admin());

CREATE POLICY "Admins can update profiles" 
ON profiles FOR UPDATE TO authenticated 
USING (is_platform_admin());

CREATE POLICY "Admins can delete profiles" 
ON profiles FOR DELETE TO authenticated 
USING (is_platform_admin());


-- 3. RESET USER_ROLES
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;

-- Drop ALL known/potential policies on user_roles
DROP POLICY IF EXISTS "Enable read access for all users" ON user_roles;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON user_roles;
DROP POLICY IF EXISTS "Enable update for users based on email" ON user_roles;
DROP POLICY IF EXISTS "Enable delete for users based on email" ON user_roles;
DROP POLICY IF EXISTS "Admins can do everything on user_roles" ON user_roles;
DROP POLICY IF EXISTS "Admins can insert user_roles" ON user_roles;
DROP POLICY IF EXISTS "Admins can update user_roles" ON user_roles;
DROP POLICY IF EXISTS "Admins can delete user_roles" ON user_roles;
DROP POLICY IF EXISTS "Users can update own user_roles" ON user_roles;

-- Create Safe Policies for User Roles
CREATE POLICY "User Roles are viewable by everyone" 
ON user_roles FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admins can insert user_roles" 
ON user_roles FOR INSERT TO authenticated 
WITH CHECK (is_platform_admin());

CREATE POLICY "Admins can update user_roles" 
ON user_roles FOR UPDATE TO authenticated 
USING (is_platform_admin());

CREATE POLICY "Admins can delete user_roles" 
ON user_roles FOR DELETE TO authenticated 
USING (is_platform_admin());

-- Allow users to update their own role mapping (e.g. claim profile)
CREATE POLICY "Users can claim their own user_role" 
ON user_roles FOR UPDATE TO authenticated 
USING (email = auth.email());


COMMIT;
