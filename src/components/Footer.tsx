export default function Footer() {
  return (
    /* Footer Styling:
       - bg-dark: Deep background to match the "Dark Mode" theme.
       - text-white: Ensures high contrast for readability.
       - text-center: Aligns text to the middle for a balanced look.
       - py-4: Adds vertical padding for a spacious feel.
       - mt-5: Adds top margin to separate the footer from the main content.
    */
    <footer className="bg-dark text-white text-center py-4 mt-5">

      {/* Dynamic Copyright Line:
          - new Date().getFullYear(): Automatically updates the year (2026) 
            so the site never looks outdated to recruiters.
          - mb-1: Small bottom margin to separate from the line below.
      */}
      <p className="mb-1">
        © {new Date().getFullYear()} Wubit Portfolio | Built with Next.js & Bootstrap
      </p>

      {/* Tech Stack Credit:
          - text-muted: Makes this line slightly dimmer to keep the focus on your name above.
          - mb-0: Removes the default bottom margin for a tighter fit.
      */}
      <p className="mb-0 text-muted">
        Built with React, Next.js & Bootstrap
      </p>

    </footer>
  );
}