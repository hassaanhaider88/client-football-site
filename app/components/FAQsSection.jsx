"use client";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import React from "react";
import faqsData from "../Data/faq";
import { AiTwotoneStar } from "react-icons/ai";

const FAQsSection = () => {
  const [openIndex, setOpenIndex] = React.useState(null);
  return (
    <div className="w-full min-h-screen md:px-12 px-6 flex flex-col md:flex-row justify-center items-center gap-3">
      <div className="md:w-1/2 w-full">
        <div className="py-2 px-4 shadow-2xl rounded-4xl bg-gray-950 w-fit flex gap-3 items-center font-semibold">
          <AiTwotoneStar size={25} /> <p>FAQs</p>
        </div>
        <h1 className="text-white capitalize mb-4 font-medium text-3xl sm:text-7xl  mt-3">
          your questions <br /> Answers
        </h1>
        <p className="my-5 text-lg text-gray-400 font-medium">
          Proactively answering FAQs boosts user confidence and cuts down on
          support tickets.
        </p>
      </div>
      <div className="md:w-1/2 w-full">
        <div className="max-w-xl w-full mt-6 flex flex-col gap-2 items-start text-left">
          {faqsData.map((faq, index) => (
            <div key={index} className="flex flex-col items-start w-full">
              <div
                className="flex rounded-3xl items-center justify-between w-full cursor-pointer bg-[#101010] p-4 outline-2 outline-gray-600"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h2 className="text-sm font-semibold">{faq.question}</h2>
                {openIndex === index ? (
                  <AiFillMinusCircle color="white" size={23} />
                ) : (
                  <BsFillPlusCircleFill color="white" size={23} />
                )}
              </div>
              <p
                className={`text-sm bg-white text-slate-700 rounded-3xl py-2 px-4 transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "opacity-100 max-h-75 translate-y-0 pt-4 mt-2"
                    : "opacity-0 max-h-0 -translate-y-2"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQsSection;
