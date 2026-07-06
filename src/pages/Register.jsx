import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-5 py-16">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-[140px] rounded-full -z-10"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-[140px] rounded-full -z-10"></div>

      <div className="w-full max-w-lg rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.5)] p-10">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center shadow-xl">
            <span className="text-4xl font-bold text-black">S</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-white text-4xl font-bold text-center">
          Create Account
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Join us and start your journey today.
        </p>

        <form className="mt-10 space-y-6">

          {/* Full Name */}
          <div>
            <label className="text-gray-300 text-sm">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="mt-2 w-full h-14 rounded-2xl bg-[#161616] border border-[#2d2d2d] px-5 text-white outline-none focus:border-white transition"
            />
          </div>

          {/* Email */}
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

          {/* Password */}
          <div>
            <label className="text-gray-300 text-sm">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              className="mt-2 w-full h-14 rounded-2xl bg-[#161616] border border-[#2d2d2d] px-5 text-white outline-none focus:border-white transition"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-gray-300 text-sm">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              className="mt-2 w-full h-14 rounded-2xl bg-[#161616] border border-[#2d2d2d] px-5 text-white outline-none focus:border-white transition"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <input
              type="checkbox"
              className="w-4 h-4 accent-white"
            />

            <p>
              I agree to the
              <span className="text-white cursor-pointer hover:underline">
                {" "}Terms & Conditions
              </span>
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full h-14 rounded-2xl bg-white text-black font-semibold text-lg hover:scale-[1.02] transition duration-300 shadow-lg"
          >
            Create Account
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-8">
          Already have an account?
          <span className="text-white ml-2 cursor-pointer hover:underline">
            <Link to={"/login"}> Login </Link>
          </span>
        </p>

      </div>
    </div>
  );
};

export default Register;