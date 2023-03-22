import React from 'react';
import './Register.css';


function Register() {
  return (
  <div className="Register">
    <span className="RegisterTitle">Register</span>
    <form className='RegisterForm'>
    <label>UserName</label>
        <input type="text" className='RegisterInput' placeholder='Enter your username...'></input>
        <label>Email</label>
        <input type="email" className='RegisterInput' placeholder='Enter your email...'></input>
        <label>Password</label>
        <input type="password" className='RegisterInput' placeholder='Enter your password...'></input>
        <button className="RegisterButton">Register</button>
    </form>
    <button className="RegisterLoginButton">Login</button>
  </div>
   
  );
}

export default Register;
