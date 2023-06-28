import React, { createContext, useState, useEffect } from "react";
import data from "../Data/Blogs";

export const BlogsContext = createContext();

export const BlogsProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(data);
  useEffect(() => {
    const fetchBlogs = () => {
      setBlogs(data);
    };
    fetchBlogs();
  }, []);
  return (
    <BlogsContext.Provider value={{ blogs }}>{children}</BlogsContext.Provider>
  );
};
