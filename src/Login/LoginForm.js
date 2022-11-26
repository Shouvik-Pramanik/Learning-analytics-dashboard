import React,{useState,useEffect} from 'react'
import "./Login.css"
import axios from 'axios';
// var data=require("../.././server/index")

export default function SignInPage() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    // const[d,setD]=useState([{}])

    // useEffect(()=>{
    //     axios.post("localhost:1202/getdata")
    //     .then((res)=>{
    //         console.log(res)
    //         setD(res)
    //     })
    // },[])

    // console.log(d)
    // console.log(data)

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
            // console.log(res)
            if(res)
            {
                console.log(res)
                exports.res=res
                // window.location.assign("/dashboard")
            }
            else
            alert("Incorrect details")
        })
    }


    return (
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
    )
}