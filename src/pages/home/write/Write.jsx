import React from 'react';
import './Write.css';

function Write() {
  return (
   <div className="write">
    <img src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg' className='writeImg'></img>
    <form action="" className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor='fileInput'>
                <i className=" writeIcon fa-regular fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}></input>
            <input type="text" placeholder='Title' autoFocus="true" className='writeInput'></input>
        </div>

        <div className="writeFormGroup">
            <textarea placeholder='Tell...' type="text" className='writeInput writeText'></textarea>
        </div>
        <button className='writeSubmit'>Publish</button>
    </form>
   </div>
  );
}

export default Write;
