import React, { useContext } from "react";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../Contexts/CartContext";

export const Header = () => {
  const { itemAmount } = useContext(CartContext);
  return (
    <nav className="bg-[#E3E6F3] shadow-lg fixed w-full top-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <NavLink to="/" className="flex items-center">
          <img src={logo} className="h-10 mr-3" alt="Navbar Logo" />
        </NavLink>
        <div className="nav-links flex gap-4 font-medium md:order-2">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">SignUp</NavLink>
          <NavLink to="/cart" className="flex relative max-w-[50px]">
            <FaShoppingCart className="text-2xl cursor-pointer" />
            <div className="absolute -right-2 -bottom-1 bg-blue-400 text-white rounded-full w-[18px] h-[18px] flex justify-center items-center">
              {itemAmount}
            </div>
          </NavLink>
        </div>
        <div className="nav-links items-center justify-center hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col md:p-2 mt-4 font-medium  md:flex-row md:space-x-10 md:mt-0">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
