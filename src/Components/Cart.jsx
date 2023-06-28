import React, { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import CartItem from "./CartItem";
import { NavLink, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

export const Cart = () => {
  const navigate = useNavigate();
  const { cart, total, itemAmount } = useContext(CartContext);
  return (
    <>
      <div className="w-full h-full mt-44">
        <div className="flex justify-center text-3xl font-bold">
          Shopping Cart ({itemAmount})
        </div>
        {cart.length === 0 ? (
          <div className="w-full h-fulll py-20">
            <p className="flex justify-center items-center font-bold text-3xl text-red-500">
              Cart is empty! Add Some Products Here
            </p>
            <NavLink
              to="/shop"
              className="text-black flex justify-center items-center no-underline mt-4"
            >
              <button className="border-2 px-4 py-2 flex justify-center items-center gap-3 font-semibold">
                <BsArrowLeft className="hover:scale-150" />
                Go Shopping
              </button>
            </NavLink>
          </div>
        ) : (
          <>
            {cart.map((item) => {
              return <CartItem item={item} key={item.id} />;
            })}
            <div className="flex flex-col items-end gap-4 text-3xl p-20">
              <div>
                <span className="uppercase">Total:</span> &#8377;{total}
              </div>
              <div className="flex gap-20">
                <button
                  onClick={() => navigate("/shop")}
                  className="bg-white text-black border-1 border-black text-xl px-7"
                >
                  Back to Shopping
                </button>
                <button className="bg-success text-white text-xl px-10 py-2">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
