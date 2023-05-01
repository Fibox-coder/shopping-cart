import React, { useState, useEffect } from "react";
import { ItemProps } from "./Item";

interface CartProps {
  setCartItems: React.Dispatch<React.SetStateAction<ItemProps[]>>;
  cartItems: ItemProps[];
}

function Cart({ cartItems, setCartItems }: CartProps) {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalPrice = cartItems.reduce((total, item) => {
      return total + item.price * (item.amount ?? 1);
    }, 0);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  function handleCheckoutClick() {
    console.log(cartItems);
  }

  function handleMinusClick(item: ItemProps) {
    setCartItems((prevCartItems) => {
      // Find the index of the item in the cartItems array
      const itemIndex = prevCartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      // Remove the item from the cartItems array if the amount is equal to 0
      if (prevCartItems[itemIndex].amount === 1) {
        return prevCartItems.filter((cartItem) => cartItem.id !== item.id);
      }

      // Create a copy of the item with the updated amount
      const updatedItem = {
        ...prevCartItems[itemIndex],
        amount: (prevCartItems[itemIndex].amount ?? 0) - 1,
      };

      // Create a new cartItems array with the updated item
      const newCartItems = [...prevCartItems];
      newCartItems[itemIndex] = updatedItem;

      // Return the new cartItems array
      return newCartItems;
    });
  }

  function handlePlusClick(item: ItemProps) {
    setCartItems((prevCartItems) => {
      // Find the index of the item in the cartItems array
      const itemIndex = prevCartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      // Create a copy of the item with the updated amount
      const updatedItem = {
        ...prevCartItems[itemIndex],
        amount: (prevCartItems[itemIndex].amount ?? 0) + 1,
      };
      // Create a new cartItems array with the updated item
      const newCartItems = [...prevCartItems];
      newCartItems[itemIndex] = updatedItem;
      // Return the new cartItems array
      return newCartItems;
    });
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
          {cartItems.map((item) => {
            const { id, title, price, imageSrc, amount } = item;

            return (
              <div key={id} className="cart-item">
                <img className="cart-image" src={imageSrc} alt={title} />
                <div className="cart-info">
                  <h5>{title}</h5>
                  <p>{"€" + (price * (item.amount ?? 0)).toFixed(2)}</p>
                  <div className="amount">
                    <button
                      className="minus-item-button"
                      onClick={() => handleMinusClick(item)}
                    >
                      -
                    </button>
                    <p>{amount}</p>
                    <button
                      className="add-item-button"
                      onClick={() => handlePlusClick(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <h4 className="total-price">{"€" + totalPrice.toFixed(2)}</h4>
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
    </div>
  );
}

export default Cart;
