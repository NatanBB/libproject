import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

import Login from './Pages/Login';
import Registration from './Pages/Registration';

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  )
}