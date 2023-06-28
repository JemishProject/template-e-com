import React, { createContext, useEffect, useState } from "react";
import data from "../Data/ShopProduct";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(data);

  useEffect(() => {
    const fetchProducts = () => {
      setProduct(data);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
};
