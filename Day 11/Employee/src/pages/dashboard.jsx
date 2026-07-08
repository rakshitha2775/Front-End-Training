function Dashboard({ employees }) {
  return (
    <div>

      <div className="dashboard">

        <div className="card">
          <h2>{employees.length}</h2>
          <p>Total Employees</p>
        </div>

        <div className="card">
          <h2>6</h2>
          <p>Departments</p>
        </div>

        <div className="card">
          <h2>98%</h2>
          <p>Attendance</p>
        </div>

        <div className="card">
          <h2>12</h2>
          <p>New Joinees</p>
        </div>

      </div>

      <div className="employee-table-container">

        <h2 className="table-title">Company Overview</h2>

        <p>
          Welcome to the Employee Management Dashboard.
          Manage employee records, departments,
          reports and HR activities efficiently.
        </p>

      </div>

    </div>
  );
}

export default Dashboard;