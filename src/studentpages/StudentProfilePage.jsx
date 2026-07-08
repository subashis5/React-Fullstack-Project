import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  BookOpen,
  Award,
  Edit,
} from "lucide-react";

const StudentProfilePage = () => {
  const skills = [
    "Java",
    "React",
    "Spring Boot",
    "MySQL",
    "Tailwind CSS",
    "JavaScript",
  ];

  const courses = [
    "React Masterclass",
    "Spring Boot",
    "Core Java",
    "Data Structures",
  ];

  return (
    <div className="min-h-screen text-white p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-10">

        <div>
          <h1 className="text-4xl font-bold">
            My Profile
          </h1>

          <p className="text-gray-400 mt-2">
            Manage your personal information and learning profile.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl">
          <Edit size={18} />
          Edit Profile
        </button>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Left */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

          <div className="flex flex-col items-center">

            <img
              src="https://i.pravatar.cc/200"
              alt="profile"
              className="w-36 h-36 rounded-full object-cover border-4 border-blue-500"
            />

            <h2 className="text-2xl font-bold mt-6">
              Subashis Palai
            </h2>

            <p className="text-blue-400 mt-2">
              BCA Student
            </p>

          </div>

          <div className="space-y-5 mt-10">

            <div className="flex items-center gap-3">
              <Mail className="text-blue-400" size={18} />
              <span className="text-gray-300">
                subashis@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-blue-400" size={18} />
              <span className="text-gray-300">
                +91 9876543210
              </span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-blue-400" size={18} />
              <span className="text-gray-300">
                Odisha, India
              </span>
            </div>

            <div className="flex items-center gap-3">
              <GraduationCap className="text-blue-400" size={18} />
              <span className="text-gray-300">
                Utkal University
              </span>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="lg:col-span-2 space-y-8">

          {/* Stats */}

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

              <BookOpen className="text-blue-400 mb-4" />

              <h2 className="text-4xl font-bold">
                12
              </h2>

              <p className="text-gray-400 mt-2">
                Courses
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

              <Award className="text-blue-400 mb-4" />

              <h2 className="text-4xl font-bold">
                8
              </h2>

              <p className="text-gray-400 mt-2">
                Certificates
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

              <GraduationCap className="text-blue-400 mb-4" />

              <h2 className="text-4xl font-bold">
                245
              </h2>

              <p className="text-gray-400 mt-2">
                Learning Hours
              </p>

            </div>

          </div>

          {/* About */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-5">
              About Me
            </h2>

            <p className="text-gray-400 leading-8">

              Passionate BCA student focused on Full Stack Java
              Development. I enjoy building responsive web
              applications using React, Spring Boot, Tailwind CSS,
              and MySQL while continuously improving my programming
              and problem-solving skills.

            </p>

          </div>

          {/* Skills */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Skills
            </h2>

            <div className="flex flex-wrap gap-4">

              {skills.map((skill) => (

                <span
                  key={skill}
                  className="px-5 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300"
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

          {/* Courses */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Enrolled Courses
            </h2>

            <div className="space-y-4">

              {courses.map((course) => (

                <div
                  key={course}
                  className="flex justify-between items-center border border-white/10 rounded-2xl p-4 hover:border-blue-400/40 transition"
                >

                  <div>

                    <h3 className="font-semibold">
                      {course}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      In Progress
                    </p>

                  </div>

                  <button className="text-blue-400 hover:text-blue-300">
                    View →
                  </button>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default StudentProfilePage;