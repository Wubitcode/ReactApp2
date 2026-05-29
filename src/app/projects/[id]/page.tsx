import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "@/app/data/projects";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const resolvedParams = await params;
  const project: Project | undefined = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    return (
      <main className="text-center py-5 min-vh-100 d-flex flex-column justify-content-center align-items-center" style={{ background: "#0d1117" }}>
        <h2 className="text-danger mb-4 fw-bold">Project Not Found</h2>
        <Link href="/projects" className="btn btn-success fw-bold px-4 py-2">
          ← Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="min-vh-100 py-5" style={{ background: "linear-gradient(135deg, #0d1117 0%, #161b22 100%)", color: "#ffffff" }}>
      <div className="container px-4" style={{ maxWidth: "1000px" }}>

        {/* 🔙 BACK BUTTON */}
        <div className="mb-4">
          <Link 
            href="/projects" 
            className="btn btn-outline-light btn-sm d-inline-flex align-items-center gap-2 px-3 py-2"
            style={{ borderRadius: "8px", borderColor: "rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.03)", color: "#ffffff" }}
          >
            ← Back to All Projects
          </Link>
        </div>

        {/* 🏷️ FIXED: PROJECT TITLE WITH MAXIMUM CONTRAST */}
        <h1 className="display-4 fw-bold mb-3" style={{ color: "#ffffff", letterSpacing: "-1px", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
          {project.title}
        </h1>
        
        {/* FIXED: HIGH CONTRAST NEON TECH BADGES */}
        <div className="d-flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span 
              key={index} 
              className="badge font-monospace fw-bold" 
              style={{ 
                fontSize: "0.85rem", 
                background: "#042f1a", 
                color: "#10b981",
                border: "1px solid #059669",
                padding: "0.6rem 1rem",
                borderRadius: "6px"
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 🖼️ SCREENSHOT CASE STUDY FRAME */}
        <div 
          className="mb-4 p-2 shadow-lg" 
          style={{ 
            position: "relative", 
            width: "100%", 
            height: "500px", 
            background: "#0d1117", 
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            style={{ objectFit: "contain" }}
            className="rounded"
            priority
          />
        </div>

        {/* 📝 FIXED: INTRODUCTORY DESCRIPTION IN PURE BRIGHT WHITE */}
        <div className="mb-5 p-4 shadow-sm" style={{ backgroundColor: "rgba(22, 27, 34, 0.8)", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
          <p style={{ color: "#f8fafc", lineHeight: "1.8", fontSize: "1.2rem", margin: 0, fontWeight: "400" }}>
            {project.description}
          </p>
        </div>

        {/* 📄 ULTRA-READABLE TECHNICAL CASE STUDY CONTAINER */}
        <div 
          className="p-4 p-md-5 rounded mb-5 shadow-lg" 
          style={{ 
            background: "rgba(13, 17, 23, 0.9)", 
            borderLeft: "4px solid #10b981", 
            borderRadius: "4px 12px 12px 4px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            borderRight: "1px solid rgba(255,255,255,0.05)",
            borderBottom: "1px solid rgba(255,255,255,0.05)"
          }}
        >
          <h3 className="fw-bold mb-4" style={{ color: "#10b981", letterSpacing: "-0.5px" }}>
            Technical Contributions & Architecture
          </h3>
          <p style={{ color: "#e2e8f0", lineHeight: "2.0", fontSize: "1.1rem", whiteSpace: "pre-line", margin: 0 }}>
            {project.details}
          </p>
        </div>

        {/* 🎬 RESPONSIVE VIDEO DEMO PLAYER */}
        {project.video && (
          <div className="mb-5">
            <h3 className="fw-bold mb-4" style={{ color: "#ffffff", letterSpacing: "-0.5px" }}>
              Application Demonstration Video
            </h3>
            <div className="ratio ratio-16x9 shadow-lg border border-secondary border-opacity-25" style={{ borderRadius: "14px", overflow: "hidden", background: "#000" }}>
              <video 
                key={project.id} // 💡 Forces the DOM to rebuild the media stream link safely
                controls 
                preload="metadata" 
                playsInline 
                className="w-100 h-100"
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        {/* 🔗 ACTION ACTION BUTTON PIPELINE */}
        <div className="mt-5 pt-4 d-flex flex-wrap gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success btn-lg fw-bold px-5 py-3 text-dark d-inline-flex align-items-center"
            style={{ borderRadius: "8px", boxShadow: "0 4px 14px rgba(16, 185, 129, 0.3)" }}
          >
            Launch Live Showcase Hub →
          </a>

          {!project.github.includes("wordpress.com") && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg fw-bold px-5 py-3 d-inline-flex align-items-center"
              style={{ borderRadius: "8px", borderColor: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.05)", color: "#ffffff" }}
            >
              Review GitHub Code
            </a>
          )}
        </div>

      </div>
    </main>
  );
}