-- ==========================================
-- CONFIRM ADMIN EMAIL (FIXED)
-- Run this in Supabase SQL Editor
-- ==========================================

-- Confirm the email address for the admin user
-- We only update email_confirmed_at. confirmed_at is generated automatically.
UPDATE auth.users
SET email_confirmed_at = NOW()
WHERE email = 'etiqettelms@gmail.com';

-- Verify the update
SELECT email, email_confirmed_at, confirmed_at
FROM auth.users 
WHERE email = 'etiqettelms@gmail.com';
