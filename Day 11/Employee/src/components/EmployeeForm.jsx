import { useEffect, useState } from "react";

function EmployeeForm({ addEmployee, editEmployee }) {

  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    email: "",
  });

  useEffect(() => {
    if (editEmployee) {
      setEmployee(editEmployee);
    }
  }, [editEmployee]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      employee.name === "" ||
      employee.department === "" ||
      employee.email === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    addEmployee(employee);

    setEmployee({
      name: "",
      department: "",
      email: "",
    });
  };

  return (
    <div className="form-container">

      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>

        <div className="input-group">

          <label>Employee Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter employee name"
            value={employee.name}
            onChange={handleChange}
          />

        </div>

        <div className="input-group">

          <label>Department</label>

          <input
            type="text"
            name="department"
            placeholder="Enter department"
            value={employee.department}
            onChange={handleChange}
          />

        </div>

        <div className="input-group">

          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={employee.email}
            onChange={handleChange}
          />

        </div>

        <button className="save-btn">
          Add Employee
        </button>

      </form>

    </div>
  );
}

export default EmployeeForm;