import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserShield,
  FaUser,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

import "../assets/css/Login.css";
import logo from "../assets/images/logo.png";
import { loginUser } from "../services/authService";

function Login({ role }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [remember, setRemember] = useState(false);

  const [loading, setLoading] = useState(false);

 const login = async () => {
  if (email.trim() === "" || password.trim() === "") {
    alert("Please enter Email and Password");
    return;
  }

  try {
    setLoading(true);

    const response = await loginUser({
      email,
      password,
    });

    const data = response.data;

    // Store Token
    localStorage.setItem("token", data.token);

    // Store Employee Details
    localStorage.setItem(
      "employee",
      JSON.stringify(data.employee)
    );

    setLoading(false);

    alert("Login Successful");

    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/employee");
    }

  } catch (error) {

    setLoading(false);

    if (error.response) {
      alert(error.response.data.message);
    } else {
      alert("Server Error");
    }
  }
};

  return (
    <div className="login-container">

      <div className="login-card">

        <img
          src={logo}
          alt="Logo"
          className="login-logo"
        />

        <div className="login-title">

          {role === "admin" ? (
            <>
              <FaUserShield className="title-icon" />
              <h2>Admin Login</h2>
            </>
          ) : (
            <>
              <FaUser className="title-icon" />
              <h2>Employee Login</h2>
            </>
          )}

        </div>

        <p className="subtitle">
          Welcome back! Please login to continue.
        </p>

        {/* Email */}
        <div className="input-group">

          <FaEnvelope className="input-icon" />

          <input
            id="email"
            name="email"
            type="text"
            placeholder={
              role === "admin"
                ? "Admin Email"
                : "Employee ID / Email"
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>

        {/* Password */}
        <div className="input-group">

          <FaLock className="input-icon" />

          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>

        </div>

        <div className="login-options">

          <label>
            <input
              id="rememberMe"
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            Remember Me
          </label>

          <span className="forgot">
            Forgot Password?
          </span>

        </div>

        {/* Login Button */}
        <button
          id="loginBtn"
          className="login-btn"
          onClick={login}
        >
          {loading ? "Logging In..." : "Login"}
        </button>

        <div className="bottom-text">
          {role === "admin"
            ? "Administrator Access Only"
            : "Employee Portal"}
        </div>

      </div>

    </div>
  );
}

export default Login;