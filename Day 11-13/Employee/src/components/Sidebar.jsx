import { NavLink } from "react-router-dom";import {
  FaUsers,
  FaTachometerAlt,
  FaBuilding,
  FaChartBar,
  FaCog
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="logo">
        <h2>EMS</h2>
        <p>Corporate HR</p>
      </div>


    <ul>

  <li>
    <NavLink to="/">🏠 Dashboard</NavLink>
  </li>

  <li>
    <NavLink to="/employees">👨 Employees</NavLink>
  </li>

  <li>
    <NavLink to="/departments">🏢 Departments</NavLink>
  </li>

  <li>
    <NavLink to="/reports">📊 Reports</NavLink>
  </li>

  <li>
    <NavLink to="/settings">⚙ Settings</NavLink>
  </li>

</ul>

    </div>
  );
}

export default Sidebar;