import React from 'react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
   return (
      <div className="bg-[#fcfcfd] min-h-screen selection:bg-indigo-100">
         {/* Header Section */}
         <header className="pt-24 pb-20 px-6 bg-white border-b border-slate-100 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[100px] -mr-64 -mt-64"></div>
            <div className="max-w-7xl mx-auto relative z-10">
               <Link to="/" className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-8 inline-flex items-center gap-2 group">
                  <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
                  Back to Home
               </Link>
               <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter mb-6 italic font-['Bangers']">
                  Transparent <span className="text-indigo-600">Licensing</span>
               </h1>
               <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                  Investment in compliance pays the best interest. Choose a tier that fits your organization’s workforce size and regulatory needs.
               </p>
            </div>
         </header>

         {/* Main Pricing Cards */}
         <section className="py-24 px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
               {/* Digital Package */}
               <div className="p-12 rounded-[56px] border-2 border-slate-100 bg-white flex flex-col hover:border-indigo-100 transition-all duration-500 shadow-sm">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">Digital</p>
                  <div className="flex items-baseline gap-2 mb-2">
                     <span className="text-5xl font-black text-slate-900">₹250</span>
                     <span className="text-slate-400 font-bold">/employee</span>
                  </div>
                  <p className="text-xs text-indigo-600 font-black uppercase tracking-widest mb-10">Includes 4 Courses</p>
                  <p className="text-sm text-slate-500 font-medium mb-12 leading-relaxed">Full access to 4 compliance courses per employee, delivered entirely online with verified certifications.</p>
                  <ul className="space-y-6 mb-16 text-sm font-bold text-slate-600 flex-grow">
                     <li className="flex items-center gap-4"><span className="text-emerald-500 text-lg">✓</span> 4 Compliance Courses</li>
                     <li className="flex items-center gap-4"><span className="text-emerald-500 text-lg">✓</span> Online Self-Paced Learning</li>
                     <li className="flex items-center gap-4"><span className="text-emerald-500 text-lg">✓</span> Verified PDF Certificates</li>
                     <li className="flex items-center gap-4"><span className="text-emerald-500 text-lg">✓</span> Admin Progress Dashboard</li>
                     <li className="flex items-center gap-4 opacity-30"><span className="text-slate-300 text-lg">✗</span> In-Person Sessions</li>
                  </ul>
                  <Link to="/booking?plan=digital" className="w-full py-6 rounded-[32px] bg-slate-900 text-white font-black uppercase text-center text-[11px] tracking-widest hover:bg-indigo-600 transition-all shadow-xl flex items-center justify-center">Get Started</Link>
               </div>

               {/* In-Person Package - Recommended */}
               <div className="p-14 rounded-[64px] bg-slate-900 text-white shadow-[0_40px_80px_-20px_rgba(79,70,229,0.3)] relative overflow-hidden flex flex-col">
                  <div className="absolute top-0 right-0 p-8">
                     <span className="bg-indigo-500 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest">Most Popular</span>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400 mb-4">In-Person</p>
                  <div className="flex items-baseline gap-2 mb-2">
                     <span className="text-5xl font-black text-white">₹250</span>
                     <span className="text-slate-400 font-bold">/employee</span>
                  </div>
                  <p className="text-xs text-indigo-400 font-black uppercase tracking-widest mb-10">Includes 4 Courses + Live Sessions</p>
                  <p className="text-sm text-slate-400 font-medium mb-12 leading-relaxed">Everything in the Digital plan, plus live in-person expert-led sessions and Q&A walkthroughs for your team.</p>
                  <ul className="space-y-6 mb-16 text-sm font-bold flex-grow">
                     <li className="flex items-center gap-4"><span className="text-indigo-400 text-lg">✓</span> 4 Compliance Courses</li>
                     <li className="flex items-center gap-4"><span className="text-indigo-400 text-lg">✓</span> Online Self-Paced Learning</li>
                     <li className="flex items-center gap-4"><span className="text-indigo-400 text-lg">✓</span> Verified PDF Certificates</li>
                     <li className="flex items-center gap-4"><span className="text-indigo-400 text-lg">✓</span> Admin Progress Dashboard</li>
                     <li className="flex items-center gap-4"><span className="text-indigo-400 text-lg">✓</span> In-Person Expert Sessions</li>
                     <li className="flex items-center gap-4"><span className="text-indigo-400 text-lg">✓</span> Employee Performance Optimization</li>
                  </ul>
                  <Link to="/booking?plan=in-person" className="w-full py-6 rounded-[32px] bg-indigo-600 text-white font-black uppercase text-center text-[11px] tracking-widest hover:bg-indigo-500 transition-all shadow-2xl flex items-center justify-center">Book In-Person Plan</Link>
               </div>
            </div>
         </section>

         {/* Feature Comparison Table */}
         <section className="py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-6">
               <h2 className="text-4xl font-black text-slate-900 mb-16 tracking-tight text-center">Feature Comparison</h2>
               <div className="bg-white border border-slate-200 rounded-[48px] overflow-hidden shadow-xl">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="bg-slate-900 text-white">
                           <th className="p-8 text-[10px] font-black uppercase tracking-widest">Platform Capability</th>
                           <th className="p-8 text-[10px] font-black uppercase tracking-widest text-center">Digital — ₹250/emp</th>
                           <th className="p-8 text-[10px] font-black uppercase tracking-widest text-center">In-Person — ₹250/emp</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50/50 transition-colors">
                           <td className="p-8 font-bold text-slate-900">4 Compliance Courses</td>
                           <td className="p-8 text-center text-emerald-500 font-black text-xl">●</td>
                           <td className="p-8 text-center text-emerald-500 font-black text-xl">●</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                           <td className="p-8 font-bold text-slate-900">Online Self-Paced Learning</td>
                           <td className="p-8 text-center text-emerald-500 font-black text-xl">●</td>
                           <td className="p-8 text-center text-emerald-500 font-black text-xl">●</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                           <td className="p-8 font-bold text-slate-900">Verified PDF Certificates</td>
                           <td className="p-8 text-center text-emerald-500 font-black text-xl">●</td>
                           <td className="p-8 text-center text-emerald-500 font-black text-xl">●</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                           <td className="p-8 font-bold text-slate-900">Admin Progress Dashboard</td>
                           <td className="p-8 text-center text-emerald-500 font-black text-xl">●</td>
                           <td className="p-8 text-center text-emerald-500 font-black text-xl">●</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                           <td className="p-8 font-bold text-slate-900">In-Person Expert Sessions</td>
                           <td className="p-8 text-center text-slate-200 font-black text-xl">○</td>
                           <td className="p-8 text-center text-indigo-500 font-black text-xl">●</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50 transition-colors">
                           <td className="p-8 font-bold text-slate-900">Employee Performance Optimization</td>
                           <td className="p-8 text-center text-slate-200 font-black text-xl">○</td>
                           <td className="p-8 text-center text-indigo-500 font-black text-xl">●</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
         </section>

         {/* FAQ Section */}
         <section className="py-32 px-6">
            <div className="max-w-3xl mx-auto">
               <h2 className="text-4xl font-black text-slate-900 mb-16 tracking-tight text-center italic font-['Bangers'] underline decoration-indigo-600 underline-offset-8">Common Questions</h2>
               <div className="space-y-12">
                  <div>
                     <h4 className="text-xl font-black text-slate-900 mb-4">Can we switch plans mid-year?</h4>
                     <p className="text-slate-500 font-medium leading-relaxed">Yes, you can upgrade at any time. We will pro-rate the difference based on your remaining subscription period.</p>
                  </div>
                  <div>
                     <h4 className="text-xl font-black text-slate-900 mb-4">Are certifications government-recognized?</h4>
                     <p className="text-slate-500 font-medium leading-relaxed">Our content is strictly aligned with global statutory requirements (POSH, OHS, ABC). However, official recognition depends on your local legal jurisdiction's specific audit requirements.</p>
                  </div>
                  <div>
                     <h4 className="text-xl font-black text-slate-900 mb-4">Do you offer non-profit discounts?</h4>
                     <p className="text-slate-500 font-medium leading-relaxed">We believe integrity is for everyone. Reach out to our sales team for special non-profit and educational pricing.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* Footer */}
         <footer className="py-20 bg-slate-900 text-white text-center">
            <div className="max-w-7xl mx-auto px-6">
               <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-10">© 2024 Etiquette Intelligence Inc. All rights reserved.</p>
               <div className="flex justify-center gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">
                  <Link to="/legal" className="hover:text-white transition-colors">Legal</Link>
                  <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                  <Link to="/security" className="hover:text-white transition-colors">Security</Link>
                  <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
               </div>
            </div>
         </footer>
      </div>
   );
};

export default Pricing;