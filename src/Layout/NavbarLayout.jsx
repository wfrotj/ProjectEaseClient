import { NavLink, Outlet } from "react-router-dom";
import { useEffect } from "react";
import teacherService from "../services/teacherService";

function NavbarLayout({ user }) {
  return (
    <div>
      <header className="navbar-layout">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="profile">Profile</NavLink>
          {user ? <NavLink to="dashboard">Dashboard</NavLink> : null}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default NavbarLayout;
