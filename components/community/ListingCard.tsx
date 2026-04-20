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
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const VERIFIED_COLORS: Record<string, string> = {
  "Technology & Engineering": "rgba(59, 130, 246, 0.1)",
  "Finance & Banking": "rgba(16, 185, 129, 0.1)",
  "Healthcare & Life Sciences": "rgba(236, 72, 153, 0.1)",
  "Sales & Marketing": "rgba(245, 158, 11, 0.1)",
  "Legal & Compliance": "rgba(139, 92, 246, 0.1)",
  "Product & Design": "rgba(6, 182, 212, 0.1)",
  "Executive & C-Suite": "rgba(132, 204, 22, 0.1)",
  "Operations & Supply Chain": "rgba(156, 163, 175, 0.1)",
  "Creative & Media": "rgba(249, 115, 22, 0.1)",
  "General / Multi-sector": "rgba(107, 114, 128, 0.1)",
  "Other": "rgba(156, 163, 175, 0.1)",
};

const NICHE_ICONS: Record<string, string> = {
  "Technology & Engineering": "⚙️",
  "Finance & Banking": "💰",
  "Healthcare & Life Sciences": "🏥",
  "Sales & Marketing": "📈",
  "Legal & Compliance": "⚖️",
  "Product & Design": "🎨",
  "Executive & C-Suite": "👔",
  "Operations & Supply Chain": "📦",
  "Creative & Media": "🎬",
  "General / Multi-sector": "🌐",
  "Other": "💼",
};

export default function ListingCard({ listing }: Props) {
  const nicheColor = VERIFIED_COLORS[listing.niche || "Other"] || VERIFIED_COLORS["Other"];
  const nicheIcon = NICHE_ICONS[listing.niche || "Other"] || NICHE_ICONS["Other"];

  return (
    <Link
      href={`/community/${listing._id}`}
      className="card"
      style={{ textDecoration: "none", display: "block" }}
    >
      <div className="card-body">
        <div className="card-header">
          <div className="avatar">{getInitials(listing.name)}</div>
          <div className="meta">
            <div className="agency-name">{listing.agencyName}</div>
            <div className="recruiter-name">{listing.name}</div>
          </div>
        </div>

        {listing.niche && (
          <div className="niche-row">
            <span className="niche-badge" style={{ background: nicheColor }}>
              <span className="niche-icon">{nicheIcon}</span>
              {listing.niche}
            </span>
            <span className="badge">Unverified</span>
          </div>
        )}

        {listing.description && (
          <p className="description">
            {listing.description.length > 100
              ? `${listing.description.slice(0, 100)}...`
              : listing.description}
          </p>
        )}

        <div className="card-divider" />

        <div className="card-footer">
          {listing.website ? (
            <div className="website-link">
              <svg className="web-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-1.343 3-3s-1.343-3-3-3m0 18c-1.657 0-3-1.343-3-3s1.343-3 3-3m-9-9a9 9 0 019-9" />
              </svg>
              <span>Visit website</span>
              <span className="arrow">→</span>
            </div>
          ) : (
            <span className="no-website">No website</span>
          )}
          <span className="date">{formatDate(listing.createdAt)}</span>
        </div>
      </div>

      <style jsx>{`
        .card {
          background: white;
          border: 1px solid #f3f4f6;
          border-radius: 28px;
          overflow: hidden;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        .card:hover {
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
          transform: translateY(-4px);
          border-color: #fed7aa;
        }
        .card-body {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .card-header {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .avatar {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #ff823c 0%, #ff6a1a 50%, #f97316 100%);
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
          font-weight: 700;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(255, 130, 60, 0.3);
        }
        .meta { flex: 1; min-width: 0; }
        .agency-name {
          font-size: 17px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .agency-name:hover {
          color: #ff823c;
        }
        .recruiter-name {
          font-size: 13px;
          color: #6b7280;
          font-weight: 500;
        }
        .niche-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .niche-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border-radius: 16px;
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 600;
          color: #374151;
        }
        .niche-icon {
          font-size: 12px;
        }
        .badge {
          background: #fef3c7;
          color: #b45309;
          border: 1px solid #fde68a;
          border-radius: 16px;
          padding: 5px 12px;
          font-size: 11px;
          font-weight: 600;
          flex-shrink: 0;
        }
        .description {
          font-size: 14px;
          color: #4b5563;
          line-height: 1.7;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .card-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #f3f4f6, transparent);
        }
        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .website-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: #ff823c;
        }
        .web-icon {
          width: 16px;
          height: 16px;
        }
        .arrow {
          transition: transform 0.2s;
        }
        .card:hover .arrow {
          transform: translateX(3px);
        }
        .no-website {
          font-size: 13px;
          color: #d1d5db;
        }
        .date {
          font-size: 12px;
          color: #9ca3af;
          font-weight: 500;
        }
      `}</style>
    </Link>
  );
}