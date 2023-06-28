import React from "react";
import { Features } from "../Components/Features";
import aboutpageimg from "../img/about/a6.jpg";
import aboutvideo from "../img/about/1.mp4";

export const About = () => {
  return (
    <div className="w-full h-full">
      <div className="aboutpage flex flex-col w-full h-[50vh] text-white justify-center items-center text-center bg-cover">
        <h2 className="font-bold mb-2 mt-16 text-4xl">#KnowUs</h2>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
      </div>
      <div className="mb-20">
        <div className="w-full grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 items-center mx-auto mb-10">
          <img
            src={aboutpageimg}
            alt="aboutpageimage"
            className="max-w-[700px] p-10 overflow-hidden"
          />
          <div className="p-2 m-4">
            <h2 className="font-bold text-5xl mb-4">Who are we?</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem optio possimus ipsum suscipit sit numquam quia
              recusandae? Saepe quasi voluptates dolores sapiente reprehenderit
              voluptatem ratione eius minima assumenda id ab dolore odio odit,
              totam dolorem dignissimos rem! Ea natus molestiae, tenetur totam
              quasi nisi quisquam! Pariatur odio fuga placeat
              necessitatibus?Lorem ipsum dolor sit amet consectetur adipisicing
              elit. A vitae libero ullam vero, autem nostrum tempora aut. Quos
              perferendis maiores, accusamus, cupiditate laboriosam, fugiat sit
              at architecto est dolores explicabo.
            </p>
            <p>
              Create stunning images with as much or as little control as you
              like thanks to a choice of Basic and Creative modes.
            </p>
          </div>
        </div>
        <div className="text-center py-20 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold">
            Download Our <span className="underline text-blue-800">App</span>
          </h1>
          <div className="video flex mt-10 w-3/4 h-full">
            <video
              src={aboutvideo}
              loop
              autoPlay
              muted
              className="w-full h-full rounded-2xl"
            ></video>
          </div>
        </div>
        <Features />
      </div>
    </div>
  );
};
