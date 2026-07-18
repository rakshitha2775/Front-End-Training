import EmployeeLayout from "../layouts/EmployeeLayout";

function EmployeeDashboard() {
  return (
    <EmployeeLayout>
      <h1>Welcome Employee 👋</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        <div className="dashboard-card">
          <h3>Attendance</h3>
          <h2>96%</h2>
        </div>

        <div className="dashboard-card">
          <h3>Leaves</h3>
          <h2>5</h2>
        </div>

        <div className="dashboard-card">
          <h3>Salary</h3>
          <h2>₹45,000</h2>
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h3>Recent Activity</h3>

        <ul>
          <li>✔ Attendance Marked</li>
          <li>✔ Leave Approved</li>
          <li>✔ Salary Credited</li>
        </ul>
      </div>
    </EmployeeLayout>
  );
}

export default EmployeeDashboard;