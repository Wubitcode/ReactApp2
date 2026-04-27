import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap CSS for grid systems and components
import BootstrapClient from "../components/BootstrapClient";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Configuring modern, high-performance fonts from Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata: This is crucial for search engine visibility and social media sharing
export const metadata: Metadata = {
  title: "Wubit Portfolio",
  description: "Professional portfolio of a Mobile Web Developer specializing in Secure & Scalable Applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Body Classes Breakdown:
          1. Font Variables: Applies our configured Geist fonts.
          2. d-flex flex-column: Uses Bootstrap Flexbox to stack content vertically.
          3. min-vh-100: Ensures the page is at least as tall as the screen.
          4. bg-light: Sets a clean, professional background color.
      */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} d-flex flex-column min-vh-100 bg-light`}
      >

        {/* Critical Component: Handles the hydration of Bootstrap's JavaScript features 
            (like the mobile hamburger menu and dropdowns) safely in a Next.js environment. 
        */}
        <BootstrapClient />

        {/* Persistent Navigation Bar - Stays at the top of every page */}
        <Navbar />

        {/* Main Content Area: 
            'flex-grow-1' ensures this section pushes the footer to the bottom even if the page content is short.
            'container' keeps the layout centered and aligned across all devices.
        */}
        <main className="container py-4 flex-grow-1">
          {children}
        </main>

        {/* Persistent Footer - Stays at the bottom of every page */}
        <Footer />

      </body>
    </html>
  );
}