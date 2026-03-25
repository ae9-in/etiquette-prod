-- FIX: Complete RLS Reset for Profiles Table
-- This script will:
-- 1. Temporarily disable RLS to clear any immediate blocks.
-- 2. Drop all known/likely policies to remove the recursion source.
-- 3. Re-enable RLS and create clean, non-recursive policies.

-- Step 1: Disable RLS temporarily (safety net)
ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;

-- Step 2: Drop ALL potential policies (names from default templates and previous attempts)
DROP POLICY IF EXISTS "Public profiles are viewable by everyone." ON profiles;
DROP POLICY IF EXISTS "Users can update own profile." ON profiles;
DROP POLICY IF EXISTS "Allow authenticated selective read" ON profiles;
DROP POLICY IF EXISTS "Enable read access for all users" ON profiles;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON profiles;
DROP POLICY IF EXISTS "Enable update for users based on email" ON profiles;
DROP POLICY IF EXISTS "Profiles are viewable by users who created them." ON profiles;
DROP POLICY IF EXISTS "Users can insert their own profile." ON profiles;
DROP POLICY IF EXISTS "Authenticated users can select all profiles" ON profiles;

-- Step 3: Re-enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Step 4: Create Non-Recursive Policies

-- Policy 1: READ - Allow any authenticated user to read any profile
-- This is necessary for "Invitation Check" to work without recursion.
-- We use "true" to avoid querying the table itself.
CREATE POLICY "Allow authenticated selective read" 
ON profiles FOR SELECT 
TO authenticated 
USING (true);

-- Policy 2: UPDATE - Allow users to update ONLY their own profile
-- This ensures users can't modify others' data.
CREATE POLICY "Users can update own profile" 
ON profiles FOR UPDATE 
TO authenticated 
USING (auth.uid() = id);

-- Policy 3: INSERT - Allow users to insert their own profile
-- Needed for the initial profile creation/sync.
CREATE POLICY "Users can insert own profile" 
ON profiles FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = id);

-- Verification: Check if it works
-- You should see the policies in the Dashboard after running this.
