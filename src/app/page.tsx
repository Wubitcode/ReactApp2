'use client'; // This directive allows the use of interactive features like the tooltip state

import { useState } from "react"; // Importing state to handle the visibility of the privacy note
import Link from "next/link";
import Image from "next/image";
import { projects, Project } from "@/app/data/projects";
export default function HomePage() {
  // State to track if the "Redaction" note should be visible when interacting with the resume button
  const [showNote, setShowNote] = useState(false);

  return (
    <main className="portfolio-bg">

      {/* ================= HERO SECTION ================= */}
      <section className="hero container text-center">

        <Image
          src="/images/profile.png"
          alt="Profile"
          width={180}
          height={180}
          className="profile-img"
          priority
        />

        <h1 className="title">Wubit | Mobile Web Developer</h1>

        <p className="subtitle">
          Mobile Web Developer with a background in Computer Networking and Cybersecurity Engineering. 
          I build secure, scalable applications using React, Next.js, Angular, Java, and PHP, 
          integrated with AI-assisted development workflows.
        </p>

        <p className="focus">
          🔐 Secure Systems • ⚡ Modern Web Apps • 🤖 AI-Assisted Development
        </p>

        <div className="hero-buttons">

          <Link href="/contact" className="btn-primary">
            Get In Touch
          </Link>

          {/* Wrapper for the Resume Button and its dynamic Privacy Note */}
          <div className="tooltip-container" style={{ position: 'relative', display: 'inline-block' }}>
            <a 
              href="/resume.pdf" 
              className="btn-outline" 
              download
              onMouseEnter={() => setShowNote(true)} // Shows note on hover
              onMouseLeave={() => setShowNote(false)} // Hides note when mouse leaves
              onClick={() => setShowNote(true)}       // Ensures mobile users see the note on tap
            >
              Download Resume
            </a>

            {/* Conditional Rendering: Only shows the note if showNote is true */}
            {showNote && (
              <div className="resume-tooltip">
                Note: This version is redacted for privacy. Full details available upon request.
              </div>
            )}
          </div>

        </div>

      </section>

      {/* ================= FEATURED PROJECTS ================= */}
      <section className="container projects-section">

        <h2 className="section-title">Featured Projects</h2>

        <div className="grid">

          {/* .slice(0, 2) limits the display to the first two projects in your data file */}
          {projects.slice(0, 2).map((project: Project) => (
            <div className="card" key={project.id}>

              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="card-img"
                style={{ height: 'auto' }} // Maintains aspect ratio for different image sizes
              />

              <div className="card-body">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <Link
                  href={`/projects/${project.id}`}
                  className="btn-outline"
                >
                  View Project
                </Link>

              </div>

            </div>
          ))}

        </div>

        <div className="text-center mt-4">
          <Link href="/projects" className="btn-outline">
            View All Projects →
          </Link>
        </div>

      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="container text-center mt-5">

        <h2>Let’s Work Together</h2>

        <p>
          I’m open to internships, freelance opportunities, and collaboration
          on modern secure web applications.
        </p>

        <div className="hero-buttons">

          <Link href="/contact" className="btn-primary">
            Contact Me
          </Link>

        </div>

      </section>

    </main>
  );
}