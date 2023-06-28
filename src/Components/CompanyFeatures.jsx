import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FcPrivacy } from "react-icons/fc";
import { BiCheckShield } from "react-icons/bi";
import { GiLaurelsTrophy } from "react-icons/gi";
import replacement from "../img/replacement.png";

export const CompanyFeatures = () => {
  return (
    <div className="mb-8 flex gap-4">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-slate-200 w-14 p-2 rounded-full flex justify-center items-center mb-2">
          <TbTruckDelivery className="text-4xl" />
        </div>
        <div>
          <span className="font-semibold">Free Delivery</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-slate-200 w-14 p-2 rounded-full flex justify-center items-center mb-2">
          <img src={replacement} alt="replacement-logo" className="bg-none" />
        </div>
        <div className="">
          <span className="font-semibold">7 days Replacement</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-slate-200 w-14 p-2 rounded-full flex justify-center items-center mb-2">
          <BiCheckShield className="text-4xl" />
        </div>
        <div>
          <span className="font-semibold">1 year Warranty</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-slate-200 w-14 p-2 rounded-full flex justify-center items-center mb-2">
          <GiLaurelsTrophy className="text-4xl" />
        </div>
        <div>
          <span className="font-semibold">Top Brand</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-slate-200 w-14 p-2 rounded-full flex justify-center items-center mb-2">
          <FcPrivacy className="text-4xl" />
        </div>
        <div>
          <span className="font-semibold">Secure Transaction</span>
        </div>
      </div>
    </div>
  );
};
