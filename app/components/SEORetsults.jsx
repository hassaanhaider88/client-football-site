import { BsGraphUpArrow } from "react-icons/bs";
import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const SEORetsults = () => {
  const CardStyle =
    "w-[250px] h-[250px] bg-linear-to-t from-[#111111] to-[#1C1B1C] via-[#121212] border border-white/20 rounded-3xl backdrop-blur-lg flex flex-col justify-center items-center p-4 m-4 hover:scale-105 transition-transform duration-300";
  return (
    <div className="seoResults flex w-full text-white h-screen bg-linear-to-r from-[#000000e0] to-[#000000e0] via-[#ffffff57]   md:flex-row flex-col overflow-hidden">
      <div className="Content max-w-full  md:w-[70%] p-4 md:p-12 ">
        <div className="py-2 px-4 shadow-2xl rounded-4xl bg-gray-950 w-fit flex gap-3 items-center font-semibold">
          <AiTwotoneStar size={25} /> <p>SEO Tools</p>
        </div>
        <h1 className="text-white capitalize mb-4 font-medium text-3xl sm:text-8xl text-nowrap mt-3">
          proven seo retsults <br /> you can trust
        </h1>
        <p className="my-5 text-lg text-gray-400 font-medium">
          Join thousands of satisfied users who have boosted their online sales.{" "}
          <br />
          with our proven SEO tools and strategies.
        </p>
      </div>
      <div className="Img md:w-[30%] w-0 hidden md:flex justify-center items-center">
        <div className="AllCardshere rotate-29 translate-x-24 -translate-y-16 flex">
          <div className="LineOne ">
            {Array(5)
              .fill(0)
              .map((_, index) => {
                return (
                  <div key={index} className={CardStyle}>
                    <span className="bg-[#90908F] py-2 px-3 rounded-2xl">
                      <BsGraphUpArrow size={40} />
                    </span>
                    <h1 className="font-semibold text-6xl">
                      {" "}
                      {(index + 10) * 10 + 20}K
                    </h1>
                    <p className="text-gray-400"> Increased Traffic</p>
                  </div>
                );
              })}
          </div>
          <div className="LineTow">
            {Array(4)
              .fill(0)
              .map((_, index) => {
                return (
                  <div key={index} className={CardStyle}>
                    <span className="bg-[#90908F] py-2 px-3 rounded-2xl">
                      <BsGraphUpArrow size={40} />
                    </span>
                    <h1 className="font-semibold text-6xl">
                      {(index + 1) * 10}K
                    </h1>
                    <p className="text-gray-400"> Increased Traffic</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEORetsults;
