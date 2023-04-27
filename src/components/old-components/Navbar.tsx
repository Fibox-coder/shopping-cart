import React from "react";
import Cart from "../Cart";

function NavBar() {
  return (
    <nav>
      <ul className="nav-list">
        <li className="hover-underline-animation">
          <a href="/">Home</a>
        </li>
        <li className="hover-underline-animation">
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/contact" className="hover-underline-animation">
            Contact
          </a>
        </li>
      </ul>
      <Cart />
    </nav>
  );
}

export default NavBar;
