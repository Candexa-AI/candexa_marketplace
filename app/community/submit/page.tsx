"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const NICHE_OPTIONS = [
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

export default function SubmitPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      agencyName: formData.get("agencyName"),
      website: formData.get("website") || undefined,
      niche: formData.get("niche") || undefined,
      description: formData.get("description") || undefined,
    };

    try {
      const res = await fetch("/api/listings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.message || "Something went wrong.");
        return;
      }

      setSuccess(true);
    } catch {
      setError("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <main className="page-root">
        <div className="success-container">
          <div className="success-card">
            <div className="success-icon">🎉</div>
            <h1>Profile Submitted!</h1>
            <p>Your profile is now live in the community as <strong>Unverified</strong>.</p>
            <div className="success-actions">
              <button onClick={() => router.push("/community")} className="btn-primary">
                Back to Marketplace
              </button>
            </div>
          </div>
          <style jsx>{`
            .page-root { background: #f9fafb; min-height: 100vh; }
            .success-container { display: flex; align-items: center; justify-content: center; min-height: calc(100vh - 64px); padding: 24px; }
            .success-card { background: white; border-radius: 32px; border: 1px solid #f3f4f6; padding: 64px; text-align: center; max-width: 480px; }
            .success-icon { font-size: 56px; margin-bottom: 20px; }
            h1 { font-size: 28px; font-weight: 600; color: #1a1a1a; margin: 0 0 8px; }
            p { font-size: 16px; color: #6b7280; margin: 0 0 32px; }
            .btn-primary { background: #ff823c; color: white; padding: 16px 40px; border-radius: 32px; font-weight: 600; font-size: 15px; border: none; cursor: pointer; transition: background 0.15s; }
            .btn-primary:hover { background: #ff823c/90; }
          `}</style>
        </div>
      </main>
    );
  }

  return (
    <main className="page-root">
      <div className="form-container">
        <div className="form-card">
          <div className="form-header">
            <h1>Submit Your Profile</h1>
            <p>Join the Candexa AI Recruiter Community</p>
          </div>

          {error && <div className="error-banner">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="you@email.com" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="agencyName">Agency / Company Name</label>
              <input type="text" id="agencyName" name="agencyName" required placeholder="TalentSphere Recruitment" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="website">Website</label>
                <input type="url" id="website" name="website" placeholder="https://youragency.com" />
              </div>
              <div className="form-group">
                <label htmlFor="niche">Niche / Specialty</label>
                <select id="niche" name="niche">
                  <option value="">Select a niche</option>
                  {NICHE_OPTIONS.map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Short Description</label>
              <textarea id="description" name="description" rows={4} placeholder="Tell us about your expertise..." maxLength={500} />
              <span className="char-count">Max 500 characters</span>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Submitting..." : "Submit Profile"}
            </button>
          </form>

          <p className="disclaimer">
            Your email will never be displayed publicly.
          </p>
        </div>
      </div>

      <style jsx>{`
        .page-root { background: #f9fafb; min-height: 100vh; }
        .form-container { max-width: 640px; margin: 0 auto; padding: 40px 24px 80px; }
        .back-link { display: inline-block; font-size: 14px; color: #6b7280; text-decoration: none; font-weight: 500; margin-bottom: 24px; transition: color 0.15s; }
        .back-link:hover { color: #1a1a1a; }
        
        .form-card { background: white; border: 1px solid #f3f4f6; border-radius: 32px; padding: 40px; box-shadow: 0 2px 12px rgba(0,0,0,0.04); }
        .form-header { margin-bottom: 32px; text-align: center; }
        .form-header h1 { font-size: 32px; font-weight: 600; color: #1a1a1a; margin: 0 0 8px; }
        .form-header p { font-size: 16px; color: #6b7280; margin: 0; }

        .error-banner { background: #fef2f2; border: 1px solid #fecaca; color: #dc2626; border-radius: 12px; padding: 14px 16px; font-size: 14px; margin-bottom: 24px; }

        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 500px) { .form-row { grid-template-columns: 1fr; } }

        .form-group { margin-bottom: 20px; }
        label { display: block; font-size: 12px; font-weight: 600; color: #374151; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
        input, select, textarea { width: 100%; border: 1px solid #e5e7eb; border-radius: 16px; padding: 14px 18px; font-size: 15px; color: #1a1a1a; background: #f9fafb; outline: none; transition: border-color 0.15s, box-shadow 0.15s, background 0.15s; font-family: inherit; box-sizing: border-box; }
        input:focus, select:focus, textarea:focus { border-color: #ff823c; box-shadow: 0 0 0 3px rgba(255,130,60,0.15); background: white; }
        input::placeholder, textarea::placeholder { color: #9ca3af; }
        textarea { resize: vertical; min-height: 100px; }
        .char-count { display: block; font-size: 12px; color: #9ca3af; margin-top: 6px; text-align: right; }

        .submit-btn { width: 100%; background: #ff823c; color: white; border: none; border-radius: 24px; padding: 18px; font-size: 16px; font-weight: 600; cursor: pointer; transition: background 0.15s, transform 0.15s; font-family: inherit; margin-top: 8px; box-shadow: 0 4px 14px rgba(255,130,60,0.3); }
        .submit-btn:hover:not(:disabled) { background: #ff6b2c; transform: translateY(-1px); }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

        .disclaimer { font-size: 13px; color: #9ca3af; text-align: center; margin-top: 24px; }
      `}</style>
    </main>
  );
}