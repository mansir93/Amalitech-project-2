import React from "react";

const Hero = () => {
  return (
    <section className="bg-hero-bg bg-no-repeat bg-cover w-full  h-fit lg:h-screen">
      <div className="w-full h-full bg-gray-900/50 flex flex-col justify-center items-center">
        <div className="w-full py-28 px-4 text-center mb-20">
          <h1 className="mt-2 mb-16 text-3xl font-bold tracking-tight md:text-6xl xl:text-7xl text-white">
            Explore, Select and Shop
            <br />
            <p className="text-orange-400 p-4">
              Your ultimate shoping platform
            </p>
          </h1>
          <a
            className="mb-2 bg-orange-400 border border-orange-500 hover:bg-transparent hover:text-orange-500 rounded-full px-20 py-4 text-sm font-bold uppercase  text-white shadow-lg"
            href="#product"
          >
            shop now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
