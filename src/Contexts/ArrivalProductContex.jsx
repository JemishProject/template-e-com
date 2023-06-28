import React from "react";
import { useState, createContext, useEffect } from "react";
import data from "../Data/newarrival";

export const ArrivalProductContext = createContext();

export const ArrivalProductProvider = ({ children }) => {
  const [product, setProduct] = useState(data);
  useEffect(() => {
    const fetchProducts = () => {
      setProduct(data);
    };
    fetchProducts();
  }, []);
  return (
    <ArrivalProductContext.Provider value={{ product }}>
      {children}
    </ArrivalProductContext.Provider>
  );
};