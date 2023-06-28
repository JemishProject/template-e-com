import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogsContext } from "../Contexts/BlogsContext";

export const BlogsDetails = () => {
  const { id } = useParams();
  const { blogs } = useContext(BlogsContext);

  const blog = blogs.find((item) => {
    return item.id === parseInt(id);
  });
  return (
    <div className="w-full h-screen flex items-center">
      <div className="container flex flex-col lg:flex-row items-center">
        <div className="flex flex-1 justify-center items-center mr-5 mb-8 overflow-hidden bg-cover bg-no-repeat lg:mb-0">
          <img
            src={blog.image}
            alt="blogs-img"
            className="w-full h-80 transition-all duration-300 hover:scale-125 object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="font-medium text-3xl mb-10 hover:underline text-danger">
            {blog.title}
          </div>
          <div className="font-medium mb-4">{blog.info}</div>
          <div className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            explicabo officiis pariatur deserunt sit provident magnam ad!
            Accusantium repellat consequatur odio consectetur fuga, ab, optio
            atque praesentium fugit culpa amet Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Dolore, harum.
          </div>
        </div>
      </div>
    </div>
  );
};
