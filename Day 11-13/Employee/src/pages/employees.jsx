import { useEffect, useMemo, useState } from "react";
import { FaPlus, FaSearch, FaSyncAlt } from "react-icons/fa";

import AdminLayout from "../layouts/AdminLayout";
import EmployeeTable from "../components/EmployeeTable";
import EmployeeModal from "../components/EmployeeModal";

import { getEmployees } from "../services/employeeService";

import "../assets/css/Employee.css";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const loadEmployees = async () => {
    try {
      setLoading(true);

      const response = await getEmployees();

      console.log("========== API RESPONSE ==========");
      console.log(response);
      console.log("Employees :", response.data);
      console.log("Total :", response.data.length);
      console.log("=================================");

      setEmployees(response.data);
    } catch (error) {
      console.error("Employee Loading Error :", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      await loadEmployees();
    };

    fetchEmployees();
  }, []);

  const departments = useMemo(() => {
    return [
      "All",
      ...new Set(employees.map((emp) => emp.department)),
    ];
  }, [employees]);

  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) => {
      const searchMatch =
        emp.name?.toLowerCase().includes(search.toLowerCase()) ||
        emp.employeeId?.toLowerCase().includes(search.toLowerCase()) ||
        emp.email?.toLowerCase().includes(search.toLowerCase());

      const departmentMatch =
        department === "All"
          ? true
          : emp.department === department;

      return searchMatch && departmentMatch;
    });
  }, [employees, search, department]);

  const openAddModal = () => {
    setSelectedEmployee(null);
    setShowModal(true);
  };

 const openEditModal = (employee) => {
  console.log("========== EDIT CLICK ==========");
  console.log(employee);
  console.log("===============================");

  setSelectedEmployee(employee);
  setShowModal(true);
};
  return (
    <AdminLayout>
      <div className="employee-page">

        <div className="employee-top">
          <div>
            <h1>Employee Management</h1>
            <p>Manage all employees from one place.</p>
          </div>

          <button
            className="add-btn"
            onClick={openAddModal}
          >
            <FaPlus />
            Add Employee
          </button>
        </div>

        <div className="toolbar">

          <div className="search-box-employee">
            <FaSearch />

            <input
              type="text"
              placeholder="Search Employee..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>

          <select
            value={department}
            onChange={(e) =>
              setDepartment(e.target.value)
            }
          >
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>

          <button
            className="refresh-btn"
            onClick={loadEmployees}
          >
            <FaSyncAlt />
            Refresh
          </button>

        </div>

        <div className="employee-summary">

          <div className="summary-card">
            <h2>{employees.length}</h2>
            <p>Total Employees</p>
          </div>

          <div className="summary-card">
            <h2>
              {
                employees.filter(
                  (emp) => emp.status === "Active"
                ).length
              }
            </h2>
            <p>Active Employees</p>
          </div>

          <div className="summary-card">
            <h2>
              {
                employees.filter(
                  (emp) => emp.status === "Inactive"
                ).length
              }
            </h2>
            <p>Inactive Employees</p>
          </div>

        </div>

        {loading ? (
          <div className="loading">
            Loading Employees...
          </div>
        ) : (
          <EmployeeTable
            employees={filteredEmployees}
            reloadEmployees={loadEmployees}
            openEditModal={openEditModal}
          />
        )}

        {showModal && (
          <EmployeeModal
            setShowModal={setShowModal}
            reloadEmployees={loadEmployees}
            employee={selectedEmployee}
          />
        )}

      </div>
    </AdminLayout>
  );
}

export default Employees;