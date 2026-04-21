"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, Sun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Products", hasDropdown: true },
    { label: "Industries", hasDropdown: true },
    { label: "Partners", hasDropdown: true },
    { label: "Resources", hasDropdown: true },
    { label: "Audit Service", href: "/audit-service" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-gray-100 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline group">
          <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[#ff7a18] transition-transform group-hover:rotate-45">
            <Sun className="w-5 h-5 fill-current" />
          </div>
          <span className="text-[20px] font-bold text-gray-900 tracking-tight">Candexa AI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.label} className="relative group">
                <Link 
                  href={link.href || "#"} 
                  className="flex items-center gap-1 text-[14.5px] font-medium text-gray-600 hover:text-gray-900 transition-colors no-underline py-2"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600 transition-colors" />}
                </Link>
                {/* Minimal Dropdown Placeholder */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                    <div className="bg-white border border-gray-100 shadow-xl rounded-xl p-2 w-48">
                      <div className="px-3 py-2 text-[13px] text-gray-400 italic">Coming soon...</div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="hidden sm:block bg-gray-900 text-white px-6 py-2.5 rounded-lg text-[14.5px] font-bold hover:bg-gray-800 transition-all active:scale-95 no-underline"
          >
            Sign In
          </Link>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href || "#"}
                onClick={() => setIsOpen(false)}
                className="text-[18px] font-bold text-gray-900 no-underline flex items-center justify-between"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-5 h-5 text-gray-400" />}
              </Link>
            ))}
            <Link 
              href="/login"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-4 rounded-xl bg-gray-900 text-white font-bold no-underline mt-4"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
