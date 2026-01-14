import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import cardsData from "../Data/Testimonial";
import CreateCard from "./SingleTestimonialCard";

const TestimonialSection = () => {
  return (
    <div className="min-h-screen p-6 md:p-12 text-white w-full ">
      <div>
        <div className="py-2 px-4 shadow-2xl rounded-4xl bg-gray-950 w-fit flex gap-3 items-center font-semibold">
          <AiTwotoneStar size={25} /> <p>SEO Tools</p>
        </div>
        <h1 className="mb-6 text-white capitalize font-medium text-3xl sm:text-7xl mt-4">
          SEO Tools that <br /> deliver real results
        </h1>
        <p className="my-5 text-lg text-gray-400 font-medium">
          Best Analytics app for agencies, consultants, <br /> affiliates,
          e-commerce, saas
        </p>
      </div>
      <div className="marquee-row rounded-3xl w-full mx-auto  overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-white to-transparent"></div>
        <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default TestimonialSection;
