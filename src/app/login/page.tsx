"use client"; 
// ============================================================
// CLIENT COMPONENT
// ------------------------------------------------------------
// Required because this page uses React hooks (useState)
// and interactive behavior (form handling, toggle password).
// ============================================================

import { useState } from "react";

export default function LoginPage() {

  // ============================================================
  // STATE MANAGEMENT
  // ------------------------------------------------------------
  // These values store user input before sending to backend API.
  // In real applications, this data is sent to authentication server.
  // ============================================================
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Controls password visibility toggle (UX feature)
  const [showPassword, setShowPassword] = useState(false);

  // ============================================================
  // FORM SUBMISSION HANDLER
  // ------------------------------------------------------------
  // Prevents page reload and handles login logic.
  // In production: send data to backend (JWT / session auth).
  // ============================================================
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TEMP DEBUG ONLY
    // Replace this with API call in real system:
    // POST /api/auth/login
    console.log("Login attempt:", { email, password });

    // NEVER authenticate users in frontend in production
  };

  return (
    <main className="container mt-5">
      

      {/* =========================================================
         LOGIN WRAPPER
         ---------------------------------------------------------
         Centers login card on screen using Bootstrap grid system.
         Mimics real admin dashboards (GitHub, AWS, etc.).
      ========================================================= */}
      <div className="row justify-content-center">
        <div className="col-md-5">

          {/* ================= LOGIN CARD ================= */}
          <div className="card shadow-lg p-4 border-0">

            {/* ================= HEADER ================= */}
            <h2 className="text-center mb-2">
              Admin Secure Login
            </h2>

            <p className="text-muted text-center small mb-4">
              Authorized access only • Session is monitored
            </p>

            {/* ================= LOGIN FORM ================= */}
            <form onSubmit={handleLogin}>

              {/* ================= EMAIL FIELD ================= */}
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="username"
                  required
                />
              </div>

              {/* ================= PASSWORD FIELD ================= */}
              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  Password
                </label>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter secure password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />

                {/* ================= PASSWORD TOGGLE ================= */}
                <div className="form-check mt-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="showPassword"
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  <label className="form-check-label" htmlFor="showPassword">
                    Show password
                  </label>
                </div>
              </div>

              {/* ================= SECURITY NOTICE ================= */}
              <div className="alert alert-warning small">
                ⚠️ This system is protected. Unauthorized access attempts are logged.
              </div>

              {/* ================= LOGIN BUTTON ================= */}
              <button type="submit" className="btn btn-dark w-100">
                Secure Login
              </button>

              {/* ================= FORGOT PASSWORD ================= */}
              <div className="text-center mt-3">
                <a
                  href="/forgot-password"
                  className="small text-decoration-none"
                >
                  Forgot password?
                </a>
              </div>

            </form>

          </div>
        </div>
      </div>
    </main>
  );
}