import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../data/courses';
import { UserProfile, UserProgress } from '../types';

interface DashboardProps {
  state: UserProfile;
  getProgress: (courseId: string) => number;
}

const Dashboard: React.FC<DashboardProps> = ({ state, getProgress }) => {
  const assignedCoursesList = COURSES.filter(course => 
    state.assignedCourses?.length === 0 || state.assignedCourses?.includes(course.id)
  );
  
  const progressValues = Object.values(state.progress || {}) as UserProgress[];
  const completedCount = progressValues.filter(p => p.isCompleted).length;
  const totalCourses = assignedCoursesList.length;
  const overallProficiency = totalCourses > 0 ? Math.round((completedCount / totalCourses) * 100) : 0;

  const lastActiveProgress = progressValues
    .sort((a, b) => new Date(b.lastUpdated || 0).getTime() - new Date(a.lastUpdated || 0).getTime())[0];
  
  const activeCourse = lastActiveProgress ? assignedCoursesList.find(c => c.id === lastActiveProgress.courseId) : assignedCoursesList[0];
  const activeCourseProgress = activeCourse ? getProgress(activeCourse.id) : 0;

  return (
    <div className="pb-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {assignedCoursesList.length > 0 ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              
              {/* Professional Focus: Next Requirement */}
              <div className="lg:col-span-8 bg-slate-900 rounded-[56px] p-12 text-white relative overflow-hidden shadow-2xl border border-slate-800">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <span className="px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-500/30 mb-10 inline-block">
                      Active Requirement
                    </span>
                    <h1 className="text-4xl lg:text-7xl font-black mb-8 tracking-tighter leading-[0.9] italic font-['Bangers']">
                      {activeCourseProgress === 100 ? "Ready for Assessment" : `Resume: ${activeCourse?.title.split(':')[0]}`}
                    </h1>
                    <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-xl mb-12">
                      {activeCourseProgress === 100 
                        ? "All learning modules are complete. You are now eligible to take the final assessment for certification."
                        : `Your current progress is ${activeCourseProgress}%. Complete the remaining modules to stay up to date with your assignments.`}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-8 pt-8 border-t border-white/10">
                     <Link 
                       to={activeCourseProgress === 100 ? `/course/${activeCourse?.id}/assessment` : `/course/${activeCourse?.id}`}
                       className="px-12 py-6 bg-indigo-600 hover:bg-indigo-500 text-white rounded-[28px] text-[11px] font-black uppercase tracking-widest transition-all shadow-xl active:scale-95 flex items-center gap-3 w-full sm:w-auto justify-center"
                     >
                       {activeCourseProgress === 100 ? "Start Exam" : "Resume Path"}
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                     </Link>
                     <div className="flex-grow w-full max-w-xs">
                        <div className="flex justify-between items-end mb-2">
                           <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Current Status</span>
                           <span className="text-sm font-black">{activeCourseProgress}%</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                           <div className="bg-indigo-400 h-full transition-all duration-1000" style={{ width: `${activeCourseProgress}%` }}></div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>

              {/* Compliance Sidebar */}
              <div className="lg:col-span-4 flex flex-col gap-8">
                <div className="bg-white p-10 rounded-[48px] border border-slate-100 shadow-sm flex-grow flex flex-col justify-center">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Personal Readiness</p>
                   <div className="flex items-end gap-3 mb-4">
                     <span className="text-7xl font-black text-slate-900 leading-none">{overallProficiency}%</span>
                     <div className="flex flex-col mb-1">
                        <span className="text-emerald-500 text-xs font-black uppercase tracking-tight italic font-['Bangers']">On Track</span>
                        <span className="text-[10px] text-slate-300 font-bold tracking-widest uppercase">Verified</span>
                     </div>
                   </div>
                   <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden mt-6">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${overallProficiency}%` }}></div>
                   </div>
                </div>
                
                <div className="bg-indigo-600 p-10 rounded-[48px] shadow-2xl shadow-indigo-100 relative overflow-hidden group">
                   <div className="relative z-10 text-white">
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-4">Account Summary</p>
                      <p className="text-sm font-bold leading-relaxed mb-8">Review your full activity history and manage your employee profile settings.</p>
                      <Link to="/user" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white/20 px-6 py-3 rounded-xl hover:bg-white/30 transition-all">
                        View Profile Overview →
                      </Link>
                   </div>
                </div>
              </div>
            </div>

            <div className="mb-14">
               <h2 className="text-4xl font-black text-slate-900 tracking-tighter italic font-['Bangers']">Learning Dashboard</h2>
               <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-2">Assigned Curriculum for FY2024</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {assignedCoursesList.map((course) => {
                const progress = getProgress(course.id);
                const isCompleted = state.progress[course.id]?.isCompleted;
                
                return (
                  <div key={course.id} className="bg-white rounded-[60px] border border-slate-100 overflow-hidden flex flex-col h-full shadow-sm hover:shadow-2xl transition-all duration-500 group">
                    <div className="p-12 lg:p-14 flex-grow">
                      <div className="flex justify-between items-start mb-12">
                        <div className={`text-5xl w-24 h-24 rounded-[40px] flex items-center justify-center transition-all duration-700 group-hover:scale-110 ${
                          isCompleted ? 'bg-slate-900 text-white' : 'bg-slate-50'
                        }`}>
                          {isCompleted ? '✓' : course.icon}
                        </div>
                        <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                          isCompleted ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-indigo-50 text-indigo-600 border-indigo-100'
                        }`}>
                          {isCompleted ? 'Completed' : 'Active'}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-black text-slate-900 mb-6 leading-none tracking-tight group-hover:text-indigo-600 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-slate-400 text-base mb-12 line-clamp-3 font-medium leading-relaxed">
                        {course.description}
                      </p>
                      
                      <div className="pt-8 border-t border-slate-50">
                        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest mb-4">
                          <span className="text-slate-400">Progression</span>
                          <span className="text-slate-900">{progress}%</span>
                        </div>
                        <div className="w-full bg-slate-50 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-1000 ${isCompleted ? 'bg-emerald-500' : 'bg-indigo-600'}`} 
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="px-12 pb-14">
                      <Link 
                        to={`/course/${course.id}`}
                        className={`flex items-center justify-center py-7 rounded-[32px] text-[11px] font-black transition-all gap-3 uppercase tracking-widest w-full shadow-lg ${
                          isCompleted 
                          ? 'bg-slate-50 text-slate-400 hover:bg-slate-100 shadow-none' 
                          : 'bg-slate-900 text-white hover:bg-indigo-600 shadow-indigo-100'
                        }`}
                      >
                        {isCompleted ? 'Review Content' : 'Continue Learning'}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="py-40 text-center">
             <h2 className="text-4xl font-black text-slate-300 mb-4 tracking-tight italic font-['Bangers'] uppercase">No Assignments Found</h2>
             <p className="text-slate-400 max-w-md mx-auto font-medium">You currently have no active training requirements assigned.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;