-- FORCE FIX: Complete Reset of Profiles RLS Policies
-- Run this in the Supabase SQL Editor to resolve "Infinite Loading" issues.

BEGIN;

-- 1. Disable RLS temporarily to unblock any stuck queries
ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;

-- 2. Drop ALL existing policies (using a broad sweep to catch any variations)
DROP POLICY IF EXISTS "Public profiles are viewable by everyone." ON profiles;
DROP POLICY IF EXISTS "Users can update own profile." ON profiles;
DROP POLICY IF EXISTS "Allow authenticated selective read" ON profiles;
DROP POLICY IF EXISTS "Enable read access for all users" ON profiles;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON profiles;
DROP POLICY IF EXISTS "Enable update for users based on email" ON profiles;
DROP POLICY IF EXISTS "Profiles are viewable by users who created them." ON profiles;
DROP POLICY IF EXISTS "Users can insert their own profile." ON profiles;
DROP POLICY IF EXISTS "Authenticated users can select all profiles" ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;

-- 3. Re-enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- 4. Create Clean, Non-Recursive Policies

-- READ: Allow ALL authenticated users to read ALL profiles (prevents recursion)
CREATE POLICY "Allow authenticated read all" 
ON profiles FOR SELECT 
TO authenticated 
USING (true);

-- UPDATE: Allow users to update ONLY their own profile
CREATE POLICY "Allow users update own" 
ON profiles FOR UPDATE 
TO authenticated 
USING (auth.uid() = id);

-- INSERT: Allow users to insert ONLY their own profile
CREATE POLICY "Allow users insert own" 
ON profiles FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = id);

COMMIT;

-- Verification
SELECT * FROM pg_policies WHERE tablename = 'profiles';
