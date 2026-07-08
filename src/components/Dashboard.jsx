import React from "react";
import {
  LayoutDashboard,
  FolderKanban,
  FileText,
  User,
  Bell,
  Search,
  Settings,
  Plus,
  ArrowUpRight,
  Activity,
  NotebookPen,
  School,
  LogOut,
} from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
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
    <div className="flex min-h-screen bg-[#090909] text-white gap-1">

      {/* Sidebar */}

<aside
  className="
  fixed
  left-2
  top-32
  w-64
  h-[calc(100vh-8rem)]
  bg-white/5
  backdrop-blur-xl
  border
  border-white/10
  rounded-2xl
  p-6
  overflow-y-auto
  
  "
>
        <h1 className="text-2xl font-bold mb-10">
          Dashboard
        </h1>

        <ul className="space-y-5">

          <Link  className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
            <LayoutDashboard size={20} />
            Dashboard
          </Link>
                <Link  to={"./studentcourses"} className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
            <NotebookPen  size={20} />
            My Courses
          </Link>

               <Link to={"./studentassignments"}  className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
            <School   size={20} />
            My Assignment
          </Link>


          <Link to={"./studentprojects"} className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
            <FolderKanban size={20} />
            Projects
          </Link>

          <Link to={"./studentresume"} className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
            <FileText size={20} />
            Resume
          </Link>

          <Link to={"./studentprofile"} className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
            <User size={20} />
            Profile
          </Link>

          <Link to={"./studentlogout"} className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
            <LogOut  size={20} />
          Logout
          </Link>

          <Link to={"./studentsetting"} className="flex items-center gap-3 hover:text-blue-400 cursor-pointer" >
            <Settings size={20} />
            Settings
          </Link>

        </ul>

      </aside>

      {/* Main */}

      <div className="flex-1 ml-72 pt-28 px-6">


        {/* Topbar */}

<Outlet/>

      </div>

    </div>
  );
};

export default Dashboard;