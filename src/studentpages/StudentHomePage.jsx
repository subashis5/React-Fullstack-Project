import { ArrowUpRight, Bell, Plus, Search } from 'lucide-react'
import React, { Activity } from 'react'

const StudentHomePage = () => {
      const stats = [
    { title: "Projects", value: "12" },
    { title: "Visitors", value: "5.2K" },
    { title: "Messages", value: "18" },
    { title: "Downloads", value: "420" },
  ];
    const projects = [
    {
      name: "Portfolio Website",
      tech: "React + Tailwind",
      status: "Live",
    },
    {
      name: "InsightDB",
      tech: "Spring Boot",
      status: "Development",
    },
    {
      name: "Blood Donation",
      tech: "Java",
      status: "Completed",
    },
  ];
  return (
    <div>
              <div className="flex justify-between items-center border-b border-white/10 p-6 ">

          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none"
            />

          </div>

          <div className="flex items-center gap-5">

            <Bell className="cursor-pointer hover:text-blue-400" />

            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">
              S
            </div>

          </div>

        </div>

        {/* Content */}

        <div className="p-8">

          {/* Stats */}

          <div className="grid md:grid-cols-4 gap-6">

            {stats.map((item) => (

              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-blue-400/40 transition"
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

          {/* Table + Activity */}

          <div className="grid lg:grid-cols-3 gap-8 mt-10">

            {/* Projects */}

            <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6">

              <h2 className="text-2xl font-bold mb-6">
                Recent Projects
              </h2>

              <table className="w-full">

                <thead>

                  <tr className="text-gray-400 border-b border-white/10">

                    <th className="text-left pb-3">Project</th>

                    <th className="text-left pb-3">Tech</th>

                    <th className="text-left pb-3">Status</th>

                  </tr>

                </thead>

                <tbody>

                  {projects.map((project) => (

                    <tr
                      key={project.name}
                      className="border-b border-white/5"
                    >

                      <td className="py-4">
                        {project.name}
                      </td>

                      <td>
                        {project.tech}
                      </td>

                      <td>

                        <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">

                          {project.status}

                        </span>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

            {/* Activity */}

            <div className="space-y-6">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <h2 className="text-xl font-bold mb-5">
                  Quick Actions
                </h2>

                <button className="w-full flex items-center justify-center gap-2 bg-blue-500 rounded-xl py-3 hover:bg-blue-600 transition">

                  <Plus size={18} />

                  Add Project

                </button>

                <button className="w-full flex items-center justify-center gap-2 mt-4 border border-white/10 rounded-xl py-3 hover:bg-white/5 transition">

                  <ArrowUpRight size={18} />

                  Upload Resume

                </button>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <h2 className="text-xl font-bold mb-5">
                  Recent Activity
                </h2>

                <div className="space-y-4">

                  <div className="flex gap-3">

                    <Activity className="text-blue-400" />

                    <p className="text-gray-300">
                      Portfolio updated
                    </p>

                  </div>

                  <div className="flex gap-3">

                    <Activity className="text-blue-400" />

                    <p className="text-gray-300">
                      Resume uploaded
                    </p>

                  </div>

                  <div className="flex gap-3">

                    <Activity className="text-blue-400" />

                    <p className="text-gray-300">
                      New visitor reached
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
   
  )
}

export default StudentHomePage
