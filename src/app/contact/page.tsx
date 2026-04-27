export default function ContactPage() {
  return (
    <main>

      {/* ================= PAGE TITLE ================= 
          Clean and centered header to set a welcoming tone.
      */}
      <section className="text-center mb-5">
        <h1 className="fw-bold">Contact Me</h1>
        <p className="text-muted">
          Feel free to reach out for opportunities, collaboration, or questions.
        </p>
      </section>

      {/* ================= CONTACT FORM SECTION ================= 
          Using 'bg-white' and 'shadow-sm' for a clean, professional card layout.
      */}
      <section className="bg-white p-4 rounded shadow-sm">

        {/* FORM (UI only)
            Note: For a production-ready 'Security-First' app, we would 
            eventually add CSRF protection and input sanitization here.
        */}
        <form>

          {/* Name input - Standard text field */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              required // Added 'required' attribute for basic client-side validation
            />
          </div>

          {/* Email input - Validates email format automatically */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message input - Multi-line text area */}
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              rows={4}
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          {/* Submit button 
              'type="button"' is used here to prevent page refresh since 
              there is no backend handling this specific assignment form yet.
          */}
          <button type="button" className="btn btn-primary">
            Send Message
          </button>

        </form>

      </section>

      {/* ================= CONTACT LINKS ================= 
          Direct links to professional social platforms. 
          The 'flex-wrap' class ensures buttons stack nicely on mobile.
      */}
      <section className="text-center mt-5">

        <h5>Connect with me</h5>

        <div className="d-flex justify-content-center gap-3 flex-wrap mt-3">

          {/* LinkedIn Link:
              'rel="noopener noreferrer"' is a security best practice 
              to prevent tab-napping attacks when opening external links.
          */}
          <a
            href="https://www.linkedin.com/in/wubit"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            LinkedIn
          </a>

          {/* GitHub Link */}
          <a
            href="https://github.com/Wubitcode"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark"
          >
            GitHub
          </a>

          {/* Email Direct Link:
              Opens the user's default email client pre-addressed to you.
          */}
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