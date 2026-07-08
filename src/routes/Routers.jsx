import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import About from "../pages/About";
import Login from "../pages/Login";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Dashboard from "../components/Dashboard";
import StudentHomePage from "../studentpages/StudentHomePage";
import StudentProjectPage from "../studentpages/StudentProjectPage";
import StudentResumePage from "../studentpages/StudentResumePage";
import StudentSettingPage from "../studentpages/StudentSettingPage";
import StudentCoursesPage from "../studentpages/StudentCoursesPage";
import StudentAssignmentPage from "../studentpages/StudentAssignmentPage";
import StudentProfilePage from "../studentpages/StudentProfilePage";
import StudentLogoutPage from "../studentpages/StudentLogoutPage";

export const routes = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
                        {
                index:true,
                element:<Home/>

            },
            {
  path: "/home",
  element: <Home />
            },
            {
                 path:"/about",
                 element:<About/>
            },{
                         path:"/login",
                 element:<Login/>
            },
            {
                    path:"/register",
                 element:<Register/>
            },
            {
                path:"/services",
                element:<Services/>
            },{
                path:"/projects",
                element:<Projects/>
            },{
                  path:"/resume",
                element:<Resume/>
            },{
                path:"/dashboard",
                element:<Dashboard/>,
                children:[
                    {
                        index:true,
                        element:<StudentHomePage/>
                    },{
                    path:"/dashboard/studentcourses",
                    element:<StudentCoursesPage/>
                    },
                    {
                        path:"/dashboard/studentassignments",
                        element:<StudentAssignmentPage/>
                    },
                    {
                        path:"/dashboard/studentprojects",
                        element:<StudentProjectPage/>
                    },{
                         path:"/dashboard/studentresume",
                        element:<StudentResumePage/> 
                    },{
                       path:"/dashboard/studentprofile",
                        element:<StudentProfilePage/>
                    },
                    {
path:"/dashboard/studentlogout",
                        element:<StudentLogoutPage/>
                    },
                    {
                          path:"/dashboard/studentsetting",
                        element:<StudentSettingPage/>
                    }
                ]
            }

        ]
    }
  
])