import React from "react";
import {
  Download,
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  Award,
  ArrowDownToLine,
} from "lucide-react";

import {
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiTailwindcss,
  SiMysql,
  SiHibernate,
} from "react-icons/si";

const Resume = () => {
const skills = [
  {
    icon: <FaJava />,
    name: "Java",
  },
  {
    icon: <SiSpringboot />,
    name: "Spring Boot",
  },
  {
    icon: <SiHibernate />,
    name: "Hibernate",
  },
  {
    icon: <FaReact />,
    name: "React",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind",
  },
  {
    icon: <FaJsSquare />,
    name: "JavaScript",
  },
  {
    icon: <FaHtml5 />,
    name: "HTML5",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS3",
  },
  {
    icon: <SiMysql />,
    name: "MySQL",
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
  },
];

  return (
    <section className="pt-40 pb-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400">
            Resume
          </span>

          <h1 className="text-5xl md:text-6xl font-black text-white mt-8">

            My Professional

            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Journey
            </span>

          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">

            Passionate Full Stack Java Developer focused on building
            modern, scalable, and user-friendly web applications.

          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:scale-105 transition"
          >
            <Download size={20} />

            Download Resume
          </a>

        </div>

        {/* Experience + Education */}

        <div className="grid lg:grid-cols-2 gap-10 mt-24">

          {/* Education */}

          <div className="rounded-[35px] bg-white/[0.03] border border-white/10 p-8">

            <div className="flex items-center gap-3">

              <GraduationCap className="text-blue-400" size={30} />

              <h2 className="text-3xl font-bold text-white">
                Education
              </h2>

            </div>

            <div className="mt-10 space-y-8">

              <div>

                <h3 className="text-xl text-white font-semibold">
                  Bachelor of Computer Applications
                </h3>

                <p className="text-blue-400">
                  Utkal University
                </p>

                <p className="text-gray-400 mt-2">
                  2023 - 2026
                </p>

              </div>

              <div>

                <h3 className="text-xl text-white font-semibold">
                  Higher Secondary
                </h3>

                <p className="text-blue-400">
                  Royal College, Bhadrak
                </p>

                <p className="text-gray-400 mt-2">
                  2021 - 2023
                </p>

              </div>

            </div>

          </div>

          {/* Experience */}

          <div className="rounded-[35px] bg-white/[0.03] border border-white/10 p-8">

            <div className="flex items-center gap-3">

              <BriefcaseBusiness
                className="text-blue-400"
                size={30}
              />

              <h2 className="text-3xl font-bold text-white">
                Experience
              </h2>

            </div>

            <div className="mt-10">

              <div>

                <h3 className="text-xl text-white font-semibold">
                  Full Stack Java Developer
                </h3>

                <p className="text-blue-400">
                  Personal Projects
                </p>

                <p className="text-gray-400 mt-4 leading-8">

                  Developing scalable web applications using React,
                  Spring Boot, Hibernate, MySQL, and REST APIs.
                  Passionate about creating clean UI and efficient backend systems.

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Skills */}

        <div className="mt-20 rounded-[35px] bg-white/[0.03] border border-white/10 p-10">

          <div className="flex items-center gap-3">

            <Code2 className="text-blue-400" />

            <h2 className="text-3xl font-bold text-white">
              Technical Skills
            </h2>

          </div>

         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-10">

  {skills.map((skill) => (

    <div
      key={skill.name}
      className="
      group
      rounded-2xl
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      p-5
      flex
      flex-col
      items-center
      justify-center
      gap-4
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-blue-400/40
      hover:bg-white/[0.05]
      "
    >

      <div className="text-5xl text-blue-400 group-hover:scale-110 transition">
        {skill.icon}
      </div>

      <p className="text-gray-300 font-medium text-sm">
        {skill.name}
      </p>

    </div>

  ))}

</div>

        </div>

        {/* Certifications */}

        <div className="mt-20 rounded-[35px] bg-white/[0.03] border border-white/10 p-10">

          <div className="flex items-center gap-3">

            <Award className="text-blue-400" />

            <h2 className="text-3xl font-bold text-white">
              Certifications
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="rounded-2xl border border-white/10 p-6">

              <h3 className="text-white font-semibold">
                NIELIT O Level
              </h3>

              <p className="text-gray-400 mt-2">
                Information Technology & Programming
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 p-6">

              <h3 className="text-white font-semibold">
                Infosys Springboard
              </h3>

              <p className="text-gray-400 mt-2">
                Java Programming
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 p-6">

              <h3 className="text-white font-semibold">
                IBM SkillsBuild
              </h3>

              <p className="text-gray-400 mt-2">
                Front-End Development Internship
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 p-6">

              <h3 className="text-white font-semibold">
                HP LIFE
              </h3>

              <p className="text-gray-400 mt-2">
                AI for Beginners
              </p>

            </div>

          </div>

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-[35px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/20 p-14 text-center">

          <ArrowDownToLine
            size={50}
            className="mx-auto text-blue-400"
          />

          <h2 className="text-4xl font-bold text-white mt-6">

            Interested in My Resume?

          </h2>

          <p className="text-gray-400 mt-5">

            Download my complete resume to explore my skills,
            education, projects, and certifications.

          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
          >

            <Download size={18} />

            Download Resume

          </a>

        </div>

      </div>

    </section>
  );
};

export default Resume;