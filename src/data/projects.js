export type project = {
  id: string;
  title: string;
  description: string;
  image: string;
  details: string;
  tech: string[];
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    id: "cybershop",
    title: "Cybershop",
    description: "Secure e-commerce platform with RBAC and authentication.",
    image: "/images/project1.png",
    details:
      "Cybershop is a secure e-commerce system featuring authentication, role-based access control, and protected sessions.",
    tech: ["Next.js", "Security", "Auth"],
    github: "#",
    demo: "#",
  },
  {
    id: "book-browser",
    title: "Book Browser",
    description: "Angular-based library system with PHP API integration.",
    image: "/images/project2.png",
    details:
      "Book Browser allows secure browsing and filtering of books using a PHP backend API with sanitized input handling.",
    tech: ["Angular", "PHP", "API"],
    github: "#",
    demo: "#",
  },
];