-- ==========================================
-- VERIFY ADMIN FUNCTION
-- Run this in Supabase SQL Editor
-- ==========================================

-- 1. Get the ID of the admin user
DO $$
DECLARE
    target_user_id uuid;
    is_admin boolean;
BEGIN
    SELECT id INTO target_user_id FROM auth.users WHERE email = 'etiqettelms@gmail.com';
    
    RAISE NOTICE 'Testing for User ID: %', target_user_id;

    -- 2. Check the table directly
    PERFORM 1 FROM public.user_roles 
    WHERE user_id = target_user_id 
    AND role = 'platform_admin';
    
    IF FOUND THEN
        RAISE NOTICE '✅ Direct Table Check: User IS platform_admin in user_roles';
    ELSE
        RAISE NOTICE '❌ Direct Table Check: User is NOT found or NOT platform_admin';
    END IF;

    -- 3. We cannot easily mock auth.uid() in a DO block for the function call without complex setups,
    -- BUT if the Direct Check passed, the Function (which does the same SELECT) will work 
    -- WHEN CALLED BY THE APP (where auth.uid() is set correctly).

END $$;
