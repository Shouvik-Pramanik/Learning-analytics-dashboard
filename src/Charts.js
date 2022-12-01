import React, { useState, PureComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip,PieChart, Pie, ScatterChart, Scatter } from 'recharts';

var data = JSON.parse(localStorage.getItem("myData"))



export default function Charts() {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
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

const obj3=[{
  name:"T1",
  marks:data.T1,
   attendance: 64,
  },
  {
  name:"T2",
  marks:data.T2,
   attendance:  54,
  },
  {
  name:"T3",
  marks:data.T3,
   attendance:77,
  },
  
  

];

   console.log(data);
  let navigate = useNavigate()
  return (
    <>
      <button className="btn-login" onClick={seeData}> See your data</button>
      <div id="graphs">
      </div>
      <button className="btn-login" onClick={() => { navigate("/dashboard") }}> Go back</button>
      <div style={{display: "flex"}}>
        
        <div style={{display:"flex"}}>
        {viewData && <BarChart width={350} height={540} data={obj}> <Bar dataKey='marks' fill='#E53F71' /> <XAxis dataKey="name" stroke="white"/> <YAxis stroke="white"/> </BarChart>}
        {viewData && 
        <>
        <div>
        <PieChart width={400} height={400}>
          <Pie
            data={obj}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="marks"
          >
            {obj.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        
        <p style={{color: "#0088FE"}}>&nbsp;&nbsp; T1</p>
        <p style={{color: "#00C49F"}}>&nbsp;&nbsp; T2</p>
        <p style={{color: "#FFBB28"}}>&nbsp;&nbsp; T3</p>
        <p style={{color: "#FF8042"}}>&nbsp;&nbsp; TA</p>
        </div>
        <div className="scatter">
        {viewData && <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="attendance" name="Attendance" unit="%" stroke='white'/>
          <YAxis type="number" dataKey="marks" name="Marks" unit="" stroke='white' />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={obj3} fill="aquamarine" />
        </ScatterChart>}
        
        </div>
        </>
        }
        </div>
      </div>

    </>
  )
}