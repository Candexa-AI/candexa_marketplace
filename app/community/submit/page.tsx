'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SubmitProfile() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    agencyName: '',
    website: '',
    niche: '',
    location: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/listings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccess(true);
      setTimeout(() => router.push('/community'), 1800);
    } else {
      alert('Failed to submit. Please check your inputs and try again.');
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
          <div className="text-6xl mb-6">&#127881;</div>
          <h2 className="text-3xl font-semibold text-[#1A1A1A] mb-3">Profile Submitted Successfully!</h2>
          <p className="text-[#6B7280] mb-8">
            Your profile is now live in the community as <strong>Unverified</strong>.
          </p>
          <button
            onClick={() => router.push('/community')}
            className="bg-[#FF823C] text-white px-10 py-4 rounded-3xl font-semibold hover:bg-[#FF823C]/90 transition-colors"
          >
            Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
        <h1 className="text-4xl font-semibold text-[#1A1A1A] mb-2">Submit Your Profile</h1>
        <p className="text-[#6B7280] mb-10">Join the Candexa AI Recruiter Community</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative">
              <label className="block text-xs font-semibold text-[#374151] uppercase tracking-wide mb-2">Full Name</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </span>
                <input name="name" required value={form.name} onChange={handleChange} className="w-full pl-11 pr-4 py-3.5 bg-[#F9FAFB] border border-gray-200 rounded-2xl focus:bg-white focus:border-[#FF823C] focus:ring-2 focus:ring-[#FF823C]/20 transition-all outline-none text-[#1A1A1A] placeholder:text-gray-400" placeholder="John Doe" />
              </div>
            </div>
            <div className="relative">
              <label className="block text-xs font-semibold text-[#374151] uppercase tracking-wide mb-2">Email</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </span>
                <input name="email" type="email" required value={form.email} onChange={handleChange} className="w-full pl-11 pr-4 py-3.5 bg-[#F9FAFB] border border-gray-200 rounded-2xl focus:bg-white focus:border-[#FF823C] focus:ring-2 focus:ring-[#FF823C]/20 transition-all outline-none text-[#1A1A1A] placeholder:text-gray-400" placeholder="you@email.com" />
              </div>
            </div>
          </div>

          <div className="relative">
            <label className="block text-xs font-semibold text-[#374151] uppercase tracking-wide mb-2">Agency / Company Name</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </span>
              <input name="agencyName" required value={form.agencyName} onChange={handleChange} className="w-full pl-11 pr-4 py-3.5 bg-[#F9FAFB] border border-gray-200 rounded-2xl focus:bg-white focus:border-[#FF823C] focus:ring-2 focus:ring-[#FF823C]/20 transition-all outline-none text-[#1A1A1A] placeholder:text-gray-400" placeholder="TalentSphere Recruitment" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative">
              <label className="block text-xs font-semibold text-[#374151] uppercase tracking-wide mb-2">Website</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </span>
                <input name="website" value={form.website} onChange={handleChange} className="w-full pl-11 pr-4 py-3.5 bg-[#F9FAFB] border border-gray-200 rounded-2xl focus:bg-white focus:border-[#FF823C] focus:ring-2 focus:ring-[#FF823C]/20 transition-all outline-none text-[#1A1A1A] placeholder:text-gray-400" placeholder="https://youragency.com" />
              </div>
            </div>
            <div className="relative">
              <label className="block text-xs font-semibold text-[#374151] uppercase tracking-wide mb-2">Location</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </span>
                <input name="location" value={form.location} onChange={handleChange} className="w-full pl-11 pr-4 py-3.5 bg-[#F9FAFB] border border-gray-200 rounded-2xl focus:bg-white focus:border-[#FF823C] focus:ring-2 focus:ring-[#FF823C]/20 transition-all outline-none text-[#1A1A1A] placeholder:text-gray-400" placeholder="Lagos, Nigeria or Remote" />
              </div>
            </div>
          </div>

          <div className="relative">
            <label className="block text-xs font-semibold text-[#374151] uppercase tracking-wide mb-2">Niche / Specialty</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
              </span>
              <input name="niche" value={form.niche} onChange={handleChange} className="w-full pl-11 pr-4 py-3.5 bg-[#F9FAFB] border border-gray-200 rounded-2xl focus:bg-white focus:border-[#FF823C] focus:ring-2 focus:ring-[#FF823C]/20 transition-all outline-none text-[#1A1A1A] placeholder:text-gray-400" placeholder="Tech, Finance, Healthcare..." />
            </div>
          </div>

          <div className="relative">
            <label className="block text-xs font-semibold text-[#374151] uppercase tracking-wide mb-2">Short Description</label>
            <div className="relative">
              <span className="absolute left-4 top-4 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h7" /></svg>
              </span>
              <textarea name="description" value={form.description} onChange={handleChange} rows={4} className="w-full pl-11 pr-4 py-3.5 bg-[#F9FAFB] border border-gray-200 rounded-2xl focus:bg-white focus:border-[#FF823C] focus:ring-2 focus:ring-[#FF823C]/20 transition-all outline-none text-[#1A1A1A] placeholder:text-gray-400 resize-none" placeholder="Tell us about your expertise..." />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FF823C] hover:bg-[#FF6B2C] active:bg-[#E55A1A] disabled:opacity-70 disabled:cursor-not-allowed transition-all text-white font-semibold py-4 rounded-2xl text-base shadow-lg shadow-[#FF823C]/30 hover:shadow-xl hover:shadow-[#FF823C]/40 transform hover:-translate-y-0.5"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                Submitting Profile...
              </span>
            ) : 'Submit Profile'}
          </button>
        </form>
      </div>
    </div>
  );
}