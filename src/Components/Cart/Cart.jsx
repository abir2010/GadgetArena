import React, { useState } from "react";
import "./Cart.css";

export default function Cart(props) {
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
  } = props.scart;

  const singleItem = {
    id: id,
    title: title,
    description: description,
    price: price,
    image: image,
    sale: sale,
    inStock: inStock,
    catagory: catagory,
    rating: rating,
    amount: amount,
  };

  const handleRemove = props.handleRemove;
  const handleChange = props.handleChange;

  return (
    <div className="Cart-Items">
      <div className="image-box">
        <img src={image} style={{ height: "80px" }} />
      </div>
      <div className="about">
        <h2 className="title">{title}</h2>
        <br />
        <h3 className="subtitle">{description}</h3>
      </div>
      <div className="counter">
        <button className="btn" onClick={() => handleChange(singleItem, +1)}>
          +
        </button>
        <div className="count">{amount}</div>
        <button className="btn" onClick={() => handleChange(singleItem, -1)}>
          -
        </button>
      </div>
      <div className="prices">
        <div className="amount">${amount * price}</div>
        <div className="save">
          <u>Save for later</u>
        </div>
        <div className="remove">
          <u onClick={() => handleRemove(id)}>Remove</u>
        </div>
      </div>
    </div>
  );
}
