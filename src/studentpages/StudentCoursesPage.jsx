import React from "react";
import {
  Search,
  Bell,
  Play,
  BookOpen,
  Award,
  Calendar,
  Clock,
} from "lucide-react";

const StudentCoursesPage = () => {
  const courses = [
    {
      title: "React Masterclass",
      lessons: "42 Lessons",
      progress: 75,
    },
    {
      title: "Spring Boot",
      lessons: "36 Lessons",
      progress: 45,
    },
    {
      title: "Java DSA",
      lessons: "58 Lessons",
      progress: 90,
    },
  ];

  const stats = [
    { title: "Courses", value: "12" },
    { title: "Hours", value: "245" },
    { title: "Certificates", value: "8" },
    { title: "Completed", value: "9" },
  ];

  return (
    <div className="min-h-screen text-white p-8">

      {/* Top */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            Welcome Back, Subashis 👋
          </h1>

          <p className="text-gray-400 mt-2">
            Continue your learning journey today.
          </p>

        </div>

        <div className="flex items-center gap-5">

          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">

            <Search size={18} />

            <input
              placeholder="Search Courses..."
              className="bg-transparent outline-none placeholder:text-gray-500"
            />

          </div>

          <Bell className="cursor-pointer hover:text-blue-400" />

          <div className="w-11 h-11 rounded-full bg-blue-500 flex justify-center items-center font-bold">
            S
          </div>

        </div>

      </div>

      {/* Hero */}

      <div className="mt-10 rounded-[35px] bg-gradient-to-r from-blue-600 to-cyan-600 p-10 flex justify-between items-center">

        <div>

          <h2 className="text-4xl font-bold">
            Continue Learning
          </h2>

          <p className="mt-4 text-white/80 max-w-lg">

            Pick up where you left off and keep building your skills.

          </p>

          <button className="mt-8 flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-semibold">

            <Play size={18} />

            Resume Course

          </button>

        </div>

        <BookOpen size={120} className="text-white/30" />

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-4 gap-6 mt-10">

        {stats.map((item) => (

          <div
            key={item.title}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
          >

            <p className="text-gray-400">

              {item.title}

            </p>

            <h2 className="text-4xl font-bold mt-3">

              {item.value}

            </h2>

          </div>

        ))}

      </div>

      {/* Content */}

      <div className="grid lg:grid-cols-3 gap-8 mt-10">

        {/* Courses */}

        <div className="lg:col-span-2 space-y-6">

          <h2 className="text-2xl font-bold">

            My Courses

          </h2>

          {courses.map((course) => (

            <div
              key={course.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
            >

              <div className="flex justify-between">

                <div>

                  <h3 className="text-xl font-semibold">

                    {course.title}

                  </h3>

                  <p className="text-gray-400 mt-2">

                    {course.lessons}

                  </p>

                </div>

                <span className="text-blue-400 font-semibold">

                  {course.progress}%

                </span>

              </div>

              <div className="w-full h-2 rounded-full bg-white/10 mt-6">

                <div
                  style={{ width: `${course.progress}%` }}
                  className="h-full rounded-full bg-blue-500"
                ></div>

              </div>

              <button className="mt-6 text-blue-400 hover:text-blue-300">

                Continue →

              </button>

            </div>

          ))}

        </div>

        {/* Sidebar */}

        <div className="space-y-6">

          {/* Upcoming */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-xl font-bold mb-6">

              Upcoming Class

            </h2>

            <div className="flex items-center gap-3">

              <Calendar className="text-blue-400" />

              <div>

                <h3 className="font-semibold">

                  Spring Security

                </h3>

                <p className="text-gray-400 text-sm">

                  Tomorrow

                </p>

              </div>

            </div>

            <div className="flex items-center gap-3 mt-6">

              <Clock className="text-blue-400" />

              <p>

                7:00 PM

              </p>

            </div>

          </div>

          {/* Achievements */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-xl font-bold mb-6">

              Achievements

            </h2>

            <div className="space-y-5">

              <div className="flex gap-3 items-center">

                <Award className="text-yellow-400" />

                <p>

                  React Expert

                </p>

              </div>

              <div className="flex gap-3 items-center">

                <Award className="text-blue-400" />

                <p>

                  Java Master

                </p>

              </div>

              <div className="flex gap-3 items-center">

                <Award className="text-green-400" />

                <p>

                  100 Hours Learning

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default StudentCoursesPage;