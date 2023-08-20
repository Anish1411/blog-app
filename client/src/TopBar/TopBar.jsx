import React from "react";
import { useContext } from 'react';
// import { Context } from '../context/Context';
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import './TopBar.css';

const TopBar = () => {
    // const {user} = useContext(Context);
    const PF = "http://localhost:5000/images/"

    const {user, dispatch} = useContext(Context)

    const handleLogout = ()=>{
        dispatch({type: "LOGOUT"});
    };
    return (
       
        <div className="top">

            <div className="topLeft">
                <i className=" topIcon fa-brands fa-square-instagram"></i>
                <i className=" topIcon fa-brands fa-linkedin"></i>
                <i className=" topIcon fa-brands fa-square-github"></i>
            </div>

            <div className="topCenter">
                <ul className="topList">
                {/* <Link to="/">Home</Link> */}
                    <li className="topListItem"> <Link className="link" to="/">HOME</Link></li>
                    <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
                    <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
                    <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                    <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
                </ul>
            </div>

            <div className="topRight">
                {
                    user ? ( 
                    <Link to="/settings">
 <img className="topImg" src={PF+ user.profilePic}/>
                    </Link>
                   ):
                    (
                        <ul className="topList">
                            <li className="topListItem">
                            <Link className="link" to="/login">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                            <Link className="link" to="/register">REGISTER</Link>
                            </li>
                        
                        </ul >
                    )
                }
               
                <i className=" topSearch fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default TopBar;