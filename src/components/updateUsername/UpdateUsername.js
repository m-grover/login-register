import React, { useState } from 'react'
import './updateUsername.css';
import {useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateUsername = ({user,setLoginUser}) => {
    const history=useNavigate();
    const id=useParams();
    const currentUsername=user.name;

    const [userName,setUsername]=useState({
        enteredUsername:""
    })

    const handleChange=e=>{
        const {name,value}=e.target;
        setUsername({
            ...userName,
            [name]:value
        })
    }

    const updateUsername=async()=>{
        console.log(user.email);
        console.log(userName.enteredUsername);
        const response=await axios.put(`http://localhost:9002/${id}/change-username`,{
            newUsername:userName.enteredUsername,
            email:user.email
        });
        if (response.data.message === "Username changed successfully") {
            setLoginUser(prevUser => ({ ...prevUser, name: userName.enteredUsername }));
            alert('Username changed successfully!');
            history('/homepage');

        } 
        else {
            alert("Username not changed");
        }
    }

  return (
    <div className='updateUsername'>
        <div className='updateLabel'><label>Current Username :</label></div>
        <input type="text" name="currentUsername" value={currentUsername} disabled></input>
        <div className='updateLabel'><label>New Username :</label></div>
        <input type="text" name="enteredUsername" value={userName.enteredUsername} onChange={handleChange}></input>
        <div className='button' onClick={updateUsername}>Change Username</div>
    </div>
  )
}

export default UpdateUsername