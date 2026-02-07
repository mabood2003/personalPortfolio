"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { socialLinks } from "@/data/portfolio";

// ─── Configuration ───────────────────────────────────────────────────────────
// Sign up at https://formspree.io, create a form, and paste your form ID below.
// Example: "xrgvknqp"
const FORMSPREE_ID = "YOUR_FORMSPREE_ID";
// ─────────────────────────────────────────────────────────────────────────────

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const isConfigured = FORMSPREE_ID !== "YOUR_FORMSPREE_ID";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isConfigured) {
      const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      );
      window.location.href = `mailto:mabood@uwo.ca?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-gray-950">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-2">Get In Touch</h2>
          <p className="text-indigo-400 font-mono text-sm mb-8">
            // let&apos;s work together
          </p>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto text-center mb-12">
            I&apos;m currently open to new opportunities. Whether you have a
            project in mind or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 border border-green-800 rounded-xl p-8 text-center"
          >
            <svg
              className="w-12 h-12 text-green-400 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-white text-xl font-semibold mb-2">
              Message Sent!
            </h3>
            <p className="text-gray-400 mb-6">
              Thanks for reaching out. I&apos;ll get back to you soon.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What's on your mind?"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm">
                Something went wrong. Please try again or{" "}
                <a
                  href={socialLinks.email}
                  className="underline hover:text-red-300"
                >
                  email me directly
                </a>
                .
              </p>
            )}

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto px-10 py-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              <span className="text-gray-600 text-sm">or</span>

              <a
                href={socialLinks.email}
                className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
              >
                Email me directly
              </a>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
