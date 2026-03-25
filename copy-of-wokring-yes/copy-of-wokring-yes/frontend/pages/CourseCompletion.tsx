import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { COURSES } from '../data/courses';
import { UserProfile } from '../types';

interface CourseCompletionProps {
  state: UserProfile;
}

const CourseCompletion: React.FC<CourseCompletionProps> = ({ state }) => {
  const { id } = useParams<{ id: string }>();
  const course = COURSES.find(c => c.id === id);
  const progress = state.progress[id!];

  if (!course || !progress) return <Navigate to="/" />;

  const isPassed = (progress.assessmentScore || 0) >= 70;

  return (
    <div className="bg-[#f8fafc] min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {isPassed ? (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <div className="mb-12 inline-flex items-center justify-center h-28 w-28 rounded-[48px] bg-slate-900 text-white text-5xl shadow-2xl italic font-['Bangers']">✓</div>
            <h1 className="text-6xl sm:text-8xl font-black text-slate-900 mb-8 tracking-tighter italic font-['Bangers']">Registry Updated.</h1>
            <p className="text-2xl text-slate-500 mb-16 font-medium leading-relaxed max-w-2xl mx-auto">
              Your assessment for <span className="text-indigo-600 font-black italic">"{course.title}"</span> has been officially recorded in the company compliance registry.
            </p>
            
            <div className="bg-white border-[10px] border-black rounded-[64px] p-16 mb-16 shadow-2xl">
               <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-8">Performance Attestation</p>
               <div className="flex justify-center items-baseline gap-2 mb-8">
                  <span className="text-9xl font-black text-slate-900 tracking-tighter">{progress.assessmentScore}</span>
                  <span className="text-4xl font-black text-indigo-600 uppercase tracking-widest">%</span>
               </div>
               <div className="inline-block px-10 py-4 bg-emerald-50 text-emerald-700 rounded-full font-black text-[10px] uppercase tracking-[0.3em] border border-emerald-200">
                 Status: Officially Certified
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/workspace" className="px-14 py-6 bg-slate-900 text-white rounded-[28px] font-black text-xs uppercase tracking-widest hover:bg-indigo-600 shadow-2xl transition-all">Go to Workspace</Link>
              <Link to="/user" className="px-14 py-6 bg-white text-slate-900 border-4 border-slate-100 rounded-[28px] font-black text-xs uppercase tracking-widest hover:border-indigo-600 transition-all">View Transcript</Link>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <div className="mb-12 inline-flex items-center justify-center h-28 w-28 rounded-[48px] bg-rose-50 text-rose-500 text-5xl shadow-xl italic font-['Bangers']">!</div>
            <h1 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter italic font-['Bangers']">Verification Incomplete.</h1>
            <p className="text-2xl text-slate-500 mb-16 font-medium leading-relaxed max-w-2xl mx-auto">
              You scored {progress.assessmentScore}%. A minimum score of 70% is required for official statutory certification.
            </p>
            <Link to={`/course/${course.id}/assessment`} className="px-14 py-6 bg-slate-900 text-white rounded-[28px] font-black text-xs uppercase tracking-widest hover:bg-rose-600 transition-all shadow-xl">Retry Knowledge Audit</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCompletion;