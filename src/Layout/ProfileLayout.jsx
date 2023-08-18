import React from "react";

import { NavLink, Outlet } from "react-router-dom";

function ProfileLayout() {
  return (
    <div>
      <div>
        <h1>Welcome user!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magni
          facere voluptates tempore quae ea sint magnam minus quasi repellat.
          Aspernatur doloribus mollitia error! Iste dolore explicabo a velit
          harum!
        </p>
        <div className="profile-buttons">
          <button>
            <NavLink to="/profile/register">Register</NavLink>
          </button>
          <button>
            <NavLink to="/profile/login">Login</NavLink>
          </button>
        </div>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default ProfileLayout;
