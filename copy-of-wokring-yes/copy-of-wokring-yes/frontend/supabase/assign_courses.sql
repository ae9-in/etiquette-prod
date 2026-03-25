-- ==========================================
-- ASSIGN COURSES TO EMPLOYEE
-- Run this in Supabase SQL Editor
-- ==========================================

-- We need to ensure the user has an entry in the 'profiles' table with assigned courses.
-- The user_id is fetched from auth.users.

WITH target_user AS (
    SELECT id, email FROM auth.users WHERE email = 'itschiragg2006@gmail.com'
)
INSERT INTO public.profiles (id, email, role, name, assigned_courses)
SELECT 
    id, 
    email, 
    'employee', 
    'Chirag', 
    ARRAY['posh-certification-2024']
FROM target_user
ON CONFLICT (id) DO UPDATE 
SET assigned_courses = ARRAY['posh-certification-2024'];

-- Verify
SELECT * FROM public.profiles WHERE email = 'itschiragg2006@gmail.com';
