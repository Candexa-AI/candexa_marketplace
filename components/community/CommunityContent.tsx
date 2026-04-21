"use client";

import Link from "next/link";
import ListingsGrid from "./ListingsGrid";
import { PublicListing } from "@/lib/types";

interface Props {
  listings: PublicListing[];
}

export default function CommunityContent({ listings }: Props) {
  return (
    <>
      <header className="bg-surface-container-low pt-16 pb-24 px-4 md:px-8 text-center border-b border-outline-variant/5 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full opacity-10 pointer-events-none">
           <span className="material-symbols-outlined text-[400px] text-primary absolute -top-40 -left-20 rotate-12">hub</span>
           <span className="material-symbols-outlined text-[300px] text-secondary absolute -bottom-20 -right-20 -rotate-12">diversity_3</span>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-secondary/10 rounded-2xl text-secondary animate-bounce">
              <span className="material-symbols-outlined text-3xl">domain_verification</span>
            </div>
          </div>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 leading-[1.1] tracking-tight">
            Search Trusted Recruitment & HR Agencies Worldwide
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-10 font-medium">
            A vetted ecosystem of high-performing talent partners, curated for professional gravitas and exceptional results.
          </p>

          <div className="bg-white p-3 rounded-2xl shadow-[0px_32px_64px_-12px_rgba(1,45,29,0.14)] flex flex-col md:flex-row items-center gap-2 max-w-5xl mx-auto border border-outline-variant/20 group">
            <div className="flex-1 flex items-center px-4 gap-3 w-full border-r border-outline-variant/10 focus-within:bg-surface-container-low transition-colors rounded-xl">
              <span className="material-symbols-outlined text-primary/40">search</span>
              <input type="text" placeholder="Agency Name" className="w-full bg-transparent border-none focus:ring-0 text-on-surface font-semibold py-4 placeholder:text-primary/30" />
            </div>
            <div className="flex-1 flex items-center px-4 gap-3 w-full border-r border-outline-variant/10 focus-within:bg-surface-container-low transition-colors rounded-xl">
              <span className="material-symbols-outlined text-primary/40">location_on</span>
              <input type="text" placeholder="Location" className="w-full bg-transparent border-none focus:ring-0 text-on-surface font-semibold py-4 placeholder:text-primary/30" />
            </div>
            <div className="flex-1 flex items-center px-4 gap-3 w-full focus-within:bg-surface-container-low transition-colors rounded-xl">
              <span className="material-symbols-outlined text-primary/40">work</span>
              <select className="w-full bg-transparent border-none focus:ring-0 text-on-surface font-semibold py-4 appearance-none cursor-pointer">
                <option>Service Type</option>
                <option>Executive Search</option>
                <option>Technical Staffing</option>
              </select>
            </div>
            <button className="w-full md:w-auto bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-secondary transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95">
              Search
              <span className="material-symbols-outlined text-xl">search</span>
            </button>
          </div>
        </div>
      </header>

      <div className="bg-surface">
        <ListingsGrid listings={listings} />
      </div>

      <section className="editorial-gradient py-24 md:py-32 px-4 md:px-8 text-center text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold mb-8 tracking-tight">Are You a Recruitment or Staffing Agency Owner?</h2>
          <p className="text-on-primary-container text-xl mb-12 max-w-2xl mx-auto font-medium opacity-80">
            Put your agency in front of decision-makers worldwide. Join our curated network today.
          </p>
          <Link 
            href="/community/submit" 
            className="bg-white text-primary font-extrabold px-16 py-6 rounded-3xl text-xl hover:bg-surface-container transition-all shadow-2xl flex items-center justify-center gap-4 mx-auto group active:scale-95 inline-flex"
          >
            Register Your Agency
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  );
}