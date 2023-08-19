import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useEffect, useState } from "react";
import teacherService from "./services/teacherService";
//layout
import NavbarLayout from "./Layout/NavbarLayout";
import ProfileLayout from "./Layout/ProfileLayout";
import DashboardLayout from "./Layout/DashboardLayout";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
// import Profile from "./pages/Profile";
import Login from "./components/Login";
import Registration from "./components/Registration";
//Dashboard
import Dashboard from "./pages/Dashboard";
import LessonPlan from "./components/LessonPlan";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedTeacher");

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      teacherService.setToken(user.token);
    }
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path="/"
          element={<NavbarLayout setUser={setUser} user={user} />}
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="profile"
            element={<ProfileLayout setUser={setUser} user={user} />}
          >
            <Route path="register" element={<Registration />} />
            <Route path="login" element={<Login />} />
          </Route>

          <Route
            path="dashboard"
            element={<DashboardLayout setUser={setUser} user={user} />}
          >
            <Route path="overview" element={<Dashboard />} />
            <Route path="lessonplan" element={<LessonPlan />} />
          </Route>
        </Route>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
