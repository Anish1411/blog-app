import React from 'react';
import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Context } from './context/Context';
import Home from './pages/home/home/Home';
import Login from './pages/home/login/Login';
import Settings from './pages/home/settings/Settings';
import Single from './pages/home/single/Single';
import Write from './pages/home/write/Write';
import Register from './register/Register';
import TopBar from './TopBar/TopBar';

function App() {

  const {user} = useContext(Context);
  return (
  //  <>
  //  <TopBar/>
  //  {/* <Home/> */}
  //  {/* <Single/> */}
  //  {/* <Write/> */}
  //  {/* <Settings/> */}
  //  {/* <Login/> */}
  //  <Register/>
  //  </>
  
  <BrowserRouter>
     <TopBar/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={user? <Home/> : <Register />} />
          <Route path="/login" element={user? <Home/> : <Login />} />
          <Route path="/write" element={user? <Write/> : <Register />} />
          <Route path="/settings" element={user? <Settings/> : <Register />} />
          <Route path="/post/:postId" element={<Single />} />
          
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
