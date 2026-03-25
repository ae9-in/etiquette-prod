-- ==========================================
-- FIX RLS RECURSION (SECURITY DEFINER)
-- Run this in Supabase SQL Editor
-- ==========================================

-- 1. Create a secure function to check admin status
-- SECURITY DEFINER means this runs with the permissions of the creator (superuser/admin), 
-- bypassing the RLS on user_roles itself during the check.
CREATE OR REPLACE FUNCTION public.is_platform_admin()
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'platform_admin'
  );
$$;

-- 2. Update Policies to use the safe function

-- USER_ROLES Policies
DROP POLICY IF EXISTS "Allow insert for admins" ON public.user_roles;
CREATE POLICY "Allow insert for admins" ON public.user_roles
FOR INSERT TO authenticated
WITH CHECK ( is_platform_admin() );

DROP POLICY IF EXISTS "Allow update for admins" ON public.user_roles;
CREATE POLICY "Allow update for admins" ON public.user_roles
FOR UPDATE TO authenticated
USING ( is_platform_admin() );

DROP POLICY IF EXISTS "Allow delete for admins" ON public.user_roles;
CREATE POLICY "Allow delete for admins" ON public.user_roles
FOR DELETE TO authenticated
USING ( is_platform_admin() );


-- PROFILES Policies
DROP POLICY IF EXISTS "Allow insert profiles for admins" ON public.profiles;
CREATE POLICY "Allow insert profiles for admins" ON public.profiles
FOR INSERT TO authenticated
WITH CHECK ( is_platform_admin() );

DROP POLICY IF EXISTS "Allow update profiles for admins" ON public.profiles;
CREATE POLICY "Allow update profiles for admins" ON public.profiles
FOR UPDATE TO authenticated
USING ( is_platform_admin() );

-- Verify the function works (should return true for you, false for others)
SELECT is_platform_admin();
