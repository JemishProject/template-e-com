import React, { useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";
import Product from "../Components/Product";

export const Shop = () => {
  const { product } = useContext(ProductContext);
  return (
    <div className="w-full h-full">
      <div className="shop flex flex-col w-full h-[50vh] text-white justify-center items-center text-center bg-cover">
        <h2 className="font-bold mb-2 mt-16 text-4xl">#stayhome</h2>
        <p>save more with coupons & up to 70% off!</p>
      </div>
      <div className="container pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {product.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};
