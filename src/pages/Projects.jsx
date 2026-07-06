import React from "react";
import { ArrowUpRight, ExternalLink, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern developer portfolio built with React, Tailwind CSS, and Framer Motion featuring premium UI and smooth animations.",
    image: "/public/portfolio.png",
    tech: ["React", "Tailwind", "Framer Motion"],
    live: "#",
    github: "#",
  },
  {
    title: "InsightDB",
    description:
      "An AI-powered Text-to-SQL platform that converts natural language into SQL queries using Spring Boot and Gemini AI.",
    image: "/public/insightdb.png",
    tech: ["Spring Boot", "React", "MySQL", "Gemini"],
    live: "#",
    github: "#",
  },
  {
    title: "Blood Donation System",
    description:
      "A full-stack blood donation management platform with donor registration, search, and admin dashboard.",
    image: "/public/blood.png",
    tech: ["Java", "Spring Boot", "MySQL"],
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section className="pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-20">
          <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm">
            My Work
          </span>

          <h1 className="text-5xl md:text-6xl font-black text-white mt-8">
            Featured
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Projects
            </span>
          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in frontend, backend,
            AI integration, and full-stack development.
          </p>
        </div>

        {/* Cards */}

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-[35px] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:border-blue-400/30 transition duration-500">
              <div className="grid lg:grid-cols-2">
                {/* Image */}

                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                {/* Content */}

                <div className="p-10 flex flex-col justify-center">
                  <h2 className="text-4xl font-bold text-white">
                    {project.title}
                  </h2>

                  <p className="text-gray-400 leading-8 mt-6">
                    {project.description}
                  </p>

                  {/* Tech */}

                  <div className="flex flex-wrap gap-3 mt-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}

                  <div className="flex gap-5 mt-10">
                    <a
                      href={project.live}
                      className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
                      Live Demo
                      <ExternalLink size={18} />
                    </a>

                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition">
                      <FaGithub />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-24 rounded-[35px] bg-white/[0.03] border border-white/10 backdrop-blur-xl p-14 text-center">
          <Code2 size={50} className="mx-auto text-blue-400" />

          <h2 className="text-4xl font-bold text-white mt-8">
            Want to See More?
          </h2>

          <p className="text-gray-400 mt-5 max-w-xl mx-auto">
            Explore more of my open-source projects and experiments on GitHub.
          </p>

          <a
            href="https://github.com/"
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:scale-105 transition">
            Visit GitHub
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
