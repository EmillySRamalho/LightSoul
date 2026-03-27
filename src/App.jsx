import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Search from "./Components/Search";
import Slide from "./Components/Slide";
import Login from "./pages/Login";

import "flowbite";

const Home = () => {
  return (
    <>
      <Search />
      <Slide />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Header /> {/* aparece em todas as páginas */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;