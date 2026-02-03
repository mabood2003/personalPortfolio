import { experiences, education } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-2">Experience</h2>
        <p className="text-indigo-400 font-mono text-sm mb-12">// career & education</p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Work experience */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-6 border-b border-gray-800 pb-3">
              Work
            </h3>
            <div className="flex flex-col gap-8">
              {experiences.map((exp) => (
                <div key={`${exp.company}-${exp.role}`} className="relative pl-5 border-l-2 border-gray-800">
                  <div className="absolute -left-1.5 top-1.5 w-2 h-2 rounded-full bg-indigo-500" />
                  <p className="text-gray-500 text-xs font-mono mb-1">{exp.duration}</p>
                  <h4 className="text-white font-semibold">{exp.role}</h4>
                  <p className="text-indigo-400 text-sm mb-2">{exp.company}</p>
                  <ul className="flex flex-col gap-1">
                    {exp.description.map((line, i) => (
                      <li key={i} className="text-gray-500 text-sm flex items-start gap-2">
                        <span className="text-indigo-500 mt-1 shrink-0">›</span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-6 border-b border-gray-800 pb-3">
              Education
            </h3>
            <div className="flex flex-col gap-8">
              {education.map((edu) => (
                <div key={edu.institution} className="relative pl-5 border-l-2 border-gray-800">
                  <div className="absolute -left-1.5 top-1.5 w-2 h-2 rounded-full bg-indigo-500" />
                  <p className="text-gray-500 text-xs font-mono mb-1">{edu.duration}</p>
                  <h4 className="text-white font-semibold">{edu.degree}</h4>
                  <p className="text-indigo-400 text-sm mb-2">{edu.institution}</p>
                  <ul className="flex flex-col gap-1">
                    {edu.description.map((line, i) => (
                      <li key={i} className="text-gray-500 text-sm flex items-start gap-2">
                        <span className="text-indigo-500 mt-1 shrink-0">›</span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
