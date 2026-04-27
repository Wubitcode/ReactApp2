import Image from "next/image";
import Link from "next/link";
/* Importing the centralized project data. 
   Using the '@' alias points directly to the project root for cleaner imports.
*/
import { projects, Project } from "@/app/data/projects";

export default function ProjectDetail({
  params,
}: {
  params: { id: string }; // 'params.id' comes from the URL (e.g., /projects/1)
}) {
  /* Logic: Finding the specific project object that matches the ID in the URL.
     This ensures that if a user visits /projects/1, they see 'CyberShop'.
  */
  const project: Project | undefined = projects.find(
    (p) => p.id === params.id
  );

  /* Error Handling: If a user types an ID that doesn't exist (like /projects/99),
     this "Guard Clause" prevents the app from crashing.
  */
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

      {/* Dynamic Title: Loads the specific title from my data file */}
      <h1 className="title">{project.title}</h1>

      {/* Main Project Visual: 
          This is where I would place high-quality screenshot 
          of the UI or the Admin Dashboard.
      */}
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={400}
        className="rounded shadow-lg mb-4" // Added styling for a professional look
        priority // Ensures this large image loads quickly
      />

      {/* Project Overviews: 
          'description' is the short summary, while 'details' provides 
          the deep dive into the security and technical challenges.
      */}
      <p className="subtitle">{project.description}</p>

      <div className="project-details">
        <p>{project.details}</p>
      </div>

      <h3>Tech Stack</h3>
      
      {/* Dynamic List: Iterates through the tech array (e.g., Angular, PHP, JWT) */}
      <ul className="tech-list">
        {project.tech.map((tech, index) => (
          <li key={index} className="text-muted">{tech}</li>
        ))}
      </ul>

      {/* Action Buttons: 
          Provides direct paths to the source code and the functional demo.
      */}
      <div className="hero-buttons mt-4">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
          View GitHub Code
        </a>

        {/* If a Live Demo isn't available, you could link this to a 
            demonstration video. 
        */}
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Live Demo / Video Walkthrough
        </a>
      </div>

      {/* Navigation: Allows easy return to the main gallery */}
      <div className="mt-5">
        <Link href="/projects" className="btn-outline">
          ← Back to All Projects
        </Link>
      </div>

    </main>
  );
}