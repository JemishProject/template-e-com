import React, { useContext } from "react";
import Product from "../Components/Product";
import { ArrivalProductContext } from "../Contexts/ArrivalProductContex";

export const NewArrivals = () => {
  const { product } = useContext(ArrivalProductContext);
  return (
    <div className="w-full h-full">
      <div className="container py-14">
        <div className="text-center">
          <h1 className="font-bold text-5xl mb-4">New Arrivals</h1>
          <p>Summer Collection New Modern Dresses</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {product.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};
