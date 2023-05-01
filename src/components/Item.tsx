import React from "react";
import { v4 as uuidv4 } from "uuid";

export interface ItemProps {
  id?: string;
  imageSrc: string;
  title: string;
  price: number;
  amount?: number;
  setCartItems: React.Dispatch<React.SetStateAction<any>>;
}

function addToCart(
  item: ItemProps /* The new item */,
  setCartItems: React.Dispatch<
    React.SetStateAction<ItemProps[] /* Updates the state */>
  >
) {
  setCartItems((prevCartItems) => {
    // Find the index of the item in the cartItems array
    const itemIndex = prevCartItems.findIndex(
      (cartItem) => cartItem.title === item.title
    );

    // If the item already exists, update its amount
    if (itemIndex >= 0) {
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
    }

    // If the item does not exist, add it to the cartItems array
    else {
      const newCartItems = [...prevCartItems, item];
      return newCartItems;
    }
  });
}

function Item({
  id = uuidv4(),
  imageSrc,
  title,
  price,
  setCartItems,
}: ItemProps) {
  const [amount, setAmount] = React.useState(1);

  return (
    <div className="item">
      <img src={imageSrc} alt={title} className="product-images" />
      <div className="product-info">
        <div className="title-price">
          <h5>{title}</h5>
          <p>{"€" + price + ",-"}</p>
        </div>
        <button
          className="add-button"
          /* Onclick: add new Item to the "cartItems" array*/
          onClick={() => {
            addToCart(
              { id, imageSrc, title, price, amount, setCartItems },
              setCartItems
            );
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Item;
