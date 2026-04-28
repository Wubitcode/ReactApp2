export default function AboutPage() {
  return (
    <main className="min-vh-100 py-5" style={{ backgroundColor: "#eaf7ea" }}>

      {/* ================= HERO / HEADER ================= 
          Positions you immediately as a specialized developer. 
          The 'display-5' provides a strong visual entry point.
      */}
      <section className="text-center mb-5">
        <h1 className="fw-bold display-5">About Me</h1>

        <p className="text-muted fs-5">
          Full-Stack Developer | Cybersecurity & Web Development
        </p>

        <p className="text-muted">
          Based in Canada • Open to Internship Opportunities
        </p>
      </section>

      {/* ================= WHO I AM ================= 
          This section uses 'bg-white' and 'shadow-sm' to stand out 
          against the light layout, creating a clean "paper" effect.
      */}
      <section className="bg-white p-4 p-md-5 rounded shadow-sm mb-4">

        <h3 className="mb-3 fw-bold">Who I Am</h3>

        {/* Narrative: Connects Networking/Security background to Web Dev */}
        <p className="text-muted">
          I am a full-stack web developer with a background in cybersecurity and computer networking,
          focused on building secure and scalable web applications.
        </p>

        {/* The "Why": Shows curiosity and problem-solving skills */}
        <p className="text-muted">
          My interest in how systems are attacked and protected led me to explore web development,
          where I now design and develop applications that balance functionality with security.
        </p>

        {/* The "How": Lists the core tech stack clearly */}
        <p className="text-muted">
          I work with modern technologies such as React, Next.js, Angular, PHP, and MySQL,
          focusing on clean code, responsive design, and efficient backend integration.
        </p>

        {/* Brand Promise: The "Security-First" differentiator */}
        <p className="text-muted">
          I approach development with a <strong className="text-dark">security-first mindset</strong>,
          ensuring applications follow best practices and are resilient against common vulnerabilities.
        </p>

      </section>

      {/* ================= TECHNICAL SKILLS ================= 
          Using a Bootstrap Grid (row/col) to show expertise 
          in both Frontend and Backend development.
      */}
      <section className="bg-white p-4 p-md-5 rounded shadow-sm mb-4">

        <h3 className="mb-4 fw-bold">Technical Skills</h3>

        <div className="row g-3">

          {/* FRONTEND COLUMN */}
          <div className="col-md-6">
            <div className="border rounded p-3 h-100">
              <h5 className="fw-bold mb-3">Frontend</h5>
              <ul className="list-unstyled text-muted">
                <li>✔ HTML, CSS, Bootstrap</li>
                <li>✔ JavaScript & TypeScript</li>
                <li>✔ React & Next.js</li>
                <li>✔ Angular Framework</li>
              </ul>
            </div>
          </div>

          {/* BACKEND COLUMN: Highlights security-related backend skills */}
          <div className="col-md-6">
            <div className="border rounded p-3 h-100">
              <h5 className="fw-bold mb-3">Backend</h5>
              <ul className="list-unstyled text-muted">
                <li>✔ PHP & MySQL</li>
                <li>✔ REST API Integration</li>
                <li>✔ Database Design Basics</li>
                <li>✔ Authentication Concepts</li>
              </ul>
            </div>
          </div>

        </div>

      </section>

      {/* ================= CAREER GOAL ================= 
          Using 'bg-dark' to create a high-contrast "Conclusion" block. 
          This reinforces your focus on AI and production-level code.
      */}
      <section className="bg-dark text-white p-4 p-md-5 rounded shadow-sm">

        <h3 className="fw-bold mb-3">Career Goal</h3>

        <p className="mb-0">
          I am focused on growing as a full-stack developer at the intersection of web development,
          cybersecurity, and AI. My goal is to contribute to real-world projects, build production-level
          applications, and continuously improve my ability to create secure and scalable systems.
        </p>

      </section>

    </main>
  );
}