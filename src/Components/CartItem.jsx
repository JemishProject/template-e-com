import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import { CartContext } from "../Contexts/CartContext";

export default function CartItem({ item }) {
  const { removeitem, IncreaseAmount, DecreaseAmount } =
    useContext(CartContext);
  return (
    <>
      <div className="w-full h-full border-b border-blue-400">
        <div className="flex flex-row justify-around items-center">
          <div className="flex flex-col gap-10 p-20 sm:flex-row items-center">
            <NavLink to={`/product/${item.id}`}>
              <img
                src={item.image}
                alt="product-img"
                className="max-w-[200px] rounded-xl"
              />
            </NavLink>
            <div className="flex flex-col">
              <span className="uppercase font-semibold mb-3">{item.brand}</span>
              <NavLink
                to={`/product/${item.id}`}
                className="font-medium text-black text-xl mb-4 no-underline hover:underline"
              >
                <span>{item.title}</span>
              </NavLink>
              <div>
                <button
                  onClick={() => removeitem(item.id)}
                  className="bg-danger text-white px-4 py-2 rounded-lg"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="font-semibold text-xl">
            <span>&#8377;{item.price}</span>
          </div>
          <div className="flex h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-black font-medium">
              <div
                onClick={() => DecreaseAmount(item.id)}
                className="flex flex-1 justify-center items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              <div className="flex flex-1 h-full justify-center items-center px-4">
                {item.amount}
              </div>
              <div
                onClick={() => IncreaseAmount(item.id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
          </div>
          <div className="flex font-semibold text-xl">
            <div className="">&#8377;{`${item.price * item.amount}`}</div>
          </div>
        </div>
      </div>
    </>
  );
}
