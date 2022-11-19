import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import "./Login.css"


export default function SignInPage() {
    let navigate=useNavigate()
    const [enroll,setEnroll]=useState("")
    const [password,setPassword]=useState("")

    async function loginUser(e)
    {
        e.preventDefault()
        const response=await fetch("http://localhost:1200/api/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                enroll,
                password
            })
        })
        const data=await response.json()
        console.log(data)
    }
    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form onSubmit={loginUser}>
                <p>
                    <label>Enrollment number</label><br/>
                    <input 
                    type="number" 
                    name="enroll" 
                    value={enroll}
                    onChange={(e)=>setEnroll(e.target.value)}
                    required
                    />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input 
                    type="password" 
                    value={password}
                    name="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                    <button id="sub_btn" onClick={()=>{
                  navigate("/") }}> Back to homepage</button>
                </p>
            </form>
        </div>
    )
}