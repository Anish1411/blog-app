import React, { useEffect, useState } from 'react';
import './SideBar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SideBar() {

   const [cats, setCats] = useState([]);

   useEffect(() => {
      const getCats = async () => {
         const res = await axios.get("/categories")
         // console.log(res.data);
         setCats(res.data);
      }
      getCats();
   }, [])
   return (
      <div className='sidebar'>
         <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className='sidebarImg'
               alt=''
               src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
            />
         </div>

         <div className="sidebarItem">
            <span className="sidebarTitle">Category</span>
            <ul className='sidebarList'>
               {cats.map((c) => (
                  <Link to={`/?cat=${c.name}`} className="link">
                     <li className="sidebarListItem">{c.name}</li>
                  </Link>

               ))}


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
