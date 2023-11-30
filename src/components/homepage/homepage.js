

import React from 'react'
import "./homepage.css";
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
//import { useParams } from 'react-router-dom';

const Homepage = ({user,setLoginUser}) => {
  const history=useNavigate();
  const id=user._id;
  const handleUpdatePassword=()=>{
    history({
      pathname:'/update-password',
      state:{user}
    })
  }

  const handleUpdateUsername=()=>{
    history({
      pathname:'/update-username',
      state:{user}
    })
  }

  const handleDelete=async ()=>{
    const confirmDelete = window.confirm("Are you sure you want to delete your account?");
    
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:9002/${id}`);
        history('/login');
      } catch (error) {
        console.error("Error deleting account:", error);
        // handle error appropriately, show a message, etc.
      }
    }
  }
  return (
    <div className='homepage'>
        <h1>Hello!! {user.name}</h1>
        <h3>{user.email}</h3>
        <div className='buttonContainer'>
          <div className='buttonContainer1'>
        <div className='button' onClick={()=>setLoginUser(history("/login"))}>Logout</div>
        <div className='button' onClick={handleUpdatePassword}>Update Password</div>
        </div>
        <div className='buttonContainer1'>
        <div className='button' onClick={handleUpdateUsername}>Update Username</div>
        <div className='button' onClick={handleDelete}>Delete Account</div>
        </div>
        </div>
    </div>
  )
}

export default Homepage