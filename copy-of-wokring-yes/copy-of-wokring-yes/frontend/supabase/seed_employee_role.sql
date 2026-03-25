-- ==========================================
-- SEED EMPLOYEE ROLE FOR TESTING
-- Run this in Supabase SQL Editor
-- ==========================================

-- Seeding 'itschiragg2006@gmail.com' as an employee.
-- This simulates a successful "Invite".

INSERT INTO public.user_roles (email, role, user_id)
SELECT 
    'itschiragg2006@gmail.com', 
    'employee', 
    (SELECT id FROM auth.users WHERE email = 'itschiragg2006@gmail.com' LIMIT 1)
ON CONFLICT (email) DO UPDATE 
SET role = 'employee';

-- Verify
SELECT * FROM public.user_roles WHERE email = 'itschiragg2006@gmail.com';
