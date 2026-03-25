-- Function to claim a pre-seeded profile by email
-- This allows a user who logs in (via Google) to "take over" a profile 
-- that was created for them by an admin before they signed up.

CREATE OR REPLACE FUNCTION claim_profile_by_email()
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER -- Runs with privileges of the creator (postgres/admin)
SET search_path = public
AS $$
DECLARE
  curr_user_id uuid;
  curr_user_email text;
  result_json json;
BEGIN
  -- Get current executing user's ID and Email from auth context
  curr_user_id := auth.uid();
  curr_user_email := auth.email();

  IF curr_user_id IS NULL OR curr_user_email IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  -- 1. Link user_roles
  -- Update user_roles where email matches but user_id is NULL
  UPDATE public.user_roles
  SET user_id = curr_user_id
  WHERE email = curr_user_email
  AND (user_id IS NULL OR user_id != curr_user_id);

  -- 2. Link profiles
  -- Check if a profile exists with this email but a different ID
  IF EXISTS (SELECT 1 FROM public.profiles WHERE email = curr_user_email AND id != curr_user_id) THEN
      
      -- If a profile ALREADY exists for the current UUID (maybe created by a trigger or earlier login),
      -- but it is NOT the pre-seeded one (which has a random UUID), we need to resolve the conflict.
      -- Usually, the pre-seeded one has the 'assigned_courses' and 'role' we want.
      -- The auto-created one might be empty.
      
      -- Delete the "fresh" profile if it exists, so we can move the pre-seeded one to this UUID
      DELETE FROM public.profiles WHERE id = curr_user_id;
      
      -- Update the pre-seeded profile's ID to the real auth ID
      UPDATE public.profiles
      SET id = curr_user_id
        -- optional: update avatar or name if they were placeholders? 
        -- For now, let's keep admin data as source of truth, or update only if null.
      WHERE email = curr_user_email;

      result_json := json_build_object('success', true, 'message', 'Profile claimed');
  ELSE
      result_json := json_build_object('success', true, 'message', 'No pre-seeded profile to claim or already claimed');
  END IF;

  RETURN result_json;
END;
$$;
