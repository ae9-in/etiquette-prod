import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const BookingPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const initialPlan = queryParams.get('plan') || 'digital';

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        plan: initialPlan,
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        employeeCount: '1-50',
        preferredDate: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        try {
            // In a real app, we would call an API here
            // await api.submitBooking(formData);
            await new Promise(resolve => setTimeout(resolve, 1500));
            setIsSuccess(true);

            // Auto redirect after success
            setTimeout(() => {
                navigate('/');
            }, 5000);
        } catch (error) {
            console.error('Booking failed:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center p-6 text-center">
                <div className="max-w-md animate-in fade-in zoom-in duration-700">
                    <div className="h-24 w-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-8">
                        ✓
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 mb-6 italic font-['Bangers']">Booking Request Received!</h1>
                    <p className="text-slate-500 font-medium leading-relaxed mb-10">
                        Our enterprise compliance team will review your {formData.plan === 'in-person' ? 'In-Person' : 'Digital'} plan request and contact you within 24 hours to finalize details.
                    </p>
                    <Link to="/" className="inline-block px-12 py-5 bg-slate-900 text-white rounded-full font-black uppercase text-[11px] tracking-widest hover:bg-indigo-600 transition-all shadow-xl">
                        Return Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12 md:py-24 px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-16">
                    <Link to="/pricing" className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-6 inline-flex items-center gap-2 group">
                        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
                        Back to Pricing
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter italic font-['Bangers'] mb-4">Enterprise <span className="text-indigo-600">Onboarding</span></h1>
                    <p className="text-slate-400 font-medium">Finalize your team's compliance journey.</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Summary Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50 sticky top-20 md:top-32">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Selected Plan</h3>
                            <div className={`p-6 rounded-3xl mb-8 ${formData.plan === 'in-person' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100' : 'bg-slate-900 text-white shadow-xl shadow-slate-100'}`}>
                                <p className="text-[9px] font-black uppercase tracking-widest mb-1 opacity-70">{formData.plan === 'in-person' ? 'Comprehensive' : 'Standard'}</p>
                                <h4 className="text-2xl font-black mb-4">{formData.plan === 'in-person' ? 'In-Person Plan' : 'Digital Plan'}</h4>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-black">₹250</span>
                                    <span className="text-[10px] font-bold opacity-60">/employee</span>
                                </div>
                            </div>

                            <ul className="space-y-4 text-[11px] font-bold text-slate-500 mb-8">
                                <li className="flex gap-3">✓ 4 Core Courses</li>
                                <li className="flex gap-3">✓ Verified Certifications</li>
                                <li className="flex gap-3">✓ Admin Command Center</li>
                                {formData.plan === 'in-person' && (
                                    <>
                                        <li className="flex gap-3 text-indigo-600">✓ In-Person Expert Sessions</li>
                                        <li className="flex gap-3 text-indigo-600">✓ Performance Optimization</li>
                                    </>
                                )}
                            </ul>

                            <div className="pt-8 border-t border-slate-50">
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Need help?</p>
                                <p className="text-sm font-bold text-slate-900 mt-1">support@etiquette.io</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="bg-white p-6 md:p-12 rounded-[32px] md:rounded-[56px] border border-slate-100 shadow-sm">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="col-span-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">Company Entity</label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold text-slate-900"
                                        placeholder="Enter legal company name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">Contact Person</label>
                                    <input
                                        type="text"
                                        name="contactName"
                                        value={formData.contactName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold text-slate-900"
                                        placeholder="Full Name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">Work Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold text-slate-900"
                                        placeholder="name@company.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">Work Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold text-slate-900"
                                        placeholder="+91 00000 00000"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">Employee Count</label>
                                    <select
                                        name="employeeCount"
                                        value={formData.employeeCount}
                                        onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold text-slate-900"
                                    >
                                        <option value="1-50">1-50 Employees</option>
                                        <option value="51-200">51-200 Employees</option>
                                        <option value="201-500">201-500 Employees</option>
                                        <option value="500+">500+ Employees</option>
                                    </select>
                                </div>

                                {formData.plan === 'in-person' && (
                                    <div className="col-span-2">
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">Preferred Date for In-Person Session</label>
                                        <input
                                            type="date"
                                            name="preferredDate"
                                            value={formData.preferredDate}
                                            onChange={handleChange}
                                            required={formData.plan === 'in-person'}
                                            className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold text-slate-900"
                                        />
                                    </div>
                                )}

                                <div className="col-span-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">Additional Requirements (Optional)</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold text-slate-900 resize-none"
                                        placeholder="Tell us about any specific compliance needs..."
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-8 bg-slate-900 text-white rounded-[32px] font-black text-[12px] uppercase tracking-[0.4em] hover:bg-indigo-600 shadow-2xl transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-4"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="h-4 w-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                        Processing Request...
                                    </>
                                ) : (
                                    formData.plan === 'in-person' ? 'Confirm In-Person Booking' : 'Confirm Digital Onboarding'
                                )}
                            </button>

                            <p className="text-center text-[9px] text-slate-300 font-bold mt-8 uppercase tracking-widest">
                                By confirming, you agree to our <Link to="/terms" className="text-slate-400 hover:underline">Terms of Service</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
