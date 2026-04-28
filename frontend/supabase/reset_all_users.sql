-- ==========================================
-- NUCLEAR RESET: DELETE ALL DATA EXCEPT ADMINS
-- Run this in Supabase SQL Editor
-- This script deletes all users, profiles, and roles EXCEPT those with the 'platform_admin' role.
-- ==========================================

BEGIN;

-- 1. Delete from PROFILES (Public Data)
-- We keep anyone who is a 'platform_admin'
DELETE FROM public.profiles 
WHERE role != 'platform_admin';

-- 2. Delete from USER_ROLES (Authorization)
-- We keep anyone who is a 'platform_admin'
DELETE FROM public.user_roles 
WHERE role != 'platform_admin';

-- 3. Delete from AUTH.USERS (Authentication)
-- This attempts to delete the actual login accounts.
-- Note: This requires privileges usually available in the SQL Editor.
-- We key off the email to identify who to keep (since auth.users doesn't have 'role' column directly, we use the user_roles table).
-- Wait! We just deleted from user_roles, so the subquery must be careful.
-- Actually, we should calculate the keep list FIRST or use a join.
-- But since we deleted non-admins from user_roles, only admins remain there.
-- So we can say: Delete from auth.users where email is NOT IN (select email from user_roles).

DELETE FROM auth.users
WHERE email NOT IN (
    SELECT email FROM public.user_roles
);

COMMIT;

-- 4. Verification
SELECT * FROM public.user_roles;
-- Should only show your admin account(s).
