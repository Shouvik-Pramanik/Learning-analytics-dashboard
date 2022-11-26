import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Charts(props) {

  const seeData = () => {
    const data=JSON.parse(localStorage.getItem("myData"))
    console.log(data.T1)
  }
  let navigate=useNavigate()
  return (
    <>
      <div>Charts</div>
      <div className="btn-login" onClick={seeData}> See your data</div>
      <div className="btn-login" onClick={()=>{navigate("/dashboard")}}> Go back</div>
    </>
  )
}
