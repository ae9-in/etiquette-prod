import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import { COURSES } from './data/courses';
import { UserProfile, UserProgress } from './types';
import LoginPage from './pages/LoginPage';
import PlatformAdminLogin from './pages/PlatformAdminLogin';
import Landing from './pages/Landing';
import EmployeeDashboard from './pages/EmployeeDashboard';
import ProtectedRoute from './src/components/ProtectedRoute';
import CourseView from './pages/CourseView';
import CourseContent from './pages/CourseContent';
import Assessment from './pages/Assessment';
import CourseCompletion from './pages/CourseCompletion';
import AdminDashboard from './pages/AdminDashboard';
import Catalog from './pages/Catalog';
import Pricing from './pages/Pricing';
import UserDashboard from './pages/UserDashboard';
import BookingPage from './pages/BookingPage';
import { PrivacyPolicy, TermsAndConditions, SecurityPolicy, LegalNotice } from './pages/LegalPages';
import GamificationFX from './components/GamificationFX';
import { XP_RULES } from './systems/gamification';
import { loadSession, saveProfile, saveUsers, saveXP, getDefaultSession } from './systems/appData';
import { useAuth } from './contexts/AuthContext';

const Navigation: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const location = useLocation();
  const { profile, loading } = useAuth();
  const isInternal = ['/employee', '/user', '/hr', '/course'].some(path => location.pathname.startsWith(path));

  if (loading || !profile) {
    return (
      <nav className="glass border-b border-slate-200 sticky top-0 z-50 h-16 md:h-24 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 md:gap-10">
              <Link to="/" className="flex items-center gap-3">
                <img src="/assets/logo.png" alt="Etiquette Logo" className="h-12 md:h-20 w-auto" />
              </Link>
              {!loading && (
                <div className="hidden md:flex items-center space-x-8 border-l border-slate-200 pl-8">
                  <Link to="/" className={`text-[10px] font-black uppercase tracking-widest transition-colors ${location.pathname === '/' ? 'text-indigo-600' : 'text-slate-400 hover:text-indigo-600'}`}>Home</Link>
                  <Link to="/catalog" className={`text-[10px] font-black uppercase tracking-widest transition-colors ${location.pathname === '/catalog' ? 'text-indigo-600' : 'text-slate-400 hover:text-indigo-600'}`}>Catalog</Link>
                  <Link to="/pricing" className={`text-[10px] font-black uppercase tracking-widest transition-colors ${location.pathname === '/pricing' ? 'text-indigo-600' : 'text-slate-400 hover:text-indigo-600'}`}>Pricing</Link>
                </div>
              )}
            </div>
            {!loading && (
              <Link to="/login" className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 whitespace-nowrap">
                Sign In
              </Link>
            )}
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="glass border-b border-slate-200 sticky top-0 z-50 h-16 md:h-24 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 md:gap-10">
            <Link to="/" className="flex items-center gap-3">
              <img src="/assets/logo.png" alt="Etiquette Logo" className="h-12 md:h-20 w-auto" />
            </Link>

            <div className="hidden md:flex items-center space-x-8 border-l border-slate-200 pl-8">
              {!isInternal ? (
                <>
                  <Link to="/" className={`text-[10px] font-black uppercase tracking-widest transition-colors ${location.pathname === '/' ? 'text-indigo-600' : 'text-slate-400 hover:text-indigo-600'}`}>Home</Link>
                  <Link to="/catalog" className={`text-[10px] font-black uppercase tracking-widest transition-colors ${location.pathname === '/catalog' ? 'text-indigo-600' : 'text-slate-400 hover:text-indigo-600'}`}>Catalog</Link>
                  <Link to="/pricing" className={`text-[10px] font-black uppercase tracking-widest transition-colors ${location.pathname === '/pricing' ? 'text-indigo-600' : 'text-slate-400 hover:text-indigo-600'}`}>Pricing</Link>
                </>
              ) : (
                <>
                  {profile.role === 'employee' && (
                    <Link to="/employee" className={`text-[10px] font-black uppercase tracking-widest transition-colors ${location.pathname === '/employee' ? 'text-indigo-600' : 'text-slate-400 hover:text-indigo-600'}`}>Learning Dashboard</Link>
                  )}
                  {profile.role === 'platform_admin' && (
                    <Link to="/admin" className={`text-[10px] font-black uppercase tracking-widest transition-colors ${location.pathname === '/admin' ? 'text-indigo-600' : 'text-slate-400 hover:text-indigo-600'}`}>Admin Dashboard</Link>
                  )}
                  <Link to="/user" className={`text-[10px] font-black uppercase tracking-widest transition-colors ${location.pathname === '/user' ? 'text-indigo-600' : 'text-slate-400 hover:text-indigo-600'}`}>Profile Overview</Link>
                  {profile.role === 'hr' && (
                    <Link to="/hr" className={`text-[10px] font-black uppercase tracking-widest transition-colors ${location.pathname === '/hr' ? 'text-indigo-600' : 'text-slate-400 hover:text-indigo-600'}`}>HR Dashboard</Link>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            {profile ? (
              <>
                <button
                  onClick={onLogout}
                  className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 whitespace-nowrap"
                >
                  Logout
                </button>
                <Link to="/user" className={`h-9 w-9 md:h-12 md:w-12 rounded-2xl overflow-hidden border-2 shadow-lg transition-all shrink-0 ${location.pathname === '/user' ? 'border-indigo-600 scale-110' : 'border-white'}`}>
                  <img src={(profile as any).avatar || undefined} className="h-full w-full object-cover" alt="Profile" />
                </Link>
              </>
            ) : (
              <Link
                to="/login"
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 whitespace-nowrap"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  const { user, profile, signOut, loading } = useAuth();

  const [allUsers, setAllUsers] = useState<UserProfile[]>([]);
  const [userXP, setUserXP] = useState(0);
  const [lastXPGain, setLastXPGain] = useState<{ amount: number; timestamp: number } | null>(null);

  useEffect(() => {
    if (user && profile) {
      if (typeof profile.xp === 'number') {
        setUserXP(profile.xp);
      }

      loadSession().then(({ users: u }) => {
        setAllUsers(u);
      });
    }
  }, [user, profile]);

  const handleGainXP = (amount: number) => {
    setLastXPGain({ amount, timestamp: Date.now() });
    const nextXP = userXP + amount;
    setUserXP(nextXP);
  };

  const handleLogout = async () => {
    await signOut();
  };

  const updateProgress = async (courseId: string, moduleId?: string, isCompleted?: boolean, score?: number) => {
    if (!profile) return;

    // 1. Optimistic Updates (Update UI immediately)
    const currentProgress = (profile as any).progress[courseId] || { courseId, completedModules: [], isCompleted: false };
    let newCompletedModules = [...currentProgress.completedModules];
    let xpGain = 0;

    // We will calculate expected gain for optimistic UI, but real gain comes from RPC
    if (moduleId && !newCompletedModules.includes(moduleId)) {
      newCompletedModules.push(moduleId);
      xpGain += XP_RULES.MODULE_COMPLETE;
    }

    const updatedProgress: UserProgress = {
      ...currentProgress,
      completedModules: newCompletedModules,
      isCompleted: isCompleted !== undefined ? isCompleted : currentProgress.isCompleted,
      assessmentScore: score !== undefined ? score : currentProgress.assessmentScore,
      completionDate: isCompleted ? new Date().toISOString() : currentProgress.completionDate,
      lastUpdated: new Date().toISOString()
    };

    const newProfile: UserProfile = {
      ...profile,
      progress: { ...(profile as any).progress, [courseId]: updatedProgress }
    } as UserProfile;

    // Update Local State Immediately
    setAllUsers(prev => prev.map(u => u.id === profile.id ? newProfile : u));

    // 2. Secure Server Updates via RPC
    try {
      if (isCompleted !== undefined && score !== undefined) {
        // Assessment / Course Completion
        const result = await import('./systems/appData').then(m => m.submitCourseCompletion(courseId, score));
        if (result.success && result.newXP) {
          handleGainXP(result.xpGained || 0);
          setUserXP(result.newXP);
        }
      } else if (moduleId) {
        // Module Completion
        const result = await import('./systems/appData').then(m => m.updateModuleProgress(courseId, moduleId));
        if (result.success && result.newXP) {
          handleGainXP(result.xpGained || 0);
          setUserXP(result.newXP);
        }
      }
    } catch (err) {
      console.error("Failed to sync progress:", err);
    }
  };


  const getCourseProgress = (courseId: string) => {
    if (!profile) return 0;
    const p = (profile as any).progress[courseId];
    if (!p) return 0;
    const course = COURSES.find(c => c.id === courseId);
    if (!course) return 0;
    return Math.round((p.completedModules.length / course.modules.length) * 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Initializing Session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navigation onLogout={handleLogout} />

      <GamificationFX lastXPGain={lastXPGain} xp={userXP} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/security" element={<SecurityPolicy />} />
          <Route path="/legal" element={<LegalNotice />} />
          <Route
            path="/login"
            element={
              user && profile ? (
                profile.role === 'hr' ? <Navigate to="/hr" /> :
                  profile.role === 'platform_admin' ? <Navigate to="/admin" /> :
                    <Navigate to="/employee" />
              ) : (
                <LoginPage />
              )
            }
          />
          <Route path="/platform-admin-login" element={<PlatformAdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute roles={['platform_admin']}>
                <AdminDashboard
                  state={profile as UserProfile}
                  allUsers={allUsers}
                  onUpdateEmployees={setAllUsers}
                  onReloadUsers={() => {
                    loadSession().then(({ users: u }) => {
                      setAllUsers(u);
                    });
                  }}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employee"
            element={
              <ProtectedRoute roles={['employee']}>
                <EmployeeDashboard state={profile as UserProfile} getProgress={getCourseProgress} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hr"
            element={
              <ProtectedRoute roles={['hr']}>
                <AdminDashboard
                  state={profile as UserProfile}
                  allUsers={allUsers}
                  onUpdateEmployees={setAllUsers}
                  onReloadUsers={() => {
                    loadSession().then(({ users: u }) => {
                      setAllUsers(u);
                    });
                  }}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user"
            element={
              <ProtectedRoute roles={['employee', 'platform_admin', 'hr']}>
                <UserDashboard
                  state={profile as UserProfile}
                  xp={userXP}
                  onUpdateProfile={() => { }}
                  allUsers={allUsers}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/course/:id"
            element={
              <ProtectedRoute roles={['employee', 'platform_admin', 'hr']}>
                <CourseView state={profile as UserProfile} getProgress={getCourseProgress} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/course/:id/module/:moduleId"
            element={
              <ProtectedRoute roles={['employee', 'platform_admin', 'hr']}>
                <CourseContent
                  state={profile as UserProfile}
                  updateProgress={updateProgress}
                  onGainXP={handleGainXP}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/course/:id/assessment"
            element={
              <ProtectedRoute roles={['employee', 'platform_admin', 'hr']}>
                <Assessment
                  state={profile as UserProfile}
                  updateProgress={updateProgress}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/course/:id/completed"
            element={
              <ProtectedRoute roles={['employee', 'platform_admin', 'hr']}>
                <CourseCompletion state={profile as UserProfile} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
