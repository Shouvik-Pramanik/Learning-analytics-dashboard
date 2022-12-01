import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DefaultLogin() {
  let navigate=useNavigate()
    return (
    <>
    <h1 style={{align: "center"}}> Welcome, please login using the details given to you: </h1>
    <button 
    onClick={()=>{navigate("/login")}}
    style={{color: "white", backgroundColor: "black", 
    margin: "16px", padding: "8px"}}> Go to login page </button>
    </>
  )
}