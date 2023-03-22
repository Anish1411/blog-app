import React from 'react';
import './SideBar.css';

function SideBar() {
  return (
    <div className='sidebar'>
     <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className='sidebarImg'
         src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        />
     </div>

     <div className="sidebarItem">
     <span className="sidebarTitle">Category</span>
     <ul className='sidebarList'>
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Tech</li>
        <li className="sidebarListItem">Cinema</li>
     </ul>
     </div>

     <div className="sidebarItem">
     <span className="sidebarTitle">FOLLOW ME</span>
     <div className="sidebarSocial">
        <i className=" sidebarIcon fa-brands fa-square-instagram"></i>
        <i className=" sidebarIcon fa-brands fa-linkedin"></i>
        <i className=" sidebarIcon fa-brands fa-square-github"></i>
     </div>
     </div>
    </div>
  );
}

export default SideBar;
