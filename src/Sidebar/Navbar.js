import React,{useState} from "react"
import "./Navbar.css"
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar'
import './custom.scss'
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogIn,
  FiArrowLeftCircle,
  FiArrowRightCircle
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "../Login"
import { useNavigate } from "react-router-dom";


export default function Navbar()
{  
  let navigate=useNavigate()
    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
      };
      const [menuCollapse, setMenuCollapse] = useState(false);
    return (
      
        <div id="header">
          <div className="sideBar">
          <ProSidebar collapsed={menuCollapse}>
            <SidebarHeader>
              <div className="logotext">
                <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
              </div>
              <div className="closemenu" onClick={menuIconClick}>
                {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
              </div>
            </SidebarHeader>
            <SidebarContent>
              <Menu iconShape="square">
                <MenuItem active={true} icon={<FiHome />}>
                  Home
                </MenuItem>
                <MenuItem icon={<FaList />}>Category</MenuItem>
                <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
                <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
                <MenuItem icon={<BiCog />}>Settings</MenuItem>
              </Menu>
            </SidebarContent>
            <SidebarFooter>
              <Menu iconShape="square">
                <MenuItem icon={<FiLogIn />} onClick={()=>{
                  navigate("/login")
                }}>
                  Login
                 </MenuItem>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
        </div>
        </div>
      
      );
}