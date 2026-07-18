import {
  FaBars,
  FaBell,
  FaSearch,
  FaMoon,
  FaUserCircle
} from "react-icons/fa";

import "../assets/css/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      {/* LEFT */}

      <div className="navbar-left">

        <button className="menu-btn">
          <FaBars />
        </button>

        <div className="search-box">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search employees, departments..."
          />

        </div>

      </div>

      {/* RIGHT */}

      <div className="navbar-right">

        <button className="icon-btn">
          <FaMoon />
        </button>

        <button className="icon-btn notification">

          <FaBell />

          <span className="badge">5</span>

        </button>

        <div className="profile">

          <FaUserCircle className="profile-icon" />

          <div>

            <h4>Administrator</h4>

            <p>HR Manager</p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;