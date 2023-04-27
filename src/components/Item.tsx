import React from "react";

export interface ItemProps {
  imageSrc: string;
  title: string;
  price: string;
  setCartItems: React.Dispatch<React.SetStateAction<any>>;
}

function addToCart(
  item: ItemProps /* The new item */,
  setCartItems: React.Dispatch<
    React.SetStateAction<ItemProps[] /* Updates the state */>
  >
) {
  setCartItems((cartItems) => {
    const newCartItems = [...cartItems, item];
    console.log("before cartItems state:", cartItems);
    console.log("after newCartItems state:", newCartItems);
    return newCartItems;
  }); /* returns new array that includes new item */
}

function Item({ imageSrc, title, price, setCartItems }: ItemProps) {
  return (
    <div className="item">
      <img src={imageSrc} alt={title} className="product-images" />
      <div className="product-info">
        <div className="title-price">
          <h5>{title}</h5>
          <p>{price}</p>
        </div>
        <button
          className="add-button"
          /* Onclick: add new Item to the "cartItems" array*/
          onClick={() => {
            addToCart({ imageSrc, title, price, setCartItems }, setCartItems);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Item;
