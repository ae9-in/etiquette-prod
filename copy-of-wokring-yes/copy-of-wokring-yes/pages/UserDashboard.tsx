import React from 'react';
import { Link } from 'react-router-dom';
import { UserProfile } from '../types';
import { COURSES } from '../data/courses';
import { calculateBadge, getNextBadge } from '../systems/gamification';

interface Props {
  state: UserProfile;
  xp: number;
  onUpdateProfile: () => void;
  allUsers: UserProfile[];
}

interface LeaderboardUser {
  id: string;
  name: string;
  avatar: string;
  department: string;
  totalXP: number;
  badges: string[];
}

const UserDashboard: React.FC<Props> = ({ state: profile, xp, allUsers = [] }) => {
  if (!profile) return null;

  const currentBadge = calculateBadge(xp);
  const nextBadge = getNextBadge(xp);
  const assignedCoursesList = COURSES.filter(course =>
    profile.assignedCourses?.length === 0 || profile.assignedCourses?.includes(course.id)
  );
  const completedCourses = assignedCoursesList.filter(c => profile.progress?.[c.id]?.isCompleted);

  const progressToNext = nextBadge
    ? Math.round(((xp - currentBadge.xp) / (nextBadge.xp - currentBadge.xp)) * 100)
    : 100;

  // Use real data from allUsers
  // Note: allUsers might contain stale XP for current user, so we override strict equality check
  const leaderboardEntries: LeaderboardUser[] = allUsers.map(u => ({
    id: u.id,
    name: u.name,
    avatar: u.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${u.name}`,
    department: u.department || 'General',
    totalXP: u.id === profile.id ? xp : (u.xp || 0),
    badges: [] // Badges are calculated dynamically below
  }))
    .sort((a, b) => b.totalXP - a.totalXP)
    .slice(0, 10); // Top 10 only?;

  return (
    <div className="pb-24 bg-[#fcfcfd] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">

        <header className="mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-widest mb-6 border border-slate-200">
            Employee Profile
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none italic font-['Bangers'] mb-4">
            {profile.name}
          </h1>
          <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">{profile.department} • Internal ID: {profile.id.slice(0, 8).toUpperCase()}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* XP & BADGE CARD */}
          <div className="p-6 md:p-10 bg-slate-900 rounded-[32px] md:rounded-[56px] shadow-2xl border-4 border-black relative overflow-hidden group">
            <div className="absolute inset-0 halftone opacity-5 group-hover:opacity-10 transition-opacity"></div>
            <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-8 relative z-10">Current Achievement Level</p>

            <div className="flex items-center gap-6 mb-10 relative z-10">
              <div className="h-24 w-24 bg-white rounded-[32px] border-4 border-black flex items-center justify-center text-5xl shadow-[8px_8px_0px_#4F46E5] animate-in zoom-in duration-700">
                {currentBadge.icon}
              </div>
              <div>
                <h2 className="text-4xl font-black text-white italic font-['Bangers'] tracking-tighter mb-1">
                  {currentBadge.name}
                </h2>
                <p className="text-indigo-400 font-black text-[11px] uppercase tracking-widest">RANK RANKED</p>
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex justify-between items-baseline mb-3">
                <span className="text-white font-black text-3xl italic font-['Bangers']">{xp} <span className="text-xs text-slate-500 tracking-widest">XP</span></span>
                {nextBadge && <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Next: {nextBadge.name}</span>}
              </div>
              <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden border border-white/5">
                <div className="bg-indigo-500 h-full transition-all duration-1000" style={{ width: `${progressToNext}%` }}></div>
              </div>
            </div>
          </div>

          <div className="p-10 bg-white rounded-[56px] shadow-sm border border-slate-100">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Completed Courses</p>
            <div className="flex items-baseline gap-2">
              <h2 className="text-7xl font-black text-slate-900 tracking-tighter">{completedCourses.length}</h2>
              <span className="text-slate-300 font-bold uppercase text-xs">Pathways</span>
            </div>
          </div>

          <div className="p-10 bg-white rounded-[56px] shadow-sm border border-slate-100">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Overall Progress</p>
            <div className="flex items-baseline gap-2">
              <h2 className="text-7xl font-black text-slate-900 tracking-tighter">
                {assignedCoursesList.length > 0 ? Math.round((completedCourses.length / assignedCoursesList.length) * 100) : 0}%
              </h2>
              <span className="text-slate-300 font-bold uppercase text-xs">Catalog</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <h3 className="text-3xl font-black text-slate-900 mb-10 tracking-tight italic font-['Bangers']">Training Overview</h3>

            <div className="bg-white border border-slate-100 rounded-[32px] md:rounded-[56px] overflow-hidden shadow-sm overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                    <th className="px-6 md:px-10 py-6 text-[10px] font-black text-slate-500 uppercase tracking-widest min-w-[150px]">Course Title</th>
                    <th className="px-6 md:px-10 py-6 text-[10px] font-black text-slate-500 uppercase tracking-widest min-w-[120px]">Date Finished</th>
                    <th className="px-6 md:px-10 py-6 text-[10px] font-black text-slate-500 uppercase tracking-widest min-w-[100px]">Result</th>
                    <th className="px-6 md:px-10 py-6 text-[10px] font-black text-slate-500 uppercase tracking-widest min-w-[120px]">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {assignedCoursesList.map(course => {
                    const progress = profile.progress[course.id];
                    return (
                      <tr key={course.id} className="hover:bg-slate-50/30 transition-colors">
                        <td className="px-6 md:px-10 py-6 md:py-8">
                          <div className="flex items-center gap-4">
                            <span className="text-xl">{course.icon}</span>
                            <p className="font-black text-slate-900 text-sm md:text-base whitespace-nowrap">{course.title.split(':')[0]}</p>
                          </div>
                        </td>
                        <td className="px-6 md:px-10 py-6 md:py-8 text-sm text-slate-500 font-medium">
                          {progress?.completionDate ? new Date(progress.completionDate).toLocaleDateString() : '—'}
                        </td>
                        <td className="px-6 md:px-10 py-6 md:py-8 text-sm font-black text-slate-900">
                          {progress?.assessmentScore !== undefined ? `${progress.assessmentScore}%` : '—'}
                        </td>
                        <td className="px-6 md:px-10 py-6 md:py-8">
                          <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border whitespace-nowrap inline-block ${progress?.isCompleted
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                            : 'bg-amber-50 text-amber-700 border-amber-100'
                            }`}>
                            {progress?.isCompleted ? 'Finished' : 'Action Required'}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-12 flex justify-end gap-4">
              <Link to="/workspace" className="px-10 py-5 bg-slate-100 text-slate-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all">
                Return to Workspace
              </Link>

            </div>
          </div>

          {/* LEADERBOARD SECTION - Visible only to normal users */}
          {profile.role === 'employee' && (
            <div className="lg:col-span-4 animate-in slide-in-from-right duration-1000">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight italic font-['Bangers']">Leaderboard</h3>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[9px] font-black uppercase tracking-widest rounded-full border border-indigo-100">Live Ranking</span>
              </div>

              <div className="space-y-4">
                {leaderboardEntries.map((entry, index) => {
                  const isCurrentUser = entry.id === profile.id;
                  const rank = index + 1;
                  const tier = calculateBadge(entry.totalXP);

                  return (
                    <div
                      key={entry.id}
                      className={`p-6 rounded-[32px] border-2 flex items-center gap-4 transition-all duration-500 ${isCurrentUser
                        ? 'bg-white border-indigo-600 shadow-xl shadow-indigo-500/10 scale-105 z-10 relative'
                        : 'bg-white border-slate-100 hover:border-slate-200 opacity-80 hover:opacity-100'
                        }`}
                    >
                      <div className={`h-10 w-10 shrink-0 rounded-xl flex items-center justify-center font-['Bangers'] italic text-lg ${rank === 1 ? 'bg-amber-100 text-amber-600' :
                        rank === 2 ? 'bg-slate-100 text-slate-500' :
                          rank === 3 ? 'bg-orange-100 text-orange-600' : 'bg-slate-50 text-slate-300'
                        }`}>
                        #{rank}
                      </div>

                      <img src={entry.avatar || undefined} className="h-12 w-12 rounded-2xl border-2 border-slate-50 shadow-sm" alt="" />

                      <div className="flex-grow overflow-hidden">
                        <p className={`font-black text-sm truncate ${isCurrentUser ? 'text-indigo-600' : 'text-slate-900'}`}>
                          {entry.name} {isCurrentUser && <span className="text-[9px] font-black uppercase tracking-widest ml-1">(You)</span>}
                        </p>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest truncate">{entry.department}</p>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="flex items-center justify-end gap-1 mb-1">
                          <span className="text-sm font-black text-slate-900 italic font-['Bangers']">{entry.totalXP}</span>
                          <span className="text-[8px] font-bold text-slate-400 uppercase">XP</span>
                        </div>
                        <div className="flex items-center justify-end gap-1">
                          <span className="text-[14px] leading-none">{tier.icon}</span>
                          <span className="text-[8px] font-black text-indigo-400 uppercase tracking-widest">{tier.name}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 p-6 bg-slate-900 rounded-[32px] text-white overflow-hidden relative group">
                <div className="absolute inset-0 halftone opacity-5 group-hover:opacity-10 transition-opacity"></div>
                <div className="relative z-10">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-2">Challenge</p>
                  <p className="text-xs font-bold leading-relaxed mb-4">Complete more modules and pass assessments to outrank your peers and reach <span className="text-indigo-400">Legendary</span> status.</p>
                  <div className="h-1 bg-white/10 w-full rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 w-1/3 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;