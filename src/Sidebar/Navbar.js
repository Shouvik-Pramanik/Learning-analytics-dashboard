import React,{useState} from "react"
import "./Navbar.css"
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar'
import './custom.scss'
import { FaList} from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";


export default function Navbar()
{  
  let navigate=useNavigate()

  function logout()
  {
    localStorage.removeItem("token")
    navigate("/")
  }

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
      };
      const [menuCollapse, setMenuCollapse] = useState(false);
    return (
      
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
                  Home
                </MenuItem>
                <MenuItem icon={<FaList /> } onClick={()=>{
                  navigate("/charts")
                }}>Charts</MenuItem>
              </Menu>
            </SidebarContent>
            <SidebarFooter>
              <Menu iconShape="square">
                <MenuItem icon={<FiLogOut />} onClick={logout}>
                  Logout
                 </MenuItem>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
        </div>
        </div>
      
      );
}