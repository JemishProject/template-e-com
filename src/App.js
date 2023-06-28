import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Shop } from "./Pages/Shop";
import { ProductDetails } from "./Pages/ProductDetails";
import { Blogs } from "./Pages/Blogs";
import { BlogsDetails } from "./Pages/BlogsDetails";
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { About } from "./Components/About";
import { Cart } from "./Components/Cart";
import { Contact } from "./Components/Contact";
import { Login } from "./Components/Login";
import { SignUp } from "./Components/SignUp";
import { Footer } from "./Components/Footer";
import { Newsletters } from "./Components/Newsletters";
import { PrivacyPolicy } from "./Components/PrivacyPolicy";
import { TermsCondition } from "./Components/TermsCondition";
import { BackToTopBtn } from "./Components/BackToTopBtn";

export const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="overflow-hidden">
      <Header />
      <Routes>
        <Route index element={<Hero />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogsDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termscondition" element={<TermsCondition />} />
      </Routes>
      <Newsletters />
      <BackToTopBtn />
      <Footer />
    </div>
  );
};
