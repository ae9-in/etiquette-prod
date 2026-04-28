-- ==========================================
-- RESET ADMIN USER (DELETE)
-- Run this in Supabase SQL Editor
-- ==========================================

-- Error handling is difficult in simple SQL blocks for Supabase Editor, 
-- but we can just try to delete.

DELETE FROM public.user_roles 
WHERE email = 'etiqettelms@gmail.com';

DELETE FROM auth.users 
WHERE email = 'etiqettelms@gmail.com';

SELECT * FROM auth.users WHERE email = 'etiqettelms@gmail.com';
-- Should be empty
