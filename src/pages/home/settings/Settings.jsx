import React from 'react';
import SideBar from '../../../sidebar/SideBar';
import './Settings.css';

function Settings() {
  return (
   <div className="settings">
    <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className='settingsForm'>
            <label> Profile Picture</label>
            <div className="settingsPP">
                <img src='https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg'></img>
                <label htmlFor='fileInput'>
                <i className=" settingsPPIcon fa-regular fa-user"></i>
                </label>
                <input type="file"id='fileInput' style={{display:"none"}}></input>
            </div>
            <label > UserName</label>
            <input type="text" placeholder='Anish'/>
            <label > Email</label>
            <input type="email" placeholder='Anish@gmail.com'/>
            <label > Passsword</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
        </form>
    </div>
    <SideBar/>
   </div>
  );
}

export default Settings;
