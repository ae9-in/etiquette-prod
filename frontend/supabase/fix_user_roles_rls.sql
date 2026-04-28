-- FIX RLS FOR USER_ROLES AND PROFILES

BEGIN;

-- 1. USER_ROLES POLICIES
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Enable read access for all users" ON user_roles;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON user_roles;
DROP POLICY IF EXISTS "Enable update for users based on email" ON user_roles;
DROP POLICY IF EXISTS "Enable delete for users based on email" ON user_roles;
DROP POLICY IF EXISTS "Admins can do everything on user_roles" ON user_roles;

-- Allow read for authenticated users (needed for login/auth checks)
CREATE POLICY "Enable read access for all users" ON user_roles
FOR SELECT TO authenticated USING (true);

-- Allow Admins to INSERT
-- We check if the *current user* is an admin by looking up their profile.
-- Note: usage of exists(select 1 from profiles...) might recursion if profiles also checks user_roles.
-- To be safe, we'll use a trusted function or simple role check if possible.
-- For now, let's assume specific email or role check via auth.jwt() if populated, or specific admin function.
CREATE POLICY "Admins can insert user_roles" ON user_roles
FOR INSERT TO authenticated
WITH CHECK (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() AND role = 'platform_admin'
  )
);

-- Allow Admins to UPDATE
CREATE POLICY "Admins can update user_roles" ON user_roles
FOR UPDATE TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() AND role = 'platform_admin'
  )
);

-- Allow Admins to DELETE
CREATE POLICY "Admins can delete user_roles" ON user_roles
FOR DELETE TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() AND role = 'platform_admin'
  )
);

-- Also allow the user themselves to update their own row (e.g. claiming profile)
CREATE POLICY "Users can update own user_roles" ON user_roles
FOR UPDATE TO authenticated
USING ( auth.uid() = user_id OR email = auth.email() );


-- 2. PROFILES POLICIES (Re-enforcing Admin Access)
-- Ensure Admins can INSERT into profiles (critical for Pre-seeding)

DROP POLICY IF EXISTS "Admins can insert profiles" ON profiles;
CREATE POLICY "Admins can insert profiles" ON profiles
FOR INSERT TO authenticated
WITH CHECK (
  EXISTS (
     SELECT 1 FROM profiles
     WHERE id = auth.uid() AND role = 'platform_admin'
  )
);

-- Ensure Admins can UPDATE profiles
DROP POLICY IF EXISTS "Admins can update profiles" ON profiles;
CREATE POLICY "Admins can update profiles" ON profiles
FOR UPDATE TO authenticated
USING (
  EXISTS (
     SELECT 1 FROM profiles
     WHERE id = auth.uid() AND role = 'platform_admin'
  )
);


COMMIT;
