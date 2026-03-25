import React, { useEffect } from 'react';
import Login from './Login';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const { user, profile, loading, profileError, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user && profile) {
      let dest = '/employee'; // default
      
      if (profile.role === 'platform_admin') {
        dest = '/admin';
      } else if (profile.role === 'hr') {
        dest = '/hr';
      } else if (profile.role === 'employee') {
        dest = '/employee';
      }
      
      navigate(dest, { replace: true });
    }
  }, [loading, user, profile, navigate]);

  if (user && profileError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-4">
            <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Access Issue</h2>
          <p className="text-sm text-gray-500 mb-6">{profileError.message}</p>
          <button
            onClick={() => signOut()}
            className="w-full inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return <Login />;
}
