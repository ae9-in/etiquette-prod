
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { COURSES } from '../data/courses';
import { UserProfile } from '../types';

interface CourseViewProps {
  state: UserProfile;
  getProgress: (courseId: string) => number;
}

const CourseView: React.FC<CourseViewProps> = ({ state, getProgress }) => {
  const { id } = useParams<{ id: string }>();
  const course = COURSES.find(c => c.id === id);

  if (!course) return <Navigate to="/" />;

  const progress = state.progress[id!] || { completedModules: [], isCompleted: false };
  const currentProgress = getProgress(id!);

  const themeColors: Record<string, string> = {
    violet: 'bg-indigo-600',
    amber: 'bg-amber-600',
    rose: 'bg-rose-600',
    emerald: 'bg-emerald-600',
  };

  const accentColor = themeColors[course.colorTheme || 'violet'];

  return (
    <div className="bg-[#fcfcfd] min-h-screen">
      {/* Immersive Header */}
      <div className={`py-24 lg:py-40 relative overflow-hidden ${accentColor} text-white`}>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full -mr-64 -mt-64 blur-[120px]"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-16">
            <div className="text-[120px] leading-none p-12 bg-white/20 backdrop-blur-3xl rounded-[64px] shadow-2xl border border-white/20 rotate-3 shrink-0">
              {course.icon}
            </div>
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-white/10">
                Official Certification
              </span>
              <h1 className="text-5xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.95]">
                {course.title}
              </h1>
              <p className="text-white/80 text-xl lg:text-2xl leading-relaxed max-w-2xl font-medium">
                {course.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Curriculum Timeline */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-12">
               <h2 className="text-3xl font-black text-slate-900 tracking-tight">Syllabus Overview</h2>
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{course.modules.length} Modules Total</span>
            </div>

            <div className="space-y-6 relative">
              {/* Timeline Connector Line */}
              <div className="absolute left-10 top-10 bottom-10 w-1 bg-slate-100 -z-0"></div>

              {course.modules.map((module, idx) => {
                const isCompleted = progress.completedModules.includes(module.id);
                const isLocked = idx > 0 && !progress.completedModules.includes(course.modules[idx-1].id) && !isCompleted;

                return (
                  <div key={module.id} className={`group relative z-10 p-8 rounded-[40px] border-2 transition-all duration-500 flex items-center justify-between gap-6 ${
                    isLocked ? 'bg-slate-50 border-slate-50 opacity-40' : 'bg-white border-white shadow-sm hover:shadow-xl hover:shadow-indigo-500/5'
                  }`}>
                    <div className="flex items-center gap-8">
                      <div className={`h-20 w-20 rounded-[28px] flex items-center justify-center font-black text-2xl transition-all shadow-sm ${
                        isCompleted ? 'bg-slate-900 text-white' : (isLocked ? 'bg-slate-100 text-slate-200' : 'bg-indigo-50 text-indigo-600')
                      }`}>
                        {isCompleted ? '✓' : idx + 1}
                      </div>
                      <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                           Module {idx + 1} • {module.duration || '8 mins'}
                           {isCompleted && <span className="text-emerald-500 font-black tracking-widest ml-2 underline decoration-emerald-500/30">Complete</span>}
                        </p>
                        <h4 className="text-xl font-black text-slate-900 leading-tight">{module.title}</h4>
                      </div>
                    </div>
                    
                    {!isLocked ? (
                      <Link 
                        to={`/course/${course.id}/module/${module.id}`}
                        className="px-8 py-4 rounded-2xl text-[10px] font-black bg-slate-900 text-white hover:bg-indigo-600 transition-all shadow-lg shadow-slate-100 uppercase tracking-widest"
                      >
                        {isCompleted ? 'Review' : 'Launch'}
                      </Link>
                    ) : (
                      <div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                        <span className="text-lg opacity-20">🔒</span>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Final Exam Section */}
              <div className={`relative z-10 p-10 rounded-[48px] border-2 transition-all duration-500 ${
                progress.completedModules.length < course.modules.length ? 'bg-slate-100 border-slate-100 opacity-30' : 'bg-white border-rose-100 shadow-2xl shadow-rose-200/20'
              }`}>
                <div className="flex items-center justify-between gap-8">
                  <div className="flex items-center gap-8">
                    <div className={`h-20 w-20 rounded-[28px] flex items-center justify-center font-black text-2xl ${
                      progress.isCompleted ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white shadow-xl shadow-rose-200'
                    }`}>
                      {progress.isCompleted ? '🏆' : '⚖️'}
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-rose-500 uppercase tracking-[0.2em] mb-1.5">Certification Phase</p>
                      <h4 className="text-2xl font-black text-slate-900">Knowledge Assessment</h4>
                    </div>
                  </div>
                  {progress.completedModules.length === course.modules.length ? (
                    <Link 
                      to={`/course/${course.id}/assessment`}
                      className="px-10 py-5 rounded-[24px] text-[11px] font-black bg-rose-500 text-white hover:bg-rose-600 transition-all shadow-xl shadow-rose-200 uppercase tracking-widest"
                    >
                      {progress.isCompleted ? 'Retake Exam' : 'Enter Exam'}
                    </Link>
                  ) : (
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em] opacity-50 pr-4">Locked</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Stats */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="bg-white p-12 rounded-[56px] shadow-2xl shadow-slate-200/20 border border-slate-50 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16"></div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-10 tracking-tight">Your Progress</h3>
                
                <div className="space-y-10 mb-12">
                   <div className="flex items-center gap-6">
                      <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center text-2xl">⚡</div>
                      <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Effort</p>
                        <p className="font-black text-slate-900 text-lg">{course.duration}</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-6">
                      <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center text-2xl">🥇</div>
                      <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Accreditation</p>
                        <p className="font-black text-slate-900 text-lg">CPD Verified</p>
                      </div>
                   </div>
                </div>

                <div className="pt-10 border-t border-slate-50">
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mastery Status</span>
                    <span className="text-sm font-black text-indigo-600">{currentProgress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 mb-10 overflow-hidden">
                    <div className="bg-indigo-600 h-full rounded-full transition-all duration-1000" style={{ width: `${currentProgress}%` }}></div>
                  </div>

                  <Link 
                    to={progress.completedModules.length > 0 
                        ? `/course/${course.id}/module/${course.modules.find(m => !progress.completedModules.includes(m.id))?.id || course.modules[0].id}`
                        : `/course/${course.id}/module/${course.modules[0].id}`
                    }
                    className="block w-full py-6 bg-slate-900 text-white rounded-[28px] font-black text-center hover:bg-indigo-600 shadow-2xl transition-all active:scale-95 text-[11px] uppercase tracking-[0.2em]"
                  >
                    {currentProgress === 100 ? 'Review Syllabus' : 'Continue Path'}
                  </Link>
                </div>
              </div>

              {/* Help Card */}
              <div className="bg-slate-900 p-8 rounded-[40px] text-white">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-400 mb-4">Support Available</p>
                <p className="text-sm font-medium opacity-70 mb-6">Need help with the course material? Our HR Compliance team is ready to assist.</p>
                <button className="w-full py-4 bg-white/10 hover:bg-white/20 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                  Contact HR Helpdesk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseView;
