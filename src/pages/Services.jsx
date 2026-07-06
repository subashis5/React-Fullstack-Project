import React from "react";
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Brain,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: <Code2 size={40} />,
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces using React.js, Tailwind CSS, HTML5, CSS3, and JavaScript.",
  },
  {
    icon: <Database size={40} />,
    title: "Backend Development",
    description:
      "Developing secure REST APIs with Java, Spring Boot, Hibernate, and MySQL for scalable web applications.",
  },
  {
    icon: <Globe size={40} />,
    title: "Full Stack Web Apps",
    description:
      "Creating complete web applications from frontend to backend with clean architecture and best practices.",
  },
  {
    icon: <Smartphone size={40} />,
    title: "Responsive Design",
    description:
      "Designing websites that provide a seamless experience across desktop, tablet, and mobile devices.",
  },
  {
    icon: <Brain size={40} />,
    title: "AI Integration",
    description:
      "Integrating AI APIs such as OpenAI and Gemini into web applications to build intelligent solutions.",
  },
  {
    icon: <Wrench size={40} />,
    title: "Maintenance & Support",
    description:
      "Improving performance, fixing bugs, and maintaining applications for long-term reliability.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen relative  text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-widest font-semibold">
            What I Do
          </p>

          <h2 className="text-5xl font-bold mt-3">
            My <span className="text-cyan-400">Services</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            I build modern, scalable, and user-friendly web applications using
            Java, Spring Boot, React.js, Tailwind CSS, and MySQL.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 hover:-translate-y-3 transition-all duration-300"
            >
              <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;