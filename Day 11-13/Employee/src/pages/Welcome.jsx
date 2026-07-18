import { Link } from "react-router-dom";
import "../assets/css/Welcome.css";

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="overlay">

        <nav className="navbar">
          <div className="logo">
            <h2>HRMS</h2>
          </div>

          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="hero">

          <div className="hero-left">

            <h1>
              Human Resource <span>Management System</span>
            </h1>

            <p>
              A modern HR platform for managing employees,
              attendance, payroll, leave requests, reports,
              and company operations efficiently.
            </p>

            <div className="buttons">

              <Link
                to="/admin-login"
                className="admin-btn"
              >
                Admin Login
              </Link>

              <Link
                to="/employee-login"
                className="employee-btn"
              >
                Employee Login
              </Link>

            </div>

          </div>

          <div className="hero-right">

            <div className="card">

              <h2>Why HRMS?</h2>

              <ul>
                <li>✔ Employee Management</li>
                <li>✔ Attendance Tracking</li>
                <li>✔ Leave Management</li>
                <li>✔ Payroll</li>
                <li>✔ Reports</li>
                <li>✔ Notifications</li>

              </ul>

            </div>

          </div>

        </div>

        <section
          className="features"
          id="features"
        >

          <h2>Core Features</h2>

          <div className="feature-grid">

            <div className="feature-box">
              👨‍💼
              <h3>Employee Management</h3>
            </div>

            <div className="feature-box">
              📅
              <h3>Attendance</h3>
            </div>

            <div className="feature-box">
              🌴
              <h3>Leave</h3>
            </div>

            <div className="feature-box">
              💰
              <h3>Payroll</h3>
            </div>

            <div className="feature-box">
              📈
              <h3>Reports</h3>
            </div>

            <div className="feature-box">
              🔔
              <h3>Notifications</h3>
            </div>

          </div>

        </section>

        <footer className="footer">
          © 2026 HRMS | All Rights Reserved
        </footer>

      </div>
    </div>
  );
}

export default Welcome;