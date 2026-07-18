import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { getEmployees } from "../services/employeeService";

ChartJS.register(ArcElement, Tooltip, Legend);

function DepartmentChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await getEmployees();

        const employees = res.data;

        const deptCount = {};

        employees.forEach((emp) => {
          deptCount[emp.department] =
            (deptCount[emp.department] || 0) + 1;
        });

        setChartData({
          labels: Object.keys(deptCount),
          datasets: [
            {
              data: Object.values(deptCount),
              backgroundColor: [
                "#2563EB",
                "#16A34A",
                "#EA580C",
                "#9333EA",
                "#EC4899",
                "#06B6D4",
                "#F59E0B",
              ],
            },
          ],
        });
      } catch (err) {
        console.log(err);
      }
    };

    loadData();
  }, []);

  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 5px 15px rgba(0,0,0,.08)",
      }}
    >
      <h3>Department Distribution</h3>

      <Pie data={chartData} />
    </div>
  );
}

export default DepartmentChart;