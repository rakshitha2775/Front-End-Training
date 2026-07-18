import AdminLayout from "../layouts/AdminLayout";

function Departments() {
  return (
    <AdminLayout>
      <h1>Departments</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        <div className="dashboard-card">
          <h3>Human Resources</h3>
          <p>15 Employees</p>
        </div>

        <div className="dashboard-card">
          <h3>Information Technology</h3>
          <p>48 Employees</p>
        </div>

        <div className="dashboard-card">
          <h3>Finance</h3>
          <p>12 Employees</p>
        </div>

        <div className="dashboard-card">
          <h3>Marketing</h3>
          <p>20 Employees</p>
        </div>

        <div className="dashboard-card">
          <h3>Sales</h3>
          <p>32 Employees</p>
        </div>

        <div className="dashboard-card">
          <h3>Support</h3>
          <p>18 Employees</p>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Departments;