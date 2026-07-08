function Reports({ employees }) {

  return (

    <div>

      <div className="dashboard">

        <div className="card">

          <h2>{employees.length}</h2>

          <p>Total Employees</p>

        </div>

        <div className="card">

          <h2>95%</h2>

          <p>Productivity</p>

        </div>

        <div className="card">

          <h2>92%</h2>

          <p>Attendance</p>

        </div>

      </div>

      <div className="employee-table-container">

        <h2 className="table-title">

          Monthly HR Report

        </h2>

        <ul>

          <li>Total Employees : {employees.length}</li>

          <li>New Employees : 12</li>

          <li>Resigned Employees : 2</li>

          <li>Departments : 6</li>

          <li>Average Attendance : 92%</li>

        </ul>

      </div>

    </div>

  );
}

export default Reports;