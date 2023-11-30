
import React, { useState } from 'react'
import "./login.css";
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

const Login = ({setLoginUser}) => {

    const history=useNavigate();
    const [user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange=e=>{
        const{name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const login=()=>{
        axios.post("http://localhost:9002/login",user)
        .then(res => {
            if (res.data.message === "Login Successful") {
                alert("Login Successful");
                setLoginUser(res.data.existingUser);
                history("/homepage");
            }
            else if (res.data.message === "Wrong Password Entered") {
                alert("Wrong Password Entered");
            }
            else {
                alert("User not registered");
                history("/register");
            }
        })
        .catch(error => {
            console.error("Login error:", error);
        });
    }

  return (
    <div className='login'>
        <h1>Login</h1>
        <input type='email' name='email' value={user.email} placeholder='Enter your Email' onChange={handleChange}></input>
        <input type='password' name='password' value={user.password} placeholder='Enter your password' onChange={handleChange}></input>
        <div className='button' onClick={login}>Login</div>
        <div>or</div>
        <div className='button' onClick={()=>history("/register")}>Register</div>
    </div>
  )
}

export default Login