import React from 'react';
import Home from './pages/home/Home';


import Topbar from "././components/topbar/Topbar";
import Single from './pages/home/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/ragister/Ragister';
function App(){

  return(
    <>
    <Topbar />
    {/* <Home /> */}
    {/* <Single /> */}
    {/* <Write /> */}
    {/* <Settings /> */}
    {/* <Login /> */}
  <Register />
    </>
  );
}
export default App;
