import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../Contexts/CartContext";

export default function Product({ product }) {
  const { addtocart } = useContext(CartContext);
  return (
    <div className="w-full h-full">
      <div className="grid mt-10">
        <div
          key={product.id}
          className="shadow-xl rounded-3xl h-full hover:shadow-2xl"
        >
          <NavLink to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt="products-img"
              className="p-3 rounded-3xl"
            />
          </NavLink>
          <div className="flex flex-row justify-around items-center mb-4 md:p-3">
            <div className="flex flex-col">
              <span className="text-sm uppercase font-semibold">
                {product.brand}
              </span>
              <NavLink to={`/product/${product.id}`} className="no-underline">
                <span className="font-bold text-black">{product.title}</span>
              </NavLink>
              <span className="font-bold text-[#088178]">
                &#8377;{product.price}
              </span>
            </div>
            <button
              onClick={() => addtocart(product, product.id)}
              className="cursor-pointer p-2 bg-[#e8f6ea] rounded-full transition-all hover:scale-125 duration-300"
            >
              <FaShoppingCart className="text-xl text-[#088178]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
