import React from "react";
import { NavLink } from "react-router-dom";

export default function Blog({ blogs }) {
  return (
    <div className="w-full h-full">
      <div
        className="grid lg:grid-cols-2 gap-10 items-center w-full py-10"
        key={blogs.id}
      >
        <div className="overflow-hidden bg-cover bg-no-repeat">
          <img
            src={blogs.image}
            alt="blog-img"
            className="w-full h-80 object-cover transition-all ease-in-out duration-300 hover:scale-125"
          />
        </div>
        <div className="blog-details">
          <NavLink
            className="no-underline hover:underline text-[#222]"
            to={`/blogs/${blogs.id}`}
          >
            <h4 className="text-xl font-bold">{blogs.title}</h4>
          </NavLink>
          <p className="text-[#465b52] text-base my-4">{blogs.info}</p>
          <NavLink to={`/blogs/${blogs.id}`}>
            <button className="font-bold cursor-pointer text-white bg-black text-xs no-underline p-3 shadow-xl transition-all hover:scale-105 duration-300">
              {blogs.button}
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
