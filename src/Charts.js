import axios from 'axios'
import React,{useState} from 'react'
var res=require("./Login/LoginForm")

export default function Charts() {

    
  const seeData = () => {
    // axios.post("http://localhost:1202/getd")
    // .then(res => {
    //     // console.log(res)
    //     if(res)
    //     {
            console.log(res)
            // window.location.assign("/dashboard")
    //     }
    //     else
    //     alert("Incorrect details")
    // })
}
  return (
    <>
      <div>Charts</div>
      <div className="btn-login" onClick={seeData}> See your data</div>

    </>
  )
}
