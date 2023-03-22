import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home/home/Home';
import Login from './pages/home/login/Login';
import Settings from './pages/home/settings/Settings';
import Single from './pages/home/single/Single';
import Write from './pages/home/write/Write';
import Register from './register/Register';
import TopBar from './TopBar/TopBar';

function App() {
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
    <Routes>
      <Route></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
