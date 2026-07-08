import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { path: "/home", text: "home" },
    { path: "/about", text: "about" },
    { path: "/services", text: "services" },
    { path: "/projects", text: "projects" },
    { path: "/resume", text: "resume" },
  ];

  return (
    <header className="w-full flex justify-center pt-8">
      <nav className="w-[92%] max-w-6xl h-20 bg-[#121212] rounded-full shadow-2xl border border-neutral-800 px-4 flex items-center justify-between fixed top-8 z-50  ">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg cursor-pointer hover:rotate-12 transition duration-300">
            <span className="text-2xl font-bold text-black">S</span>
          </div>
          <Link to={"/home"}>
            <h2 className="text-white text-xl font-semibold tracking-wide">
              Subashis
            </h2>
          </Link>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative text-[15px] font-medium capitalize transition-all duration-300 pb-2
                   after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-white after:transition-all after:duration-300
                   ${
                     isActive
                       ? "text-white after:w-full"
                       : "text-gray-300 hover:text-white after:w-0 hover:after:w-full"
                   }`
                }>
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link to={"/login"}>
            <button className="group relative overflow-hidden px-6 py-3 rounded-full border border-neutral-700 text-white font-medium transition-colors duration-300 hover:border-neutral-500">
              <span className="absolute inset-0 bg-white translate-y-[110%] group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Login
              </span>
            </button>
          </Link>

          <button className="group relative flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black font-semibold overflow-hidden transition-all duration-300 ease-out shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95">
             <Link to={"./dashboard"} className="relative z-10">Get Started</Link>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
