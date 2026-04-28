'use client'; // Required for interactive features like useState and useEffect

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects, Project } from "@/app/data/projects";

/**
 * HomePage Component
 * Features a simulated secure resume download protocol and portfolio showcase.
 */
export default function HomePage() {
  // State management for the "Secure Access" simulation
  // Levels: 'idle' (default), 'scanning' (verifying), 'restricted' (private)
  const [securityStatus, setSecurityStatus] = useState<"idle" | "scanning" | "restricted">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  /**
   * Handles the resume button click.
   * Simulates a multi-stage security credential check before denying access.
   */
  const handleResumeClick = () => {
    // Prevent multiple clicks while a scan is already in progress
    if (securityStatus !== "idle") return;

    setSecurityStatus("scanning");
    setStatusMessage("Verifying Request Credentials...");

    // Stage 1: Initial Handshake simulation
    setTimeout(() => {
      setStatusMessage("Checking Data Permissions...");
    }, 800);
    
    // Stage 2: Final denial (simulating that the file is locked for unauthorized users)
    setTimeout(() => {
      setSecurityStatus("restricted");
      setStatusMessage("Resume is currently private. Contact me for details.");
    }, 2000);
  };

  /**
   * Side effect to clean up the UI.
   * If access is restricted, resets the button to its 'idle' state after 8 seconds.
   */
  useEffect(() => {
    if (securityStatus === "restricted") {
      const timer = setTimeout(() => {
        setSecurityStatus("idle");
        setStatusMessage("");
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [securityStatus]);

  return (
    <main className="portfolio-bg">

      {/* ================= HERO SECTION ================= 
          Focuses on professional identity and branding.
      */}
      <section className="hero container text-center" style={{ padding: "80px 20px" }}>

        {/* Profile Image - Rounded with professional border */}
        <div className="profile-container" style={{ marginBottom: "2rem" }}>
          <Image
            src="/images/profile.png"
            alt="Sena"
            width={180}
            height={180}
            className="profile-img"
            priority
            style={{ borderRadius: "50%", border: "4px solid #0070f3" }}
          />
        </div>

        <h1 className="title" style={{ fontSize: "3rem", fontWeight: "bold" }}>
          Wubit | Mobile Web Developer
        </h1>

        <p className="subtitle" style={{ maxWidth: "700px", margin: "1.5rem auto", fontSize: "1.2rem", color: "#666" }}>
          Mobile Web Developer specializing in secure, scalable applications. 
          Expertise in React, Next.js, and Cybersecurity Engineering, 
          utilizing AI-assisted workflows to build modern digital solutions.
        </p>

        {/* Brand Focus Tags */}
        <p className="focus" style={{ fontWeight: "600", letterSpacing: "1px", marginBottom: "2rem" }}>
          🔐 SECURE SYSTEMS • ⚡ MODERN WEB APPS • 🤖 AI-DRIVEN DEV
        </p>

        {/* CTA Section */}
        <div className="hero-buttons" style={{ display: "flex", justifyContent: "center", gap: "20px", alignItems: "center", minHeight: "60px" }}>

          <Link href="/contact" className="btn-primary">
            Get In Touch
          </Link>

          {/* ================= SECURE RESUME BUTTON ================= 
              Uses the securityStatus state to change visual feedback.
          */}
          <div className="tooltip-container" style={{ position: "relative" }}>
            <button
              onClick={handleResumeClick}
              className={`btn-outline ${securityStatus === 'restricted' ? 'border-red' : ''}`}
              disabled={securityStatus === "scanning"}
              style={{
                padding: "12px 24px",
                cursor: securityStatus === "scanning" ? "wait" : "pointer",
                transition: "all 0.3s ease"
              }}
            >
              {/* Dynamic Button Text based on security state */}
              {securityStatus === "idle" && "Download Resume"}
              {securityStatus === "scanning" && "🔒 Checking Security..."}
              {securityStatus === "restricted" && "⚠️ Access Restricted"}
            </button>

            {/* Security Feedback Box: Appears below the button when clicked */}
            {securityStatus !== "idle" && (
              <div className={`security-box ${securityStatus}`}>
                <div className="security-header">
                  {/* Shows a loading spinner during 'scanning' phase */}
                  {securityStatus === "scanning" ? <span className="spinner"></span> : "🛑 SYSTEM MESSAGE"}
                </div>
                <p>{statusMessage}</p>
                {/* Provides a direct link to contact if access is denied */}
                {securityStatus === "restricted" && (
                  <Link href="/contact" className="security-cta">
                    Request Access via Contact Form →
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS ================= 
          Renders the top 2 projects from the data source.
      */}
      <section className="container projects-section" style={{ padding: "60px 20px" }}>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "3rem" }}>
          Featured Projects
        </h2>

        <div className="grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
          {projects.slice(0, 2).map((project: Project) => (
            <div className="card" key={project.id} style={{ border: "1px solid #eaeaea", borderRadius: "12px", overflow: "hidden" }}>
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                layout="responsive"
                className="card-img"
              />
              <div className="card-body" style={{ padding: "20px" }}>
                <h3 style={{ marginBottom: "10px" }}>{project.title}</h3>
                <p style={{ color: "#555", fontSize: "0.95rem", marginBottom: "20px" }}>{project.description}</p>
                <Link href={`/projects/${project.id}`} className="btn-outline">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: "3rem", textAlign: "center" }}>
          <Link href="/projects" className="btn-outline">
            View All Projects →
          </Link>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="container text-center" style={{ padding: "80px 20px", background: "#f9f9f9", borderRadius: "20px", marginTop: "40px" }}>
        <h2>Let’s Build Something Secure</h2>
        <p style={{ margin: "1rem 0 2rem" }}>
          Currently open to internships, freelance roles, and collaborative web projects.
        </p>
        <Link href="/contact" className="btn-primary">
          Start a Conversation
        </Link>
      </section>

      {/* Inline CSS Animations:
          - .spinner: Rotates for the 'scanning' phase.
          - .shake: Shakes the box for the 'restricted' phase.
          - .security-box: The floating black console window.
      */}
      <style jsx>{`
        .security-box {
          position: absolute;
          top: 55px;
          left: 50%;
          transform: translateX(-50%);
          width: 280px;
          background: #000;
          color: #10b981; /* Matrix green */
          padding: 15px;
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          font-size: 0.8rem;
          text-align: left;
          z-index: 50;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .security-box.restricted {
          border: 1px solid #ef4444; /* Alert red */
          color: #ef4444;
          animation: shake 0.3s ease-in-out;
        }
        .security-box.scanning {
          border: 1px solid #10b981;
        }
        .security-header {
          font-weight: bold;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .security-cta {
          display: block;
          margin-top: 10px;
          color: #fff;
          text-decoration: underline;
        }
        .spinner {
          width: 12px;
          height: 12px;
          border: 2px solid #10b981;
          border-top: 2px solid transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        .border-red {
          border-color: #ef4444 !important;
          color: #ef4444 !important;
        }
        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes shake {
          0%, 100% { transform: translateX(-50%); }
          25% { transform: translateX(-52%); }
          75% { transform: translateX(-48%); }
        }
      `}</style>
    </main>
  );
}