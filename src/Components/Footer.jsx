import React from "react";
import logo from "../img/logo.png";
import appstore from "../img/pay/app.jpg";
import playstore from "../img/pay/play.jpg";
import paymentgateway from "../img/pay/pay.png";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="w-full h-full p-10 pb-4">
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 gap-3">
          <div className="address mb-4 items-start">
            <img src={logo} alt="Companylogo" className="mb-8 cursor-pointer" />
            <h4 className="text-black font-bold text-lg my-4">Contact</h4>
            <p className=" text-[#465b52] text-[16px]">
              <strong>Address:</strong> A-403, Astha Residency, Mota varachha,
              Surat
            </p>
            <p className="text-[#465b52] text-[16px]">
              <strong>Phone:</strong> +91 9328444699
            </p>
            <p className="text-[#465b52] text-[16px]">
              <strong>Hours:</strong> 9:00 - 7:00, Mon - Sat
            </p>
            <div className="mt-4">
              <h4 className="font-bold text-xl">Follow Us</h4>
              <div className="flex mt-3 text-2xl gap-3">
                <FaFacebookF className="cursor-pointer" />
                <FaInstagram className="cursor-pointer" />
                <FaGithub className="cursor-pointer" />
                <FaLinkedin className="cursor-pointer" />
                <FaYoutube className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div>
            <h4>About</h4>
            <div className="navlink flex flex-col mt-10">
              <NavLink to="/about">About us</NavLink>
              <NavLink>Delivery Information</NavLink>
              <NavLink to="/privacypolicy">Privacy Policy</NavLink>
              <NavLink to="/termscondition">Tearms & Conditions</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </div>
          </div>
          <div>
            <h4>My Account</h4>
            <div className="navlink flex flex-col mt-10">
              <NavLink to="/login">Sign In</NavLink>
              <NavLink to="/cart">View Cart</NavLink>
              <NavLink>My Wishlist</NavLink>
              <NavLink>Track My Order</NavLink>
              <NavLink>Help</NavLink>
            </div>
          </div>
          <div>
            <h4>Install App</h4>
            <div className="mt-10">
              <p className="font-semibold text-slate-500">
                From App Store or Google Play Store
              </p>
              <div className="flex flex-row space-x-2">
                <div>
                  <img
                    src={appstore}
                    alt="appstorelogo"
                    className="border cursor-pointer border-black rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src={playstore}
                    alt="playstorelogo"
                    className="border cursor-pointer border-black rounded-lg"
                  />
                </div>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-slate-500">
                  Secured Payment Gateways
                </p>
                <img
                  src={paymentgateway}
                  alt="payment-option"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          2023 Copyright &copy; All rights reserved by Cara
        </div>
      </footer>
    </>
  );
};
