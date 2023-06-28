import React, { useContext } from "react";
import { BlogsContext } from "../Contexts/BlogsContext";
import Blog from "../Components/Blog";
import Layout from "./Layout";

export const Blogs = () => {
  const { blogs } = useContext(BlogsContext);
  return (
  <Layout>
    <div className="w-full h-full">
      <div className="blog flex flex-col w-full h-[50vh] text-white justify-center items-center text-center bg-cover">
        <h2 className="font-bold mb-2 mt-16 text-4xl">#stayhome</h2>
        <p>save more with coupons & up to 70% off!</p>
      </div>
      <div className="container py-10">
        <div className="grid grid-cols-1 ">
          {blogs.map((blogs) => {
            return <Blog key={blogs.id} blogs={blogs} />;
          })}
        </div>
      </div>
    </div>
  </Layout>
  );
};
