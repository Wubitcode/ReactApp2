/**
 * PROJECT TYPE DEFINITION
 * -----------------------
 * This defines the 'Contract' for your project data. 
 * Every project added to the array MUST follow this exact structure,
 * which ensures your ProjectDetail page always has the data it needs to render.
 */
export type Project = {
  id: string;          // Unique identifier for the URL (e.g., /projects/cybershop)
  title: string;       // The name displayed on cards and headers
  description: string; // A short 'elevator pitch' for the project grid
  image: string;       // Path to the project screenshot in /public/images/
  details: string;     // The full technical explanation (Case Study)
  tech: string[];      // An array of technologies used (for the tech stack list)
  github: string;      // Link to the source code
  demo: string;        // Link to the live demo or video walkthrough
  video?: string;
};

/**
 * PROJECTS DATA ARRAY
 * -------------------
 * This is my central database for the portfolio.
 * To add a new project, simply add a new object to this array.
 */
export const projects: Project[] = [
  {
    id: "cybershop", // Matches /projects/cybershop
    title: "Cybershop",
    description:
      "A high-security e-commerce platform featuring Role-Based Access Control (RBAC) and secure authentication.",
    image: "/images/project1.png",
    details:
      "A full-stack secure commerce solution focusing on identity and access management. Implemented RBAC to differentiate between admin and customer permissions, alongside encrypted session management to mitigate common web vulnerabilities.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "JWT Auth", "Security Engineering"],
    github: "https://github.com/Wubitcode/cybershop",
    demo: "#",
    video: "/vidieo/project1.mp4", // This links to actual file
  },
  {
    id: "book-browser",
    title: "Book Browser",
    description:
      "Angular-based library system with PHP API integration and dynamic data filtering.",
    image: "/images/project2.png",
    details:
      "A robust search application that bridges an Angular frontend with a PHP REST API. Features include sanitized search inputs to prevent injection attacks and dynamic record filtering for a seamless user experience.",
    tech: ["Angular", "PHP", "MySQL", "REST API", "Data Sanitization"],
    github: "https://github.com/Wubitcode/AngularApp5",
    demo: "#",
    // video: "/vidieo/project2.mp4", // Optional: Add when i have a second video
  },
];