"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-950/90 light:bg-white/90 backdrop-blur border-b border-gray-800 light:border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-white light:text-gray-900 tracking-tight">
          {"<Portfolio />"}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-400 light:text-gray-600 hover:text-white light:hover:text-gray-900 transition-colors duration-200 text-sm font-medium tracking-wide uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-400 light:text-gray-600 hover:text-white light:hover:text-gray-900 flex flex-col gap-1.5 w-6"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : "w-4"
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950/95 light:bg-white/95 backdrop-blur border-t border-gray-800 light:border-gray-200 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-400 light:text-gray-600 hover:text-white light:hover:text-gray-900 transition-colors duration-200 text-sm font-medium tracking-wide uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
