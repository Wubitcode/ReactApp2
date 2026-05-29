import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-vh-100" style={{ background: "#1a1f26", paddingBottom: "3rem" }}>

      {/* ================= HEADER SECTION (Dark Minimalist Box) ================= */}
      <section className="text-center py-5 px-3 mb-5" style={{ background: "#212529", borderBottom: "1px solid #2d3238" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h1 className="fw-bold text-white display-4 mb-3" style={{ letterSpacing: "-0.5px" }}>
            My Projects
          </h1>
          <p className="fs-6 text-light opacity-75 mx-auto" style={{ maxWidth: "750px", lineHeight: "1.6" }}>
            Showcasing my work in React, Angular, and PHP. My projects highlight my transition from classic web architecture to secure, modern full-stack development.
          </p>
        </div>
      </section>

      {/* ================= PROJECT GRID (Clean Crisp White Cards) ================= */}
      <div className="container">
        <div className="row g-4">

          {projects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4">

              {/* White Card Container matched precisely to your layout */}
              <div 
                className="card h-100 shadow-sm border-0 bg-white" 
                style={{ 
                  borderRadius: "8px",
                  overflow: "hidden"
                }}
              >

                {/* 🖼️ FIXED ASPECT RATIO IMAGE FRAME CONTAINER */}
                <div 
                  className="ratio ratio-16x9 w-100" // 💡 Bootstrap helper: forces a uniform 16:9 widescreen frame on every card
                  style={{ 
                    position: "relative", 
                    background: "#ffffff",
                    borderBottom: "1px solid #f1f3f5"
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }} // 💡 Overrides variance; fills the box perfectly to ensure uniformity
                    className="p-0" // Removed excess padding to allow the screenshots to align edge-to-edge seamlessly
                    priority
                  />
                </div>

                {/* CARD CONTENT (High Contrast Text) */}
                <div className="card-body d-flex flex-column p-4 bg-white">

                  {/* Project Title: Clean Bold Off-Black */}
                  <h3 className="fw-bold mb-3 font-sans" style={{ color: "#212529", fontSize: "1.3rem", letterSpacing: "-0.3px" }}>
                    {project.title === "CyberShop E-Commerce Platform" ? "CyberShop" : project.title.replace(" Application", "").replace(" Workflow System", "")}
                  </h3>

                  {/* Description: Highly Readable Soft Black */}
                  <p className="flex-grow-1 mb-4" style={{ color: "#495057", lineHeight: "1.6", fontSize: "0.95rem" }}>
                    {project.description}
                  </p>

                  {/* BOTTOM CTAS PANEL */}
                  <div className="mt-auto d-flex gap-2 pt-2">
                    
                    {/* VIEW CASE STUDY LINK */}
                    <Link
                      href={`/projects/${project.id}`}
                      className="btn btn-outline-primary btn-sm px-3 fw-semibold d-flex align-items-center justify-content-center"
                      style={{ 
                        borderRadius: "4px", 
                        borderColor: "#0d6efd", 
                        color: "#0d6efd",
                        background: "transparent",
                        fontSize: "0.85rem",
                        padding: "0.4rem 1rem"
                      }}
                    >
                      View
                    </Link>

                    {/* GITHUB SOURCE LINK (Hidden automatically if it's your live WordPress site) */}
                    {!project.github.includes("wordpress.com") && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-secondary btn-sm px-3 fw-semibold d-flex align-items-center justify-content-center"
                        style={{ 
                          borderRadius: "4px", 
                          borderColor: "#212529", 
                          color: "#212529",
                          background: "transparent",
                          fontSize: "0.85rem",
                          padding: "0.4rem 1rem"
                        }}
                      >
                        GitHub
                      </a>
                    )}

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>

    </main>
  );
}