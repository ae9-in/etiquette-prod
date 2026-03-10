import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../data/courses';

const Catalog: React.FC = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* Header Section */}
      <header className="pt-16 pb-12 md:pt-24 md:pb-20 px-4 md:px-6 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[100px] -mr-64 -mt-64"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-8 inline-flex items-center gap-2 group">
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-6 italic font-['Bangers']">
            Learning <span className="text-indigo-600">Curriculum</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            Every module in our catalog is engineered to meet global statutory requirements while maintaining peak learner engagement.
          </p>
        </div>
      </header>

      {/* Catalog Grid */}
      <section className="py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {COURSES.map((course, idx) => (
              <div
                key={course.id}
                className="group bg-white rounded-[32px] md:rounded-[56px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="p-8 md:p-12 flex-grow">
                  <div className="flex justify-between items-start mb-10">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-500">{course.icon}</div>
                    <div className="text-right">
                      <span className="px-4 py-2 rounded-full bg-slate-50 text-slate-500 text-[9px] font-black uppercase tracking-widest border border-slate-100 block mb-2">
                        {course.category}
                      </span>
                      <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{course.duration} Effort</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-6 leading-tight group-hover:text-indigo-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed mb-10 line-clamp-3">
                    {course.description}
                  </p>

                  <div className="pt-8 border-t border-slate-50 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-6 w-6 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center text-[10px]">⚖️</div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Type: Statutory Knowledge Exam</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-6 w-6 bg-rose-50 text-rose-600 rounded-lg flex items-center justify-center text-[10px]">📝</div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{course.assessment.length} Certification Questions</p>
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-8 md:px-12 md:pb-12">
                  <Link to="/workspace" className="block w-full py-6 bg-slate-900 group-hover:bg-indigo-600 text-white rounded-[32px] text-center text-[11px] font-black uppercase tracking-widest transition-all shadow-xl shadow-slate-200">
                    View In Workspace
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Previews */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-indigo-500/10 rounded-full blur-[180px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black tracking-tighter italic font-['Bangers'] mb-6">Mastery Through Narrative</h2>
            <p className="text-indigo-300 font-medium text-lg">See how we turn complex regulations into immersive visual stories.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="comic-panel p-8 group hover:-rotate-1 transition-transform">
              <div className="bg-indigo-50 text-indigo-600 p-4 font-black uppercase text-[10px] tracking-widest mb-6 border-b-4 border-black">Diagnostic Scenario 04-A</div>
              <div className="h-64 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 overflow-hidden border-2 border-black relative">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-20" alt="Office Scene" />
                <div className="absolute inset-0 halftone opacity-20"></div>
                <div className="absolute bottom-6 left-6 speech-bubble max-w-[200px] text-[10px]">
                  "I think something's wrong with this invoice..."
                </div>
              </div>
              <p className="text-slate-900 font-black italic">Choice: Report Inconsistency?</p>
            </div>

            <div className="comic-panel p-8 group rotate-1 hover:rotate-0 transition-transform">
              <div className="bg-rose-50 text-rose-600 p-4 font-black uppercase text-[10px] tracking-widest mb-6 border-b-4 border-black">Diagnostic Scenario 09-B</div>
              <div className="h-64 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 overflow-hidden border-2 border-black relative">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-20" alt="Office Scene" />
                <div className="absolute inset-0 halftone opacity-20"></div>
                <div className="absolute bottom-6 right-6 speech-bubble-jagged max-w-[200px] text-[10px]">
                  "THE FIRE ALARM IS RINGING! GO NOW!"
                </div>
              </div>
              <p className="text-slate-900 font-black italic">Choice: Use Stairs or Elevator?</p>
            </div>
          </div>

          <div className="mt-24 text-center">
            <Link to="/workspace" className="px-16 py-8 bg-white text-slate-900 rounded-full font-black uppercase text-[12px] tracking-[0.3em] hover:bg-indigo-50 transition-all shadow-2xl active:scale-95">
              Start Your First Module
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 text-center bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Full curriculum audited and verified for FY2024 compliance standards.</p>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;