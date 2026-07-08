function Departments() {
  return (

    <div className="employee-table-container">

      <h2 className="table-title">
        Departments
      </h2>

      <table className="employee-table">

        <thead>

          <tr>

            <th>Department</th>

            <th>Manager</th>

            <th>Employees</th>

          </tr>

        </thead>

        <tbody>

          <tr>
            <td>Human Resources</td>
            <td>Priya</td>
            <td>10</td>
          </tr>

          <tr>
            <td>Information Technology</td>
            <td>Arun</td>
            <td>18</td>
          </tr>

          <tr>
            <td>Finance</td>
            <td>Divya</td>
            <td>8</td>
          </tr>

          <tr>
            <td>Marketing</td>
            <td>Karthik</td>
            <td>12</td>
          </tr>

          <tr>
            <td>Sales</td>
            <td>Ramesh</td>
            <td>15</td>
          </tr>

        </tbody>

      </table>

    </div>

  );
}

export default Departments;