-- ==========================================
-- DISABLE RLS TEMPORARILY
-- Run this in Supabase SQL Editor
-- ==========================================

-- We are disabling RLS on user_roles to confirm if the "Hang" is caused by Policy Recursion.
-- If this works, we know 100% the issue is the Policy Logic.

ALTER TABLE public.user_roles DISABLE ROW LEVEL SECURITY;

-- Note: This makes the table public (anyone with the anon key can read/write).
-- We will Re-Enable it immediately after verifying the fix.
