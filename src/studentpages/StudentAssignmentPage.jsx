import React from "react";
import {
  Search,
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
} from "lucide-react";

const StudentAssignmentPage = () => {
  const assignments = [
    {
      title: "React Dashboard UI",
      subject: "React JS",
      due: "12 Jul 2026",
      status: "Pending",
      progress: 70,
    },
    {
      title: "Spring Boot REST API",
      subject: "Spring Boot",
      due: "15 Jul 2026",
      status: "Completed",
      progress: 100,
    },
    {
      title: "Java Collections",
      subject: "Core Java",
      due: "18 Jul 2026",
      status: "Pending",
      progress: 45,
    },
  ];

  const stats = [
    { title: "Total", value: 24 },
    { title: "Completed", value: 18 },
    { title: "Pending", value: 5 },
    { title: "Overdue", value: 1 },
  ];

  return (
    <div className="min-h-screen p-8 text-white">

      {/* Header */}

      <div className="flex justify-between items-center mb-10">

        <div>
          <h1 className="text-4xl font-bold">Assignments</h1>
          <p className="text-gray-400 mt-2">
            Track and submit your assignments.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-3">
          <Search size={18} />
          <input
            placeholder="Search Assignment..."
            className="bg-transparent outline-none placeholder:text-gray-500"
          />
        </div>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-4 gap-6 mb-10">

        {stats.map((item) => (

          <div
            key={item.title}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
          >
            <p className="text-gray-400">{item.title}</p>

            <h2 className="text-4xl font-bold mt-3">
              {item.value}
            </h2>

          </div>

        ))}

      </div>

      {/* Main */}

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Assignments */}

        <div className="lg:col-span-2 space-y-6">

          {assignments.map((item) => (

            <div
              key={item.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-blue-400/30 transition"
            >

              <div className="flex justify-between">

                <div>

                  <div className="flex items-center gap-3">

                    <BookOpen className="text-blue-400" />

                    <h2 className="text-xl font-semibold">
                      {item.title}
                    </h2>

                  </div>

                  <p className="text-gray-400 mt-2">
                    {item.subject}
                  </p>

                </div>

                <span
                  className={`px-4 py-1 rounded-full text-sm ${
                    item.status === "Completed"
                      ? "bg-green-500/20 text-green-300"
                      : "bg-yellow-500/20 text-yellow-300"
                  }`}
                >
                  {item.status}
                </span>

              </div>

              <div className="flex items-center gap-3 mt-6 text-gray-400">

                <Calendar size={16} />

                {item.due}

              </div>

              <div className="w-full h-2 rounded-full bg-white/10 mt-6">

                <div
                  style={{ width: `${item.progress}%` }}
                  className="h-full rounded-full bg-blue-500"
                ></div>

              </div>

              <div className="flex justify-between mt-5">

                <span>{item.progress}% Completed</span>

                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300">

                  Open

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

          ))}

        </div>

        {/* Sidebar */}

        <div className="space-y-6">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-xl font-bold mb-5">
              Upcoming Deadlines
            </h2>

            <div className="space-y-5">

              <div className="flex items-center gap-3">

                <Clock className="text-blue-400" />

                <div>

                  <p>React Dashboard</p>

                  <span className="text-gray-400 text-sm">
                    Tomorrow
                  </span>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <Clock className="text-blue-400" />

                <div>

                  <p>Spring Boot API</p>

                  <span className="text-gray-400 text-sm">
                    Friday
                  </span>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <Clock className="text-blue-400" />

                <div>

                  <p>Java Collections</p>

                  <span className="text-gray-400 text-sm">
                    Sunday
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default StudentAssignmentPage;