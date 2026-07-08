import React from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
  Moon,
  Bell,
  Save,
} from "lucide-react";

const StudentSettingPage = () => {
  return (
    <div className="min-h-screen p-8 text-white">

      {/* Header */}

      <div className="mb-10">

        <h1 className="text-4xl font-bold">
          Settings
        </h1>

        <p className="text-gray-400 mt-2">
          Manage your account preferences and personal information.
        </p>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Left */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

          <div className="flex flex-col items-center">

            <img
              src="https://i.pravatar.cc/200"
              alt="profile"
              className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
            />

            <button className="mt-6 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
              Change Photo
            </button>

          </div>

        </div>

        {/* Right */}

        <div className="lg:col-span-2 space-y-8">

          {/* Personal Info */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-2xl font-semibold mb-6">
              Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="text-gray-400 text-sm">
                  Full Name
                </label>

                <div className="flex items-center gap-3 mt-2 bg-black/20 border border-white/10 rounded-xl px-4 py-3">

                  <User size={18} className="text-blue-400" />

                  <input
                    defaultValue="Subashis Palai"
                    className="bg-transparent outline-none w-full"
                  />

                </div>

              </div>

              <div>

                <label className="text-gray-400 text-sm">
                  Email
                </label>

                <div className="flex items-center gap-3 mt-2 bg-black/20 border border-white/10 rounded-xl px-4 py-3">

                  <Mail size={18} className="text-blue-400" />

                  <input
                    defaultValue="subashis@gmail.com"
                    className="bg-transparent outline-none w-full"
                  />

                </div>

              </div>

              <div>

                <label className="text-gray-400 text-sm">
                  Phone
                </label>

                <div className="flex items-center gap-3 mt-2 bg-black/20 border border-white/10 rounded-xl px-4 py-3">

                  <Phone size={18} className="text-blue-400" />

                  <input
                    defaultValue="+91 9876543210"
                    className="bg-transparent outline-none w-full"
                  />

                </div>

              </div>

            </div>

          </div>

          {/* Password */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-2xl font-semibold mb-6">
              Security
            </h2>

            <div className="space-y-5">

              <div>

                <label className="text-gray-400 text-sm">
                  New Password
                </label>

                <div className="flex items-center gap-3 mt-2 bg-black/20 border border-white/10 rounded-xl px-4 py-3">

                  <Lock size={18} className="text-blue-400" />

                  <input
                    type="password"
                    placeholder="********"
                    className="bg-transparent outline-none w-full"
                  />

                </div>

              </div>

              <div>

                <label className="text-gray-400 text-sm">
                  Confirm Password
                </label>

                <div className="flex items-center gap-3 mt-2 bg-black/20 border border-white/10 rounded-xl px-4 py-3">

                  <Lock size={18} className="text-blue-400" />

                  <input
                    type="password"
                    placeholder="********"
                    className="bg-transparent outline-none w-full"
                  />

                </div>

              </div>

            </div>

          </div>

          {/* Preferences */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-2xl font-semibold mb-6">
              Preferences
            </h2>

            <div className="space-y-6">

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-3">

                  <Moon className="text-blue-400" />

                  <span>Dark Mode</span>

                </div>

                <input
                  type="checkbox"
                  className="w-5 h-5 accent-blue-500"
                  defaultChecked
                />

              </div>

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-3">

                  <Bell className="text-blue-400" />

                  <span>Email Notifications</span>

                </div>

                <input
                  type="checkbox"
                  className="w-5 h-5 accent-blue-500"
                  defaultChecked
                />

              </div>

            </div>

          </div>

          {/* Save */}

          <button className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 transition py-4 rounded-2xl text-lg font-semibold">

            <Save size={20} />

            Save Changes

          </button>

        </div>

      </div>

    </div>
  );
};

export default StudentSettingPage;