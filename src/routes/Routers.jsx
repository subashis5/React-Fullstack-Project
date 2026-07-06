import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import About from "../pages/About";
import Login from "../pages/Login";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
import Register from "../pages/Register";
import Home from "../pages/Home";

export const routes = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
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
            }

        ]
    }
  
])