import React from "react";

function Main() {
  return (
    <main className="homepage">
      <img
        src="./images/cover-image2.png"
        alt="Shopping cart"
        className="cover-image"
      />
      <div className="main-text">
        <h4 className="line discount-text">GET EXTRA 50% OFF</h4>
        <h2>NEW COLLECTION</h2>
        <h4 className="promo-text">Special Promo!</h4>
        <h3>
          See fashion, <br /> be fashion, <br /> become fashion
        </h3>
      </div>
      <a href="/products">
        <button className="shop-button">Shop now</button>
      </a>
    </main>
  );
}

export default Main;
