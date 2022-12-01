import React, { useState, PureComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const datax = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

var data = JSON.parse(localStorage.getItem("myData"))

export default function Charts() {

  const [viewData, setViewData] = useState(false)
  const seeData = () => {
    // console.log(data)
    //   <BarChart width={350} height={540} data={datax}>
    //   <Bar dataKey="uv" fill="#8884d8" />
    //  </BarChart> 
    var element = document.createElement("div");
    document.getElementById('graphs').innerHTML = "<BarChart width={350} height={540} data={dataa}> <Bar dataKey='pv' fill='#8884d8' /> </BarChart>";
    setViewData((old) => !old)
    console.log(viewData)
  }
  const obj=[{
    name:"CO1",
    marks:data.C431_12_1,
   
    },
    {
    name:"CO2",
    marks:data.C431_12_2,
    
    },
    {
    name:"CO3",
    marks:data.C431_12_3,
  
    },
    {
    name:"CO4",
    marks:data.C431_12_4,
    
    },

];
  // console.log(dataa);
   console.log(data);
  // console.log(datax);
  let navigate = useNavigate()
  return (
    <>
      <div>Charts</div>

      <div className="btn-login" onClick={seeData}> See your data</div>
      <div id="graphs"></div>

      <div className="btn-login" onClick={() => { navigate("/dashboard") }}> Go back</div>
      {viewData && <BarChart width={350} height={540} data={obj}> <Bar dataKey='marks' fill='#8884d8' /> <XAxis dataKey="name"/> <YAxis /> </BarChart>}


    </>
  )
}