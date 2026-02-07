"use client";

import { motion } from "framer-motion";
import { personalInfo, skills } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-2">About Me</h2>
          <p className="text-indigo-400 font-mono text-sm mb-12">// who am I?</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-lg leading-relaxed">
              {personalInfo.bio}
            </p>
          </motion.div>

          {/* Skills */}
          <div className="flex flex-col gap-6">
            {skills.map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
