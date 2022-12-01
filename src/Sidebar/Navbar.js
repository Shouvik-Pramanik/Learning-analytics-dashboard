import React,{useState} from "react"
import "./Navbar.css"
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar'
import './custom.scss'
import {BsBarChartFill} from "react-icons/bs"
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "@fontsource/roboto";

var data = JSON.parse(localStorage.getItem("myData"))

export default function Navbar()
{
  const [seeMarks,setSeeMarks]=useState(false)  
  let navigate=useNavigate()

  function toggle()
  {
    setSeeMarks((old)=>!old)
  }

  function logout()
  {
    localStorage.clear()
    navigate("/")
  }

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
      };
      const [menuCollapse, setMenuCollapse] = useState(false);
    return (
      <>
      <div className="alignIt">
      <h1> Welcome to the dashboard, {data.Name}! </h1>
      <h4> You can visualise your performance by clicking the "charts" button in the sidebar</h4>
      <h4> (please log out before logging into another account) </h4>
      <button onClick={toggle} className="btn"> See your marks </button>
      {seeMarks && <table rules="none">
  <thead>
    <tr>
      <th>Exam</th>
      <th>Marks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>T1</td>
      <td style={{color: "aquamarine"}}>{data.T1}</td>
      
    </tr>
    <tr>
    <td>T2</td>
      <td style={{color: "aquamarine"}}>{data.T2}</td>
      
    </tr>
    <tr>
    <td>T3</td>
      <td style={{color: "aquamarine"}}>{data.T3}</td>
     
    </tr>
    <tr>
    <td>TA</td>
      <td style={{color: "aquamarine"}}>{data.TA}</td>
      
    </tr>

  </tbody>
</table>}
        {/* <ul>
          <li>CO1:{data[0].marks}</li>
          <li>CO2:{data[1].marks}</li>
          <li>CO3:{data[2].marks}</li>
          <li>CO4:{data[3].marks}</li>
        </ul> */}
      </div>
        <div className="header">
          
            <div className="sideBar">
            
            <ProSidebar collapsed={menuCollapse}>
              <SidebarHeader>
                <div className="closemenu" onClick={menuIconClick}>
                  {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
                </div>
              </SidebarHeader>
              <SidebarContent>
                <Menu iconShape="square">
                  <MenuItem active={true} icon={<FiHome />}>
                    <p>Home</p>
                  </MenuItem>
                  <MenuItem icon={<BsBarChartFill /> } onClick={()=>{
                    navigate("/charts")
                  }}><p>Charts</p></MenuItem>
                </Menu>
              </SidebarContent>
              <SidebarFooter>
                <Menu iconShape="square">
                  <MenuItem icon={<FiLogOut />} onClick={logout}>
                    <p>Logout</p>
                  </MenuItem>
                </Menu>
              </SidebarFooter>
            </ProSidebar>
          </div>
        </div>
        </>
      );
}