import React from "react";
import './TopBar.css';

const TopBar = () => {
    return (
        <div className="top">

            <div className="topLeft">
                <i className=" topIcon fa-brands fa-square-instagram"></i>
                <i className=" topIcon fa-brands fa-linkedin"></i>
                <i className=" topIcon fa-brands fa-square-github"></i>
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>

            <div className="topRight">
                <img className="topImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWMt4OUo8-HaLhyqqjC7MsKYQ5fUhd2txHE7VCLBnDYe5OPiRZCNwofblM2jdey8AXyWQ&usqp=CAU"/>
                <i className=" topSearch fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default TopBar;