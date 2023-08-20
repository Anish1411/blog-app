import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './Login.css';
import { useRef } from 'react';
import { Context } from '../../../context/Context';
import axios from 'axios';
import { LoginSuccess } from '../../../context/Actions';


function Login() {

 const userRef = useRef();
 const passwordRef = useRef();
 const {dispatch, isFetching } = useContext(Context);

//  const headers = {
//   'Content-Type': 'application/json',
// }

  const handleSubmit= async (e)=>{
   e.preventDefault();
   dispatch({type: "LOGIN_START" });
   try{
      const res = await axios.post("/auth/login", {
      username: userRef.current.value,
      password: passwordRef.current.value,
    },
    
    //  { headers: headers} 
     );
    //  console.log(userRef.current.value, "usernmae")
    //  console.log(passwordRef.current.value, "upassnmae")
    // console.log(res.data,"data");
    dispatch({type: "LOGIN_SUCCESS", payload: res.data});
    // dispatch(LoginSuccess(res.data))
    // console.log("login succcess")
   } catch(err){
    dispatch({type: "LOGIN_FAILURE"});
   }
  };
  // console.log(isFetching);
  // console.log(user+" user");
  return (
  <div className="login">
    <span className="loginTitle">Login</span>
    <form className='loginForm' onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" className='loginInput' placeholder='Enter your username...' ref={userRef}/>
        <label>Password</label>
        <input type="password" className='loginInput' placeholder='Enter your password...' ref={passwordRef}/>
        <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
    </form>
    <button className="loginRegisterButton">
    <Link className="link" to="/register">REGISTER</Link>
    </button>
  </div>
   
  );
}

export default Login;
