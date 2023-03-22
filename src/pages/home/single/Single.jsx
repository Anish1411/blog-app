import React from 'react';
import SideBar from '../../../sidebar/SideBar';
import Singlepost from '../../../singlepost/Singlepost';
import './Single.css';

function Single() {
  return (
   <div className="single">
    <Singlepost/>
    <SideBar/>
   </div>
  );
}

export default Single;
