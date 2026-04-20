"use client";

import { useState, useCallback } from "react";

interface AdminListing {
  _id: string;
  name: string;
  email: string;
  agencyName: string;
  website?: string;
  niche?: string;
  description?: string;
  isVerified: boolean;
  createdAt: string;
}

type ViewState = "login" | "loading" | "dashboard" | "error";

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    day: "numeric", month: "short", year: "numeric",
  });
}

export default function AdminPage() {
  const [view, setView] = useState<ViewState>("login");
  const [token, setToken] = useState("");
  const [tokenInput, setTokenInput] = useState("");
  const [listings, setListings] = useState<AdminListing[]>([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [search, setSearch] = useState("");
  const [busy, setBusy] = useState<string | null>(null);

  const fetchListings = useCallback(async (t: string) => {
    setView("loading");
    try {
      const res = await fetch("/api/admin/listings", {
        headers: { "x-admin-token": t },
      });
      if (res.status === 401) {
        setErrorMsg("Invalid admin token.");
        setView("login");
        return;
      }
      const json = await res.json();
      setListings(json.data ?? []);
      setView("dashboard");
    } catch {
      setErrorMsg("Network error.");
      setView("error");
    }
  }, []);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setToken(tokenInput);
    fetchListings(tokenInput);
  }

  async function toggleVerify(listing: AdminListing) {
    setBusy(listing._id);
    try {
      const res = await fetch("/api/admin/listings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "x-admin-token": token },
        body: JSON.stringify({ id: listing._id, isVerified: !listing.isVerified }),
      });
      if (res.ok) {
        setListings((prev) =>
          prev.map((l) =>
            l._id === listing._id ? { ...l, isVerified: !l.isVerified } : l
          )
        );
      }
    } finally {
      setBusy(null);
    }
  }

  async function deleteListing(id: string) {
    if (!confirm("Are you sure you want to delete this listing? This cannot be undone.")) return;
    setBusy(id);
    try {
      const res = await fetch("/api/admin/listings", {
        method: "DELETE",
        headers: { "Content-Type": "application/json", "x-admin-token": token },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        setListings((prev) => prev.filter((l) => l._id !== id));
      }
    } finally {
      setBusy(null);
    }
  }

  const filtered = listings.filter((l) => {
    const q = search.toLowerCase();
    return (
      !q ||
      l.agencyName.toLowerCase().includes(q) ||
      l.name.toLowerCase().includes(q) ||
      l.email.toLowerCase().includes(q) ||
      (l.niche ?? "").toLowerCase().includes(q)
    );
  });

  const verifiedCount = listings.filter((l) => l.isVerified).length;

  if (view === "login") {
    return (
      <div className="login-root">
        <div className="login-card">
          {/* <div className="login-logo">
            <span className="logo-icon">✦</span>
            <span>Candexa AI</span>
          </div> */}
          <h1>Admin Panel</h1>
          <p>Enter your admin token to access the dashboard.</p>
          {errorMsg && <div className="error-banner">{errorMsg}</div>}
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Admin token"
              value={tokenInput}
              onChange={(e) => setTokenInput(e.target.value)}
              required
              autoFocus
            />
            <button type="submit">Sign In →</button>
          </form>
        </div>

        <style jsx>{`
          .login-root {
            min-height: 100vh;
            background: #f9fafb;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
            font-family: 'DM Sans', sans-serif;
          }
          .login-card {
            background: white;
            border-radius: 16px;
            border: 1px solid #f0f0f0;
            box-shadow: 0 4px 24px rgba(0,0,0,0.07);
            padding: 48px 40px;
            max-width: 420px;
            width: 100%;
          }
          .login-logo {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            font-weight: 800;
            color: #ff823c;
            margin-bottom: 24px;
          }
          .logo-icon { font-size: 18px; }
          h1 { font-size: 24px; font-weight: 800; color: #1a1a1a; margin: 0 0 8px; }
          p { font-size: 14px; color: #6b7280; margin: 0 0 24px; }
          .error-banner {
            background: #fef2f2;
            border: 1px solid #fecaca;
            color: #dc2626;
            border-radius: 8px;
            padding: 10px 14px;
            font-size: 13px;
            margin-bottom: 16px;
          }
          input {
            width: 100%;
            border: 1.5px solid #e5e7eb;
            border-radius: 9px;
            padding: 11px 14px;
            font-size: 14px;
            font-family: inherit;
            margin-bottom: 12px;
            outline: none;
            box-sizing: border-box;
          }
          input:focus { border-color: #ff823c; box-shadow: 0 0 0 3px rgba(255,130,60,0.1); }
          button {
            width: 100%;
            background: #ff823c;
            color: white;
            border: none;
            border-radius: 9px;
            padding: 12px;
            font-size: 15px;
            font-weight: 700;
            cursor: pointer;
            font-family: inherit;
          }
          button:hover { background: #e66d2a; }
        `}</style>
      </div>
    );
  }

  if (view === "loading") {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", color: "#9ca3af" }}>
        Loading…
      </div>
    );
  }

  return (
    <div className="admin-root">
      <header className="admin-header">
        <div className="header-inner">
          <div className="header-brand">
            <span className="logo-icon">✦</span>
            <span>Candexa AI</span>
            <span className="admin-badge">Admin</span>
          </div>
          <button className="sign-out-btn" onClick={() => { setView("login"); setToken(""); setTokenInput(""); }}>
            Sign Out
          </button>
        </div>
      </header>

      <div className="admin-content">
        <div className="stats-row">
          <div className="stat-card">
            <span className="stat-num">{listings.length}</span>
            <span className="stat-label">Total Listings</span>
          </div>
          <div className="stat-card">
            <span className="stat-num verified">{verifiedCount}</span>
            <span className="stat-label">Verified</span>
          </div>
          <div className="stat-card">
            <span className="stat-num unverified">{listings.length - verifiedCount}</span>
            <span className="stat-label">Unverified</span>
          </div>
        </div>

        <div className="toolbar">
          <h2 className="section-title">All Listings</h2>
          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input
              className="search-input"
              type="text"
              placeholder="Search by name, email, agency…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="refresh-btn" onClick={() => fetchListings(token)}>
            ↻ Refresh
          </button>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Agency</th>
                <th>Recruiter</th>
                <th>Email</th>
                <th>Niche</th>
                <th>Joined</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="empty-row">No listings found.</td>
                </tr>
              )}
              {filtered.map((l) => (
                <tr key={l._id} className={busy === l._id ? "row-busy" : ""}>
                  <td className="td-agency">
                    <div className="agency-wrap">
                      <div className="mini-avatar">{l.agencyName[0].toUpperCase()}</div>
                      <span className="agency-text">{l.agencyName}</span>
                    </div>
                  </td>
                  <td className="td-muted">{l.name}</td>
                  <td className="td-email">{l.email}</td>
                  <td className="td-muted">{l.niche || "—"}</td>
                  <td className="td-muted">{formatDate(l.createdAt)}</td>
                  <td>
                    {l.isVerified ? (
                      <span className="badge-verified">✓ Verified</span>
                    ) : (
                      <span className="badge-unverified-admin">Unverified</span>
                    )}
                  </td>
                  <td>
                    <div className="action-row">
                      <button
                        className={`action-btn ${l.isVerified ? "btn-unverify" : "btn-verify"}`}
                        onClick={() => toggleVerify(l)}
                        disabled={busy === l._id}
                      >
                        {l.isVerified ? "Unverify" : "Verify"}
                      </button>
                      <button
                        className="action-btn btn-delete"
                        onClick={() => deleteListing(l._id)}
                        disabled={busy === l._id}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
        .admin-root {
          min-height: 100vh;
          background: #f9fafb;
          font-family: 'DM Sans', sans-serif;
        }

        .admin-header {
          background: #1a1a1a;
          border-bottom: 1px solid #2d2d2d;
        }
        .header-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .header-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          font-weight: 800;
          color: #ff823c;
        }
        .logo-icon { font-size: 18px; }
        .admin-badge {
          background: rgba(255,130,60,0.15);
          border: 1px solid rgba(255,130,60,0.3);
          color: #ff823c;
          border-radius: 6px;
          padding: 2px 8px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .sign-out-btn {
          background: transparent;
          border: 1px solid #3d3d3d;
          color: #9ca3af;
          padding: 6px 14px;
          border-radius: 7px;
          font-size: 13px;
          cursor: pointer;
          font-family: inherit;
          transition: border-color 0.15s, color 0.15s;
        }
        .sign-out-btn:hover { border-color: #6b7280; color: white; }

        .admin-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 32px 24px;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }
        .stat-card {
          background: white;
          border: 1px solid #f0f0f0;
          border-radius: 12px;
          padding: 20px 24px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .stat-num {
          font-size: 32px;
          font-weight: 900;
          color: #1a1a1a;
          letter-spacing: -1px;
        }
        .stat-num.verified { color: #16a34a; }
        .stat-num.unverified { color: #ea580c; }
        .stat-label { font-size: 13px; color: #9ca3af; font-weight: 500; }

        .toolbar {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .section-title {
          font-size: 20px;
          font-weight: 800;
          color: #1a1a1a;
          flex: 1;
          margin: 0;
        }
        .search-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }
        .search-icon {
          position: absolute;
          left: 10px;
          font-size: 13px;
          pointer-events: none;
        }
        .search-input {
          border: 1.5px solid #e5e7eb;
          border-radius: 8px;
          padding: 8px 14px 8px 32px;
          font-size: 13px;
          font-family: inherit;
          outline: none;
          width: 240px;
        }
        .search-input:focus { border-color: #ff823c; }
        .refresh-btn {
          background: white;
          border: 1.5px solid #e5e7eb;
          border-radius: 8px;
          padding: 8px 16px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          color: #374151;
          font-family: inherit;
          transition: border-color 0.15s;
        }
        .refresh-btn:hover { border-color: #d1d5db; }

        .table-wrap {
          background: white;
          border-radius: 12px;
          border: 1px solid #f0f0f0;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          overflow-x: auto;
        }
        table { width: 100%; border-collapse: collapse; }
        th {
          padding: 12px 16px;
          text-align: left;
          font-size: 11px;
          font-weight: 700;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          background: #fafafa;
          border-bottom: 1px solid #f0f0f0;
        }
        td {
          padding: 14px 16px;
          font-size: 13.5px;
          border-bottom: 1px solid #f9f9f9;
          color: #1a1a1a;
          vertical-align: middle;
        }
        tr:last-child td { border-bottom: none; }
        tr.row-busy { opacity: 0.5; pointer-events: none; }
        .empty-row { text-align: center; color: #9ca3af; padding: 40px; }

        .td-agency { min-width: 160px; }
        .td-muted { color: #6b7280; }
        .td-email { font-size: 12.5px; color: #6b7280; }

        .agency-wrap { display: flex; align-items: center; gap: 10px; }
        .mini-avatar {
          width: 30px;
          height: 30px;
          background: linear-gradient(135deg, #ff823c, #ff6a1a);
          border-radius: 7px;
          color: white;
          font-size: 12px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .agency-text { font-weight: 600; }

        .badge-verified {
          background: #f0fdf4;
          color: #16a34a;
          border: 1px solid #bbf7d0;
          border-radius: 100px;
          padding: 3px 10px;
          font-size: 11px;
          font-weight: 700;
        }
        .badge-unverified-admin {
          background: #fff7ed;
          color: #ea580c;
          border: 1px solid #fed7aa;
          border-radius: 100px;
          padding: 3px 10px;
          font-size: 11px;
          font-weight: 600;
        }

        .action-row { display: flex; gap: 6px; }
        .action-btn {
          border: none;
          border-radius: 6px;
          padding: 5px 11px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          transition: opacity 0.15s;
        }
        .action-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .btn-verify { background: #f0fdf4; color: #16a34a; }
        .btn-verify:hover { background: #dcfce7; }
        .btn-unverify { background: #fff7ed; color: #ea580c; }
        .btn-unverify:hover { background: #ffedd5; }
        .btn-delete { background: #fef2f2; color: #dc2626; }
        .btn-delete:hover { background: #fee2e2; }

        @media (max-width: 768px) {
          .stats-row { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </div>
  );
}