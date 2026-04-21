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

export default function ListingCard({ listing }: Props) {
  return (
    <Link href={`/community/${listing._id}`} className="block h-full group">
      <div className="bg-white rounded-3xl p-8 border border-outline-variant/20 shadow-sm hover:shadow-[0px_40px_80px_-15px_rgba(1,45,29,0.1)] transition-all flex flex-col h-full border-b-4 border-b-transparent hover:border-b-secondary relative overflow-hidden">
        <div className="flex justify-between items-start mb-8">
          <div className="w-20 h-20 rounded-2xl bg-surface-container flex items-center justify-center p-3 overflow-hidden border border-outline-variant/10 group-hover:scale-105 transition-transform">
             <span className="text-2xl font-bold text-primary">{getInitials(listing.agencyName || listing.name)}</span>
          </div>
          {listing.isVerified ? (
            <span className="flex items-center gap-1.5 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-widest border border-secondary/20">
              <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span> Verified
            </span>
          ) : (
            <span className="flex items-center gap-1.5 bg-primary/5 text-primary/60 px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-widest border border-primary/10">
              Featured
            </span>
          )}
        </div>

        <h3 className="font-headline text-2xl font-extrabold text-primary mb-3 group-hover:text-secondary transition-colors">
          {listing.agencyName}
        </h3>
        <p className="text-on-surface-variant text-sm mb-8 line-clamp-2 leading-relaxed font-medium">
          {listing.description || "Specializing in premium recruitment and talent acquisition services."}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-surface-container-low/50 p-4 rounded-2xl border border-outline-variant/5">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-lg text-primary/40">group</span>
              <span className="text-[10px] uppercase text-primary/40 font-extrabold tracking-wider">Contact</span>
            </div>
            <div className="text-xs font-bold text-primary truncate">{listing.name}</div>
          </div>
          <div className="bg-surface-container-low/50 p-4 rounded-2xl border border-outline-variant/5">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-lg text-primary/40">category</span>
              <span className="text-[10px] uppercase text-primary/40 font-extrabold tracking-wider">Niche</span>
            </div>
            <div className="text-xs font-bold text-primary truncate">{listing.niche || "General"}</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10 flex-grow">
          <span className="bg-primary/5 text-primary/60 px-4 py-2 rounded-xl text-[10px] font-extrabold uppercase tracking-wider border border-primary/5 group-hover:bg-primary group-hover:text-white transition-colors">
            {listing.niche ? listing.niche.split(' ')[0] : "Recruitment"}
          </span>
          <span className="bg-primary/5 text-primary/60 px-4 py-2 rounded-xl text-[10px] font-extrabold uppercase tracking-wider border border-primary/5">
            Vetted
          </span>
        </div>

        <div className="w-full bg-primary text-white font-extrabold py-4.5 rounded-2xl group-hover:bg-secondary transition-all shadow-xl shadow-primary/10 flex items-center justify-center gap-2 text-sm uppercase tracking-widest">
          View Profile
          <span className="material-symbols-outlined text-xl">arrow_right_alt</span>
        </div>
      </div>
    </Link>
  );
}