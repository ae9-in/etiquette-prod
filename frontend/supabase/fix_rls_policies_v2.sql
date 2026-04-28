-- ==========================================
-- FIX RLS POLICIES (DEFINITIVE V2)
-- Run this in Supabase SQL Editor
-- ==========================================

-- 1. Reset Policies on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow read own role" ON public.user_roles;
DROP POLICY IF EXISTS "Enable insert for platform_admin roles" ON public.user_roles;
DROP POLICY IF EXISTS "Enable update for platform_admin roles" ON public.user_roles;
DROP POLICY IF EXISTS "Enable delete for platform_admin roles" ON public.user_roles;
-- Drop any other potential policies
DROP POLICY IF EXISTS "Allow all read" ON public.user_roles;

-- 2. Create READ Policy for user_roles
-- Allow ALL authenticated users to read ALL roles. 
-- This is necessary for the Admin Dashboard to list users, and for the "Am I Admin?" check to work without recursion.
CREATE POLICY "Allow read all for authenticated" ON public.user_roles
FOR SELECT TO authenticated
USING (true);

-- 3. Create WRITE Policies for user_roles
-- Only platform_admin can insert/update/delete.
-- Since we allow "read all" above, the subquery checks will strictly work without recursion blocking.

CREATE POLICY "Allow insert for admins" ON public.user_roles
FOR INSERT TO authenticated
WITH CHECK (
    EXISTS (
        SELECT 1 FROM public.user_roles 
        WHERE user_id = auth.uid() 
        AND role = 'platform_admin'
    )
);

CREATE POLICY "Allow update for admins" ON public.user_roles
FOR UPDATE TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.user_roles 
        WHERE user_id = auth.uid() 
        AND role = 'platform_admin'
    )
);

CREATE POLICY "Allow delete for admins" ON public.user_roles
FOR DELETE TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.user_roles 
        WHERE user_id = auth.uid() 
        AND role = 'platform_admin'
    )
);


-- 4. Reset Policies on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Enable insert for platform_admin" ON public.profiles;
-- Drop others if they exist
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;

-- 5. Create READ Policy for profiles
-- Allow ALL authenticated users to read ALL profiles (Employee Directory)
CREATE POLICY "Allow read all profiles" ON public.profiles
FOR SELECT TO authenticated
USING (true);

-- 6. Create WRITE Policies for profiles
-- Update: Users can update their own, Admins can update all (handled by multiple policies or one OR)
-- Insert: Admins can insert

CREATE POLICY "Allow insert profiles for admins" ON public.profiles
FOR INSERT TO authenticated
WITH CHECK (
    EXISTS (
        SELECT 1 FROM public.user_roles 
        WHERE user_id = auth.uid() 
        AND role = 'platform_admin'
    )
);

CREATE POLICY "Allow update profiles for admins" ON public.profiles
FOR UPDATE TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM public.user_roles 
        WHERE user_id = auth.uid() 
        AND role = 'platform_admin'
    )
);

CREATE POLICY "Allow update own profile" ON public.profiles
FOR UPDATE TO authenticated
USING (auth.uid() = id);

-- 7. Verify Admin User is still linked correctly
-- Just a sanity check query (results won't affect policies)
SELECT * FROM public.user_roles WHERE role = 'platform_admin';
