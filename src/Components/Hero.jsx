import React from "react";
import { useNavigate } from "react-router-dom";
import { NewProducts } from "./NewProducts";
import { NewArrivals } from "./NewArrivals";
import { Features } from "./Features";
import { Services } from "./Services";
import { Banner } from "./Banner";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home w-full h-screen flex flex-col justify-center items-start px-20 bg-cover">
        <div>
          <h4 className="font-bold mb-4">Trade-in-offer</h4>
          <h1 className="font-bold text-4xl mb-3">Super Value Deals</h1>
          <h1 className="text-[#088178] text-5xl font-bold mb-4">
            On all Products
          </h1>
          <p>save more with coupons & upto 70% off!</p>
          <button
            className="shadow-2xl font-bold text-[#088178] rounded-xl mt-4 bg-[#fcd34d] py-2 px-6"
            onClick={() => navigate("/shop")}
          >
            Shop Now
          </button>
        </div>
      </div>
      <Features />
      <NewProducts />
      <Services />
      <NewArrivals />
      <Banner />
    </>
  );
};
