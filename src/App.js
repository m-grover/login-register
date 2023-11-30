import { useEffect, useState } from 'react';
import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Frontpage from './components/frontpage/Frontpage';
import Update from './components/update/update';
import UpdateUsername from './components/updateUsername/UpdateUsername';

function App() {

  const [ user, setLoginUser]=useState(()=>{
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : {};
  })

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Frontpage/>}></Route>
          <Route path='/homepage' element={<Homepage user={user} setLoginUser={setLoginUser} />}/>
          {/* <Route path='/homepage' element={user && user._id?(<Homepage user={user} setLoginUser={setLoginUser} />):(<Login setLoginUser={setLoginUser}/>)} exact> */}
          {/* </Route> */}
          <Route path='/login'element={<Login setLoginUser={setLoginUser} />} exact></Route>
          <Route path='/register' element={<Register/>} exact></Route>
          <Route path='/update-password' element={<Update user={user}/>}></Route>
          <Route path='/update-username' element={<UpdateUsername user={user} setLoginUser={setLoginUser}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
