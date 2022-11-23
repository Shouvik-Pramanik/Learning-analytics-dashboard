import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import "./Login.css"
import axios from 'axios';

export default function SignInPage() {
    let navigate=useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const login = () => {
        axios.post("http://localhost:1200/login", user)
        .then(res => console.log(res))
    }
    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form>
                <p>
                    <label>Enrollment number</label><br/>
                    <input 
                    type="email" 
                    name="email" 
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input 
                    type="password" 
                    value={user.password}
                    name="password"
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required />
                </p>
                <p>
                <div className="btn-login" onClick={login}>Login</div>
                    <div className="btn-login" onClick={()=>{
                  navigate("/") }}> Back to homepage</div>
                </p>
            </form>
        </div>
    )
}