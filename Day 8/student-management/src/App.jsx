import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [form, setForm] = useState({
    regNo: "",
    name: "",
    dept: "",
    className: "A",
    status: "Absent",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addStudent = (e) => {
    e.preventDefault();

    if (!form.regNo || !form.name || !form.dept) {
      alert("Please fill all fields");
      return;
    }

    const exists = students.some(
      (student) => student.regNo === form.regNo
    );

    if (exists) {
      alert("Register Number already exists!");
      return;
    }

    setStudents([...students, { ...form }]);

    setForm({
      regNo: "",
      name: "",
      dept: "",
      className: "A",
      status: "Absent",
    });
  };

  const markPresent = (regNo) => {
    setStudents(
      students.map((student) =>
        student.regNo === regNo
          ? { ...student, status: "Present" }
          : student
      )
    );
  };

  const deleteStudent = (regNo) => {
    setStudents(
      students.filter((student) => student.regNo !== regNo)
    );
  };

  const filteredStudents = students
    .filter((student) => {
      const matchSearch =
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.regNo.toLowerCase().includes(search.toLowerCase());

      const matchFilter =
        filter === "All" || student.className === filter;

      return matchSearch && matchFilter;
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  const total = students.length;
  const present = students.filter(
    (student) => student.status === "Present"
  ).length;
  const absent = total - present;

  return (
    <div className="container">

      <h1>🎓 Student Management Portal</h1>

      <div className="cards">

        <div className="card blue">
          <h3>Total Students</h3>
          <h2>{total}</h2>
        </div>

        <div className="card green">
          <h3>Present</h3>
          <h2>{present}</h2>
        </div>

        <div className="card red">
          <h3>Absent</h3>
          <h2>{absent}</h2>
        </div>

      </div>

      <form className="form" onSubmit={addStudent}>

        <input
          type="text"
          placeholder="Register Number"
          name="regNo"
          value={form.regNo}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Student Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <select
          name="dept"
          value={form.dept}
          onChange={handleChange}
        >
          <option value="">Department</option>
          <option>CSE</option>
          <option>IT</option>
          <option>ECE</option>
          <option>EEE</option>
          <option>AIDS</option>
          <option>AIML</option>
          <option>MECH</option>
          <option>CIVIL</option>
        </select>

        <select
          name="className"
          value={form.className}
          onChange={handleChange}
        >
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>

        <button type="submit">
          Add Student
        </button>

      </form>

      <div className="controls">

        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>

      </div>

      <table>

        <thead>

          <tr>
            <th>Reg No</th>
            <th>Name</th>
            <th>Department</th>
            <th>Class</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {filteredStudents.length === 0 ? (

            <tr>
              <td colSpan="6">
                No Students Found
              </td>
            </tr>

          ) : (

            filteredStudents.map((student) => (

              <tr key={student.regNo}>

                <td>{student.regNo}</td>
                <td>{student.name}</td>
                <td>{student.dept}</td>
                <td>{student.className}</td>

                <td>
                  <span
                    className={
                      student.status === "Present"
                        ? "present"
                        : "absent"
                    }
                  >
                    {student.status}
                  </span>
                </td>

                <td>

                  {student.status === "Absent" && (

                    <button
                      type="button"
                      className="presentBtn"
                      onClick={() =>
                        markPresent(student.regNo)
                      }
                    >
                      Present
                    </button>

                  )}

                  <button
                    type="button"
                    className="deleteBtn"
                    onClick={() =>
                      deleteStudent(student.regNo)
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default App;