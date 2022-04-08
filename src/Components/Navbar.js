import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
const [mode,setMode]=useState('light')
const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    document.title = 'Dark-mode'
  }
  else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.title = 'light-mode'
  }
}

    const navigate = useNavigate()
    const loggingOut = () => {
        alert("You sure, want to logout?")
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        navigate("/")
    }
  return (
    <div className='w-100 navbar_container'>
    
       <div>
          <h3 className='text-danger px-4 border'> Posts</h3>
       </div>
       <div>
           <button className='btn btn-danger' onClick={loggingOut}>Logout</button>           
       </div>
       <div>
          <input className="form-check-input mx-4" onClick={toggleMode} type="checkbox" 
           id="flexSwitchCheckDefault" />
            </div>
    </div>
  )
}

export default Navbar