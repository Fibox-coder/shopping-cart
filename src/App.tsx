import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Item, { ItemProps } from "./components/Item";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState<ItemProps[]>([]);

  return (
    <div>
      <Header />
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/products"
          element={<Products setCartItems={setCartItems} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

/* Only change App, Item, Cart (And maybe Product) from now on */
