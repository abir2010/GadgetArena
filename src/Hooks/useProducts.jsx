import { useEffect, useState } from "react";

const useProducts = () => {
  const [prod, setProd] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProd(data));
  }, []);

  return {
    prod,
    setProd,
    cart,
    setCart,
  };
};

export default useProducts;
