import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import EmployeeLayout from "../layouts/EmployeeLayout";
import { getEmployeeById } from "../services/employeeService";

import "../assets/css/Profile.css";

function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("personal");

  useEffect(() => {
    const loadEmployee = async () => {
      try {
        const response = await getEmployeeById(id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadEmployee();
  }, [id]);

  if (loading) {
    return (
      <EmployeeLayout>
        <h2>Loading...</h2>
      </EmployeeLayout>
    );
  }

  if (!employee) {
    return (
      <EmployeeLayout>
        <h2>Employee Not Found</h2>
      </EmployeeLayout>
    );
  }

  return (
    <EmployeeLayout>
      <div className="profile-page">
        <div className="profile-card">

<div className="profile-top">

  <button
    className="back-button"
    onClick={() => navigate("/employees")}
  >
    ← Back
  </button>

  <img
    src={
      employee.profileImage
        ? employee.profileImage
        : `https://i.pravatar.cc/300?u=${employee.employeeId}`
    }
    alt={employee.name}
    className="profile-img"
  />

  <h1 className="employee-name">
    {employee.name}
  </h1>

  <p className="employee-designation">
    {employee.designation}
  </p>

  <div className="status-badge">

    <span className="status-dot"></span>

    {employee.status}

  </div>

  <div className="employee-id-card">

    Employee ID :
    <p>
      {employee.employeeId}
    </p>

  </div>

</div> 
<div className="profile-tabs">

  <button
    className={activeTab === "personal" ? "tab active-tab" : "tab"}
    onClick={() => setActiveTab("personal")}
  >
    Personal
  </button>

  <button
    className={activeTab === "attendance" ? "tab active-tab" : "tab"}
    onClick={() => setActiveTab("attendance")}
  >
    Attendance
  </button>

  <button
    className={activeTab === "leave" ? "tab active-tab" : "tab"}
    onClick={() => setActiveTab("leave")}
  >
    Leave
  </button>

  <button
    className={activeTab === "payroll" ? "tab active-tab" : "tab"}
    onClick={() => setActiveTab("payroll")}
  >
    Payroll
  </button>

  <button
    className={activeTab === "documents" ? "tab active-tab" : "tab"}
    onClick={() => setActiveTab("documents")}
  >
    Documents
  </button>

</div>
<div className="profile-stats">

  <div className="stat-card">

    <h5>Attendance</h5>

    <h2>96%</h2>

  </div>

  <div className="stat-card">

    <h5>Salary</h5>

    <h2>₹{employee.salary}</h2>

  </div>

  <div className="stat-card">

    <h5>Department</h5>

    <h2>{employee.department}</h2>

  </div>

  <div className="stat-card">

    <h5>Status</h5>

    <h2>{employee.status}</h2>

  </div>

</div>
         {activeTab === "personal" && (

<div className="profile-details">

  {/* Personal Information */}

  <div className="info-card">

    <h3>👤 Personal Information</h3>

    <div className="detail-item">
      <span>Email</span>
      <p>{employee.email}</p>
    </div>

    <div className="detail-item">
      <label>Phone</label>
      <p>{employee.phone}</p> 
    </div>

    <div className="detail-item">
      <span>Gender</span>
      <p>{employee.gender}</p>
    </div>

    <div className="detail-item">
      <span>Date of Birth</span>
      <p>{employee.dob?.substring(0,10)}</p>
    </div>

    <div className="detail-item">
      <span>Address</span>
      <p>{employee.address}</p>
    </div>

  </div>

  {/* Employment Information */}

  <div className="info-card">

    <h3>💼 Employment Information</h3>

    <div className="detail-item">
      <span>Employee ID</span>
      <p>{employee.employeeId}</p>
    </div>

    <div className="detail-item">
      <span>Department</span>
      <p>{employee.department}</p>
    </div>

    <div className="detail-item">
      <span>Designation</span>
      <p>{employee.designation}</p>
    </div>

    <div className="detail-item">
      <span>Joining Date</span>
      <p>{employee.joiningDate?.substring(0,10)}</p>
    </div>

    <div className="detail-item">
      <span>Salary</span>
      <p>₹ {employee.salary}</p>
    </div>

  </div>
</div>

)}

{activeTab === "attendance" && (

<div className="coming-soon">

<h2>Attendance Module</h2>

<p>Coming in next step...</p>

</div>

)}

{activeTab === "leave" && (

<div className="coming-soon">

<h2>Leave Management</h2>

<p>Coming in next step...</p>

</div>

)}

{activeTab === "payroll" && (

<div className="coming-soon">

<h2>Payroll Details</h2>

<p>Coming in next step...</p>

</div>

)}

{activeTab === "documents" && (

<div className="coming-soon">

<h2>Employee Documents</h2>

<p>Coming in next step...</p>

</div>

)}

<div className="performance-card">

  <h2>📊 Performance Overview</h2>

  <div className="performance-grid">

    <div className="performance-box">

      <h4>Attendance</h4>

      <div className="progress">

        <div
          className="progress-bar"
          style={{ width: "96%" }}
        ></div>

      </div>

      <span>96%</span>

    </div>

    <div className="performance-box">

      <h4>Projects</h4>

      <h3>12</h3>

    </div>

    <div className="performance-box">

      <h4>Leave Taken</h4>

      <h3>5 Days</h3>

    </div>

    <div className="performance-box">

      <h4>Performance</h4>

      <h3>⭐⭐⭐⭐⭐</h3>

    </div>

  </div>

</div>

        </div>
      </div>
    </EmployeeLayout>
  );
}

export default Profile;