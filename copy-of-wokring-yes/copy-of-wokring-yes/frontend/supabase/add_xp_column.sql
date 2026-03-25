-- Add xp column to profiles table if it doesn't exist
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS xp integer DEFAULT 0;

-- Ensure RLS policies allow updating xp (usually covers 'update' on own profile)
-- We assume existing update policy covers all columns.
