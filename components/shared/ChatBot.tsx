"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-[1000] font-sans">
      {/* Welcome Message (Floating) */}
      {showWelcome && !isOpen && (
        <div className="absolute bottom-20 right-0 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="relative">
            <button 
              onClick={() => setShowWelcome(false)}
              className="absolute -top-2 -right-2 w-5 h-5 bg-white border border-gray-100 rounded-full flex items-center justify-center text-[10px] text-gray-400 hover:text-gray-600 z-10"
            >
              ✕
            </button>
            <div className="flex flex-col items-center">
              <div className="relative mb-2">
                 <svg className="w-[140px] h-[40px]" viewBox="0 0 140 40">
                    <path id="curve" d="M10,35 Q70,5 130,35" fill="transparent" />
                    <text className="text-[14px] font-bold fill-[#ff7a18]">
                       <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle">
                          We Are Here!
                       </textPath>
                    </text>
                 </svg>
                 <span className="absolute -bottom-2 -left-4 text-[24px] animate-bounce">👋</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Launcher Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="relative w-16 h-16 rounded-full bg-[#ff7a18] flex items-center justify-center hover:scale-105 transition-all group active:scale-95"
        >
          <div className="w-10 h-10 rounded-full border-4 border-white flex items-center justify-center relative">
             <div className="w-4 h-2 bg-white rounded-full mt-1"></div>
          </div>
          {/* Notification Badge */}
          <div className="absolute top-0 right-0 w-6 h-6 bg-[#be1e2d] border-2 border-white rounded-full flex items-center justify-center text-white text-[11px] font-bold">
            1
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[360px] h-[580px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden animate-in zoom-in-95 fade-in duration-300 origin-bottom-right">
          {/* Header */}
          <div className="bg-[#ff7a18] px-4 py-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              <h3 className="text-[16px] font-bold">Customer Support</h3>
            </div>
            <button className="hover:bg-white/10 p-1 rounded-lg transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 bg-[#fcfdfc] space-y-6">
            <div className="text-center">
               <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">Customer Support</span>
            </div>

            {/* Support Message */}
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0 overflow-hidden border border-gray-100">
                <Image src="https://i.pravatar.cc/150?u=support" alt="Support" width={40} height={40} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-2">
                <div className="bg-[#ff7a18] text-white px-4 py-2.5 rounded-2xl rounded-tl-none text-[14px] font-medium shadow-sm flex items-center gap-2">
                   <span>👋</span> Hi! How can we help?
                </div>
                <div className="bg-[#ff7a18] text-white px-4 py-2.5 rounded-2xl rounded-tl-none text-[14px] font-medium shadow-sm flex items-center gap-2">
                   <span>👋</span> Hi! How can we help?
                </div>
              </div>
            </div>

            {/* Quick Replies */}
            <div className="flex flex-col items-end gap-2 pt-4">
              <button className="px-5 py-2.5 border-2 border-[#ff7a18] text-[#ff7a18] rounded-xl text-[13.5px] font-bold hover:bg-[#e66a10] hover:text-white transition-all">
                I have a question
              </button>
              <button className="px-5 py-2.5 border-2 border-[#ff7a18] text-[#ff7a18] rounded-xl text-[13.5px] font-bold hover:bg-[#e66a10] hover:text-white transition-all">
                Tell me more
              </button>
            </div>
          </div>

          {/* Footer Status */}
          <div className="p-4 border-t border-gray-50 flex flex-col items-center gap-3">
            <div className="w-full bg-white border-2 border-red-100 rounded-xl py-3 flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-red-600"></div>
              <span className="text-red-600 font-bold text-[14px]">Reconnecting</span>
            </div>
            
            <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
              <Image src="https://www.google.com/s2/favicons?domain=tawk.to&sz=16" alt="tawk.to" width={14} height={14} className="w-3.5 h-3.5 grayscale" />
              Powered by <span className="font-bold">tawk.to</span>
            </div>
          </div>

          {/* Bottom Launcher (Down Arrow) */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-[#ff7a18] flex items-center justify-center text-white hover:scale-105 transition-transform"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
