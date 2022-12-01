import React,{useState,useEffect} from 'react'
import "./Login.css"
import axios from 'axios';

export default function SignInPage() {
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
        axios.post("http://localhost:1202/getd", user)
        .then(res => {
            if(res.data!=="")
            {
                console.log(res.data.T1)
                localStorage.setItem("myData",JSON.stringify(res.data))
                window.location.assign("/dashboard")
            }
            else
            alert("Incorrect details")
        })
    }

    return (
        <>
            <div className="text-center m-5-auto">
                <form>
                    <p>
                        <label> Email </label><br/>
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
                    </p>
                </form>
            </div>
        </>
    )
}