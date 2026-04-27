"use client"; // Required because we will later add state, validation, and interactivity

import { useState } from "react";

export default function LoginPage() {
  // ================= STATE MANAGEMENT =================
  // These hold user input before sending to backend authentication API
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // ================= FORM SUBMIT HANDLER =================
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // NOTE:
    // In real applications, this is where you call your backend:
    // POST /api/auth/login
    console.log("Login attempt:", { email, password });

    // NEVER authenticate directly in frontend in production.
  };

  return (
    <main className="container mt-5">

      {/* ================= LOGIN WRAPPER =================
          Centered card mimicking real admin dashboards (e.g. AWS, GitHub Admin)
      */}
      <div className="row justify-content-center">
        <div className="col-md-5">

          <div className="card shadow-lg p-4 border-0">

            {/* ================= HEADER ================= */}
            <h2 className="text-center mb-2">Admin Secure Login</h2>

            <p className="text-muted text-center small mb-4">
              Authorized access only • Session is monitored
            </p>

            {/* ================= LOGIN FORM ================= */}
            <form onSubmit={handleLogin}>

              {/* EMAIL FIELD */}
              <div className="mb-3">
                <label className="form-label">Email Address</label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="admin@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="username"
                  required
                />
              </div>

              {/* PASSWORD FIELD */}
              <div className="mb-3">
                <label className="form-label">Password</label>

                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter secure password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />

                {/* Show/Hide password toggle (real-world UX feature) */}
                <div className="form-check mt-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={() => setShowPassword(!showPassword)}
                    id="showPassword"
                  />
                  <label className="form-check-label" htmlFor="showPassword">
                    Show password
                  </label>
                </div>
              </div>

              {/* SECURITY NOTICE */}
              <div className="alert alert-warning small">
                ⚠️ This system is protected. Unauthorized access attempts are logged.
              </div>

              {/* LOGIN BUTTON */}
              <button type="submit" className="btn btn-dark w-100">
                Secure Login
              </button>

              {/* FORGOT PASSWORD */}
              <div className="text-center mt-3">
                <a href="/forgot-password" className="small text-decoration-none">
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