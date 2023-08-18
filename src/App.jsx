import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useEffect, useState } from "react";
//layout
import NavbarLayout from "./Layout/NavbarLayout";
import ProfileLayout from "./Layout/ProfileLayout";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
// import Profile from "./pages/Profile";
import Login from "./components/Login";
import Registration from "./components/Registration";
import loginService from "./services/loginService";

function App() {
  const [user, setUser] = useState(null);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<NavbarLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="profile"
            element={<ProfileLayout setUser={setUser} user={user} />}
          >
            <Route path="register" element={<Registration />} />
            <Route path="login" element={<Login />} />
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
