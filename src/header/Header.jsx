import React from "react";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm"> React</span>
                <span className="headerTitleLg"> Blog</span>
            </div>
            <img
                className="headerImg"
                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                alt=""
            />
        </div>
    )
}

export default Header;