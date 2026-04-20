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
    <section className="listings-section" id="listings">
      <div className="toolbar">
        <div className="search-wrap">
          <span className="search-icon">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            className="search-input"
            type="text"
            placeholder="Search by agency, recruiter, or keyword…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button className="clear-btn" onClick={() => setQuery("")}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        <select
          className="niche-select"
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
        >
          {NICHE_OPTIONS.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>

        <Link href="/community/submit" className="btn-outline">
          + Add Yours
        </Link>
      </div>

      <div className="results-meta">
        <span className="listings-title">Community Listings</span>
        <span className="results-count">
          {filtered.length === listings.length
            ? `${listings.length} profile${listings.length !== 1 ? "s" : ""}`
            : `${filtered.length} of ${listings.length} profiles`}
        </span>
      </div>
      <p className="listings-sub">
        All submissions are self-reported and unverified at this stage.
      </p>

      {filtered.length === 0 ? (
        <div className="empty-state">
          {listings.length === 0 ? (
            <>
              <div className="empty-icon">🌱</div>
              <h3>No profiles found</h3>
              <p>Be the first to join the community!</p>
              <Link href="/community/submit" className="btn-primary">
                Submit Your Profile
              </Link>
            </>
          ) : (
            <>
              <div className="empty-icon">🔎</div>
              <h3>No results found</h3>
              <p>Try a different keyword or niche filter.</p>
              <button
                className="btn-ghost"
                onClick={() => { setQuery(""); setNiche("All Niches"); }}
              >
                Clear Filters
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="listings-grid">
          {filtered.map((listing) => (
            <ListingCard key={listing._id} listing={listing} />
          ))}
        </div>
      )}

      <style jsx>{`
        .listings-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px 80px;
        }

        .toolbar {
          display: flex;
          gap: 16px;
          align-items: center;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .search-wrap {
          flex: 1;
          min-width: 280px;
          position: relative;
          display: flex;
          align-items: center;
        }
        .search-icon {
          position: absolute;
          left: 16px;
          color: #9ca3af;
          pointer-events: none;
        }
        .search-input {
          width: 100%;
          border: 1px solid #e5e7eb;
          border-radius: 24px;
          padding: 14px 48px 14px 48px;
          font-size: 15px;
          color: #1a1a1a;
          background: white;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
          font-family: inherit;
        }
        .search-input:focus {
          border-color: #ff823c;
          box-shadow: 0 0 0 3px rgba(255,130,60,0.1);
        }
        .search-input::placeholder { color: #9ca3af; }
        .clear-btn {
          position: absolute;
          right: 14px;
          background: none;
          border: none;
          cursor: pointer;
          color: #9ca3af;
          padding: 4px;
          line-height: 1;
          display: flex;
        }
        .clear-btn:hover { color: #6b7280; }

        .niche-select {
          border: 1px solid #e5e7eb;
          border-radius: 24px;
          padding: 14px 20px;
          font-size: 15px;
          color: #374151;
          background: white;
          outline: none;
          cursor: pointer;
          font-family: inherit;
          transition: border-color 0.15s;
          min-width: 200px;
        }
        .niche-select:focus { border-color: #ff823c; }

        .results-meta {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 6px;
        }
        .listings-title {
          font-size: 22px;
          font-weight: 600;
          color: #1a1a1a;
          letter-spacing: -0.5px;
        }
        .results-count {
          font-size: 13px;
          color: #9ca3af;
          font-weight: 500;
        }
        .listings-sub {
          font-size: 14px;
          color: #9ca3af;
          margin: 0 0 28px;
        }

        .listings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }

        .empty-state {
          text-align: center;
          padding: 80px 24px;
          background: white;
          border-radius: 32px;
          border: 1px solid #f3f4f6;
        }
        .empty-icon { font-size: 48px; margin-bottom: 16px; }
        .empty-state h3 {
          font-size: 20px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 8px;
        }
        .empty-state p { color: #6b7280; margin: 0 0 24px; }

        .btn-primary {
          background: #ff823c;
          color: white;
          padding: 16px 40px;
          border-radius: 32px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          display: inline-block;
          transition: background 0.15s;
        }
        .btn-primary:hover { background: #ff823c/90; }
        .btn-ghost {
          background: transparent;
          border: 1px solid #e5e7eb;
          color: #374151;
          padding: 16px 32px;
          border-radius: 32px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          font-family: inherit;
          transition: border-color 0.15s;
        }
        .btn-ghost:hover { border-color: #d1d5db; }
        .btn-outline {
          border: 1px solid #ff823c;
          color: #ff823c;
          background: transparent;
          padding: 14px 24px;
          border-radius: 24px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.15s;
        }
        .btn-outline:hover { background: #fff7ed; }

        @media (max-width: 768px) {
          .toolbar { flex-direction: column; align-items: stretch; }
          .niche-select { min-width: unset; }
          .search-wrap { min-width: unset; }
        }
      `}</style>
    </section>
  );
}