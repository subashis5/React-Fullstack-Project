import React from "react";
import { LogOut, ArrowLeft } from "lucide-react";

const StudentLogoutPage = () => {
  return (
    <div className="h-[83vh] flex items-center justify-center p-8">

      <div className="w-full max-w-lg bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-10 text-center">

        {/* Icon */}

        <div className="mx-auto w-24 h-24 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">

          <LogOut size={45} className="text-red-400" />

        </div>

        {/* Heading */}

        <h1 className="text-4xl font-bold text-white mt-8">
          Logout
        </h1>

        <p className="text-gray-400 mt-4 leading-7">
          Are you sure you want to logout from your account?
          You can always login again to continue your learning.
        </p>

        {/* Buttons */}

        <div className="flex gap-4 mt-10">

          <button
            className="
            flex-1
            flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            border
            border-white/10
            bg-white/5
            py-4
            text-white
            hover:bg-white/10
            transition
            "
          >
            <ArrowLeft size={18} />
            Cancel
          </button>

          <button
            className="
            flex-1
            flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-red-500
            py-4
            text-white
            hover:bg-red-600
            transition
            "
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

      </div>

    </div>
  );
};

export default StudentLogoutPage;