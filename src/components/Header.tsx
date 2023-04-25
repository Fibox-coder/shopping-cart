import React from "react";
import StoreName from "./StoreName";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <StoreName></StoreName>
      <Navbar></Navbar>
    </header>
  );
}

export default Header;
