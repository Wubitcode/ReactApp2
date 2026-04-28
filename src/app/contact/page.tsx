"use client";

export default function ContactPage() {
  return (
   <main className="min-vh-100 bg-success bg-opacity-10 py-5">

      {/* ================= PAGE TITLE ================= */}
      <section className="text-center mb-5">
        <h1 className="fw-bold">Contact Me</h1>
        <p className="text-muted">
          Feel free to reach out for opportunities, collaboration, or questions.
        </p>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section
        className="bg-white p-4 rounded shadow-sm mx-auto"
        style={{ maxWidth: "600px" }}
      >

        <form
          onSubmit={(e) => {
            e.preventDefault(); // now allowed because this is a Client Component
            alert("Message sent!"); // optional feedback
          }}
        >

          {/* NAME */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* EMAIL */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* MESSAGE */}
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              rows={5}
              placeholder="Write your message here..."
              required
            />
          </div>

          {/* SUBMIT */}
          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>

        </form>
      </section>

      {/* ================= LINKS ================= */}
      <section className="text-center mt-5">

        <h5>Connect with me</h5>

        <div className="d-flex justify-content-center gap-3 flex-wrap mt-3">

          <a
            href="https://www.linkedin.com/in/wubit"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Wubitcode"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark"
          >
            GitHub
          </a>

          <a
            href="mailto:your.wubitg@gmail.com"
            className="btn btn-outline-success"
          >
            Email Me
          </a>

        </div>

      </section>

    </main>
  );
}