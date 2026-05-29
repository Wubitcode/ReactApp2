export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  details: string;
  tech: string[];
  github: string;
  demo: string;
  video?: string;
};

export const projects: Project[] = [
  {
    id: "cybershop",
    title: "CyberShop E-Commerce Platform",
    description: "A secure, full-stack e-commerce solution engineered with a custom administrative Security Hub and robust access control matrices.",
    image: "/images/project1.png",
    tech: ["Angular", "PHP Backend", "MySQL", "Stripe API", "RBAC", "Session Validation"],
    github: "https://github.com/Wubitcode/CyberShop-Capstone",
    demo: "",
    video: "/videos/project1.mp4",
    details: "This application represents a comprehensive, secure full-stack commerce architecture designed to bridge front-end consumer workflows with robust administrative back-office management. On the client side, I engineered an optimal user journey using Angular, featuring modular, high-performance components for product exploration and dynamic state management for cart tracking. For data layers, I structured relational schemas in MySQL to maintain normalized transaction records and authentication audit trails. The critical core of this platform is its specialized 'Security Hub' built in PHP, which enforces strong server-side inputs validation, parameter handling, and an implementation of Role-Based Access Control (RBAC). This ensures that administrative endpoints, order-fulfillment records, and user management systems remain fully isolated from basic customer privileges."
  },
  {
    id: "book-browser",
    title: "Book Browser Application",
    description: "A responsive client-side lookup tool leveraging RESTful API streaming pipelines and optimized client-side filtering algorithms.",
    image: "/images/project2.png",
    tech: ["Angular", "TypeScript", "RESTful APIs", "CSS3 Flexbox", "Input Sanitization"],
    github: "https://github.com/Wubitcode/AngularApp5",
    demo: "",
    details: "The Book Browser application focuses heavily on high-performance data consumption and client-side computational state. Built within the Angular framework, the application initializes live data-streaming pathways that connect directly to third-party RESTful APIs. To prevent UI lag when parsing thousands of catalog records, I developed asynchronous searching algorithms that filter, sort, and process JSON data chunks on-the-fly. On the presentation layer, I applied modern, flexible CSS layout properties to guarantee fluid layout transitions across diverse mobile screen widths and desktop monitors. Additionally, I implemented strict client-side form controls to filter strings and sanitize lookup values prior to transmission, maintaining an excellent balance of speed and defensive coding principles."
  },
  {
    id: "task-management",
    title: "Task Management Workflow System",
    description: "A synchronized productivity pipeline using state containers and active tracking views to coordinate tasks.",
    image: "/images/project3.png",
    tech: ["Angular", "State Management", "UI/UX Architecture", "JSON-Server Sync"],
    github: "https://github.com/Wubitcode/AngularApp2",
    demo: "",
    details: "Designed as an operational workflow hub, this application maps out personal productivity and project progression tracking using Angular logic. I constructed synchronous state routines to govern the lifecycle of single task entities—allowing users to instantiate, prioritize, filter, and archive operational items instantly without forcing a page refresh. To support continuous data state during development, I implemented a decoupled JSON-server backend, mocking asynchronous API calls and pipeline latency. The user experience features deep responsive layouts, maintaining optimal readability and action click paths whether deployed on small smartphone screens or wide developer desktop configurations."
  },
  {
    id: "incident-management",
    title: "Incident Management Logging System",
    description: "A secure PHP backend logging engine engineered for reporting, tracking, and auditing enterprise network alerts.",
    image: "/images/project4.png",
    tech: ["PHP Core", "MySQL", "Server-Side Validation", "Defensive Coding"],
    github: "https://github.com/Wubitcode/PHPAssignment5",
    demo: "",
    details: "Built to model corporate security event tracking, this platform is a pure PHP-driven logging ledger designed to process infrastructure incident alerts. I engineered robust server-side processing scripts to parse user entries, applying data sanitation protocols to intercept and neutralize SQL injection strings or Cross-Site Scripting (XSS) code vectors. The database structure comprises highly normalized MySQL tables configured with secure keys to maintain an immutable log of hardware faults and application errors. This project highlights a strong adherence to server-side software engineering guidelines and relational integrity tracking."
  },
  {
    id: "mood-tracker",
    title: "Mood Tracker Application",
    description: "A modern Next.js single-page deployment utilizing atomic component workflows and automatic cloud deployment tracks.",
    image: "/images/project5.png",
    tech: ["React", "Next.js", "Tailwind CSS", "Vercel Hosting", "Git Automation"],
    github: "https://github.com/Wubitcode/ReactApp1",
    demo: "",
    details: "This application functions as my primary central software engineering hub and active development environment. Built with React and Next.js, the infrastructure leverages atomic folder configurations where each dashboard mechanism acts as an isolated, reusable block. I established active hooks to handle state modifications, logging event timelines, and tracking UI switches instantly. The deployment structure is tied directly to cloud infrastructure via Vercel, meaning any version control push automatically triggers an optimization compiler that minifies code, assets, and stylesheets to deliver ultra-low page rendering speeds globally."
  },
  {
    id: "portfolio-hub",
    title: "Developer Portfolio Platform",
    description: "A modern Next.js single-page deployment utilizing atomic component workflows, responsive UI design, and automatic cloud deployment tracks.",
    image: "/images/project6.png", 
    tech: ["React", "Next.js", "TypeScript", "Bootstrap", "Vercel Deploy"],
    github: "https://github.com/Wubitcode/ReactApp2", 
    demo: "https://react-app2-teal.vercel.app/", 
    details: "• Engineered a high-performance developer portfolio using Next.js App Router and Server Components for maximized performance scores.\n\n• Designed a dual-theme dynamic layout combining dark aesthetic header fragments with clean, modern high-contrast white card presentation layers.\n\n• Developed customized dynamic routing handlers to manage case studies, automatically switching call-to-action pipelines based on the underlying architecture type.\n\n• Optimized media and responsive graphics rendering layout parameters using modern image container sizing properties to achieve fluid responsiveness across viewports."
  },
];