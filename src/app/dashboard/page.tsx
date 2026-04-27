"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  // ================= AUTH GUARD =================
  // This is a simple frontend protection layer.
  // It checks if an admin token exists before allowing access.
  useEffect(() => {
    const token = localStorage.getItem("admin_token");

    // If no token is found, redirect user to login page
    if (!token) {
      router.push("/adminlogin");
    }
  }, [router]);

  return (
    <main className="container py-5">

      {/* ================= DASHBOARD HEADER ================= */}
      <section className="mb-4">
        <h1 className="title">Admin Dashboard</h1>

        <p className="text-muted">
          Secure control panel for managing system data and user activity.
        </p>
      </section>

      {/* ================= DASHBOARD GRID =================
          This section represents admin features/modules.
          Each card can later be connected to real backend data.
      */}
      <div className="row g-4">

        {/* ================= MESSAGES MODULE =================
            For viewing contact form submissions or inquiries.
        */}
        <div className="col-md-4">
          <div className="card p-3">
            <h3>Messages</h3>
            <p>View and manage user submissions securely.</p>
          </div>
        </div>

        {/* ================= PROJECTS MODULE =================
            For managing portfolio or website projects.
        */}
        <div className="col-md-4">
          <div className="card p-3">
            <h3>Projects</h3>
            <p>Create, update, or remove portfolio items.</p>
          </div>
        </div>

        {/* ================= SETTINGS MODULE =================
            System configuration and admin preferences.
        */}
        <div className="col-md-4">
          <div className="card p-3">
            <h3>Settings</h3>
            <p>Manage system configuration and security settings.</p>
          </div>
        </div>

      </div>

      {/* ================= FUTURE EXTENSION NOTE =================
          
          - Role-based access control (RBAC)
          - Analytics dashboard
      */}

    </main>
  );
}