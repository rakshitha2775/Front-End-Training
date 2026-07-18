import { useEffect, useState } from "react";
import {
  FaUsers,
  FaUserCheck,
  FaBuilding,
  FaMoneyBillWave,
} from "react-icons/fa";

import { getEmployees } from "../services/employeeService";
import "../assets/css/Cards.css";

function DashboardCards() {
  const [cards, setCards] = useState([
    {
      title: "Employees",
      value: 0,
      icon: <FaUsers />,
      color: "#2563EB",
    },
    {
      title: "Active Employees",
      value: 0,
      icon: <FaUserCheck />,
      color: "#16A34A",
    },
    {
      title: "Departments",
      value: 0,
      icon: <FaBuilding />,
      color: "#EA580C",
    },
    {
      title: "Payroll",
      value: "₹0",
      icon: <FaMoneyBillWave />,
      color: "#9333EA",
    },
  ]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const res = await getEmployees();

      const employees = res.data;

      const totalEmployees = employees.length;

      const activeEmployees = employees.filter(
        (emp) => emp.status === "Active"
      ).length;

      const departments = new Set(
        employees.map((emp) => emp.department)
      ).size;

      const totalSalary = employees.reduce(
        (sum, emp) => sum + (Number(emp.salary) || 0),
        0
      );

      setCards([
        {
          title: "Employees",
          value: totalEmployees,
          icon: <FaUsers />,
          color: "#2563EB",
        },
        {
          title: "Active Employees",
          value: activeEmployees,
          icon: <FaUserCheck />,
          color: "#16A34A",
        },
        {
          title: "Departments",
          value: departments,
          icon: <FaBuilding />,
          color: "#EA580C",
        },
        {
          title: "Payroll",
          value: `₹${(totalSalary / 100000).toFixed(1)}L`,
          icon: <FaMoneyBillWave />,
          color: "#9333EA",
        },
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cards">
      {cards.map((card, index) => (
        <div
          className="card"
          key={index}
          style={{
            borderTop: `5px solid ${card.color}`,
          }}
        >
          <div className="top">
            <div
              className="icon"
              style={{
                color: card.color,
              }}
            >
              {card.icon}
            </div>

            <h2>{card.value}</h2>
          </div>

          <p>{card.title}</p>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;