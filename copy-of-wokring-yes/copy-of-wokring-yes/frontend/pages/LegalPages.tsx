import React from 'react';
import { Link } from 'react-router-dom';

const LegalPage: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    return (
        <div className="bg-slate-50 min-h-screen py-24 px-6 font-['Inter',system-ui,sans-serif]">
            <div className="max-w-3xl mx-auto">
                <header className="mb-16">
                    <Link to="/" className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-8 inline-flex items-center gap-2 group">
                        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
                        Back to Home
                    </Link>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter italic font-['Bangers'] mb-4">{title}</h1>
                    <p className="text-slate-400 font-medium">Last Updated: March 2024</p>
                </header>

                <div className="bg-white p-12 rounded-[48px] border border-slate-100 shadow-sm prose prose-slate max-w-none">
                    {children}
                    <div className="mt-12 pt-12 border-t border-slate-100">
                        <p className="text-sm font-bold text-slate-900">Contact our Legal & Security Team:</p>
                        <p className="text-sm text-indigo-600 font-bold">compliance@etiquette.io</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const PrivacyPolicy = () => (
    <LegalPage title="Privacy Policy">
        <h2 className="text-2xl font-black text-slate-900 mb-6">1. Data Collection</h2>
        <p className="text-slate-600 leading-relaxed mb-8">
            We collect minimal personal data required for enterprise training: Name, Email, and Department. We do not track users outside the scope of the LMS platform.
        </p>
        <h2 className="text-2xl font-black text-slate-900 mb-6">2. Data Usage</h2>
        <p className="text-slate-600 leading-relaxed mb-8">
            Data is used exclusively for generating compliance reports, issuing certifications, and providing progress analytics to your organization's HR department.
        </p>
        <h2 className="text-2xl font-black text-slate-900 mb-6">3. Third-Party Sharing</h2>
        <p className="text-slate-600 leading-relaxed mb-8">
            We do not sell or share employee data with third-party advertisers. Data may be shared with cloud infrastructure providers purely for hosting purposes under strict NDAs.
        </p>
    </LegalPage>
);

export const TermsAndConditions = () => (
    <LegalPage title="Terms & Conditions">
        <h2 className="text-2xl font-black text-slate-900 mb-6">1. User Licensing</h2>
        <p className="text-slate-600 leading-relaxed mb-8">
            Licenses are granted on a per-employee basis at the rate of ₹250 (Digital Plan) or ₹450 (In-Person Plan) per seat. Licenses are non-transferable once a course has been started by an employee.
        </p>
        <h2 className="text-2xl font-black text-slate-900 mb-6">2. Acceptable Use</h2>
        <p className="text-slate-600 leading-relaxed mb-8">
            Users must not attempt to circumvent assessment protocols or use automated scripts to complete training. Integrity in learning is a fundamental requirement of our service.
        </p>
        <h2 className="text-2xl font-black text-slate-900 mb-6">3. Platform Availability</h2>
        <p className="text-slate-600 leading-relaxed mb-8">
            We aim for 99.9% uptime. Scheduled maintenance will be communicated at least 48 hours in advance to organization administrators.
        </p>
    </LegalPage>
);

export const SecurityPolicy = () => (
    <LegalPage title="Security Architecture">
        <h2 className="text-2xl font-black text-slate-900 mb-6">1. Infrastructure Security</h2>
        <p className="text-slate-600 leading-relaxed mb-8">
            All data is encrypted at rest using AES-256 and in transit using TLS 1.3. Our infrastructure is hosted on SOC2 Type II compliant cloud providers.
        </p>
        <h2 className="text-2xl font-black text-slate-900 mb-6">2. Access Control</h2>
        <p className="text-slate-600 leading-relaxed mb-8">
            We implement Role-Based Access Control (RBAC). Employees can only view their own progress, while HR admins have scoped access to their respective department's data.
        </p>
        <h2 className="text-2xl font-black text-slate-900 mb-6">3. Threat Monitoring</h2>
        <p className="text-slate-600 leading-relaxed mb-8">
            We perform continuous vulnerability scanning and annual third-party penetration testing to ensure the integrity of our compliance platform.
        </p>
    </LegalPage>
);

export const LegalNotice = () => (
    <LegalPage title="Legal Framework">
        <h2 className="text-2xl font-black text-slate-900 mb-6">1. Regulatory Alignment</h2>
        <p className="text-slate-600 leading-relaxed mb-8">
            Our courses are designed to meet statutory requirements for POSH, GDPR, and local labor laws. However, organizations must verify specific jurisdictional nuances with their legal counsel.
        </p>
        <h2 className="text-2xl font-black text-slate-900 mb-6">2. Certification Validity</h2>
        <p className="text-slate-600 leading-relaxed mb-8">
            Certificates issued by Etiquette LMS serve as evidence of training completion. They do not constitute legal advice or a guarantee of complete regulatory immunity.
        </p>
        <h2 className="text-2xl font-black text-slate-900 mb-6">3. Liability Limits</h2>
        <p className="text-slate-600 leading-relaxed mb-8">
            Etiquette Intelligence Inc. is not liable for regulatory fines incurred by client organizations. Our role is to provide the educational tools required for compliance readiness.
        </p>
    </LegalPage>
);
