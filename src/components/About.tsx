import { personalInfo, skills } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-2">About Me</h2>
        <p className="text-indigo-400 font-mono text-sm mb-12">// who am I?</p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Bio */}
          <div>
            <p className="text-gray-400 text-lg leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-6">
            {skills.map((group) => (
              <div key={group.category}>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
