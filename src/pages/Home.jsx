import React from "react";
import { FaArrowRight, FaPlay, FaCode, FaRocket, FaDatabase } from "react-icons/fa";
import { Sparkles } from "lucide-react";



const Home = () => {
  return (
<div className="">
      {/* Background Blur */}
      <div className="absolute -top-40 -left-32 w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-500/20 rounded-full blur-[140px]" />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-52 pb-28">

        <div className="flex flex-col items-center text-center">

          {/* Badge */}
<div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8">
  <Sparkles size={18} className="text-blue-400" />
  <span className="text-gray-300 font-medium">
    Build Faster with Modern Technology
  </span>
</div>

          {/* Heading */}

          <h1 className="text-6xl md:text-7xl font-black leading-tight max-w-5xl">

            Build

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {" "}Beautiful{" "}
            </span>

            Full Stack Applications

          </h1>

          <p className="mt-8 text-gray-400 text-xl max-w-2xl leading-8">

            Craft stunning, scalable and modern web applications using
            React, Spring Boot and cutting-edge technologies.

          </p>

          {/* Buttons */}

          <div className="flex gap-5 mt-12">

            <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">

              Get Started

              <FaArrowRight />

            </button>

            <button className="flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-full hover:bg-white/10 transition">

              <FaPlay />

              Watch Demo

            </button>

          </div>

        </div>

      </section>

      {/* Dashboard Mockup */}

{/* Dashboard Mockup */}
<section className="max-w-7xl mx-auto px-6">
  <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
    <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#101010] border border-white/5">

      {/* Window bar */}
      <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-4 text-sm text-gray-500">UserController.java</span>
      </div>

      <div className="grid md:grid-cols-5">

        {/* Code panel */}
        <div className="md:col-span-3 p-6 font-mono text-sm leading-7 overflow-x-auto">
          <p><span className="text-purple-400">@RestController</span></p>
          <p><span className="text-purple-400">@RequestMapping</span>(<span className="text-green-400">"/api/users"</span>)</p>
          <p><span className="text-blue-400">public class</span> <span className="text-yellow-300">UserController</span> {"{"}</p>
          <p className="pl-4"><span className="text-purple-400">@Autowired</span></p>
          <p className="pl-4"><span className="text-blue-400">private</span> UserService userService;</p>
          <p className="pl-4"></p>
          <p className="pl-4"><span className="text-purple-400">@GetMapping</span></p>
          <p className="pl-4"><span className="text-blue-400">public</span> List{"<User>"} <span className="text-yellow-300">getUsers</span>() {"{"}</p>
          <p className="pl-8"><span className="text-blue-400">return</span> userService.findAll();</p>
          <p className="pl-4">{"}"}</p>
          <p>{"}"}</p>
        </div>

        {/* Stats panel */}
        <div className="md:col-span-2 border-t md:border-t-0 md:border-l border-white/10 p-6 flex flex-col gap-5">

          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wide">Build status</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="font-semibold">Passing</span>
            </div>
          </div>

          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wide">API response</p>
            <p className="font-semibold mt-2">128ms avg</p>
          </div>

          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wide">Test coverage</p>
            <div className="w-full h-2 rounded-full bg-white/10 mt-2">
              <div className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" style={{ width: "87%" }} />
            </div>
            <p className="text-sm text-gray-400 mt-1">87%</p>
          </div>

          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wide">Stack</p>
            <div className="flex gap-2 mt-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">React</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">Spring Boot</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">PostgreSQL</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

      {/* Features */}

      <section className="max-w-7xl mx-auto py-32 px-6">

        <h2 className="text-5xl font-bold text-center mb-20">

          Why Choose Us

        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

            <FaCode className="text-4xl mb-6 text-blue-400" />

            <h3 className="text-2xl font-bold">

              Clean Code

            </h3>

            <p className="mt-4 text-gray-400">

              Modern architecture and maintainable code for every project.

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

            <FaRocket className="text-4xl mb-6 text-purple-400" />

            <h3 className="text-2xl font-bold">

              Fast Performance

            </h3>

            <p className="mt-4 text-gray-400">

              Optimized user experience with blazing-fast applications.

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

            <FaDatabase className="text-4xl mb-6 text-green-400" />

            <h3 className="text-2xl font-bold">

              Secure Backend

            </h3>

            <p className="mt-4 text-gray-400">

              Enterprise-level backend powered by Spring Boot.

            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="max-w-6xl mx-auto px-6 pb-32">

        <div className="rounded-[40px] bg-gradient-to-r from-blue-600 to-purple-600 p-16 text-center">

          <h2 className="text-5xl font-bold">

            Ready to Build Something Amazing?

          </h2>

          <p className="mt-5 text-lg text-white/80">

            Let's create modern experiences together.

          </p>

          <button className="mt-10 bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition">

            Start Now

          </button>

        </div>

      </section>

    </div>
  );
};

export default Home;