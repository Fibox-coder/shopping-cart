import React from "react";

interface ItemProps {
  imageSrc: string;
  title: string;
  price: string;
}

function Item({ imageSrc, title, price }: ItemProps) {
  return (
    <div className="item">
      <img src={imageSrc} alt={title} className="product-images" />
      <div className="product-info">
        <div className="title-price">
          <h5>{title}</h5>
          <p>{price}</p>
        </div>
        <button className="add-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default Item;
