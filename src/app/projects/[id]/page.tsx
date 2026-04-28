import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "@/app/data/projects";

export default function ProjectDetail({
  params,
}: {
  params: { id: string };
}) {
  // 🔎 Find the project that matches the URL id (e.g., /projects/1)
  const project: Project | undefined = projects.find(
    (p) => p.id === params.id
  );

  // ❌ If project not found, show error page instead of crashing
  if (!project) {
    return (
      <main className="text-center py-5">
        <h2>Project not found</h2>
        <Link href="/projects" className="btn-primary">
          Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="container py-5">

      {/* 🏷️ PROJECT TITLE */}
      <h1 className="title">{project.title}</h1>

      {/* 🖼️ MAIN PROJECT IMAGE */}
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={400}
        className="rounded shadow-lg mb-4"
        priority
      />

      {/* 📝 SHORT DESCRIPTION */}
      <p className="subtitle">{project.description}</p>

      {/* 📄 DETAILED DESCRIPTION */}
      <div className="project-details">
        <p>{project.details}</p>
      </div>

      {/* 🧠 TECH STACK SECTION */}
      <h3>Tech Stack</h3>
      <ul className="tech-list">
        {project.tech.map((tech, index) => (
          <li key={index} className="text-muted">
            {tech}
          </li>
        ))}
      </ul>

      {/* 🎬 VIDEO DEMO SECTION */}
      <h3 className="mt-5">Project Demo Video</h3>

      {/* 
        Video player:
        - src comes from project.video
        - stored inside /public/videos/
        - plays directly in browser
      */}
      <video
        controls
        width="800"
        className="rounded shadow-lg mb-4"
      >
        <source src={project.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔗 GITHUB LINK */}
      <div className="hero-buttons mt-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          View GitHub Code
        </a>
      </div>

      {/* 🔙 BACK BUTTON */}
      <div className="mt-5">
        <Link href="/projects" className="btn-outline">
          ← Back to All Projects
        </Link>
      </div>

    </main>
  );
}