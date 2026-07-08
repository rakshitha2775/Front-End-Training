import {
  FaUsers,
  FaUserCheck,
  FaBuilding,
  FaBriefcase
} from "react-icons/fa";

function DashboardCards({ total }) {

  return (

    <div className="dashboard">

      <div className="card">

        <FaUsers className="card-icon"/>

        <h2>{total}</h2>

        <p>Total Employees</p>

      </div>

      <div className="card">

        <FaUserCheck className="card-icon"/>

        <h2>{total}</h2>

        <p>Active Employees</p>

      </div>

      <div className="card">

        <FaBuilding className="card-icon"/>

        <h2>6</h2>

        <p>Departments</p>

      </div>

      <div className="card">

        <FaBriefcase className="card-icon"/>

        <h2>24/7</h2>

        <p>HR Support</p>

      </div>

    </div>

  );

}

export default DashboardCards;