import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "../Product/Product";

import useData from "../../Hooks/useData";

export default function Home() {
  const { prod, setProd } = useData();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(prod);
  }, [prod]);

  const LTH = () => {
    const sortedData = [...products].sort((a, b) => {
      return a.price > b.price ? 1 : -1;
    });
    setProd([...sortedData]);
    console.log(prod);
  };

  const HTL = () => {
    const sortedData = [...products].sort((a, b) => {
      return a.price < b.price ? 1 : -1;
    });
    setProd([...sortedData]);
    console.log(prod);
  };

  const handleSale = () => {
    const tempArray = [];
    let index = 0;
    [...products].forEach((item) => {
      if (item.sale === true) {
        tempArray[index] = item;
        index++;
      }
    });
    setProd(tempArray);
    console.log(prod);
  };

  return (
    <div className="main-container">
      <div className="title-container">
        <h3>Products</h3>
        <div className="filter">
          <input
            type="text"
            placeholder=" Search for gadgets..."
            className="inp-box"
          />{" "}
          <br />
          <button onClick={HTL} type="button">
            {" "}
            Price high to low{" "}
          </button>{" "}
          <input onClick={LTH} type="button" value=" Price low to high " />{" "}
          <input onClick={handleSale} type="button" value=" Sale " />{" "}
        </div>
      </div>
      <div className="cards">
        {prod.map((product) => (
          <div className="card">
            <Product key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
