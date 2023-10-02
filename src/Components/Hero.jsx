import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-hero-bg bg-no-repeat bg-cover w-full flex flex-col justify-center items-center h-fit lg:h-[80vh]">
      <div className="w-full py-28 px-4 text-center">
        <h1 className="mt-2 mb-16 text-3xl font-bold tracking-tight md:text-6xl xl:text-7xl">
          Explore, Select and Shop
          <br />
          <p className="text-blue-500 p-4">Your ultimate shoping platform</p>
        </h1>
        <Link
          className="mb-2 bg-blue-500 border border-blue-500 hover:bg-transparent hover:text-blue-500 rounded-full px-20 py-4 text-sm font-bold uppercase  text-white shadow-lg"
          to="/"
        >
          shop now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
