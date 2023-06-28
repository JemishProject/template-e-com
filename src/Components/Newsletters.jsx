import React from "react";

export const Newsletters = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center bg-[#041e42] text-white">
        <div className="grid lg:grid-cols-2 md:grid-rows-1 sm:grid-rows-1 p-10 justify-center items-center">
          <div>
            <p className="font-bold text-2xl">Sign Up For Newsletters</p>
            <p className="text-sm">
              Get E-mail Updates about our new shop and
              <span className="text-amber-400"> Special Offer.</span>
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Email Address"
              className="w-full lg:w-96 h-10 outline-none rounded-lg lg:mr-3 lg:mb-0 text-black pl-4"
            />
            <button className="w-full lg:w-28 h-10 shadow-xl rounded-lg font-bold bg-blue-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
