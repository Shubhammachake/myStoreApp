import React from "react";
import index from "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import About from "./Component/About";
import Products from "./Component/Products";
import Details from "./Component/Details";
import Login from "./Component/Login";
import Sign from "./Component/Sign";

export default function App(props) {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Products/:id" element={<Details />} />
        <Route path="/Sign" element={<Sign />} />
      </Routes>
    </BrowserRouter>
  );
}
