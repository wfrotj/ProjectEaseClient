import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
//layout
import NavbarLayout from "./Layout/NavbarLayout";
import ProfileLayout from "./Layout/ProfileLayout";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
// import Profile from "./pages/Profile";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<NavbarLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<ProfileLayout />}>
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
