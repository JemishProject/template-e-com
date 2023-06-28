import React from "react";
import { useState, createContext, useEffect } from "react";
import data from "../Data/NewFeatures";

export const FeatuedContext = createContext();

export const FeatuedProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProducts = () => {
      setProduct(data);
    };
    fetchProducts();
  }, []);
  return (
    <FeatuedContext.Provider value={{ product }}>
      {children}
    </FeatuedContext.Provider>
  );
};
