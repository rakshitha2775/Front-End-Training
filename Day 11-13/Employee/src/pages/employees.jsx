import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

function Employees({
  employees,
  addEmployee,
  updateEmployee,
  editEmployee,
  setEditEmployee,
  onDelete,
}) {

  return (

    <>

      <EmployeeForm
        addEmployee={addEmployee}
        updateEmployee={updateEmployee}
        editEmployee={editEmployee}
      />

      <EmployeeList
        employees={employees}
        onDelete={onDelete}
        onEdit={setEditEmployee}
      />

    </>

  );
}

export default Employees;