-- ==========================================
-- FORCE LINK ADMIN ID
-- Run this in Supabase SQL Editor
-- ==========================================

-- The admin user 'etiqettelms@gmail.com' currently has user_id = NULL in user_roles.
-- The RLS policies require user_id to MATCH auth.uid() to grant admin permissions.
-- We must manually link them so the system recognizes you as Admin.

UPDATE public.user_roles
SET user_id = (SELECT id FROM auth.users WHERE email = 'etiqettelms@gmail.com')
WHERE email = 'etiqettelms@gmail.com';

-- Verify it's no longer NULL
SELECT * FROM public.user_roles WHERE email = 'etiqettelms@gmail.com';
