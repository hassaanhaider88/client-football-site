import { RxVideo } from "react-icons/rx";
/* eslint-disable @next/next/no-img-element */
import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center min-h-screen">
      <div className="text md:w-1/2 w-full p-6 md:p-12">
        <div className="flex mb-5 md:mb-10 items-center space-x-2.5 border  rounded-full bg-gray-900 p-1 text-sm text-gray-400 font-600">
          <div className="flex items-center space-x-1 bg-white text-black font-semibold border border-black/30 p-500 rounded-3xl px-3 pl-1 py-1">
            <img
              className="h-6 w-6 rounded-full"
              src="https://i.pinimg.com/originals/e0/a1/6f/e0a16f6825b4a6f369ce9974810d7b44.jpg"
              alt="userImage"
            />
            <p>SEOWala</p>
          </div>
          <p className="pr-3">Get Pro in just 10$ with 30% Offf</p>
        </div>
        <h1 className="mb-6 text-white font-medium text-3xl sm:text-7xl mt-4">
          Boost Your <br /> website&#39;s SEO
        </h1>
        <p className="my-5 text-lg text-gray-400 font-medium">
          Best Analytics app for agencies, consultants, <br /> affiliates,
          e-commerce, saas
        </p>
        <div className="Buttons w-full flex flex-col sm:flex-row gap-4 mt-6">
          <button className="px-8 py-2.5 rounded-full ml-4 transition-all duration-500 bg-white text-black">
            Start Your Free Trial
          </button>
          <button className="px-8 py-2.5 flex items-center gap-2 rounded-full ml-4 transition-all duration-500 border border-white text-white">
            Watch Demo <RxVideo />
          </button>
        </div>
      </div>
      <div className="Img md:w-1/2 p-6 md:p-12 flex justify-center">
        <img
          src="/ThreeStars.png"
          alt="Hero"
          className="w-full h-auto mt-6 md:mt-0"
        />
      </div>
    </div>
  );
};

export default HeroSection;
