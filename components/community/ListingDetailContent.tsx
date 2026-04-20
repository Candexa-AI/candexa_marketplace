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
    <main className="page-root">
      <div className="content">
        <div className="layout">
          <article className="profile-card">
            <div className="profile-header">
              <div className="avatar-lg">{getInitials(listing.name)}</div>
              <div className="profile-meta">
                <div className="profile-name-row">
                  <h1 className="agency-name">{listing.agencyName}</h1>
                  <span className="badge-unverified">Unverified</span>
                </div>
                <p className="recruiter-name">{listing.name}</p>
                {listing.niche && (
                  <div className="niche-tag">{listing.niche}</div>
                )}
              </div>
            </div>

            {listing.description && (
              <section className="profile-section">
                <h2 className="section-title">About</h2>
                <p className="description">{listing.description}</p>
              </section>
            )}

            <section className="profile-section">
              <h2 className="section-title">Details</h2>
              <div className="details-grid">
                <div className="detail-row">
                  <span className="detail-label">Agency</span>
                  <span className="detail-value">{listing.agencyName}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Recruiter</span>
                  <span className="detail-value">{listing.name}</span>
                </div>
                {listing.niche && (
                  <div className="detail-row">
                    <span className="detail-label">Niche</span>
                    <span className="detail-value">{listing.niche}</span>
                  </div>
                )}
                <div className="detail-row">
                  <span className="detail-label">Listed On</span>
                  <span className="detail-value">{formatDate(listing.createdAt)}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Verification</span>
                  <span className="detail-value detail-unverified">
                    Pending
                  </span>
                </div>
              </div>
            </section>
          </article>

          <aside className="sidebar">
            {listing.website ? (
              <a
                href={
                  listing.website.startsWith("http")
                    ? listing.website
                    : `https://${listing.website}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="btn-website"
              >
                Visit Website
              </a>
            ) : (
              <div className="no-website-box">No website listed</div>
            )}

            <div className="sidebar-card">
              <h3 className="sidebar-title">Verification Status</h3>
              <div className="verification-status">
                <div className="status-icon-wrap unverified">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="status-label">Unverified Profile</p>
                  <p className="status-desc">
                    This profile has not been reviewed by the Candexa AI team.
                  </p>
                </div>
              </div>
            </div>

            <div className="sidebar-card">
              <h3 className="sidebar-title">Are you this recruiter?</h3>
              <p className="sidebar-desc">
                Claim and verify your profile to get a trust badge.
              </p>
              <span className="coming-soon-pill">Coming Soon</span>
            </div>

            <Link href="/community" className="btn-back-sidebar">
              Browse All Listings
            </Link>
          </aside>
        </div>
      </div>

      <style jsx>{`
        .page-root {
          background: #f9fafb;
          min-height: 100vh;
        }
        .content {
          max-width: 1000px;
          margin: 0 auto;
          padding: 32px 24px 80px;
        }
        .back-link {
          display: inline-block;
          font-size: 14px;
          color: #6b7280;
          text-decoration: none;
          font-weight: 500;
          margin-bottom: 28px;
          transition: color 0.15s;
        }
        .back-link:hover { color: #1a1a1a; }

        .layout {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 24px;
          align-items: start;
        }

        .profile-card {
          background: white;
          border: 1px solid #f3f4f6;
          border-radius: 32px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          overflow: hidden;
        }
        .profile-header {
          display: flex;
          gap: 24px;
          align-items: flex-start;
          padding: 40px;
          border-bottom: 1px solid #f3f4f6;
        }
        .avatar-lg {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #ff823c, #ff6a1a);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          font-weight: 600;
          flex-shrink: 0;
        }
        .profile-meta { flex: 1; }
        .profile-name-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 8px;
        }
        .agency-name {
          font-size: 28px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
        }
        .badge-unverified {
          background: #fef3c7;
          color: #b45309;
          border: 1px solid #fde68a;
          border-radius: 20px;
          padding: 4px 14px;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
        }
        .recruiter-name {
          font-size: 15px;
          color: #6b7280;
          margin: 0 0 16px;
        }
        .niche-tag {
          display: inline-flex;
          background: #fff7ed;
          border: 1px solid #fed7aa;
          border-radius: 20px;
          padding: 6px 16px;
          font-size: 14px;
          color: #ea580c;
          font-weight: 500;
        }

        .profile-section {
          padding: 32px 40px;
          border-bottom: 1px solid #f3f4f6;
        }
        .profile-section:last-child { border-bottom: none; }
        .section-title {
          font-size: 12px;
          font-weight: 600;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin: 0 0 16px;
        }
        .description {
          font-size: 15px;
          color: #374151;
          line-height: 1.7;
          margin: 0;
        }

        .details-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .detail-row {
          display: flex;
          align-items: baseline;
          gap: 16px;
        }
        .detail-label {
          font-size: 14px;
          font-weight: 500;
          color: #9ca3af;
          min-width: 100px;
        }
        .detail-value {
          font-size: 14px;
          color: #1a1a1a;
        }
        .detail-unverified { color: #b45309; }

        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 20px;
          position: sticky;
          top: 84px;
        }
        .btn-website {
          display: block;
          background: #ff823c;
          color: white;
          text-align: center;
          padding: 16px;
          border-radius: 24px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          transition: background 0.15s;
        }
        .btn-website:hover { background: #ff6b2c; }
        .no-website-box {
          text-align: center;
          padding: 16px;
          border-radius: 24px;
          border: 1px dashed #e5e7eb;
          font-size: 14px;
          color: #9ca3af;
        }
        .sidebar-card {
          background: white;
          border: 1px solid #f3f4f6;
          border-radius: 24px;
          padding: 24px;
        }
        .sidebar-title {
          font-size: 14px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 16px;
        }
        .verification-status {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }
        .status-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #f59e0b;
        }
        .status-icon-wrap.unverified { background: #fef3c7; }
        .status-label {
          font-size: 14px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 4px;
        }
        .status-desc {
          font-size: 13px;
          color: #6b7280;
          line-height: 1.5;
          margin: 0;
        }
        .sidebar-desc {
          font-size: 13px;
          color: #6b7280;
          line-height: 1.5;
          margin: 0 0 16px;
        }
        .coming-soon-pill {
          display: inline-block;
          background: #f3f4f6;
          color: #6b7280;
          border-radius: 20px;
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 600;
        }
        .btn-back-sidebar {
          display: block;
          text-align: center;
          font-size: 14px;
          font-weight: 500;
          color: #6b7280;
          text-decoration: none;
          padding: 14px;
          border: 1px solid #e5e7eb;
          border-radius: 24px;
          transition: border-color 0.15s;
        }
        .btn-back-sidebar:hover { border-color: #d1d5db; color: #1a1a1a; }

        @media (max-width: 768px) {
          .layout { grid-template-columns: 1fr; }
          .sidebar { position: static; }
          .profile-header { flex-direction: column; padding: 24px; }
        }
      `}</style>
    </main>
  );
}