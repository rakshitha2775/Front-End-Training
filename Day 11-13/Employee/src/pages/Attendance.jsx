import { useEffect, useMemo, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import "../assets/css/Attendance.css";

import { getEmployees } from "../services/employeeService";
import { getAttendance } from "../services/attendanceService";

function Attendance() {
  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [employeeRes, attendanceRes] = await Promise.all([
          getEmployees(),
          getAttendance(),
        ]);

        setEmployees(employeeRes.data);
        setAttendance(attendanceRes.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const attendanceData = useMemo(() => {
    return employees.map((emp) => {
      const record = attendance.find(
        (att) => att.employee?._id === emp._id
      );

      return {
        id: emp.employeeId,
        name: emp.name,
        department: emp.department,
        date: record
          ? new Date(record.date).toLocaleDateString()
          : "--",
        checkIn: record?.checkIn || "--",
        checkOut: record?.checkOut || "--",
        status: record?.status || "Absent",
      };
    });
  }, [employees, attendance]);

  const filteredEmployees = attendanceData.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase()) ||
    emp.id.toLowerCase().includes(search.toLowerCase()) ||
    emp.department.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <AdminLayout>
        <h2>Loading Attendance...</h2>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="attendance-page">

        <div className="attendance-header">
          <div>
            <h1>Attendance Management</h1>
            <p>Track employee attendance</p>
          </div>
        </div>

        <div className="attendance-cards">
          <div className="attendance-card">
            <h4>Total Employees</h4>
            <h2>{employees.length}</h2>
          </div>

          <div className="attendance-card">
            <h4>Present</h4>
            <h2>
              {attendanceData.filter((e) => e.status === "Present").length}
            </h2>
          </div>

          <div className="attendance-card">
            <h4>Absent</h4>
            <h2>
              {attendanceData.filter((e) => e.status === "Absent").length}
            </h2>
          </div>

          <div className="attendance-card">
            <h4>Leave</h4>
            <h2>
              {attendanceData.filter((e) => e.status === "Leave").length}
            </h2>
          </div>
        </div>

        <div className="attendance-toolbar">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search employee..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="date-box">
            <input type="date" />
          </div>
        </div>

        <div className="table-container">
          <table className="attendance-table">

            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Date</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {filteredEmployees.length === 0 ? (
                <tr>
                  <td colSpan="7" style={{ textAlign: "center" }}>
                    No Employees Found
                  </td>
                </tr>
              ) : (
                filteredEmployees.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.department}</td>
                    <td>{emp.date}</td>
                    <td>{emp.checkIn}</td>
                    <td>{emp.checkOut}</td>
                    <td>
                      <span
                        className={`status ${emp.status.toLowerCase()}`}
                      >
                        {emp.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}

            </tbody>

          </table>
        </div>

      </div>
    </AdminLayout>
  );
}

export default Attendance;