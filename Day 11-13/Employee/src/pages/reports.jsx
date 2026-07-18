import AdminLayout from "../layouts/AdminLayout";

function Reports() {
  return (
    <AdminLayout>
      <h1>Reports</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        <div className="dashboard-card">
          <h3>Total Employees</h3>
          <h2>256</h2>
        </div>

        <div className="dashboard-card">
          <h3>Attendance</h3>
          <h2>93%</h2>
        </div>

        <div className="dashboard-card">
          <h3>Leaves</h3>
          <h2>18</h2>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Reports;