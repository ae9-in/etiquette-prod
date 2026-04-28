-- ==========================================
-- FIX DASHBOARD ACCESS (IDEMPOTENT VERSION)
-- Run this in Supabase SQL Editor
-- ==========================================

-- 1. Add assigned_courses to user_roles (Backwards compatibility / Staging)
ALTER TABLE public.user_roles 
ADD COLUMN IF NOT EXISTS assigned_courses text[] DEFAULT '{}';

-- 2. Relax Foreign Key on profiles.id to allow pre-seeding
DO $$ 
BEGIN
    IF EXISTS (
        SELECT 1 
        FROM information_schema.table_constraints 
        WHERE constraint_name = 'profiles_id_fkey'
        AND table_name = 'profiles'
    ) THEN
        ALTER TABLE public.profiles DROP CONSTRAINT profiles_id_fkey;
    END IF;
END $$;

-- 3. Ensure profiles table has necessary columns
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS assigned_courses text[] DEFAULT '{}';

-- 4. Enable RLS for inserts (Policy check via DO block to avoid errors)
DO $$ 
BEGIN
    -- Check and create policy for profiles insert
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'profiles' 
        AND policyname = 'Enable insert for platform_admin'
    ) THEN
        CREATE POLICY "Enable insert for platform_admin" ON public.profiles
        FOR INSERT TO authenticated
        WITH CHECK (
            auth.uid() IN (SELECT user_id FROM public.user_roles WHERE role = 'platform_admin')
        );
    END IF;

    -- Check and create policy for user_roles insert
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'user_roles' 
        AND policyname = 'Enable insert for platform_admin roles'
    ) THEN
        CREATE POLICY "Enable insert for platform_admin roles" ON public.user_roles
        FOR INSERT TO authenticated
        WITH CHECK (
            auth.uid() IN (SELECT user_id FROM public.user_roles WHERE role = 'platform_admin')
        );
    END IF;
END $$;
