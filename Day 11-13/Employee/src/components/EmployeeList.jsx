import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees, onDelete, onEdit }) {
  return (
    <div className="employee-table-container">

      <h2 className="table-title">
        Employee List
      </h2>

      <table className="employee-table">

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {employees.length > 0 ? (

            employees.map((employee) => (

              <EmployeeCard
                key={employee.id}
                employee={employee}
                onDelete={onDelete}
                onEdit={onEdit}
              />

            ))

          ) : (

            <tr>
              <td colSpan="5" className="no-data">
                No Employees Found
              </td>
            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}

export default EmployeeList;