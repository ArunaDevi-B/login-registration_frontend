import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Profile from './Login/Profile';


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        {/* <Route exact path="/" element={<Login />} /> */}
        <Route exact path="/profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router