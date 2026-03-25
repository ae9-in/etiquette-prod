-- ==========================================
-- FIX ADMIN USER & USER_ROLES
-- Run this in Supabase SQL Editor
-- ==========================================

-- 1. Ensure user_roles table exists
CREATE TABLE IF NOT EXISTS public.user_roles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    role TEXT NOT NULL CHECK (role IN ('hr', 'employee', 'platform_admin')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Enable RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 3. Add Policies (or replace existing)
DROP POLICY IF EXISTS "Allow read own role" ON public.user_roles;
CREATE POLICY "Allow read own role"
ON public.user_roles FOR SELECT
TO authenticated
USING (auth.uid() = user_id OR email = auth.jwt() ->> 'email');

-- Allow Service Role to do everything (implicitly handled usually, but good to be explicit for some setups)
-- No explicit policy needed for service_role if using service key, but for dashboard SQL editor it acts as postgres/admin.

-- 4. Seed the Admin User Role
-- We first ensure the user exists in auth.users (You must have signed up via the app or script already)
-- If you haven't signed up 'etiqettelms@gmail.com', do that first or run:
-- NOTE: You cannot insert into auth.users easily via SQL Editor due to hashing.
-- Assuming the user 'etiqettelms@gmail.com' EXISTS in auth.users (which my script did).

INSERT INTO public.user_roles (user_id, email, role)
SELECT id, email, 'platform_admin'
FROM auth.users
WHERE email = 'etiqettelms@gmail.com'
ON CONFLICT (email) DO UPDATE 
SET role = 'platform_admin', 
    user_id = EXCLUDED.user_id;

-- 5. Confirm
SELECT * FROM public.user_roles WHERE email = 'etiqettelms@gmail.com';
