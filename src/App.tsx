import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
