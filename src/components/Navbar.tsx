import React from "react";

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
      <div>
        <img
          src="/images/cart-icon.png"
          alt="Shopping cart"
          className="cart-icon"
        />
      </div>
    </nav>
  );
}

export default NavBar;
