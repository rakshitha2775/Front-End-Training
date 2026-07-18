import {
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { deleteEmployee } from "../services/employeeService";

import "../assets/css/Employee.css";

function EmployeeTable({
  employees,
  reloadEmployees,
  openEditModal,
}) {

  const navigate = useNavigate();

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) return;

    try {

      await deleteEmployee(id);

      alert("Employee Deleted Successfully");

      reloadEmployees();

    } catch (error) {

      console.log(error);

      alert("Unable to delete employee.");

    }

  };

  return (

    <div className="employee-table-container">

      <table className="employee-table">

        <thead>

          <tr>

            <th>Employee</th>

            <th>Employee ID</th>

            <th>Department</th>

            <th>Designation</th>

            <th>Phone</th>

            <th>Status</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {employees.length === 0 ? (

            <tr>

              <td
                colSpan="7"
                style={{
                  textAlign: "center",
                  padding: "40px",
                }}
              >

                No Employees Found

              </td>

            </tr>

          ) : (

            employees.map((emp) => (

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

                <td>{emp.designation}</td>

                <td>{emp.phone}</td>

                <td>

                  <span
                    className={
                      emp.status === "Inactive"
                        ? "status inactive"
                        : "status active"
                    }
                  >
                    {emp.status}
                  </span>

                </td>

                <td>

                  <div className="action-buttons">

                    <button
  id={`viewEmployee-${emp.employeeId}`}
  className="view-btn"
  onClick={() =>
    navigate(`/profile/${emp._id}`)
  }
>
  <FaEye />
  View
</button>


<button
  id="editEmployee"
  className="edit-btn"
  onClick={() =>
    openEditModal(emp)
  }
>
  <FaEdit />
  Edit
</button>


<button
  id={`deleteEmployee-${emp.employeeId}`}
  className="delete-btn"
  onClick={() =>
    handleDelete(emp._id)
  }
>
  <FaTrash />
  Delete
</button>

                  </div>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );

}

export default EmployeeTable;