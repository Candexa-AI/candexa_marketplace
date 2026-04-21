"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import ListingCard from "./ListingCard";
import { PublicListing } from "@/lib/types";

const NICHE_OPTIONS = [
  "All Niches",
  "Technology & Engineering",
  "Finance & Banking",
  "Healthcare & Life Sciences",
  "Sales & Marketing",
  "Legal & Compliance",
  "Product & Design",
  "Executive & C-Suite",
  "Operations & Supply Chain",
  "Creative & Media",
  "General / Multi-sector",
  "Other",
];

interface Props {
  listings: PublicListing[];
}

export default function ListingsGrid({ listings }: Props) {
  const [query, setQuery] = useState("");
  const [niche, setNiche] = useState("All Niches");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return listings.filter((l) => {
      const matchesQuery =
        !q ||
        l.agencyName.toLowerCase().includes(q) ||
        l.name.toLowerCase().includes(q) ||
        (l.niche ?? "").toLowerCase().includes(q) ||
        (l.description ?? "").toLowerCase().includes(q);

      const matchesNiche =
        niche === "All Niches" || l.niche === niche;

      return matchesQuery && matchesNiche;
    });
  }, [listings, query, niche]);

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 -mt-16 pb-24 relative z-20">
      {/* Grid Toolbar */}
      <section className="mb-12">
        <div className="bg-white p-4 rounded-3xl shadow-[0px_32px_64px_-12px_rgba(1,45,29,0.1)] flex flex-col lg:flex-row items-center gap-4 border border-outline-variant/20">
          <div className="flex-1 flex items-center px-6 gap-4 w-full bg-surface-container-low/50 rounded-2xl border border-outline-variant/10 focus-within:bg-white focus-within:border-primary/20 transition-all">
            <span className="material-symbols-outlined text-primary/40">search</span>
            <input
              type="text"
              placeholder="Search by agency, recruiter, or keyword…"
              className="w-full bg-transparent border-none focus:ring-0 text-on-surface font-semibold py-4 placeholder:text-primary/30"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button className="text-primary/40 hover:text-primary transition-colors" onClick={() => setQuery("")}>
                <span className="material-symbols-outlined">close</span>
              </button>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <div className="relative w-full sm:w-64">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 pointer-events-none">category</span>
              <select
                className="w-full bg-surface-container-low/50 border border-outline-variant/10 rounded-2xl pl-12 pr-4 py-4 text-sm font-bold text-primary focus:ring-0 cursor-pointer appearance-none"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
              >
                {NICHE_OPTIONS.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <Link href="/community/submit" className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-secondary transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/10">
              <span className="material-symbols-outlined text-lg">add</span>
              Add Yours
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4">
          <div>
            <h2 className="font-headline text-2xl font-extrabold text-primary flex items-center gap-3">
               Community Listings
               <span className="bg-primary/5 text-primary text-xs px-3 py-1 rounded-full border border-primary/10">
                 {filtered.length}
               </span>
            </h2>
            <p className="text-on-surface-variant text-sm font-medium mt-1">
              All submissions are self-reported and unverified at this stage.
            </p>
          </div>
          <div className="text-xs font-extrabold text-primary/40 uppercase tracking-widest flex items-center gap-2">
             <span className="material-symbols-outlined text-sm">info</span>
             Verified agencies are marked with a badge
          </div>
        </div>
      </section>

      {filtered.length === 0 ? (
        <div className="bg-white rounded-[40px] p-20 text-center border border-outline-variant/10 shadow-sm">
          {listings.length === 0 ? (
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary mx-auto mb-8">
                <span className="material-symbols-outlined text-4xl">nest_eco_leaf</span>
              </div>
              <h3 className="font-headline text-2xl font-extrabold text-primary mb-4">No profiles found</h3>
              <p className="text-on-surface-variant font-medium mb-10 leading-relaxed">Be the first to join the community and put your agency in front of global decision makers.</p>
              <Link href="/community/submit" className="bg-primary text-white px-10 py-4 rounded-2xl font-bold hover:bg-secondary transition-all inline-flex items-center gap-2">
                Submit Your Profile
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary mx-auto mb-8">
                <span className="material-symbols-outlined text-4xl">search_off</span>
              </div>
              <h3 className="font-headline text-2xl font-extrabold text-primary mb-4">No results found</h3>
              <p className="text-on-surface-variant font-medium mb-10 leading-relaxed">Try a different keyword or niche filter to find what you&apos;re looking for.</p>
              <button
                className="bg-primary/5 text-primary px-10 py-4 rounded-2xl font-bold hover:bg-primary/10 transition-all flex items-center gap-2 mx-auto"
                onClick={() => { setQuery(""); setNiche("All Niches"); }}
              >
                Clear All Filters
                <span className="material-symbols-outlined">restart_alt</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((listing) => (
            <ListingCard key={listing._id} listing={listing} />
          ))}
        </div>
      )}
    </main>
  );
}