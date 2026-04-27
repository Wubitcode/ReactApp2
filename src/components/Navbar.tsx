"use client"; // Required because the navbar toggle (button) involves client-side interaction

import Link from "next/link";

export default function Navbar() {
  return (
    /* Navbar Styling:
       - navbar-expand-lg: Collapses the menu into a hamburger on medium/small screens.
       - navbar-dark bg-dark: Matches your professional "Cybersecurity" dark theme.
       - shadow-sm: Adds a subtle depth to separate the nav from the page content.
    */
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">

        {/* BRAND / LOGO 
            Using 'fw-bold' (font-weight: bold) to make your brand identity stand out.
        */}
        <Link className="navbar-brand fw-bold" href="/">
          My Portfolio
        </Link>

        {/* MOBILE TOGGLE BUTTON 
            - data-bs-toggle="collapse": Tells Bootstrap to hide/show the menu.
            - data-bs-target="#navMenu": Connects this button to the div with id "navMenu".
        */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* COLLAPSIBLE NAV LINKS 
            The 'id="navMenu"' must match the 'data-bs-target' above for the mobile menu to work.
        */}
        <div className="collapse navbar-collapse" id="navMenu">

          {/* Alignment & Spacing:
              - ms-auto: Pushes the links to the right side on desktop.
              - d-flex flex-column flex-lg-row: Vertical stacking on mobile, horizontal on desktop.
              - gap-3: Ensures buttons and links don't touch each other.
          */}
          <div className="ms-auto d-flex flex-column flex-lg-row gap-3 align-items-lg-center mt-3 mt-lg-0">

            <Link className="nav-link text-white" href="/">
              Home
            </Link>

            <Link className="nav-link text-white" href="/projects">
              Projects
            </Link>

            <Link className="nav-link text-white" href="/about">
              About
            </Link>

            <Link className="nav-link text-white" href="/contact">
              Contact
            </Link>

            {/* Admin Login Button:
                Using 'btn-warning' (yellow/gold) creates a strong visual contrast,
                making it clear that this is a restricted or special action area.
            */}
            <Link className="btn btn-warning btn-sm" href="/login">
              Admin Login
            </Link>

          </div>

        </div>

      </div>
    </nav>
  );
}