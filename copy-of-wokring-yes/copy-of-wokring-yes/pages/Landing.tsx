import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../data/courses';

const Landing: React.FC = () => {
  return (
    <div className="bg-[#fcfcfd] selection:bg-indigo-100">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-32 md:pb-40 px-4 md:px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-100/50 rounded-full blur-[140px] -mr-96 -mt-96"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-50/50 rounded-full blur-[120px] -ml-64 -mb-64"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <span className="px-6 py-2 rounded-full bg-white border border-slate-100 shadow-xl shadow-slate-200/50 text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 mb-10 animate-in fade-in slide-in-from-top-4">
              Next-Gen Compliance Education
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-9xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-6 md:mb-12 italic font-['Bangers'] animate-in fade-in slide-in-from-bottom-8 duration-700">
              Training That Actually <br /> <span className="text-indigo-600">Inspires.</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-slate-500 max-w-2xl font-medium leading-relaxed mb-8 md:mb-16 px-2 md:px-0 animate-in fade-in slide-in-from-bottom-12 duration-1000">
              Etiquette LMS transforms mandatory workplace training into an interactive narrative experience. High stakes, higher engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
              <Link to="/login" className="px-8 py-5 sm:px-16 sm:py-8 bg-slate-900 text-white rounded-[40px] font-black uppercase text-[11px] sm:text-[12px] tracking-[0.3em] hover:bg-indigo-600 transition-all shadow-[0_30px_60px_-15px_rgba(79,70,229,0.5)] active:scale-95 text-center">
                Launch Workspace
              </Link>
              <Link to="/pricing" className="px-8 py-5 sm:px-16 sm:py-8 bg-white border-2 border-slate-100 text-slate-900 rounded-[40px] font-black uppercase text-[11px] sm:text-[12px] tracking-[0.3em] hover:border-indigo-200 transition-all active:scale-95 shadow-sm text-center">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-32 px-4 md:px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 md:p-12 rounded-[32px] md:rounded-[56px] bg-slate-50 border border-slate-100 group hover:bg-indigo-600 transition-all duration-700">
              <div className="text-5xl mb-10 group-hover:scale-110 transition-transform">🎨</div>
              <h3 className="text-3xl font-black text-slate-900 group-hover:text-white mb-6 tracking-tight">Visual Narrative</h3>
              <p className="text-slate-500 group-hover:text-indigo-100 font-medium leading-relaxed">
                Replace dry slides with interactive comic modules. Branching storylines where your choices define the legal outcome.
              </p>
            </div>
            <div className="p-8 md:p-12 rounded-[32px] md:rounded-[56px] bg-slate-50 border border-slate-100 group hover:bg-emerald-500 transition-all duration-700">
              <div className="text-5xl mb-10 group-hover:scale-110 transition-transform">🛡️</div>
              <h3 className="text-3xl font-black text-slate-900 group-hover:text-white mb-6 tracking-tight">Knowledge Audits</h3>
              <p className="text-slate-500 group-hover:text-emerald-50 font-medium leading-relaxed">
                Mandatory examination modules for regulatory verification. Master statutory requirements, pass final certification exams, and earn your official workplace credentials.
              </p>
            </div>
            <div className="p-8 md:p-12 rounded-[32px] md:rounded-[56px] bg-slate-50 border border-slate-100 group hover:bg-rose-500 transition-all duration-700">
              <div className="text-5xl mb-10 group-hover:scale-110 transition-transform">📊</div>
              <h3 className="text-3xl font-black text-slate-900 group-hover:text-white mb-6 tracking-tight">Admin Intel</h3>
              <p className="text-slate-500 group-hover:text-rose-50 font-medium leading-relaxed">
                A centralized command center for HR. Track workforce compliance, manage certifications, and export granular audit data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Catalog Preview */}
      <section className="py-16 md:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">Enterprise Grade Content</h2>
              <p className="text-xl text-slate-400 font-medium italic">Our curriculum covers all mandatory global and local legal standards.</p>
            </div>
            <Link to="/catalog" className="text-indigo-600 font-black uppercase text-[11px] tracking-[0.4em] hover:underline">See Entire Catalog →</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {COURSES.slice(0, 4).map(course => (
              <div key={course.id} className="p-6 md:p-10 rounded-[32px] md:rounded-[48px] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
                <div className="text-4xl mb-6">{course.icon}</div>
                <h4 className="text-xl font-black text-slate-900 mb-4 leading-tight group-hover:text-indigo-600 transition-colors">{course.title.split(':')[0]}</h4>
                <p className="text-sm text-slate-400 font-medium line-clamp-2">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-40 px-4 md:px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-500/10 rounded-full blur-[160px]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 italic font-['Bangers']">Scale Your Integrity</h2>
            <p className="text-indigo-300 font-medium text-lg">Simple per-employee pricing — pick the experience that fits your team.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Digital Package */}
            <div className="p-8 md:p-14 rounded-[32px] md:rounded-[64px] border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400 mb-4">Digital</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-black text-white">₹250</span>
                <span className="text-slate-400 font-bold">/employee</span>
              </div>
              <p className="text-xs text-indigo-400 font-black uppercase tracking-widest mb-10">Includes 4 Courses</p>
              <ul className="space-y-6 mb-12 text-sm font-bold text-slate-300 flex-grow">
                <li className="flex items-center gap-3">✓ 4 Compliance Courses</li>
                <li className="flex items-center gap-3">✓ Online Self-Paced Learning</li>
                <li className="flex items-center gap-3">✓ Verified PDF Certificates</li>
                <li className="flex items-center gap-3">✓ Admin Progress Dashboard</li>
              </ul>
              <Link to="/booking?plan=digital" className="w-full py-6 rounded-[32px] border-2 border-white/20 font-black uppercase text-center text-[11px] tracking-widest hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center">Get Started</Link>
            </div>

            {/* In-Person Package */}
            <div className="p-8 md:p-14 rounded-[32px] md:rounded-[64px] bg-indigo-600 shadow-[0_40px_80px_-20px_rgba(79,70,229,0.5)] flex flex-col relative">
              <div className="absolute top-0 right-0 p-8">
                <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest">Most Popular</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-200 mb-4">In-Person</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-black text-white">₹250</span>
                <span className="text-indigo-200 font-bold">/employee</span>
              </div>
              <p className="text-xs text-indigo-200 font-black uppercase tracking-widest mb-10">Includes 4 Courses + Live Sessions</p>
              <ul className="space-y-6 mb-12 text-sm font-bold flex-grow">
                <li className="flex items-center gap-3">✓ 4 Compliance Courses</li>
                <li className="flex items-center gap-3">✓ Online Self-Paced Learning</li>
                <li className="flex items-center gap-3">✓ Verified PDF Certificates</li>
                <li className="flex items-center gap-3">✓ Admin Progress Dashboard</li>
                <li className="flex items-center gap-3">✓ In-Person Expert Sessions</li>
                <li className="flex items-center gap-3">✓ Employee Performance Optimization</li>
              </ul>
              <Link to="/booking?plan=in-person" className="w-full py-6 rounded-[32px] bg-white text-indigo-600 font-black uppercase text-[11px] text-center tracking-widest hover:bg-indigo-50 transition-all shadow-2xl flex items-center justify-center">Book In-Person Plan</Link>
            </div>
          </div>

          <p className="text-center text-slate-500 text-sm font-bold mt-16">Need something custom? <Link to="/pricing" className="text-indigo-400 hover:text-white transition-colors">View full pricing details →</Link></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 border-t border-slate-100 text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="Etiquette Logo" className="h-10 md:h-12 w-auto" />
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link to="/privacy" className="text-[9px] font-black text-slate-300 uppercase tracking-widest hover:text-indigo-600 transition-colors">Privacy</Link>
            <Link to="/terms" className="text-[9px] font-black text-slate-300 uppercase tracking-widest hover:text-indigo-600 transition-colors">Terms</Link>
            <Link to="/legal" className="text-[9px] font-black text-slate-300 uppercase tracking-widest hover:text-indigo-600 transition-colors">Legal</Link>
            <Link to="/security" className="text-[9px] font-black text-slate-300 uppercase tracking-widest hover:text-indigo-600 transition-colors">Security</Link>
          </div>
          <p className="text-[9px] md:text-[10px] font-black text-slate-300 uppercase tracking-widest">© 2024 Etiquette Intelligence Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;