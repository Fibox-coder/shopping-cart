import React, { useState } from "react";
import { ItemProps } from "./Item";

interface CartProps {
  setCartItems: React.Dispatch<React.SetStateAction<ItemProps[]>>;
}

function Cart({ setCartItems }: CartProps) {
  const [cartItems, setLocalCartItems] = useState<ItemProps[]>([]);

  function handleCheckoutClick() {
    console.log(cartItems);
    // console.log(newCartItems);
  }

  /* Closes shopping cart modal when clicking CLOSE */
  function handleCloseClick() {
    const modal = document.getElementById("modal-sidebar");
    const modalOpacity = document.getElementById("modal-opacity");
    if (modal !== null) {
      modal.style.display = "none";
      if (modalOpacity !== null) {
        modalOpacity.style.display = "none";
      }
    }
  }

  /* Removes shopping cart modal when clicked on the opacity area */
  React.useEffect(() => {
    const modalOpacity = document.getElementById("modal-opacity");
    if (modalOpacity !== null) {
      modalOpacity.addEventListener("click", handleCloseClick);
    }

    return () => {
      if (modalOpacity !== null) {
        modalOpacity.removeEventListener("click", handleCloseClick);
      }
    };
  }, []);

  return (
    <div>
      <div className="modal-opacity" id="modal-opacity"></div>
      <div className="modal-sidebar" id="modal-sidebar">
        <h3 className="content">Your shopping cart</h3>
        <div className="cart-items">
          <img className="cart-image" src="/products/polo-1.png" alt="polo" />
          <div className="cart-info">
            <h5>Men's Casual Pr...</h5>
            <p>€22.30</p>
            <div className="amount">
              <button className="minus-item-button">-</button>
              <p>1</p>
              <button className="add-item-button">+</button>
            </div>
          </div>
        </div>
        <h4 className="total-price">Total: €22.30</h4>
        <button
          className="checkout"
          id="checkout-button"
          onClick={handleCheckoutClick}
        >
          Checkout
        </button>
        <button className="close" id="close-button" onClick={handleCloseClick}>
          Close
        </button>
      </div>

      {/* <span className="cart-count">{cartItems.length}</span>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index}>
            <img src={item.imageSrc} alt={item.title} />
            <h5>{item.title}</h5>
            <p>{item.price}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Cart;
