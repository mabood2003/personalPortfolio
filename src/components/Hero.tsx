"use client";

import Image from "next/image";
import { personalInfo, socialLinks } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 text-center relative">
      {/* Subtle gradient orb */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-indigo-600 opacity-10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl">
        {/* Profile Photo */}
        <div className="mb-8">
          <div className="relative w-36 h-36 mx-auto">
            <Image
              src="/personalPortfolio/profile.png"
              alt={personalInfo.name}
              fill
              className="rounded-full object-cover border-4 border-gray-800 shadow-2xl"
              priority
            />
            <div className="absolute inset-0 rounded-full ring-2 ring-indigo-500/30 ring-offset-4 ring-offset-gray-950" />
          </div>
        </div>

        <p className="text-indigo-400 text-sm font-mono tracking-widest uppercase mb-4">
          Hello, world. I'm
        </p>
        <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
          {personalInfo.name}
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-500 mt-2">
          {personalInfo.title}
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto mt-6 leading-relaxed">
          {personalInfo.tagline}
        </p>

        {/* Social icons row */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href={socialLinks.email}
            className="text-gray-500 hover:text-white transition-colors duration-200"
            aria-label="Email"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>

        {/* CTA */}
        <a
          href="#projects"
          className="inline-block mt-10 px-8 py-3 border border-indigo-500 text-indigo-400 rounded-lg text-sm font-medium hover:bg-indigo-500 hover:text-white transition-all duration-200"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
