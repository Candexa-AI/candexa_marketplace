"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Globe, BookOpen } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const AGENCIES = [
  {
    name: "One Seven Consulting",
    location: "Singapore",
    service: "Executive Search",
    verified: true,
    logoComponent: (
      <div className="w-[64px] h-[64px] rounded-[10px] bg-[#fff1e8] flex items-center justify-center mb-[14px] overflow-hidden border border-[#e8eeeb]">
        <div style={{ fontSize: '11px', fontWeight: 800, textAlign: 'center', color: '#b34f1d', lineHeight: 1.2 }}>
          ONE SEVEN<br/>CONSULTING
        </div>
      </div>
    ),
    reviews: "No reviews yet",
    desc: "One Seven Consulting is a Singapore-based boutique executive search and HR consultancy focused on energy, offering bespoke talent solutions...",
    size: "2-10 employees",
    rate: "-",
    industryTags: ["Energy & Utilities", "Executive Office"],
    industryExtra: "+3",
    serviceTags: ["Executive Search", "HR Consulting"],
    serviceExtra: null,
  },
  {
    name: "33 Talent",
    location: "Singapore",
    service: "Permanent Recruitment",
    verified: false,
    logoComponent: (
      <div className="w-[64px] h-[64px] rounded-[10px] bg-[#1a9bd4] flex items-center justify-center mb-[14px] overflow-hidden border border-[#e8eeeb]">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="white"><path d="M6 12 Q18 4 30 12 Q18 20 6 12Z"/><path d="M6 18 Q18 10 30 18 Q18 26 6 18Z"/><path d="M6 24 Q18 16 30 24 Q18 32 6 24Z"/></svg>
      </div>
    ),
    reviews: "No reviews yet",
    desc: "33 Talent provides bespoke recruitment, HR consultancy and coaching services across digital, data and communications sectors...",
    size: "11-50 employees",
    rate: "-",
    industryTags: ["Advertising & Marketing", "E-commerce"],
    industryExtra: "+1",
    serviceTags: ["Permanent Recruitment", "Executive Search"],
    serviceExtra: "+4",
  },
  {
    name: "360 Dynamics Pte Ltd",
    location: "Singapore",
    service: "Executive Search",
    verified: false,
    logoComponent: (
      <div className="w-[64px] h-[64px] rounded-[10px] bg-[#1a1a1a] flex items-center justify-center mb-[14px] overflow-hidden border border-[#e8eeeb]">
        <div style={{ fontSize: '22px', fontWeight: 800, color: 'white', letterSpacing: '-2px' }}>360</div>
      </div>
    ),
    reviews: "No reviews yet",
    desc: "360 Dynamics Pte Ltd is a Singapore-based human resources consultancy specialising in executive search, leadership assessment and talent management...",
    size: "2-10 employees",
    rate: "-",
    industryTags: ["Airlines/Aviation", "Automotive"],
    industryExtra: "+5",
    serviceTags: ["Executive Search"],
    serviceExtra: null,
  },
  {
    name: "AC Global Solutions K.K.",
    location: "Japan",
    service: "Permanent Recruitment",
    verified: false,
    logoComponent: (
      <div className="w-[64px] h-[64px] rounded-[10px] bg-[#fff1e8] flex items-center justify-center mb-[14px] overflow-hidden border border-[#e8eeeb]">
        <div className="text-[22px] font-extrabold text-green-800 tracking-[-1px]">AC</div>
      </div>
    ),
    reviews: "No reviews yet",
    desc: "AC Global Solutions K.K. is a Tokyo-based boutique recruitment consultancy placing mid-to-senior bilingual professionals across key industries...",
    size: "-",
    rate: "-",
    industryTags: ["Biotechnology", "Financial Services"],
    industryExtra: "+2",
    serviceTags: ["Permanent Recruitment", "Executive Search"],
    serviceExtra: null,
  },
  {
    name: "Access People",
    location: "Singapore",
    service: "Executive Search",
    verified: true,
    logoComponent: (
      <div className="w-[64px] h-[64px] rounded-[10px] bg-[#fff1e8] flex items-center justify-center mb-[14px] overflow-hidden border border-[#e8eeeb]">
        <div className="text-[22px] font-extrabold text-green-800 tracking-[-1px]">AP</div>
      </div>
    ),
    reviews: "No reviews yet",
    desc: "Access People is an executive search and recruitment firm founded in 2006 with offices in Beijing, Shanghai and Singapore serving multinational clients...",
    size: "11-50 employees",
    rate: "-",
    industryTags: ["Architecture & Design", "Automotive"],
    industryExtra: "+9",
    serviceTags: ["Executive Search", "Retained Search"],
    serviceExtra: "+1",
  },
  {
    name: "ACi HR Solutions",
    location: "Singapore",
    service: "Permanent Recruitment",
    verified: false,
    logoComponent: (
      <div className="w-[64px] h-[64px] rounded-[10px] bg-[#fff1e8] flex items-center justify-center mb-[14px] overflow-hidden border border-[#e8eeeb]">
        <div className="text-[22px] font-extrabold text-green-800 tracking-[-1px]">ACI</div>
      </div>
    ),
    reviews: "No reviews yet",
    desc: "ACi HR Solutions is a Singapore-based specialist recruitment, executive search and professional training firm focused on hospitality and travel...",
    size: "11-50 employees",
    rate: "-",
    industryTags: ["Hospitality", "Leisure, Travel & Tourism"],
    industryExtra: "+1",
    serviceTags: ["Permanent Recruitment", "Executive Search"],
    serviceExtra: "+4",
  }
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");

  const filteredAgencies = AGENCIES.filter((agency) => {
    const nameMatch = agency.name.toLowerCase().includes(search.toLowerCase());
    const locationMatch = location === "" || agency.location.toLowerCase().includes(location.toLowerCase());
    const serviceMatch = service === "" || agency.service.toLowerCase().includes(service.toLowerCase());
    return nameMatch && locationMatch && serviceMatch;
  });

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-[#fffcf9] pt-24 md:pt-32 px-4 md:px-10 pb-16 md:pb-24 text-center relative overflow-hidden">
        {/* Floating Elements */}
        <div className="hidden lg:block absolute top-1/4 left-[10%] animate-bounce duration-[3000ms]">
          <div className="w-12 h-12 bg-white rounded-xl shadow-md border border-orange-100 flex items-center justify-center text-[#ff7a18]">
            <BookOpen className="w-6 h-6" />
          </div>
        </div>
        <div className="hidden lg:block absolute top-1/3 right-[12%] animate-pulse duration-[4000ms]">
          <div className="w-10 h-10 bg-white rounded-full shadow-md border border-blue-50 flex items-center justify-center text-blue-400">
            <Globe className="w-5 h-5" />
          </div>
        </div>
        <div className="hidden lg:block absolute bottom-1/4 left-[15%] opacity-20">
          <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="text-[#ff7a18]">
            <path d="M5 35C15 25 25 35 35 15C45 -5 55 15 55 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
          </svg>
        </div>

        <div className="max-w-[900px] mx-auto relative z-10">
          <h1 className="font-serif text-[clamp(32px,6vw,64px)] font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight animate-fade-up">
            Search Trusted Recruitment & HR <span className="relative inline-block">
              Agencies
              <MapPin className="absolute -top-4 -right-2 w-6 h-6 text-[#ff7a18] animate-bounce" />
            </span> Worldwide
          </h1>
          <p className="text-[16px] md:text-[18px] text-slate-600 max-w-[580px] mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.15s' }}>
            Find the right hiring, staffing, and HR partners — faster, smarter, and globally.
          </p>
        </div>
      </section>

      {/* SEARCH & FILTER */}
      <section className="px-4 md:px-10 max-w-[1220px] mx-auto -mt-12 md:-mt-16 relative z-20">
        <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-[10px] text-[16px] md:text-[18px] font-bold text-slate-900 mb-[22px]">
            <svg className="text-[#ff7a18]" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
            Search & Filter
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] gap-5 items-end">
            <div>
              <label className="block text-[13px] font-medium text-slate-600 mb-2">Agency Name</label>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                <input 
                  type="text" 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search agencies..." 
                  className="w-full h-12 border border-slate-200 rounded-lg pl-9 pr-3.5 font-sans text-[14px] text-slate-900 bg-white transition-colors focus:outline-none focus:border-[#ff7a18]" 
                />
              </div>
            </div>
            
            <div>
              <label className="block text-[13px] font-medium text-slate-600 mb-2">Location</label>
              <div className="relative">
                <select 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full h-12 border border-slate-200 rounded-lg px-3.5 font-sans text-[14px] text-slate-900 bg-white transition-colors focus:outline-none focus:border-[#ff7a18] appearance-none"
                >
                  <option value="">All Locations</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Japan">Japan</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="Australia">Australia</option>
                </select>
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[12px] text-slate-400 pointer-events-none">▼</span>
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-medium text-slate-600 mb-2">Service Type</label>
              <div className="relative">
                <select 
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full h-12 border border-slate-200 rounded-lg px-3.5 font-sans text-[14px] text-slate-900 bg-white transition-colors focus:outline-none focus:border-[#ff7a18] appearance-none"
                >
                  <option value="">All Services</option>
                  <option value="Executive Search">Executive Search</option>
                  <option value="Permanent Recruitment">Permanent Recruitment</option>
                  <option value="HR Consulting">HR Consulting</option>
                  <option value="Retained Search">Retained Search</option>
                </select>
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[12px] text-slate-400 pointer-events-none">▼</span>
              </div>
            </div>

            <button onClick={() => alert('Advanced filters coming soon!')} className="h-12 px-6 border border-slate-900 rounded-lg bg-white text-slate-900 font-sans text-[14px] font-bold cursor-pointer flex items-center justify-center gap-2 transition-colors hover:bg-slate-900 hover:text-white w-full lg:w-auto">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="10" y1="18" x2="14" y2="18"/></svg>
              More Filters
            </button>
          </div>
        </div>

        <p className="text-[14px] md:text-[15px] text-slate-600 mt-6 mb-4 px-1">
          Showing <strong className="font-bold text-slate-900">1 - {filteredAgencies.length}</strong> of <strong className="font-bold text-slate-900">{AGENCIES.length} results</strong>
        </p>
      </section>

      {/* AGENCY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1220px] mx-auto px-5 md:px-10 pb-10">
        {filteredAgencies.map((agency, i) => (
          <div key={i} className="bg-white border-slate-200 shadow-sm rounded-2xl p-6 relative transition-all duration-250 cursor-pointer hover:shadow-lg hover:-translate-y-1">
            {agency.verified ? (
              <span className="absolute top-[18px] right-[18px] text-[12px] font-semibold px-3 py-1 rounded-[20px] flex items-center gap-1.5 bg-[#dcfce7] text-verified border border-[#bbf7d0]">
                ✔ Verified
              </span>
            ) : (
              <span className="absolute top-[18px] right-[18px] text-[12px] font-semibold px-3 py-1 rounded-[20px] flex items-center gap-1.5 bg-[#fee2e2] text-[#dc2626] border border-[#fecaca]">
                ✕ Unverified
              </span>
            )}

            {agency.logoComponent}

            <div className="text-[17px] font-bold text-text-dark mb-1">{agency.name}</div>
            <div className="text-[13px] text-text-light mb-3">{agency.reviews}</div>
            <div className="text-[13.5px] text-[#4a6358] leading-[1.55] mb-[18px] line-clamp-3">
              {agency.desc}
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <div className="flex flex-col gap-[3px]">
                <span className="text-[12px] font-semibold text-[#ff7a18] uppercase tracking-[0.3px]">Company Size</span>
                <span className="text-[13.5px] text-text-dark flex items-center gap-[5px]">
                  <svg className="text-text-light" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                  {agency.size}
                </span>
              </div>
              <div className="flex flex-col gap-[3px]">
                <span className="text-[12px] font-semibold text-[#ff7a18] uppercase tracking-[0.3px]">Location</span>
                <span className="text-[13.5px] text-text-dark flex items-center gap-[5px]">
                  <svg className="text-text-light" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {agency.location}
                </span>
              </div>
              <div className="flex flex-col gap-[3px]">
                <span className="text-[12px] font-semibold text-[#ff7a18] uppercase tracking-[0.3px]">Hourly Rate</span>
                <span className="text-[13.5px] text-text-dark flex items-center gap-[5px]">-</span>
              </div>
              <div className="flex flex-col gap-[3px]">
                <span className="text-[12px] font-semibold text-[#ff7a18] uppercase tracking-[0.3px]">Industry</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {agency.industryTags.map((tag, j) => (
                    <span key={j} className="text-[12px] font-medium px-2.5 py-[3px] rounded-[20px] bg-slate-100 text-slate-600 border-slate-200">{tag}</span>
                  ))}
                  {agency.industryExtra && (
                    <span className="text-[11px] font-bold px-[9px] py-[3px] rounded-[20px] bg-slate-900 text-white">{agency.industryExtra}</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-[3px]">
                <span className="text-[12px] font-semibold text-[#ff7a18] uppercase tracking-[0.3px]">Services</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {agency.serviceTags.map((tag, j) => (
                    <span key={j} className="text-[12px] font-medium px-2.5 py-[3px] rounded-[20px] bg-[#dbeafe] text-[#1d4ed8] border border-[#bfdbfe]">{tag}</span>
                  ))}
                  {agency.serviceExtra && (
                    <span className="text-[11px] font-bold px-[9px] py-[3px] rounded-[20px] bg-slate-900 text-white">{agency.serviceExtra}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-2.5 my-4">
              <button className="w-9 h-9 rounded-lg border-[1.5px] border-slate-200 bg-[#f5f9f6] flex items-center justify-center cursor-pointer transition-colors text-[#ff7a18] hover:bg-green-50 hover:border-green-400" title="Hours">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </button>
              <button className="w-9 h-9 rounded-lg border-[1.5px] border-slate-200 bg-[#f5f9f6] flex items-center justify-center cursor-pointer transition-colors text-[#ff7a18] hover:bg-green-50 hover:border-green-400" title="Website">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </button>
              <button className="w-9 h-9 rounded-lg border-[1.5px] border-slate-200 bg-[#f5f9f6] flex items-center justify-center cursor-pointer transition-colors text-[#ff7a18] hover:bg-green-50 hover:border-green-400" title="Jobs">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
              </button>
            </div>

            <Link 
              href={`/agency/${agency.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="block text-center w-full p-[13px] bg-gradient-to-br from-[#ff7a18] to-[#e66a10] text-white border-none rounded-[10px] font-sans text-[15px] font-semibold cursor-pointer transition-all hover:-translate-y-[1px] no-underline"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-center gap-2 pt-10 pb-12">
        <button className="w-10 h-10 rounded-full border-[1.5px] border-transparent bg-transparent text-text-light font-sans text-[18px] flex items-center justify-center cursor-pointer">‹</button>
        <button className="w-10 h-10 rounded-full border-[1.5px] border-green-400 bg-green-400 text-white font-sans text-[14px] font-bold flex items-center justify-center cursor-pointer">1</button>
        <button className="w-10 h-10 rounded-full border-[1.5px] border-slate-200 bg-white text-text-dark font-sans text-[14px] font-medium flex items-center justify-center cursor-pointer hover:border-green-500 hover:text-[#ff7a18] transition-colors">2</button>
        <button className="w-10 h-10 rounded-full border-[1.5px] border-slate-200 bg-white text-text-dark font-sans text-[14px] font-medium flex items-center justify-center cursor-pointer hover:border-green-500 hover:text-[#ff7a18] transition-colors">3</button>
        <button className="w-10 h-10 rounded-full border-[1.5px] border-slate-200 bg-white text-text-dark font-sans text-[14px] font-medium flex items-center justify-center cursor-pointer hover:border-green-500 hover:text-[#ff7a18] transition-colors">4</button>
        <button className="w-10 h-10 rounded-full border-[1.5px] border-slate-200 bg-white text-text-dark font-sans text-[14px] font-medium flex items-center justify-center cursor-pointer hover:border-green-500 hover:text-[#ff7a18] transition-colors">5</button>
        <button className="w-10 h-10 rounded-full border-[1.5px] border-transparent bg-transparent text-text-light font-sans text-[18px] flex items-center justify-center cursor-pointer">›</button>
      </div>

      {/* WHY SECTION */}
      <section className="bg-slate-900 py-16 md:py-24 px-4 md:px-10 text-center">
        <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[44px] text-white font-normal leading-[1.2] mb-4 px-2">
          Why Use Candexa AI to Find<br className="hidden sm:block" />Recruitment & HR Agencies?
        </h2>
        <p className="text-[15px] md:text-[16px] text-white/70 max-w-[600px] mx-auto leading-[1.65] mb-12 md:mb-16 px-4">
          Unlike generic directories, Candexa AI is built as a dedicated partner-discovery platform for serious HR teams and agencies.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left transition-colors hover:bg-white/10">
            <div className="w-[52px] h-[52px] rounded-[14px] bg-white/10 flex items-center justify-center mb-5 text-white text-[22px]">🌐</div>
            <h3 className="text-[16.5px] font-bold text-white mb-2.5">Global Reach</h3>
            <p className="text-[14px] text-white/65 leading-[1.6]">Access recruitment and HR agencies operating across countries and regions worldwide.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left transition-colors hover:bg-white/10">
            <div className="w-[52px] h-[52px] rounded-[14px] bg-white/10 flex items-center justify-center mb-5 text-white text-[22px]">❤️</div>
            <h3 className="text-[16.5px] font-bold text-white mb-2.5">Wide Range of Services</h3>
            <p className="text-[14px] text-white/65 leading-[1.6]">From permanent recruitment and executive search to HR consulting and workforce outsourcing.</p>
          </div>
          <div className="bg-white/[0.13] border border-white/[0.22] rounded-2xl p-8 text-left transition-colors">
            <div className="w-[52px] h-[52px] rounded-[14px] bg-white/10 flex items-center justify-center mb-5 text-white text-[22px]">📋</div>
            <h3 className="text-[16.5px] font-bold text-white mb-2.5">Structured Profiles</h3>
            <p className="text-[14px] text-white/65 leading-[1.6]">Clear service offerings, expertise areas, locations, and hiring models — all in one place.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left transition-colors hover:bg-white/10">
            <div className="w-[52px] h-[52px] rounded-[14px] bg-white/10 flex items-center justify-center mb-5 text-white text-[22px]">👥</div>
            <h3 className="text-[16.5px] font-bold text-white mb-2.5">Designed for Collaboration</h3>
            <p className="text-[14px] text-white/65 leading-[1.6]">Find partners who support your hiring goals, scale operations, or help enter new markets.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left transition-colors hover:bg-white/10">
            <div className="w-[52px] h-[52px] rounded-[14px] bg-white/10 flex items-center justify-center mb-5 text-white text-[22px]">🔗</div>
            <h3 className="text-[16.5px] font-bold text-white mb-2.5">Growing, Curated Network</h3>
            <p className="text-[14px] text-white/65 leading-[1.6]">We continuously expand and improve the quality of agency listings on our platform.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-left shadow-lg">
            <div className="w-[52px] h-[52px] rounded-[14px] bg-[#ff7a18] flex items-center justify-center mb-5 text-white text-[22px]">✓</div>
            <h3 className="text-[16.5px] font-bold text-slate-900 mb-2.5">Free Listing Available</h3>
            <p className="text-[14px] text-slate-600 leading-[1.6]">List your agency on Candexa AI for free and reach thousands of HR professionals actively searching.</p>
            <button className="inline-flex items-center gap-2 mt-5 bg-[#ff7a18] text-white font-bold text-[13px] py-2.5 px-5 rounded-lg cursor-pointer border-none transition-transform active:scale-95">
              ★ Limited Time Offer
            </button>
          </div>
        </div>
      </section>

      {/* WHO SHOULD USE */}
      <section className="py-16 md:py-24 px-4 md:px-10 text-center">
        <h2 className="font-serif text-[26px] sm:text-[34px] md:text-[42px] text-slate-900 font-normal mb-4 px-2">
          Who Should Use This Agency Marketplace?
        </h2>
        <p className="text-[15px] md:text-[16px] text-slate-600 max-w-[560px] mx-auto mb-12 md:mb-16 px-4">
          Designed for professionals and organizations seeking trusted recruitment and HR partners
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
          {[
            { icon: "⭐", title: "HR Managers & CHROs", desc: "Strategic leaders seeking reliable recruitment partners" },
            { icon: "👥", title: "Talent Acquisition Teams", desc: "Teams looking to scale hiring with trusted agency partners" },
            { icon: "🚀", title: "Startup Founders & CEOs", desc: "Fast-growing companies needing expert recruitment support", primary: true },
            { icon: "🏢", title: "Enterprise Hiring Leaders", desc: "Large organizations managing complex hiring needs globally" },
            { icon: "🌐", title: "Companies Expanding Globally", desc: "Organizations entering new markets and regions" },
            { icon: "💼", title: "Businesses Outsourcing HR", desc: "Companies seeking to outsource their hiring processes" },
          ].map((item, i) => (
            <div key={i} className={`border border-slate-200 rounded-2xl p-8 text-left transition-all hover:border-[#ff7a18] hover:shadow-md ${item.primary ? 'border-[#ff7a18] border-2' : ''}`}>
              <div className="w-[52px] h-[52px] rounded-[14px] bg-slate-900 flex items-center justify-center mb-5 text-white text-[22px]">{item.icon}</div>
              <h3 className="text-[16px] font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-[13.5px] text-slate-600 leading-[1.55]">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="max-w-[800px] mx-auto mt-8 bg-orange-50 border border-orange-100 rounded-xl p-6 text-[14px] md:text-[15px] text-slate-600 text-center">
          If you&apos;re searching for a recruitment agency, staffing partner, or HR outsourcing firm, <strong className="text-slate-900 font-bold">this page is built for you.</strong>
        </div>
      </section>

      {/* AGENCY CTA */}
      <section className="bg-slate-900 py-16 md:py-24 px-4 md:px-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(255,122,24,0.08) 0%, transparent 70%)' }}></div>
        <h2 className="font-serif text-[26px] sm:text-[34px] md:text-[46px] text-white font-normal mb-5 relative z-10 px-2 leading-[1.2]">
          Are You a Recruitment or Staffing Agency Owner?
        </h2>
        <p className="text-[15px] md:text-[16px] text-white/70 max-w-[680px] mx-auto leading-[1.65] mb-12 relative z-10 px-4">
          Get discovered by HR teams and businesses actively looking for trusted recruitment partners across the globe. List your agency on Candexa AI and showcase your services to a global HR community.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[760px] mx-auto mb-12 relative z-10 px-4">
          {[
            "Get visibility among global HR leaders",
            "Highlight your services and expertise",
            "Receive inbound interest from companies",
            "Build credibility with a verified profile"
          ].map((text, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 text-left text-[14px] text-white/90 font-medium">
              <span className="w-6 h-6 rounded-full bg-[#ff7a18]/20 flex items-center justify-center shrink-0 text-[#ff7a18] text-[12px]">✓</span>
              {text}
            </div>
          ))}
        </div>
        <Link 
          href="/agency/new"
          className="inline-block bg-gradient-to-br from-[#ff7a18] to-[#e66a10] text-white font-bold text-[16px] py-4 px-10 rounded-xl cursor-pointer transition-all active:scale-95 mb-5 relative z-10 no-underline"
        >
          Register Your Agency
        </Link>
        <div className="flex items-center justify-center gap-2 text-[13px] text-white/60 relative z-10">
          <span className="bg-[#ff7a18] rounded-md py-[2px] px-2 text-[10px] font-bold text-white uppercase tracking-wider">Promo</span>
          Free listing available for a limited time
        </div>
      </section>

      <Footer />
    </>
  );
}
