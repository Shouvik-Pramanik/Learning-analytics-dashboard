import React from 'react'
import { useNavigate } from "react-router-dom";

import "./Login.css"

export default function SignInPage() {
    let navigate=useNavigate()
    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input type="password" name="password" required />
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