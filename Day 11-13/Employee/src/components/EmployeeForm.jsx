import { useState } from "react";

function EmployeeForm({ addEmployee }) {

  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    designation: "",
    email: ""
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    addEmployee({
      id: Date.now(),
      ...employee
    });

    setEmployee({
      name: "",
      department: "",
      designation: "",
      email: ""
    });

  };

  return (

    <form className="employee-form" onSubmit={handleSubmit}>

      <input
        name="name"
        placeholder="Employee Name"
        value={employee.name}
        onChange={handleChange}
      />

      <input
        name="department"
        placeholder="Department"
        value={employee.department}
        onChange={handleChange}
      />

      <input
        name="designation"
        placeholder="Designation"
        value={employee.designation}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={employee.email}
        onChange={handleChange}
      />

      <button>Add Employee</button>

    </form>

  );
}

export default EmployeeForm;