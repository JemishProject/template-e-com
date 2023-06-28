import React from "react";
import data from "../Data/Features";

export const Features = () => {
  return (
    <div className="w-full h-full">
      <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-10 p-10">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col justify-center bg-white shadow-xl rounded-xl hover:shadow-2xl"
            >
              <img src={item.image} alt="features-img" className="p-4" />
              <h2 className="text-[#088178] text-lg flex justify-center items-center p-2">
                {item.services}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};
