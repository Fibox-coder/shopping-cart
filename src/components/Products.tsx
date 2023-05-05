import React from "react";
import Item, { ItemProps } from "./Item";

interface ProductsProps {
  setCartItems: React.Dispatch<React.SetStateAction<ItemProps[]>>;
}

function Products({ setCartItems }: ProductsProps) {
  return (
    <div>
      <main className="container">
        <div className="products-grid">
          <Item
            imageSrc={"/products/polo-1.png"}
            title={"Fundamentals - Men's Polo Casual Slim Fit - Green"}
            price={25.0}
            setCartItems={setCartItems}
          />

          <Item
            imageSrc={"/products/polo-2.png"}
            title={"Fundamentals - Men's Polo Casual Slim Fit - White"}
            price={20.0}
            setCartItems={setCartItems}
          />

          <Item
            imageSrc={"/products/polo-3.png"}
            title={"Fundamentals - Men's Polo Casual Slim Fit - Black"}
            price={20.0}
            setCartItems={setCartItems}
          />

          <Item
            imageSrc={"/products/shirt-1.png"}
            title={"Casual Wear - Women's Short Sleeve - Dark Blue"}
            price={17.0}
            setCartItems={setCartItems}
          />

          <Item
            imageSrc={"/products/shirt-2.png"}
            title={"Casual Wear - Women's Short Sleeve - Yellow"}
            price={17.0}
            setCartItems={setCartItems}
          />

          <Item
            imageSrc={"/products/shirt-3.png"}
            title={"Casual Wear - Women's Short Sleeve - Pink"}
            price={17.0}
            setCartItems={setCartItems}
          />

          <Item
            imageSrc={"/products/shirt-4.png"}
            title={"Free spirited - Women's Knitwear open V shirt- Green"}
            price={52.0}
            setCartItems={setCartItems}
          />

          <Item
            imageSrc={"/products/shirt-5.png"}
            title={
              "Free spirited - Women's Knitwear open shirt with buttons - Black"
            }
            price={45.0}
            setCartItems={setCartItems}
          />

          <Item
            imageSrc={"/products/shirt-6.png"}
            title={
              "Free spirited - Women's Knitwear deluxe V-neck shirt - White and Black"
            }
            price={38.0}
            setCartItems={setCartItems}
          />

          <Item
            imageSrc={"/products/jacket-1.png"}
            title={"Cold Wear - Men's jacket VIP with pattern - beige"}
            price={95.0}
            setCartItems={setCartItems}
          />

          <Item
            imageSrc={"/products/jacket-2.png"}
            title={"Cold Wear - Men's jacket VIP with white fur - Dark Blue"}
            price={80.0}
            setCartItems={setCartItems}
          />

          <Item
            imageSrc={"/products/jacket-3.png"}
            title={"Cold Wear - Men's Bodywarmer VIP - Dark Blue"}
            price={70.0}
            setCartItems={setCartItems}
          />

          <Item
            imageSrc={"/products/jacket-4.png"}
            title={"Design Wear - Women's Jacket with stretch - Blue"}
            price={45.0}
            setCartItems={setCartItems}
          />

          <Item
            imageSrc={"/products/jacket-5.png"}
            title={"Design Wear - Men's hoody wide fit Deluxe version - Red"}
            price={40.0}
            setCartItems={setCartItems}
          />
        </div>
      </main>
    </div>
  );
}

export default Products;
