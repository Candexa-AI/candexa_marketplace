"use client";

import Link from "next/link";
import { PublicListing } from "@/lib/types";

interface Props {
  listing: PublicListing;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ListingDetailContent({ listing }: Props) {
  return (
    <main className="bg-surface min-h-screen">
      {/* Premium Profile Header */}
      <div className="bg-surface-container-low pt-24 pb-48 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full opacity-5 pointer-events-none">
           <span className="material-symbols-outlined text-[400px] text-primary absolute -top-40 -left-20 rotate-12">badge</span>
           <span className="material-symbols-outlined text-[300px] text-secondary absolute -bottom-20 -right-20 -rotate-12">verified</span>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/community" className="inline-flex items-center gap-2 text-primary/40 hover:text-primary font-bold text-sm mb-12 transition-all group">
            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Back to Marketplace
          </Link>
          
          <div className="flex flex-col md:flex-row items-center md:items-end gap-10">
            <div className="w-40 h-40 rounded-[40px] bg-white shadow-2xl flex items-center justify-center p-8 border border-outline-variant/10 relative">
               <span className="text-5xl font-extrabold text-primary">{getInitials(listing.agencyName || listing.name)}</span>
               {listing.isVerified && (
                 <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-lg border-4 border-white">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                 </div>
               )}
            </div>
            
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-4">
                 <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-primary tracking-tight">{listing.agencyName}</h1>
                 {listing.isVerified ? (
                   <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-widest border border-secondary/20">
                     Verified Agency
                   </span>
                 ) : (
                   <span className="bg-primary/5 text-primary/60 px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-widest border border-primary/10">
                     Featured Community Member
                   </span>
                 )}
              </div>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-on-surface-variant font-medium">
                 <div className="flex items-center gap-2">
                   <span className="material-symbols-outlined text-primary/40">person</span>
                   {listing.name}
                 </div>
                 <div className="flex items-center gap-2">
                   <span className="material-symbols-outlined text-primary/40">category</span>
                   {listing.niche || "General Recruitment"}
                 </div>
                 <div className="flex items-center gap-2">
                   <span className="material-symbols-outlined text-primary/40">event</span>
                   Joined {formatDate(listing.createdAt)}
                 </div>
              </div>
            </div>

            <div className="flex gap-4">
              {listing.website && (
                <a
                  href={listing.website.startsWith("http") ? listing.website : `https://${listing.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white font-extrabold px-10 py-5 rounded-2xl hover:bg-secondary transition-all shadow-xl shadow-primary/20 flex items-center gap-3 active:scale-95"
                >
                  Visit Website
                  <span className="material-symbols-outlined">open_in_new</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-24 pb-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <div className="bg-white rounded-[40px] p-10 md:p-12 shadow-[0px_32px_64px_-12px_rgba(1,45,29,0.08)] border border-outline-variant/10">
              <h2 className="font-headline text-2xl font-extrabold text-primary mb-8 flex items-center gap-4">
                 <span className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                   <span className="material-symbols-outlined text-xl">info</span>
                 </span>
                 About the Agency
              </h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-on-surface font-medium text-lg leading-relaxed">
                  {listing.description || "No description provided."}
                </p>
              </div>
            </div>

            {/* Specialties Section */}
            <div className="bg-white rounded-[40px] p-10 md:p-12 shadow-[0px_32px_64px_-12px_rgba(1,45,29,0.08)] border border-outline-variant/10">
               <h2 className="font-headline text-2xl font-extrabold text-primary mb-8 flex items-center gap-4">
                 <span className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                   <span className="material-symbols-outlined text-xl">target</span>
                 </span>
                 Expertise & Focus
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {[
                   { label: "Main Niche", value: listing.niche || "General", icon: "category" },
                   { label: "Account Lead", value: listing.name, icon: "person" },
                   { label: "Status", value: listing.isVerified ? "Vetted" : "Self-Reported", icon: "verified" },
                   { label: "Member Since", value: formatDate(listing.createdAt), icon: "calendar_month" }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 p-6 bg-surface-container-low/50 rounded-2xl border border-outline-variant/5 hover:border-primary/20 transition-all">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                         <span className="material-symbols-outlined">{item.icon}</span>
                      </div>
                      <div>
                         <p className="text-[10px] font-extrabold uppercase tracking-widest text-primary/40 mb-0.5">{item.label}</p>
                         <p className="font-bold text-primary">{item.value}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          <aside className="space-y-8">
             {/* Methodology / Trust Box */}
            <div className="bg-primary rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl shadow-primary/20">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
               <h3 className="font-headline text-2xl font-extrabold mb-6">NextinHR Vetting</h3>
               <p className="text-on-primary-container font-medium mb-10 leading-relaxed opacity-80">
                 Our Curated Institution methodology ensures high standards of transparency and results across our global marketplace.
               </p>
               <ul className="space-y-4 mb-10">
                 {[ "Identity Verification", "Performance Review", "Client Feedback", "Strategic Alignment" ].map((check, i) => (
                   <li key={i} className="flex items-center gap-3 font-bold text-sm">
                      <span className="material-symbols-outlined text-secondary-fixed text-lg">check_circle</span>
                      {check}
                   </li>
                 ))}
               </ul>
               <button className="w-full bg-white text-primary font-extrabold py-4 rounded-2xl hover:bg-surface-container transition-all text-sm uppercase tracking-widest active:scale-95">
                 Learn More
               </button>
            </div>

            {/* Sidebar CTA */}
            <div className="bg-white rounded-[40px] p-10 shadow-[0px_32px_64px_-12px_rgba(1,45,29,0.08)] border border-outline-variant/10 text-center">
               <div className="w-20 h-20 bg-secondary/10 rounded-3xl flex items-center justify-center text-secondary mx-auto mb-6">
                 <span className="material-symbols-outlined text-4xl">contact_support</span>
               </div>
               <h3 className="font-headline text-xl font-extrabold text-primary mb-4">Need Help Hiring?</h3>
               <p className="text-on-surface-variant font-medium text-sm mb-8 leading-relaxed">
                 Let our consultants help you find the perfect agency partner for your specific needs.
               </p>
               <button className="w-full border-2 border-primary/10 text-primary font-extrabold py-4 rounded-2xl hover:bg-primary hover:text-white transition-all text-sm uppercase tracking-widest">
                 Consult an Expert
               </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}