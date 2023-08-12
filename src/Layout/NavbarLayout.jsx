import { NavLink, Outlet } from "react-router-dom";

function NavbarLayout() {
  return (
    <div>
      <header className="navbar-layout">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="profile">Profile</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default NavbarLayout;
