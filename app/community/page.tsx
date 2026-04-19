'use client';

import { useState, useEffect, useMemo } from 'react';

interface Listing {
  _id: string;
  name: string;
  agencyName: string;
  niche?: string;
  location?: string;
  description?: string;
  website?: string;
}

export default function CommunityMarketplace() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/listings')
      .then((res) => res.json())
      .then((data) => {
        setListings(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setListings([]);
        setLoading(false);
      });
  }, []);

  const filteredListings = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return listings;
    return listings.filter((listing) =>
      listing.agencyName.toLowerCase().includes(term) ||
      listing.name.toLowerCase().includes(term) ||
      (listing.niche && listing.niche.toLowerCase().includes(term)) ||
      (listing.location && listing.location.toLowerCase().includes(term))
    );
  }, [searchTerm, listings]);

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-8 py-12 bg-[#F9FAFB] min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-semibold text-[#1A1A1A] tracking-tight mb-4">
          Find Recruiters & Agencies
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-[#6B7280]">
          Discover trusted recruitment professionals and agencies powered by Candexa AI
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
        <div className="relative w-full max-w-md">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </span>
          <input
            type="text"
            placeholder="Search by agency, recruiter, niche or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl focus:border-[#FF823C] focus:ring-2 focus:ring-[#FF823C]/20 transition-all outline-none text-base text-[#1A1A1A] placeholder:text-gray-400"
          />
        </div>
        <p className="text-[#6B7280] font-medium whitespace-nowrap">
          Showing {filteredListings.length} recruiter{filteredListings.length !== 1 ? 's' : ''}
        </p>
      </div>

      {loading ? (
        <div className="text-center py-20 text-[#6B7280]">Loading marketplace...</div>
      ) : filteredListings.length === 0 ? (
        <div className="bg-white rounded-3xl p-16 text-center border border-gray-100">
          <p className="text-2xl mb-3 text-[#1A1A1A]">No profiles found</p>
          <p className="text-[#6B7280] mb-8">Be the first to join the community!</p>
          <a
            href="/community/submit"
            className="inline-block bg-[#FF823C] hover:bg-[#FF823C]/90 text-white px-10 py-4 rounded-3xl font-semibold transition-all"
          >
            Submit Your Profile
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <ListingCard key={listing._id} listing={listing} />
          ))}
        </div>
      )}
    </main>
  );
}

function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-md transition-all group">
      <div className="flex justify-between items-start mb-6">
        <div className="w-16 h-16 bg-[#FF823C]/10 rounded-2xl flex items-center justify-center text-4xl font-semibold text-[#FF823C]">
          {listing.agencyName.charAt(0).toUpperCase()}
        </div>
        <span className="px-5 py-1.5 text-xs font-medium bg-amber-100 text-amber-700 rounded-full border border-amber-200">
          Unverified
        </span>
      </div>

      <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-1 group-hover:text-[#FF823C] transition-colors">
        {listing.agencyName}
      </h3>
      <p className="text-[#6B7280] mb-6">{listing.name}</p>

      {listing.location && (
        <div className="text-sm text-[#6B7280] mb-5 flex items-center gap-2">
          <span className="text-sm">&nbsp;&#128205; {listing.location}</span>
        </div>
      )}

      {listing.niche && (
        <div className="inline-block mb-6 px-5 py-2 bg-[#FF823C]/10 text-[#FF823C] text-sm font-medium rounded-3xl">
          {listing.niche}
        </div>
      )}

      {listing.description && (
        <p className="text-[#6B7280] line-clamp-4 text-[15px] leading-relaxed mb-8">
          {listing.description}
        </p>
      )}

      {listing.website && (
        <a
          href={listing.website.startsWith('http') ? listing.website : `https://${listing.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FF823C] hover:underline text-sm font-medium inline-flex items-center gap-1"
        >
          Visit website &rarr;
        </a>
      )}
    </div>
  );
}