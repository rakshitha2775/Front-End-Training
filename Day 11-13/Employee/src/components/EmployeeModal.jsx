import { useEffect, useState } from "react";
import {
  addEmployee,
  updateEmployee,
} from "../services/employeeService";

import "../assets/css/EmployeeModal.css";


function EmployeeModal({
  setShowModal,
  reloadEmployees,
  employee,
}) {

  const isEdit = Boolean(employee);

  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "Male",
    dob: "",
    department: "",
    designation: "",
    salary: "",
    joiningDate: "",
    address: "",
    profileImage: "",
    status: "Active",
  });


  useEffect(() => {

    if (employee) {

      setFormData({

        employeeId: employee.employeeId || "",
        name: employee.name || "",
        email: employee.email || "",
        password: employee.password || "",
        phone: employee.phone || "",
        gender: employee.gender || "Male",

        dob: employee.dob
          ? employee.dob.substring(0,10)
          : "",

        department: employee.department || "",

        designation: employee.designation || "",

        salary: employee.salary || "",

        joiningDate: employee.joiningDate
          ? employee.joiningDate.substring(0,10)
          : "",

        address: employee.address || "",

        profileImage: employee.profileImage || "",

        status: employee.status || "Active",

      });

    }

  }, [employee]);



  const handleChange = (e)=>{

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };



  const handleSubmit = async(e)=>{

    e.preventDefault();

    try{


      if(isEdit){

        await updateEmployee(
          employee._id,
          formData
        );

        alert(
          "Employee Updated Successfully"
        );

      }
      else{

        await addEmployee(
          formData
        );

        alert(
          "Employee Added Successfully"
        );

      }


      reloadEmployees();

      setShowModal(false);


    }
    catch(error){

      console.log(error);

      alert(
        "Something went wrong"
      );

    }

  };



  return (

    <div className="modal-overlay">


      <div className="modal-box">


        <div className="modal-header">

          <h2>
            {
              isEdit
              ? "Edit Employee"
              : "Add Employee"
            }
          </h2>


          <button
            className="close-btn"
            onClick={()=>setShowModal(false)}
          >
            ✕
          </button>


        </div>



        <form onSubmit={handleSubmit}>


          <div className="form-grid">



            <input
              id="employeeId"
              name="employeeId"
              placeholder="Employee ID"
              value={formData.employeeId}
              onChange={handleChange}
              required
            />



            <input
              id="employeeName"
              name="name"
              placeholder="Employee Name"
              value={formData.name}
              onChange={handleChange}
              required
            />



            <input
              id="employeeEmail"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />



            <input
              id="employeePassword"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />



            <input
              id="employeePhone"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />



            <select
              id="employeeGender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >

              <option value="Male">
                Male
              </option>

              <option value="Female">
                Female
              </option>

              <option value="Other">
                Other
              </option>

            </select>





            <input
              id="employeeDob"
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />



            <input
              id="employeeDepartment"
              name="department"
              placeholder="Department"
              value={formData.department}
              onChange={handleChange}
              required
            />



            <input
              id="employeeDesignation"
              name="designation"
              placeholder="Designation"
              value={formData.designation}
              onChange={handleChange}
              required
            />



            <input
              id="employeeSalary"
              type="number"
              name="salary"
              placeholder="Salary"
              value={formData.salary}
              onChange={handleChange}
              required
            />



            <input
              id="employeeJoiningDate"
              type="date"
              name="joiningDate"
              value={formData.joiningDate}
              onChange={handleChange}
              required
            />



            <input
              id="employeeProfileImage"
              name="profileImage"
              placeholder="Profile Image URL"
              value={formData.profileImage}
              onChange={handleChange}
            />



            <select
              id="employeeStatus"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >

              <option value="Active">
                Active
              </option>

              <option value="Inactive">
                Inactive
              </option>

            </select>




            <textarea
              id="employeeAddress"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="full-width"
              required
            />



          </div>




          <div className="modal-footer">


            <button
              type="button"
              className="cancel-btn"
              onClick={()=>setShowModal(false)}
            >

              Cancel

            </button>



            <button
              type="submit"
              className="submit-btn"
            >

              {
                isEdit
                ? "Update"
                : "Save"
              }

            </button>



          </div>



        </form>


      </div>


    </div>

  );

}


export default EmployeeModal;