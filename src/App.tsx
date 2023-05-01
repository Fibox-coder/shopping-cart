import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Item, { ItemProps } from "./components/Item";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState<ItemProps[]>(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  function testFunction() {
    console.log(cartItems);
  }

  /* Retrieves the cart items from local storage and sets 'cartItems' state to saved value */
  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  /* Runs whenever the 'cartItems' state changes. It saves the current 'cartItems' to local storage */

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

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

      <button onClick={testFunction}>test</button>
      <Footer />
    </div>
  );
}

export default App;
