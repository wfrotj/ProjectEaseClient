import React from "react";

function Dashboard({ user, setUser }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <table>
          <tbody>
            <thead>
              <td>No. of days</td>
            </thead>
            <tr>No. of Lesson Plans</tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
