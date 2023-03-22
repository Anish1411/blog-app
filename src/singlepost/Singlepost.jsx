import React from 'react';
// import SideBar from '../../../sidebar/SideBar';
import './Singlepost.css';

function Singlepost() {
  return (
   <div className="singlePost">
    <div className="singlePostWrapper">
        <img  className='singlePostImg' src='https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg'/>
        <h1 className='singlePostTitle'>
            Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
              <i className= " singlePostIcon fa-regular fa-pen-to-square"></i>
              <i className= " singlePostIcon fa-sharp fa-solid fa-trash"></i>
            </div>
        </h1> 
        <div className="singlePostInfo">
            <span className="siglePostAuthor">Author</span>
            <span className="singlePostDate">1 hour ago</span>
        </div> 
        <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat?
        </p>
       
     </div>
   </div>
  );
}

export default Singlepost;
