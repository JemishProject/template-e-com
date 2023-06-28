import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Contexts/ProductContext";
import { CartContext } from "../Contexts/CartContext";
import { CompanyFeatures } from "../Components/CompanyFeatures";

export const ProductDetails = () => {
  const { id } = useParams();
  const { product } = useContext(ProductContext);
  const { addtocart } = useContext(CartContext);

  const products = product.find((item) => {
    return item.id === parseInt(id);
  });
  return (
    <div className="w-full h-screen flex items-center">
      <div className="container flex flex-col lg:flex-row items-center">
        <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
          <img
            src={products.image}
            alt="products-img"
            className="max-w-[200px] lg:max-w-sm rounded-xl shadow-xl"
          />
        </div>
        <div className="flex-1 lg:text-left">
          <div className="font-medium text-3xl mb-4 max-w-md">
            {products.title}
          </div>
          <div className="font-medium text-xl mb-6 text-danger">
            &#8377; {products.price}
          </div>
          <div className="mb-8">{products.description}</div>
          <div>
            <CompanyFeatures />
          </div>
          <button
            onClick={() => addtocart(products, products.id)}
            className="bg-danger text-white px-20 py-3 font-medium shadow-lg hover:scale-105 duration-150 text-lg"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
