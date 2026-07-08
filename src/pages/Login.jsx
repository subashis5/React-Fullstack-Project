import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen  relative overflow-hidden">

      {/* Background Blurs */}
      <div className="absolute w-80 h-80  blur-[120px] rounded-full -top-20 -left-20"></div>

      <div className="absolute w-80 h-80 bg-purple-500/20 blur-[120px] rounded-full bottom-0 right-0 "></div>

      {/* Login Container */}
      <div className="flex justify-center items-center min-h-screen px-5 mt-20 ">

        <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">

          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center text-black text-3xl font-bold">
              S
            </div>
          </div>

          <h1 className="text-white text-4xl font-bold text-center">
            Welcome Back
          </h1>

          <p className="text-gray-400 text-center mt-2">
            Login to continue your journey.
          </p>

          <form className="mt-10 space-y-6">

            <div>
              <label className="text-gray-300 text-sm">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="mt-2 w-full h-14 rounded-2xl bg-[#161616] border border-[#2d2d2d] px-5 text-white outline-none focus:border-white transition"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                className="mt-2 w-full h-14 rounded-2xl bg-[#161616] border border-[#2d2d2d] px-5 text-white outline-none focus:border-white transition"
              />
            </div>

            <div className="flex justify-between items-center text-sm">

              <label className="flex items-center gap-2 text-gray-400">

                <input type="checkbox" />

                Remember me

              </label>

              <a href="#" className="text-gray-300 hover:text-white">
                Forgot Password?
              </a>

            </div>

            <button className="w-full h-14 rounded-2xl bg-white text-black font-semibold hover:scale-[1.02] transition duration-300">
              Login
            </button>

          </form>

          <p className="text-center text-gray-400 mt-8">
            Don't have an account?
            <span className="text-white ml-2 cursor-pointer hover:underline">
           <Link to={"/register"}>  Register</Link> 
            </span>
          </p>

        </div>

      </div>
    </div>
  );
};

export default Login;