-- This script fixes a recursive loop in the Row Level Security (RLS) policies
-- for the 'profiles' table. It replaces the existing policies with new ones
-- that prevent the recursion and allow authenticated users to selectively read
-- and update their own profiles.

-- 1. Drop the existing policies that are causing the recursion.
--    Replace the policy names with the actual names from your Supabase dashboard
--    if they are different.
DROP POLICY IF EXISTS "Public profiles are viewable by everyone." ON profiles;
DROP POLICY IF EXISTS "Users can update own profile." ON profiles;

-- 2. Create a new policy that allows any authenticated user to check if an email
--    is invited without querying the 'profiles' table recursively.
CREATE POLICY "Allow authenticated selective read" ON profiles
  FOR SELECT
  TO authenticated
  USING (true);

-- 3. Create a new policy that allows users to update only their own profiles.
CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);
