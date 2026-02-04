// =============================================================================
// PORTFOLIO DATA — Edit this file to customize your portfolio content.
// All text, links, and project info lives here.
// =============================================================================

export const personalInfo = {
  name: "Mohamed Abood",
  title: "Software Engineer",
  tagline: "Building scalable web applications and ML-powered solutions",
  bio: "I'm a Software Engineering student at the University of Western Ontario with hands-on industry experience at Bell Canada. I've built and maintained production web applications serving 100+ users, migrated legacy systems to modern tech stacks, and developed ML-based prediction models. I enjoy working across the full stack — from RESTful API design and database migrations to data pipelines and front-end interfaces.",
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Vue.js", "Angular", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    category: "Backend & Languages",
    items: ["Java", "Python", "C#", "Node.js", ".NET", "C++", "SQL"],
  },
  {
    category: "Data & ML",
    items: ["Pandas", "NumPy", "TensorFlow", "Scikit-learn", "Seaborn", "Matplotlib"],
  },
  {
    category: "Tools & Cloud",
    items: ["Git", "AWS", "Google Cloud", "PostgreSQL", "MongoDB", "MySQL"],
  },
];

export const experiences = [
  {
    company: "Bell Canada (BCE Inc)",
    role: "Student, Software Developer",
    duration: "May 2024 – Present",
    description: [
      "Developed and maintained a web application managing project funding, assessments, and capacity planning for over $600M in Bell projects",
      "Migrated a legacy .NET Framework app to a Vue.js (TypeScript) front end with a C# backend, supporting 100+ active users across Bell",
      "Transformed the database from Microsoft SQL Server to PostgreSQL and implemented the first daily backup system, ensuring 24-hour recovery",
      "Engineered RESTful APIs in C# for the Vue.js frontend, decreasing report access time for large datasets by 10+ seconds",
    ],
  },
  {
    company: "University of Western Ontario",
    role: "Web Developer",
    duration: "Sep 2023 – Apr 2024",
    description: [
      "Developed and maintained the Chemical Engineering department website used by 200+ students for tracking upcoming and past events",
      "Built pages covering program information, event listings, and event history using HTML, CSS, and JavaScript",
    ],
  },
  {
    company: "Bell Canada (BCE Inc)",
    role: "Student, Software Developer",
    duration: "May 2023 – Aug 2023",
    description: [
      "Built a C# .NET MVC time resourcing tool that enabled employees to manage monthly allocations, reducing unallocated hours by 4 per employee on average",
      "Deployed 300+ bug fixes and enhancements across two Bell web applications in a Linux environment, reducing user-reported issues by 15%",
      "Optimized data access layers by restructuring queries and refining database calls, reducing data-related errors by 12%",
    ],
  },
];

export const education = [
  {
    institution: "University of Western Ontario",
    degree: "B.E.Sc. in Software Engineering",
    duration: "Sep 2021 – Apr 2026",
    description: [
      "3.8 GPA — Dean's Honour List 3 times",
      "Lorraine Ivey Scholarship & Entrance Scholarship recipient",
      "Coursework: Algorithms & Data Structures, Software Construction & Design, Database Management, Information Security, Cloud Computing, Machine Learning, Deep Learning & Computer Vision, Operating Systems, Computer Networks",
    ],
  },
];

export const projects = [
  {
    title: "CRE Green Certification Navigator",
    description:
      "A GenAI-powered system that assesses commercial buildings against green certification standards (LEED, BOMA BEST, WELL) and generates upgrade roadmaps with cost estimates and ROI projections.",
    techStack: ["Python", "GenAI", "Pandas", "Scikit-learn"],
    github: "",
    live: "",
  },
  {
    title: "TikTok Trend Rater",
    description:
      "An ML-based virality prediction system trained on ~50K short-form videos, classifying multi-class trend likelihood using engagement velocity, interaction ratios, and sentiment features — achieving 84% holdout accuracy.",
    techStack: ["Python", "XGBoost", "Scikit-learn", "SHAP", "SMOTE"],
    github: "",
    live: "",
  },
];

export const socialLinks = {
  github: "https://github.com/mabood2003",
  linkedin: "https://linkedin.com/in/Mohamed-abood",
  email: "mailto:mabood@uwo.ca",
};
