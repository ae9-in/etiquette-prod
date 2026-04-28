-- ==========================================
-- SEED ADMIN ROLE FOR GOOGLE OAUTH
-- Run this in Supabase SQL Editor
-- ==========================================

-- We need to ensure that when 'etiqettelms@gmail.com' logs in via Google,
-- the system knows they are a Platform Admin.

-- The 'user_roles' table is our source of truth for roles.
-- We insert the email and role. The 'user_id' can be null initially.
-- The AuthContext logic will link the user_id when they first log in.
-- OR if the user already exists in auth.users (from previous attempts), we can try to link it now.

INSERT INTO public.user_roles (email, role, user_id)
SELECT 
    'etiqettelms@gmail.com', 
    'platform_admin', 
    (SELECT id FROM auth.users WHERE email = 'etiqettelms@gmail.com' LIMIT 1)
ON CONFLICT (email) DO UPDATE 
SET role = 'platform_admin';

-- Verify
SELECT * FROM public.user_roles WHERE email = 'etiqettelms@gmail.com';
