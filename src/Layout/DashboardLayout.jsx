import React from "react";
import { NavLink, Outlet } from "react-router-dom";
function DashboardLayout() {
  return (
    <div>
      <div>
        <h1>DashboardLayout</h1>
        <div>
          <NavLink to="overview">Dashboard</NavLink>
          <NavLink to="lessonplan">Lesson Plan</NavLink>
        </div>
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
