import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#090909] text-white">

      {/* Left Glow */}
      <div className="absolute -top-52 -left-52 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[180px]" />

      {/* Right Glow */}
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Optional Center Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-[220px]" />

      <Navbar />

      <main className="relative z-10">
        <Outlet />
      </main>

    </div>
  );
};

export default Layout;