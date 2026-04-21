"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navLinks = [
    { label: "HR Brand Card", href: "#" },
    { label: "Certifications", href: "#" },
    { label: "Gigs", href: "#" },
    { label: "Events", href: "#" },
  ];

  const marketplaceItems = [
    { label: "Agency Marketplace", href: "/agency-marketplace", icon: <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-12h1m-1 4h1m-1 4h1m5-12h1m-1 4h1m-1 4h1"/> },
    { label: "Solution Marketplace", href: "#", icon: <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/> },
  ];

  const resourceItems = [
    { label: "HR Resources", icon: <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/> },
    { label: "Blogs", icon: <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/> },
    { label: "Job Descriptions", icon: <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/> },
    { label: "HR Glossary", icon: <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/> },
    { label: "HR Letter Templates", icon: <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/> },
    { label: "HR Policy Templates", icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/> },
    { label: "HR Checklists", icon: <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/> },
    { label: "HR Tools", icon: <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /> },
  ];

  return (
    <nav className="h-16 md:h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-10 fixed top-0 left-0 right-0 z-[100] shadow-sm font-sans">
      <div className="flex items-center gap-4 md:gap-10">
        <Link href="/" className="no-underline flex items-center">
          <Image 
            src="/candexa_logo.PNG" 
            alt="Candexa AI" 
            width={152}
            height={40}
            className="h-8 md:h-10 w-auto object-contain transition-transform hover:scale-105"
            priority
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex flex-1 justify-center">
        <ul className="list-none flex items-center gap-5 xl:gap-7 p-0 m-0">
          {navLinks.slice(0, 3).map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="text-[14px] xl:text-[14.5px] font-bold text-[#ff7a18] hover:text-[#e66a10] transition-colors no-underline">
                {link.label}
              </Link>
            </li>
          ))}
          
          {/* Marketplace Dropdown */}
          <li className="relative group py-7">
            <button className="text-[14px] xl:text-[14.5px] font-bold text-[#ff7a18] hover:text-[#e66a10] transition-colors flex items-center gap-1 bg-transparent border-none p-0 cursor-pointer">
              Marketplace <ChevronDown className="w-3 h-3 opacity-60" />
            </button>
            <div className="absolute top-[100%] left-[-20px] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="bg-white border border-slate-200 rounded-xl shadow-2xl p-2 w-[240px]">
                {marketplaceItems.map((item) => (
                  <Link key={item.label} href={item.href} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 text-[14px] font-medium text-gray-700 no-underline transition-colors group/item">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#ff7a18] flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">{item.icon}</svg>
                    </div>
                    <span className="group-hover/item:text-[#ff7a18]">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li>
            <Link href="#" className="text-[14px] xl:text-[14.5px] font-bold text-[#ff7a18] hover:text-[#e66a10] transition-colors no-underline">
              Events
            </Link>
          </li>

          {/* Resources Dropdown */}
          <li className="relative group py-7">
            <button className="text-[14px] xl:text-[14.5px] font-bold text-[#ff7a18] hover:text-[#e66a10] transition-colors flex items-center gap-1 bg-transparent border-none p-0 cursor-pointer">
              Resources <ChevronDown className="w-3 h-3 opacity-60" />
            </button>
            <div className="absolute top-[100%] left-[-40px] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="bg-white border border-slate-200 rounded-xl shadow-2xl p-2 w-[260px] max-h-[400px] overflow-y-auto custom-scrollbar">
                {resourceItems.map((item) => (
                  <Link key={item.label} href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-slate-50 text-[13.5px] font-medium text-gray-700 no-underline transition-colors group/item">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#ff7a18] flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">{item.icon}</svg>
                    </div>
                    <span className="group-hover/item:text-[#ff7a18]">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <Link href="#" className="hidden sm:block text-[14px] md:text-[15px] font-bold text-[#ff7a18] no-underline hover:text-[#e66a10] transition-colors">
          Login
        </Link>
        <button className="bg-gradient-to-br from-[#ff7a18] to-[#e66a10] text-white px-4 md:px-7 py-2 md:py-3 rounded-[10px] md:rounded-[12px] font-bold text-[13px] md:text-[15px] transition-all active:scale-95 whitespace-nowrap">
          Register Now
        </button>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#ff7a18] p-1 bg-transparent border-none cursor-pointer"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 md:top-20 bg-white z-[90] overflow-y-auto px-5 py-8 animate-fade-in flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="text-[18px] font-bold text-slate-800 no-underline py-2 border-b border-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Marketplace Mobile */}
            <div className="flex flex-col">
              <button 
                onClick={() => toggleDropdown('marketplace')}
                className="text-[18px] font-bold text-slate-800 flex items-center justify-between py-2 border-b border-slate-50 bg-transparent border-none w-full text-left"
              >
                Marketplace <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'marketplace' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'marketplace' && (
                <div className="flex flex-col gap-2 mt-3 pl-4">
                  {marketplaceItems.map((item) => (
                    <Link 
                      key={item.label} 
                      href={item.href} 
                      className="text-[15px] font-medium text-slate-600 no-underline py-2 flex items-center gap-3"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#ff7a18] flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">{item.icon}</svg>
                      </div>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Mobile */}
            <div className="flex flex-col">
              <button 
                onClick={() => toggleDropdown('resources')}
                className="text-[18px] font-bold text-slate-800 flex items-center justify-between py-2 border-b border-slate-50 bg-transparent border-none w-full text-left"
              >
                Resources <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'resources' && (
                <div className="flex flex-col gap-2 mt-3 pl-4">
                  {resourceItems.map((item) => (
                    <Link 
                      key={item.label} 
                      href="#" 
                      className="text-[15px] font-medium text-slate-600 no-underline py-2 flex items-center gap-3"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#ff7a18] flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">{item.icon}</svg>
                      </div>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-4 pt-10">
            <Link 
              href="#" 
              className="w-full text-center py-4 rounded-xl border border-slate-200 text-slate-800 font-bold no-underline"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <button className="w-full py-4 rounded-xl bg-gradient-to-br from-[#ff7a18] to-[#e66a10] text-white font-bold border-none">
              Register Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
