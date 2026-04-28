import Image from "next/image";
import Link from "next/link";

/* ============================================================
   PROJECT DATA 
   ------------------------------------------------------------
   This array acts as 'Single Source of Truth'. 
   In a production app.
   ============================================================ */
const projects = [
  {
    id: "1",
    title: "CyberShop",
    description: "Secure e-commerce platform featuring Role-Based Access Control (RBAC), PHP backend, and Angular frontend.",
    image: "/images/project1.png",
    github: "https://github.com/Wubitcode/cybershop",
    video: "/videos/project1.mp4"
  },
  {
    id: "2",
    title: "Book Browser",
    description: "Angular-based search application utilizing REST API integration and dynamic data filtering.",
    image: "/images/project2.png",
    github: "https://github.com/Wubitcode/AngularApp5",
  },
  {
    id: "3",
    title: "Task Management",
    description: "State-managed task tracking system built with Angular for efficient productivity workflows.",
    image: "/images/project3.png",
    github: "https://github.com/Wubitcode/AngularApp2",
  },
  {
    id: "4",
    title: "Incident Management",
    description: "PHP-driven tracking system designed for monitoring and logging technical incidents.",
    image: "/images/project4.png",
    github: "https://github.com/Wubitcode/PHPAssignment5",
  },
  {
    id: "5",
    title: "Mood Tracker",
    description: "Interactive React application focused on user state management and responsive UI components.",
    image: "/images/project5.png",
    github: "https://github.com/Wubitcode/ReactApp1",
  },
  {
    id: "6",
    title: "Customer Management",
    description: "Backend-focused system for managing relational customer data with secure PHP processing.",
    image: "/images/project6.png",
    github: "https://github.com/Wubitcode/PHPAssignment3",
  },
];

export default function ProjectsPage() {
  return (
   <main className="min-vh-100 bg-dark text-light py-5">

      {/* ================= PAGE HEADER ================= */}
      <section className="text-center mb-5">
        <h1 className="fw-bold">My Projects</h1>
        <p className="text-light mt-3">
          Showcasing my work in React, Angular, and PHP. My projects highlight my transition 
          from classic web architecture to secure,modern full-stack development.
        </p>
      </section>

      {/* ================= PROJECT GRID ================= 
          Using Bootstrap's 'row' and 'g-4' (gutter) for consistent spacing.
      */}
      <div className="row g-4">

        {projects.map((project) => (
          /* Responsive Column Logic:
             - col-12: Full width on mobile.
             - col-md-6: Two columns on tablets.
             - col-lg-4: Three columns on large desktops.
          */
          <div key={project.id} className="col-12 col-md-6 col-lg-4">

            {/* Project Card: 'h-100' ensures all cards in a row have the same height */}
            <div className="card h-100 shadow-sm border-0">

              {/* PROJECT IMAGE 
                  Next.js Image component provides automatic optimization and lazy loading.
              */}
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={250}
                className="card-img-top"
                style={{ objectFit: "cover" }} // Ensures images fill the area without stretching
              />


              {/* PROJECT CONTENT 
                  'd-flex flex-column' with 'mt-auto' on the buttons ensures 
                  the buttons always align at the bottom of the card.
              */}
              <div className="card-body d-flex flex-column">

                <h5 className="fw-bold">{project.title}</h5>

                <p className="text-muted">
                  {project.description}
                </p>

                {/* ACTION BUTTONS */}
                <div className="mt-auto d-flex gap-2">

                  {/* VIEW DETAILS: Links to the individual page */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="btn btn-outline-primary btn-sm"
                  >
                    View 
                  </Link>

                  {/* GITHUB: Direct access to the source code for technical review */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-sm"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

    </main>
  );
}