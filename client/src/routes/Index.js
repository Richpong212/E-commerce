import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";


const Index = () => {
  return (
    <BrowserRouter>
         <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/cart" element={<Cart />} />
             <Route path="/login" element={<Login />} />
             <Route path="/register" element={<Register />} />
         </Routes>
    </BrowserRouter>
  )
}

export default Index