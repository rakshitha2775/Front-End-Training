import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Departments from "./pages/Departments";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "./services/employeeService";

import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);

  // Load Employees
  const loadEmployees = () => {
    getEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  // Add Employee
  const insertEmployee = (employee) => {
    addEmployee(employee)
      .then(() => {
        loadEmployees();
      })
      .catch((error) => console.log(error));
  };

  // Update Employee
  const editEmployeeData = (employee) => {
    updateEmployee(employee.id, employee)
      .then(() => {
        setEditEmployee(null);
        loadEmployees();
      })
      .catch((error) => console.log(error));
  };

  // Delete Employee
  const removeEmployee = (id) => {
    deleteEmployee(id)
      .then(() => {
        loadEmployees();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <Sidebar />

      <div className="main">

        <header className="header">
          <h1 className="heading">Employee Management System</h1>
          <p className="sub-heading">
            Corporate Human Resource Dashboard
          </p>
        </header>

        <Routes>

          <Route
            path="/"
            element={<Dashboard employees={employees} />}
          />

          <Route
            path="/employees"
            element={
              <Employees
                employees={employees}
                addEmployee={insertEmployee}
                updateEmployee={editEmployeeData}
                editEmployee={editEmployee}
                setEditEmployee={setEditEmployee}
                onDelete={removeEmployee}
              />
            }
          />

          <Route
            path="/departments"
            element={<Departments />}
          />

          <Route
            path="/reports"
            element={<Reports employees={employees} />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

        </Routes>

        <footer className="footer">
          © 2026 Employee Management System
        </footer>

      </div>
    </div>
  );
}

export default App;