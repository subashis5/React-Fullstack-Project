import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  ArrowRight,
  Download,
  Mail,
} from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden pt-44 pb-24">

      {/* Background Glow */}
      <div className="absolute -top-40 left-0 w-96 h-96 rounded-full blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-500/20 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">

              <span className="w-2 h-2 rounded-full bg-green-400"></span>

              <span className="text-sm text-gray-300 tracking-wide uppercase">
                About Me
              </span>

            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-white">

              Building Modern

              <br />

              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">

                Full Stack

              </span>

              <br />

              Experiences

            </h1>

            <p className="mt-8 text-gray-400 text-lg leading-8 max-w-xl">

              Hello, I'm <span className="text-white font-semibold">Subashis
              Palai</span>, a passionate Full Stack Java Developer and BCA
              student. I love designing elegant interfaces and building
              scalable backend systems with React, Spring Boot, and MySQL.

            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition">

                Download Resume

                <Download size={18} />

              </button>

              <button className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 transition">

                Contact Me

                <ArrowRight size={18} />

              </button>

            </div>

            {/* Social */}

            <div className="flex gap-5 mt-10">

              <button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex justify-center items-center hover:bg-white hover:text-black transition">

                <FaGithub size={20} />

              </button>

              <button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex justify-center items-center hover:bg-blue-500 transition">

                <FaLinkedinIn size={20} />

              </button>

              <button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex justify-center items-center hover:bg-red-500 transition">

                <Mail size={20} />

              </button>

            </div>

          </div>

          {/* Right */}

          <div className="relative flex justify-center">

            {/* Outer Glow */}

            <div className="absolute w-[350px] h-[350px] rounded-full bg-blue-500/20 blur-[120px]" />

            {/* Profile Card */}

            <div className="relative w-[380px] h-[500px] rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">

              <img
                src="/profile.png"
                alt="profile"
                className="w-full h-full object-cover"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 -left-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

              <h2 className="text-white text-3xl font-bold">

                15+

              </h2>

              <p className="text-gray-400">

                Projects Completed

              </p>

            </div>

            {/* Floating Card */}

            <div className="absolute top-10 -right-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

              <h2 className="text-white text-3xl font-bold">

                2+

              </h2>

              <p className="text-gray-400">

                Years Learning

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutHero;