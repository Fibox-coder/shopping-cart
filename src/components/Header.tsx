import React from "react";

function Header() {
  function handleCartClick() {
    const modal = document.getElementById("modal-sidebar");
    const modalOpacity = document.getElementById("modal-opacity");
    if (modal !== null) {
      modal.style.display = "flex";
      if (modalOpacity !== null) {
        modalOpacity.style.display = "block";
      }
    }
  }
  return (
    <header className="header">
      <h1>
        <a href="/shopping-cart/">
          Fashion<span className="title-color">Point</span>
        </a>
      </h1>
      <nav>
        <ul className="nav-list">
          <li className="hover-underline-animation">
            <a href="/shopping-cart/">Home</a>
          </li>
          <li className="hover-underline-animation">
            <a href="/shopping-cart/products">Products</a>
          </li>
          <li>
            <a
              href="/shopping-cart/contact"
              className="hover-underline-animation"
            >
              Contact
            </a>
          </li>
        </ul>
        <img
          src="./images/cart-icon.png"
          alt="Shopping cart"
          className="cart-icon"
          onClick={handleCartClick}
        />
      </nav>
    </header>
  );
}

export default Header;
