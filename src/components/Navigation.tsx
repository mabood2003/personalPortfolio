"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
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
        scrolled ? "bg-gray-950/90 backdrop-blur border-b border-gray-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-white tracking-tight">
          {"<Portfolio />"}
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-400 hover:text-white flex flex-col gap-1.5 w-6"
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur border-t border-gray-800 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium tracking-wide uppercase"
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
