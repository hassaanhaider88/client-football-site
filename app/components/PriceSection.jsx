"use client";
import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import pricingData from "../Data/Price";
const PriceSection = () => {
  const [isYearly, setIsYearly] = React.useState(false);

  return (
    <>
      <div className="px-10">
        <div className="Content  max-w-full flex justify-start flex-col items-start p-4 md:p-12 ">
          <div className="py-2 px-4 shadow-2xl rounded-4xl bg-gray-950 w-fit flex gap-3 items-center font-semibold">
            <AiTwotoneStar size={25} /> <p>SEO Tools</p>
          </div>
          <h1 className="text-white capitalize mb-4 font-medium text-3xl sm:text-8xl  mt-3">
            Flexible pricing for <br /> every buisness
          </h1>
          <p className="my-5 text-lg text-gray-400 font-medium">
            Flexible pricing options designed to meet{" "}
            <br className="md:flex hidden" /> your needs whether you&apos;re
            just getting started or scaling up.
          </p>
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="relative p-1 bg-white border border-gray-200 rounded-full inline-flex items-center mb-16 w-60">
            <div
              className={`absolute -z-10 w-[calc(50%-4px)] h-14 rounded-full bg-linear-to-r from-[#545454] to-[#545454]/70 transition-transform duration-300 ease-in-out pointer-events-none
                        ${isYearly ? "translate-x-full" : "translate-x-0"}`}
            ></div>

            <button
              onClick={() => setIsYearly(false)}
              className={`relative bg-white z-10 flex-1 py-2.5 cursor-pointer rounded-full text-sm font-medium text-center transition-colors duration-300
                        ${
                          !isYearly
                            ? "text-[#545454] font-semibold"
                            : "text-gray-500 hover:text-gray-900"
                        }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setIsYearly(true)}
              className={`relative z-10 flex-1 py-2.5 cursor-pointer rounded-full text-sm font-medium text-center flex items-center justify-center gap-1 transition-colors duration-300
                        ${
                          isYearly
                            ? "text-[#545454] font-semibold"
                            : "text-gray-500 hover:text-gray-900"
                        }`}
            >
              Yearly
              <span className="text-xs">15% off</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="w-full flex-col flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full items-end">
            {pricingData.map((plan, index) => (
              <div
                key={index}
                className={
                  plan.mostPopular
                    ? "bg-linear-to-r from-[#FF861C] to-[#FFDBC4] rounded-3xl p-2 shadow-xl hover:shadow-lg transition-shadow"
                    : ""
                }
              >
                {plan.mostPopular && (
                  <p className="text-center text-orange-700 text-sm py-1.5">
                    Popular
                  </p>
                )}
                <div
                  key={index}
                  className={`rounded-3xl p-6 bg-white ${
                    !plan.mostPopular
                      ? "border border-neutral-200 hover:shadow-lg transition-shadow"
                      : ""
                  }`}
                >
                  <h3 className="text-neutral-700 text-sm mb-6">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-[28px] text-neutral-900">
                      {isYearly
                        ? `$${plan.pricing - Math.round(plan.pricing * 10.2)}`
                        : `$${plan.pricing}`}
                    </span>
                    <span className="text-neutral-600 text-xs">
                      / {isYearly ? "year" : "month"}
                    </span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-neutral-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-circle-check-icon lucide-circle-check"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full cursor-pointer py-3 rounded-full bg-linear-to-r from-[#FF5804] to-[#FF8D28]/70 text-white text-sm hover:opacity-95 transition-opacity">
                    Get started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceSection;
