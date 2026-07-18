import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaTachometerAlt,
  FaUsers,
  FaBuilding,
  FaCalendarCheck,
  FaPlaneDeparture,
  FaMoneyCheckAlt,
  FaChartBar,
  FaCog,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";
import "../assets/css/Sidebar.css";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();

  const logout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      navigate("/");
    }
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/admin/dashboard",
    },
    {
      title: "Employees",
      icon: <FaUsers />,
      path: "/employees",
    },
    {
      title: "Departments",
      icon: <FaBuilding />,
      path: "/departments",
    },
    {
      title: "Attendance",
      icon: <FaCalendarCheck />,
      path: "/attendance",
    },
    {
      title: "Leave",
      icon: <FaPlaneDeparture />,
      path: "/leave",
    },
    {
      title: "Payroll",
      icon: <FaMoneyCheckAlt />,
      path: "/payroll",
    },
    {
      title: "Reports",
      icon: <FaChartBar />,
      path: "/reports",
    },
    {
      title: "Settings",
      icon: <FaCog />,
      path: "/settings",
    },
  ];

  return (
    <div
      className={
        collapsed
          ? "sidebar collapsed"
          : "sidebar"
      }
    >
      {/* Header */}

      <div className="sidebar-header">
        {!collapsed && (
          <h2 className="logo">
            HRMS Pro
          </h2>
        )}

        <button
          className="toggle-btn"
          onClick={() =>
            setCollapsed(!collapsed)
          }
        >
          {collapsed ? (
            <FaBars />
          ) : (
            <FaTimes />
          )}
        </button>
      </div>

      {/* Admin Profile */}

      <div className="profile-section">
        <FaUserCircle className="profile-icon" />

        {!collapsed && (
          <>
            <h3>Administrator</h3>
            <span>HR Manager</span>
          </>
        )}
      </div>

      {/* Menu */}

      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "menu active"
                  : "menu"
              }
            >
              <span className="icon">
                {item.icon}
              </span>

              {!collapsed && (
                <span>{item.title}</span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Footer */}

      <div className="sidebar-footer">
        <button
          className="logout-btn"
          onClick={logout}
        >
          <FaSignOutAlt />

          {!collapsed && (
            <span>Logout</span>
          )}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;