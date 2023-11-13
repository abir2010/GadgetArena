import React, { useState } from "react";
import "./Product.css";
import useData from "../../Hooks/useData";

export default function Product(props) {
  const [btn, setBtn] = useState(true);
  const {
    id,
    title,
    description,
    price,
    image,
    sale,
    inStock,
    catagory,
    rating,
    amount,
  } = props.product;

  const { cart, setCart } = useData();

  const addCart = () => {
    setCart([
      ...cart,
      {
        id,
        title,
        description,
        price,
        image,
        sale,
        inStock,
        catagory,
        rating,
        amount,
      },
    ]);
    setBtn((btn) => !btn);
  };
  // console.log(cart);

  return (
    <li className="product">
      <a className="img-wrapper" href="#">
        <img
          src={image}
          alt="Blue running shoe"
        />
      </a>
      {inStock ? (
        <div className="note stock">In Stock</div>
      ) : (
        <div className="note no-stock">Out of Stock</div>
      )}

      <div className="info">
        <div className="title">{title}</div>
        <div className="price">${price}</div>
      </div>

      <div className="actions-wrapper">
        <a href="#" className="add-btn wishlist">
          Buy Now
        </a>
        {btn ? (
          <button onClick={() => addCart()} className="add-btn cart">
            Cart
          </button>
        ) : (
          <button className="add-btn cart">Added to Cart</button>
        )}
      </div>
    </li>
  );
}
