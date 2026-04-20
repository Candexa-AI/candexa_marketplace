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
      <section className="hero">
        <div className="hero-eyebrow">
          <span className="eyebrow-dot" />
          Recruiter &amp; Agency Marketplace
        </div>
        <h1 className="hero-title">
          Find Trusted{" "}
          <span className="hero-highlight">Recruiters &amp; Agencies</span>
          {" "}in One Place
        </h1>
        <p className="hero-sub">
          Discover trusted recruitment professionals and agencies powered by Candexa AI.
        </p>
        <div className="hero-actions">
          <Link href="/community/submit" className="btn-primary">
            Submit Your Profile
          </Link>
          <a href="#listings" className="btn-ghost">
            Browse {listings.length} Listing{listings.length !== 1 ? "s" : ""}
          </a>
        </div>

        <div className="stats-row">
          <div className="stat">
            <span className="stat-num">{listings.length}</span>
            <span className="stat-label">Profiles Listed</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">Free</span>
            <span className="stat-label">To List Now</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">0</span>
            <span className="stat-label">Verified Soon</span>
          </div>
        </div>
      </section>

      <ListingsGrid listings={listings} />

      <section className="footer-cta">
        <div className="footer-cta-inner">
          <h2>Ready to get listed?</h2>
          <p>It&apos;s free. Takes 2 minutes. No account required.</p>
          <Link href="/community/submit" className="btn-primary-white">
            Submit Your Profile
          </Link>
        </div>
      </section>

      <style jsx>{`
        .hero { max-width: 900px; margin: 0 auto; padding: 80px 24px 64px; text-align: center; }
        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff7ed; border: 1px solid #fed7aa; color: #ea580c;
          border-radius: 100px; padding: 6px 16px; font-size: 13px; font-weight: 600; margin-bottom: 28px;
        }
        .eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #ff823c; display: inline-block; }
        .hero-title { font-size: clamp(32px, 5vw, 54px); font-weight: 600; color: #1a1a1a; line-height: 1.15; letter-spacing: -1px; margin: 0 0 20px; }
        .hero-highlight { color: #ff823c; }
        .hero-sub { font-size: 18px; color: #6b7280; line-height: 1.65; max-width: 600px; margin: 0 auto 36px; }
        .hero-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-bottom: 48px; }
        .btn-primary { background: #ff823c; color: white; padding: 16px 40px; border-radius: 32px; font-weight: 600; font-size: 16px; text-decoration: none; transition: background 0.15s; box-shadow: 0 4px 14px rgba(255,130,60,0.3); }
        .btn-primary:hover { background: #ff823c/90; }
        .btn-ghost { background: transparent; color: #1a1a1a; padding: 16px 32px; border-radius: 32px; font-weight: 600; font-size: 16px; text-decoration: none; border: 1px solid #e5e7eb; transition: border-color 0.15s; }
        .btn-ghost:hover { border-color: #d1d5db; }
        .stats-row { display: inline-flex; align-items: center; gap: 32px; background: white; border: 1px solid #f0f0f0; border-radius: 14px; padding: 20px 40px; box-shadow: 0 2px 12px rgba(0,0,0,0.05); }
        .stat { display: flex; flex-direction: column; align-items: center; gap: 2px; }
        .stat-num { font-size: 22px; font-weight: 700; color: #1a1a1a; letter-spacing: -0.5px; }
        .stat-label { font-size: 12px; color: #9ca3af; font-weight: 500; }
        .stat-divider { width: 1px; height: 36px; background: #f0f0f0; }
        .footer-cta { background: #1a1a1a; padding: 64px 24px; text-align: center; }
        .footer-cta-inner { max-width: 500px; margin: 0 auto; }
        .footer-cta h2 { font-size: 28px; font-weight: 600; color: white; margin: 0 0 12px; letter-spacing: -0.5px; }
        .footer-cta p { color: #9ca3af; font-size: 15px; margin: 0 0 28px; }
        .btn-primary-white { background: white; color: #1a1a1a; padding: 16px 40px; border-radius: 32px; font-weight: 600; font-size: 16px; text-decoration: none; transition: background 0.15s; }
        .btn-primary-white:hover { background: #f3f4f6; }
        @media (max-width: 640px) { .stats-row { gap: 20px; padding: 16px 24px; } }
      `}</style>
    </>
  );
}