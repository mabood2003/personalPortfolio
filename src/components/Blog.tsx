"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/data/portfolio";

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 bg-stone-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-2">Blog</h2>
          <p className="text-amber-400 font-mono text-sm mb-12">
            // thoughts & writeups
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.a
              key={post.title}
              href={post.url || undefined}
              target={post.url ? "_blank" : undefined}
              rel={post.url ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group bg-stone-900 border border-stone-800 rounded-xl p-6 flex flex-col gap-4 transition-colors duration-200 ${
                post.url
                  ? "hover:border-amber-800 cursor-pointer"
                  : "cursor-default"
              }`}
            >
              <div className="flex items-center gap-3 text-xs text-stone-500">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-stone-700" />
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-white font-semibold text-lg leading-snug group-hover:text-amber-400 transition-colors">
                {post.title}
              </h3>

              <p className="text-stone-500 text-sm leading-relaxed flex-1">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-amber-400 bg-amber-950 border border-amber-900 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {post.url && (
                <span className="text-amber-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read more
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
