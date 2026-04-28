SELECT schemaname, tablename, policyname, cmd, roles, qual, with_check 
FROM pg_policies 
WHERE tablename IN ('user_roles', 'profiles')
ORDER BY tablename, policyname;
