// import React, { useState } from 'react'
// import './update.css';
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

// const Update = ({user}) => {
//     const password=user?user.password:"null";
//     console.log(password);
//     const id1=user._id;
//     console.log(id1);

//     const history=useNavigate();
//     const id=useParams();

//     const [userPassword,setUserPassword]=useState({
//         actualP:"",
//         enteredP:""
//     })

//     const handleChange=e=>{
//         const {name,value}=e.target;
//         setUserPassword({
//             ...userPassword,
//             [name]:value
//         })
//     }

//     const updatePassword = async () => {
//         try {
//             console.log(userPassword.actualP, "lalalala", password);
//             if (userPassword.actualP === password) {
//                 const response = await axios.put(`http://localhost:9002/${id}`, {
//                     email: user.email,
//                     newPassword: userPassword.enteredP
//                 });

//                 console.log(response.data);

//                 if (response.data.message === "Password changed successfully") {
//                     alert('Password Changed Successfully!');
//                     history('/homepage');

//                 } else {
//                     alert("Password not changed");
//                 }
//             } else {
//                 alert("Incorrect Current Password");
//             }
//         } catch (error) {
//             console.error("Error changing password : ", error.message);
//         }
//     };

//   return (
//     <div className='update'>
//         <div className='updateLabel'><label>Current Password :</label></div>
//         <input type="text" name="actualP" value={userPassword.actualP} onChange={handleChange}></input>
//         <div className='updateLabel'><label>New Password :</label></div>
//         <input type="text" name="enteredP" value={userPassword.enteredP} onChange={handleChange}></input>
//         <div className='button' onClick={updatePassword}>Change Password</div>
//     </div>
//   )
// }

// export default Update



/*import React, { useState } from 'react'
import './update.css';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const Update = ({user}) => {
    const password=user?user.password:"null";
    console.log(password);
    const id1=user._id;
    console.log(id1);

    const history=useNavigate();
    const id=useParams();

    const [userPassword,setUserPassword]=useState({
        actualP:"",
        enteredP:""
    })

    const handleChange=e=>{
        const {name,value}=e.target;
        setUserPassword({
            ...userPassword,
            [name]:value
        })
    }

    const updatePassword = async () => {
        try {
            console.log(userPassword.actualP, "test:", password);
            if (userPassword.actualP === password) {
                const response = await axios.put(`http://localhost:9002/${id}`, {
                    email: user.email,
                    newPassword: userPassword.enteredP
                });

                console.log(response.data);

                if (response.data.message === "Password changed successfully") {
                    alert('Password Changed Successfully!');
                    history('/homepage');

                } else {
                    alert("Password not changed");
                }
            } else {
                alert("Incorrect Current Password");
            }
        } catch (error) {
            console.error("Error changing password : ", error.message);
        }
    };

  return (
    <div className='update'>
        <div className='updateLabel'><label>Current Password :</label></div>
        <input type="text" name="actualP" value={userPassword.actualP} onChange={handleChange}></input>
        <div className='updateLabel'><label>New Password :</label></div>
        <input type="text" name="enteredP" value={userPassword.enteredP} onChange={handleChange}></input>
        <div className='button' onClick={updatePassword}>Change Password</div>
    </div>
  )
}

export default Update*/

import React, { useState } from 'react'
import './update.css';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Update = ({user}) => {
    const password=user?user.password:"null";
    console.log(password);
    const id1=user._id;
    console.log(id1);

    const history=useNavigate();
    const id=useParams();

    const [userPassword,setUserPassword]=useState({
        actualP:"",
        enteredP:""
    })

    const handleChange=e=>{
        const {name,value}=e.target;
        setUserPassword({
            ...userPassword,
            [name]:value
        })
    }

    const updatePassword = async () => {
        try {
            console.log(userPassword.actualP, "lalalala", password);
            if (userPassword.actualP === password) {
                const response = await axios.put(`http://localhost:9002/${id}/change-password`, {
                    email: user.email,
                    newPassword: userPassword.enteredP
                });

                console.log(response.data);

                if (response.data.message === "Password changed successfully") {
                    alert('Password Changed Successfully!');
                    history('/homepage');

                } else {
                    alert("Password not changed");
                }
            } else {
                alert("Incorrect Current Password");
            }
        } catch (error) {
            console.error("Error changing password : ", error.message);
        }
    };

  return (
    <div className='update'>
        <div className='updateLabel'><label>Current Password :</label></div>
        <input type="text" name="actualP" value={userPassword.actualP} onChange={handleChange}></input>
        <div className='updateLabel'><label>New Password :</label></div>
        <input type="text" name="enteredP" value={userPassword.enteredP} onChange={handleChange}></input>
        <div className='button' onClick={updatePassword}>Change Password</div>
    </div>
  )
}

export default Update