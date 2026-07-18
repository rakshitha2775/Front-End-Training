import AdminLayout from "../layouts/AdminLayout";

import DashboardCards from "../components/DashboardCards";

import AttendanceChart from "../components/AttendanceChart";

import DepartmentChart from "../components/DepartmentChart";

import RecentEmployees from "../components/RecentEmployees";

function AdminDashboard(){

return(

<AdminLayout>

<h1>

Welcome Admin 👋

</h1>

<p>

Dashboard Overview

</p>

<DashboardCards/>

<div
style={{
display:"grid",
gridTemplateColumns:"2fr 1fr",
gap:"20px",
marginTop:"30px"
}}
>

<AttendanceChart/>

<DepartmentChart/>

</div>

<RecentEmployees/>

</AdminLayout>

)

}

export default AdminDashboard;