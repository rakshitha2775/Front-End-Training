import {

Bar

} from "react-chartjs-2";

import {

Chart as ChartJS,

CategoryScale,

LinearScale,

BarElement,

Title,

Tooltip,

Legend

} from "chart.js";

ChartJS.register(

CategoryScale,

LinearScale,

BarElement,

Title,

Tooltip,

Legend

);

function AttendanceChart(){

const data={

labels:["Mon","Tue","Wed","Thu","Fri"],

datasets:[

{

label:"Present",

data:[210,225,220,218,230],

backgroundColor:"#2563EB"

}

]

};

return(

<div
style={{
background:"white",
padding:"20px",
borderRadius:"15px"
}}
>

<h3>

Attendance Overview

</h3>

<Bar data={data}/>

</div>

)

}

export default AttendanceChart;