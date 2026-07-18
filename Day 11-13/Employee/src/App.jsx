import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Welcome & Login
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";

// Admin Pages
import AdminDashboard from "./pages/AdminDashboard";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import Departments from "./pages/Departments";
import Leave from "./pages/Leave";
import Payroll from "./pages/Payroll";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

// Employee Pages
import EmployeeDashboard from "./pages/EmployeeDashboard";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Welcome />} />

        {/* Login */}
        <Route
          path="/admin-login"
          element={<Login role="admin" />}
        />

        <Route
          path="/employee-login"
          element={<Login role="employee" />}
        />

        {/* ---------------- ADMIN ---------------- */}

        <Route
          path="/admin"
          element={<Navigate to="/admin/dashboard" replace />}
        />

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

        <Route
          path="/employees"
          element={<Employees />}
        />

        <Route
          path="/attendance"
          element={<Attendance />}
        />

        <Route
          path="/departments"
          element={<Departments />}
        />

        <Route
          path="/leave"
          element={<Leave />}
        />

        <Route
          path="/payroll"
          element={<Payroll />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

        {/* ---------------- EMPLOYEE ---------------- */}

        <Route
          path="/employee"
          element={<Navigate to="/employee/dashboard" replace />}
        />

        <Route
          path="/employee/dashboard"
          element={<EmployeeDashboard />}
        />

        <Route path="/profile/:id" element={<Profile />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div
              style={{
                textAlign: "center",
                marginTop: "100px",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              404 - Page Not Found
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;