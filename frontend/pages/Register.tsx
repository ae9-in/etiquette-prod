import React, { useState } from 'react';
import { api, APIError } from '../systems/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Register: React.FC<{ onToggle: () => void }> = ({ onToggle }) => {
    const navigate = useNavigate();
    const { signIn } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        company: '',
        role: 'employee' as const
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            // Map 'company' to 'department' for the API
            const payload = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                role: formData.role,
                department: formData.company,
            };
            const response = await api.register(payload);
            setSuccess('Registration successful! Logging you in...');

            // Auto-login via AuthContext after successful registration
            if (response.token) {
                setTimeout(async () => {
                    try {
                        const destination = await signIn(formData.email, formData.password);
                        navigate(destination || '/employee', { replace: true });
                    } catch {
                        // Fallback: redirect to login page
                        navigate('/login');
                    }
                }, 1000);
            } else {
                setTimeout(() => {
                    onToggle();
                }, 2000);
            }
        } catch (err: any) {
            setError(err.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
            <div className="max-w-md w-full">
                <div className="text-center mb-12">
                    <div className="flex items-center gap-3 justify-center mb-8">
                        <img src="/assets/logo.png" alt="Etiquette Logo" className="h-14 w-auto" />
                    </div>
                    <p className="text-slate-500 font-medium">Create your workspace account</p>
                </div>

                <div className="bg-white p-10 rounded-[48px] shadow-2xl shadow-slate-200/50 border border-slate-100">
                    {error && (
                        <div className="p-4 bg-rose-50 text-rose-600 text-xs font-bold rounded-xl border border-rose-100 mb-6">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="p-4 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-xl border border-emerald-100 mb-6">
                            {success}
                        </div>
                    )}

                    <form onSubmit={handleRegister} className="space-y-4">
                        <div>
                            <label htmlFor="reg-name" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Full Name</label>
                            <input
                                id="reg-name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold text-slate-900"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label htmlFor="reg-email" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Corporate Email</label>
                            <input
                                id="reg-email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold text-slate-900"
                                placeholder="name@company.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="reg-company" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Company Name</label>
                            <input
                                id="reg-company"
                                name="company"
                                type="text"
                                value={formData.company}
                                onChange={handleChange}
                                required
                                className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold text-slate-900"
                                placeholder="Acme Corp"
                            />
                        </div>

                        <div>
                            <label htmlFor="reg-password" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Password</label>
                            <input
                                id="reg-password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold text-slate-900"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-6 bg-slate-900 text-white rounded-[28px] font-black text-[11px] uppercase tracking-[0.3em] hover:bg-indigo-600 shadow-xl transition-all active:scale-95 disabled:opacity-50 mt-4"
                        >
                            {loading ? 'Creating Account...' : 'Register Now'}
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-slate-50 text-center">
                        <button
                            onClick={onToggle}
                            className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 hover:text-indigo-700 transition-colors"
                        >
                            Already have an account? Sign In
                        </button>
                    </div>
                </div>

                <p className="mt-12 text-center text-[10px] text-slate-300 font-black uppercase tracking-[0.3em]">
                    Join the Future of Compliance
                </p>
            </div>
        </div>
    );
};

export default Register;
