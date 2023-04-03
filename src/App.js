import React, { useState } from "react";
import './App.css';

import  Login  from "./Login";
import  Register  from "./Register";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      
        <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        </Routes>
      
    </div>
  )
}

export default App;
