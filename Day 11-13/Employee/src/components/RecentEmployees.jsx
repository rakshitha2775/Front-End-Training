import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getEmployees } from "../services/employeeService";
import "../assets/css/RecentEmployees.css";

function RecentEmployees() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const response = await getEmployees();

      const latestEmployees = response.data
        .slice(-5)
        .reverse();

      setEmployees(latestEmployees);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="recent-card">

      <div className="recent-header">

        <h2>Recent Employees</h2>

        <button className="view-all-btn">
          View All
        </button>

      </div>

      <table className="recent-table">

        <thead>

          <tr>

            <th>Employee</th>

            <th>Employee ID</th>

            <th>Department</th>

            <th>Status</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {employees.map((emp) => (

            <tr key={emp._id}>

              <td>

                <div className="employee-info">

                  <img
                    src={`https://i.pravatar.cc/150?u=${emp.employeeId}`}
                    alt={emp.name}
                    className="employee-avatar"
                  />

                  <div>

                    <h4>{emp.name}</h4>

                    <p>{emp.email}</p>

                  </div>

                </div>

              </td>

              <td>{emp.employeeId}</td>

              <td>{emp.department}</td>

              <td>

                <span
                  className={
                    emp.status === "Active"
                      ? "status active"
                      : "status inactive"
                  }
                >
                  {emp.status}
                </span>

              </td>

              <td>

                <button
                  className="view-btn"
                  onClick={() => navigate("/profile")}
                >

                  <FaEye />

                  View

                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default RecentEmployees;