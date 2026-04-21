"use client";

import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function AgencyProfilePage({ params }: { params: { slug: string } }) {
  console.log("Viewing agency:", params.slug);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  // For this mockup, we are hardcoding the data for "One Seven Consulting"
  // to match the exact inspirational UI.

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative pb-20">
      <Navbar />

      {/* Header Section */}
      <div className="w-full bg-[#0f172a] relative pt-16 md:pt-16 pb-[100px] md:pb-[120px] px-4 md:px-10 overflow-hidden">
        {/* Subtle dot pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        ></div>
        
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-8 relative z-10">
          {/* Logo Card */}
          <div className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg p-4">
            <div className="flex flex-col items-center">
              <svg width="50" height="50" md-width="60" md-height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" stroke="#111" strokeWidth="4"/>
                <path d="M30 40H70L50 85" stroke="#111" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="mt-3 md:mt-4 text-center">
                <div className="text-[12px] md:text-[14px] font-bold tracking-[1.5px] md:tracking-[2px] leading-tight text-[#111]">ONE SEVEN</div>
                <div className="text-[8px] md:text-[9px] font-semibold tracking-[1px] md:tracking-[1.5px] text-[#444] mt-0.5 uppercase">Consulting</div>
              </div>
            </div>
          </div>

          {/* Title & Badges */}
          <div className="flex flex-col gap-4 text-white text-center md:text-left items-center md:items-start">
            <h1 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold m-0 font-serif leading-tight">One Seven Consulting</h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md text-white border border-white/20 px-3 md:px-3.5 py-1 md:py-1.5 rounded-full text-[11px] md:text-[13px] font-bold">
                <svg className="w-3 md:w-3.5 h-3 md:h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                Verified
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md text-white border border-white/20 px-3 md:px-3.5 py-1 md:py-1.5 rounded-full text-[11px] md:text-[13px] font-medium">
                <svg className="w-3 md:w-3.5 h-3 md:h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                15 views
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping Stats Bar */}
      <div className="max-w-[1100px] mx-auto px-4 md:px-0 relative z-20 -mt-10 md:-mt-14 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {[
            { label: "Founded", value: "2023", icon: <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/> },
            { label: "Team Size", value: "2-10 emp", icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/> },
            { label: "Hourly Rate", value: "N/A", icon: <line x1="12" y1="1" x2="12" y2="23"/> },
            { label: "Location", value: "Singapore", icon: <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/> }
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center shadow-sm border border-slate-100">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-50 text-[#ff7a18] flex items-center justify-center mb-2 md:mb-3">
                <svg className="w-4 md:w-5 h-4 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">{stat.icon}</svg>
              </div>
              <span className="text-[9px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</span>
              <span className="text-[13px] md:text-[16px] font-bold text-slate-900 truncate w-full text-center">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-[1100px] mx-auto px-4 md:px-0 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 mb-8">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          
          {/* About Agency */}
          <div className="bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border-slate-200 shadow-sm">
            <h2 className="text-[18px] font-bold text-[#ff7a18] flex items-center gap-2 mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              About Agency
            </h2>
            <p className="text-[#4a6358] text-[15px] leading-relaxed m-0">
              One Seven Consulting is a Singapore-based boutique executive search and HR consultancy focused on energy, offering executive search, career coaching and HR consulting.
            </p>
          </div>

          {/* Expertise & Industry */}
          <div className="bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border-slate-200 shadow-sm">
            <h2 className="text-[18px] font-bold text-[#ff7a18] flex items-center gap-2 mb-6 pb-4 border-b border-[#f0f4f2]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              Expertise & Industry
            </h2>

            <div className="mb-6">
              <h3 className="text-[14px] font-bold text-[#111] flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                Offered Services
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <span className="px-4 py-1.5 rounded-full border border-gray-200 text-[13px] text-gray-600 bg-[#f9fafb]">Executive Search <strong className="text-gray-800 ml-1">100%</strong></span>
                <span className="px-4 py-1.5 rounded-full border border-gray-200 text-[13px] text-gray-600 bg-[#f9fafb]">HR Consulting <strong className="text-gray-800 ml-1">100%</strong></span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-[14px] font-bold text-[#111] flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                Industry Coverage
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <span className="px-4 py-1.5 rounded-full border border-gray-200 text-[13px] text-gray-600 bg-[#f9fafb]">Energy & Utilities <strong className="text-gray-800 ml-1">100%</strong></span>
                <span className="px-4 py-1.5 rounded-full border border-gray-200 text-[13px] text-gray-600 bg-[#f9fafb]">Executive Office <strong className="text-gray-800 ml-1">100%</strong></span>
                <span className="px-4 py-1.5 rounded-full border border-gray-200 text-[13px] text-gray-600 bg-[#f9fafb]">Logistics and Supply Chain <strong className="text-gray-800 ml-1">100%</strong></span>
                <span className="px-4 py-1.5 rounded-full border border-gray-200 text-[13px] text-gray-600 bg-[#f9fafb]">Manufacturing <strong className="text-gray-800 ml-1">100%</strong></span>
                <span className="px-4 py-1.5 rounded-full border border-gray-200 text-[13px] text-gray-600 bg-[#f9fafb]">Sales <strong className="text-gray-800 ml-1">100%</strong></span>
              </div>
            </div>

            <div>
              <h3 className="text-[14px] font-bold text-[#111] flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                Preferred Client Size
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <span className="px-4 py-1.5 rounded-full border border-gray-200 text-[13px] text-gray-600 bg-[#f9fafb]">Enterprise (&gt;$1B)</span>
                <span className="px-4 py-1.5 rounded-full border border-gray-200 text-[13px] text-gray-600 bg-[#f9fafb]">Midmarket ($10M - $1B)</span>
              </div>
            </div>
          </div>

          {/* Key Clients */}
          <div className="bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border-slate-200 shadow-sm">
            <h2 className="text-[18px] font-bold text-[#ff7a18] flex items-center gap-2 mb-4 pb-4 border-b border-[#f0f4f2]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M3 21h18"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/><path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"/></svg>
              Key Clients
            </h2>
            <p className="text-gray-400 text-[14px] italic m-0">No key clients listed.</p>
          </div>

          {/* Key Decision Makers */}
          <div className="bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border-slate-200 shadow-sm">
            <h2 className="text-[18px] font-bold text-[#ff7a18] flex items-center gap-2 mb-6 pb-4 border-b border-[#f0f4f2]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              Key Decision Makers
            </h2>
            <div className="flex flex-col gap-4">
              {[
                { name: "Jace Wang JL", title: "Regional Executive Search Director / Key Appointment Holder", linkedin: true },
                { name: "Poh Qiao Ying (Eline Poh)", title: "Senior Specialist Recruiter / Registered EA Personnel", linkedin: false },
                { name: "Lim Hui Choo (Alycia Lim)", title: "Specialist Recruiter / Registered EA Personnel", linkedin: false },
                { name: "Soong Jie Hui (Adelene Soong)", title: "Recruitment Specialist / Registered EA Personnel", linkedin: false }
              ].map((person, i) => (
                <div key={i} className="border border-gray-100 rounded-lg p-5 bg-white shadow-sm">
                  <h4 className="text-[15px] font-bold text-[#111] m-0 mb-1">{person.name}</h4>
                  <p className="text-[13px] text-gray-500 m-0">{person.title}</p>
                  {person.linkedin && (
                    <div className="mt-3">
                      <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#0a66c2] hover:underline cursor-pointer">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        LinkedIn
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio */}
          <div className="bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border-slate-200 shadow-sm">
            <h2 className="text-[18px] font-bold text-[#ff7a18] flex items-center gap-2 mb-4 pb-4 border-b border-[#f0f4f2]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Portfolio
            </h2>
            <p className="text-gray-400 text-[14px] italic m-0">No portfolio items listed.</p>
          </div>

        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          
          {/* Presence */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border-slate-200 shadow-sm">
            <h2 className="text-[18px] font-bold text-[#ff7a18] flex items-center gap-2 mb-6 pb-4 border-b border-[#f0f4f2]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              Presence
            </h2>
            
            <div className="mb-6">
              <h3 className="text-[14px] font-bold text-[#111] flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Countries of Service
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1.5 rounded-full border border-gray-200 text-[12px] font-medium text-gray-700 bg-white shadow-sm">Malaysia</span>
                <span className="px-4 py-1.5 rounded-full border border-gray-200 text-[12px] font-medium text-gray-700 bg-white shadow-sm">Philippines</span>
                <span className="px-4 py-1.5 rounded-full border border-gray-200 text-[12px] font-medium text-gray-700 bg-white shadow-sm">Singapore</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-[14px] font-bold text-[#111] flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Time Zones
              </h3>
              <span className="inline-block px-4 py-1.5 rounded-full border border-gray-200 text-[12px] font-medium text-gray-500 bg-white shadow-sm">
                (GMT+8:00) Asia/Singapore
              </span>
            </div>

            <div>
              <h3 className="text-[14px] font-bold text-[#111] flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                Languages
              </h3>
              <span className="inline-block px-4 py-1.5 rounded-full border border-gray-200 text-[12px] font-medium text-gray-700 bg-white shadow-sm">
                English
              </span>
            </div>
          </div>

          {/* Awards */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border-slate-200 shadow-sm">
            <h2 className="text-[18px] font-bold text-[#ff7a18] flex items-center gap-2 mb-4 pb-4 border-b border-[#f0f4f2]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
              Awards
            </h2>
            <p className="text-gray-400 text-[14px] italic m-0">No awards listed.</p>
          </div>

          {/* Quick Links */}
          <div className="bg-[#f0f9ff] rounded-2xl p-6 border border-[#bae6fd]">
            <h2 className="text-[18px] font-bold text-[#ff7a18] flex items-center gap-2 mb-4 pb-4 border-b border-[#e0f2fe]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              Quick Links
            </h2>
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center gap-2 text-[14px] font-semibold text-gray-700 hover:text-[#ff7a18] transition-colors">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                Website
              </a>
              <a href="#" className="flex items-center gap-2 text-[14px] font-semibold text-[#0a66c2] hover:underline transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Full Width Sections */}
      <div className="max-w-[1100px] mx-auto px-4 md:px-0 flex flex-col gap-6 mb-32 md:mb-28">
        
        {/* Profile Claimed (Full Width) */}
        <div className="bg-white rounded-xl p-5 md:p-6 border border-slate-200 shadow-sm flex items-start gap-4">
          <svg className="w-5 h-5 text-[#ff7a18] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          <div>
            <h3 className="text-[15px] md:text-[16px] font-bold text-slate-900 mb-1.5 m-0">Profile Claimed</h3>
            <p className="text-[13px] md:text-[13.5px] text-slate-500 m-0 mb-3">This profile has already been claimed and verified. Managed by: <strong className="text-slate-700 font-semibold">jace@onesevenc.com</strong></p>
            <p className="text-[13px] md:text-[13.5px] text-slate-500 m-0">For further assistance, please contact us at <a href="mailto:support@nextinhr.com" className="text-[#ff7a18] hover:underline font-medium">support@nextinhr.com</a>.</p>
          </div>
        </div>

        {/* Reviews (Full Width) */}
        <div className="bg-white rounded-2xl py-12 md:py-20 px-6 md:px-10 flex flex-col items-center justify-center text-center shadow-sm border border-slate-200">
          <h2 className="text-[22px] md:text-[26px] font-bold text-slate-900 m-0 mb-3">No Reviews Yet</h2>
          <p className="text-slate-500 text-[14px] md:text-[15px] mb-8">Be the first to share your experience with this agency.</p>
          <button onClick={() => setIsReviewModalOpen(true)} className="bg-gradient-to-br from-[#ff7a18] to-[#e66a10] text-white font-bold text-[14px] px-8 py-3 rounded-full transition-all active:scale-95">
            Leave a Review
          </button>
        </div>

      </div>

      <Footer />

      {/* Floating Action Bar (Sticky Bottom) */}
      <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[1100px] bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between z-[100] border border-white/10 gap-4">
        <div className="text-white text-[13px] md:text-[15px] font-medium text-center sm:text-left px-2 sm:px-0">
          Share your hiring needs and receive a quick response from this agency.
        </div>
        <button onClick={() => setIsContactModalOpen(true)} className="w-full sm:w-auto bg-gradient-to-br from-[#ff7a18] to-[#e66a10] text-white font-bold text-[14px] md:text-[15px] px-8 py-3 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          Contact Agency
        </button>
      </div>



      {/* Contact Agency Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-[600px] overflow-hidden flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="px-6 pt-6 pb-4 border-b border-gray-100 flex items-start justify-between">
              <div>
                <h2 className="text-[22px] font-bold text-[#111] m-0 mb-1">Send an Inquiry</h2>
                <p className="text-[13px] text-gray-600 m-0">To: <strong className="text-gray-900">One Seven Consulting</strong></p>
              </div>
              <button 
                onClick={() => setIsContactModalOpen(false)}
                className="text-gray-400 hover:text-gray-700 bg-transparent border-none cursor-pointer p-1"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
            
            {/* Form Body */}
            <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-5 custom-scrollbar">
              <div>
                <label className="block text-[13px] font-bold text-[#111] mb-1.5">Full Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="e.g. John Smith" className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#ff7a18] focus:ring-[#ff7a18] text-[14px]" />
              </div>
              
              <div>
                <label className="block text-[13px] font-bold text-[#111] mb-1.5">Work Email <span className="text-red-500">*</span></label>
                <input type="email" placeholder="you@company.com" className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#ff7a18] focus:ring-[#ff7a18] text-[14px]" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-bold text-[#111] mb-1.5">Company Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Your company" className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#ff7a18] focus:ring-[#ff7a18] text-[14px]" />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-[#111] mb-1.5">Job Title <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="e.g. Head of Talent" className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#ff7a18] focus:ring-[#ff7a18] text-[14px]" />
                </div>
              </div>
              
              <div>
                <label className="block text-[13px] font-bold text-[#111] mb-1.5">What type of service are you looking for? <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#ff7a18] focus:ring-[#ff7a18] text-[14px] appearance-none bg-white text-gray-500">
                    <option value="">Select services...</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#ff7a18]">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-bold text-[#111] mb-1.5">Brief Requirement <span className="text-red-500">*</span></label>
                <textarea rows={3} placeholder="Describe what you're looking for role type, volume, timeline, any specific requirements..." className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#ff7a18] focus:ring-[#ff7a18] text-[14px] resize-y"></textarea>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-end gap-4 bg-white">
              <button onClick={() => setIsContactModalOpen(false)} className="text-[14px] font-bold text-gray-500 hover:text-gray-800 bg-transparent border-none cursor-pointer px-2">
                Cancel
              </button>
              <button className="bg-gradient-to-br from-[#ff7a18] to-[#e66a10] text-white font-bold text-[14px] px-6 py-2.5 rounded-md flex items-center gap-2 transition-all border-none cursor-pointer active:scale-95">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Submit Inquiry
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Review Modal */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-[750px] overflow-hidden flex flex-col max-h-[95vh] md:max-h-[90vh]">
            {/* Header */}
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-[22px] md:text-[24px] font-bold text-[#111] m-0 tracking-tight">Write a Review for One Seven Consulting</h2>
              <button 
                onClick={() => setIsReviewModalOpen(false)}
                className="text-gray-400 hover:text-gray-700 bg-transparent border-none cursor-pointer p-1"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
            
            {/* Form Body */}
            <div className="p-6 md:px-8 overflow-y-auto flex-1 flex flex-col gap-8 custom-scrollbar">
              
              {/* Ratings Section */}
              <div>
                <h3 className="text-[17px] font-bold text-[#1e293b] border-b border-gray-100 pb-2 mb-5">Ratings</h3>
                
                <div className="bg-[#f8faf9] rounded-xl p-6 flex flex-col items-center justify-center mb-6">
                  <label className="block text-[14px] font-bold text-[#111] mb-2">Overall Rating <span className="text-red-500">*</span></label>
                  <div className="flex gap-2">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} className="w-8 h-8 text-[#fbbf24] cursor-pointer hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                  {[
                    "Quality of Candidate", "Knowledge", 
                    "Speed of Delivery", "Professionalism & Ethics", 
                    "Communication", "Value for Money"
                  ].map((label, idx) => (
                    <div key={idx}>
                      <label className="block text-[13px] font-bold text-[#111] mb-1.5">{label} <span className="text-red-500">*</span></label>
                      <div className="flex gap-1.5">
                        {[1,2,3,4,5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-[#fbbf24] cursor-pointer hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engagement Details Section */}
              <div>
                <h3 className="text-[17px] font-bold text-[#1e293b] border-b border-gray-100 pb-2 mb-5">Engagement Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { label: "Relationship", placeholder: "Select..." },
                    { label: "Engagement Year", placeholder: "Select..." },
                    { label: "Duration", placeholder: "Select..." }
                  ].map((field, idx) => (
                    <div key={idx}>
                      <label className="block text-[13px] font-bold text-[#111] mb-1.5">{field.label} <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <select className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#ff7a18] focus:ring-[#ff7a18] text-[14px] appearance-none bg-white text-gray-500">
                          <option value="">{field.placeholder}</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review Content Section */}
              <div>
                <h3 className="text-[17px] font-bold text-[#1e293b] border-b border-gray-100 pb-2 mb-5">Review Content</h3>
                <div className="flex flex-col gap-5">
                  <div>
                    <label className="block text-[13px] font-bold text-[#111] mb-1.5">Review Title <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Summarize your experience" className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#ff7a18] focus:ring-[#ff7a18] text-[14px]" />
                  </div>
                  
                  <div>
                    <label className="block text-[13px] font-bold text-[#15803d] mb-1.5">What went well? (Positive) <span className="text-red-500">*</span></label>
                    <textarea rows={3} placeholder="Share the positives..." className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#ff7a18] focus:ring-[#ff7a18] text-[14px] resize-y"></textarea>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-[#dc2626] mb-1.5">What could be improved? (Improvement) <span className="text-red-500">*</span></label>
                    <textarea rows={3} placeholder="Share areas for improvement..." className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#ff7a18] focus:ring-[#ff7a18] text-[14px] resize-y"></textarea>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-[#111] mb-2.5">Did they meet your expectations? <span className="text-red-500">*</span></label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="expectations" className="hidden" />
                        <span className="text-[14px] font-bold text-[#15803d] group-hover:opacity-80">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="expectations" className="hidden" />
                        <span className="text-[14px] font-bold text-[#d97706] group-hover:opacity-80">Partially</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="expectations" className="hidden" />
                        <span className="text-[14px] font-bold text-[#dc2626] group-hover:opacity-80">No</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reviewer Details Section */}
              <div>
                <h3 className="text-[17px] font-bold text-[#1e293b] border-b border-gray-100 pb-2 mb-5">Reviewer Details</h3>
                
                <div 
                  className="bg-[#f8faf9] rounded-xl p-5 mb-6 flex items-start gap-4 border-slate-200 shadow-sm cursor-pointer hover:bg-[#f1f5f3] transition-colors"
                  onClick={() => setIsAnonymous(!isAnonymous)}
                >
                  {isAnonymous ? (
                    <div className="w-[56px] h-[30px] bg-white rounded-full border-[2.5px] border-[#0ea5e9] relative shrink-0 mt-0.5 flex items-center justify-between overflow-hidden shadow-sm transition-all">
                      <div className="w-6 h-6 flex items-center justify-center relative ml-1">
                        <div className="w-4 h-4 rounded-full shadow-[-3px_2px_0_0_#111]"></div>
                      </div>
                      <div className="w-7 h-7 bg-[#0ea5e9] rounded-full translate-x-2"></div>
                    </div>
                  ) : (
                    <div className="w-[56px] h-[30px] bg-gray-300 rounded-full relative shrink-0 mt-0.5 transition-all">
                      <div className="absolute left-[3px] top-[2.5px] w-[25px] h-[25px] bg-white rounded-full shadow-sm transition-transform"></div>
                    </div>
                  )}
                  <div>
                    <h4 className="text-[14px] font-bold text-[#111] m-0 mb-1">Consider Anonymous Review?</h4>
                    <p className="text-[13px] text-gray-500 m-0 leading-snug">If selected, your personal details below will not be displayed publicly.</p>
                  </div>
                </div>

                <div className="flex flex-col gap-5">
                  <div>
                    <label className="block text-[13px] font-bold text-[#111] mb-1.5">Email Address <span className="text-red-500">*</span></label>
                    <input type="email" placeholder="your.email@example.com" className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#ff7a18] focus:ring-[#ff7a18] text-[14px]" />
                    <p className="text-[12px] text-gray-500 mt-1.5 m-0">Your email is required for review notifications. It will not be displayed publicly.</p>
                  </div>
                  
                  {!isAnonymous && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[13px] font-bold text-[#111] mb-1.5">Full Name <span className="text-red-500">*</span></label>
                          <input type="text" className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#ff7a18] focus:ring-[#ff7a18] text-[14px]" />
                        </div>
                        <div>
                          <label className="block text-[13px] font-bold text-[#111] mb-1.5">Role / Job Title <span className="text-red-500">*</span></label>
                          <input type="text" className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#ff7a18] focus:ring-[#ff7a18] text-[14px]" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[13px] font-bold text-[#111] mb-1.5">Company Name <span className="text-red-500">*</span></label>
                          <input type="text" className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#ff7a18] focus:ring-[#ff7a18] text-[14px]" />
                        </div>
                        <div>
                          <label className="block text-[13px] font-bold text-[#111] mb-1.5">LinkedIn URL <span className="text-red-500">*</span></label>
                          <input type="url" placeholder="https://linkedin.com/in/..." className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#ff7a18] focus:ring-[#ff7a18] text-[14px]" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[13px] font-bold text-[#111] mb-1.5">Profile Image URL <span className="text-red-500">*</span></label>
                        <input type="url" placeholder="https://example.com/image.jpg" className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:outline-none focus:border-[#ff7a18] focus:ring-[#ff7a18] text-[14px]" />
                      </div>
                    </>
                  )}
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-end gap-4 bg-white">
              <button onClick={() => setIsReviewModalOpen(false)} className="text-[14px] font-bold text-gray-500 hover:text-gray-800 bg-transparent border-none cursor-pointer px-3">
                Cancel
              </button>
              <button className="bg-gradient-to-br from-[#ff7a18] to-[#e66a10] text-white font-bold text-[14px] px-6 py-2.5 rounded-full transition-all border-none cursor-pointer active:scale-95">
                Submit Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
