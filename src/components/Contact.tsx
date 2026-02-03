import { socialLinks } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-950">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-2">Get In Touch</h2>
        <p className="text-indigo-400 font-mono text-sm mb-8">// let's work together</p>

        <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto mb-12">
          I'm currently open to new opportunities. Whether you have a project in
          mind or just want to say hi — my inbox is always open.
        </p>

        <a
          href={socialLinks.email}
          className="inline-block px-10 py-4 border border-indigo-500 text-indigo-400 rounded-lg text-base font-medium hover:bg-indigo-500 hover:text-white transition-all duration-200"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
