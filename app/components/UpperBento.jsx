/* eslint-disable @next/next/no-img-element */
import { BsStar } from "react-icons/bs";
import React from "react";

const UpperBento = () => {
  const UserTestimonials = [
    {
      userName: "Hassaan Haider",
    },
    {
      userName: "Ali Raza",
    },
    {
      userName: "Muhammad Usman",
    },
    {
      userName: "Ahmed Khan",
    },
    {
      userName: "Ayesha Noor",
    },
    {
      userName: "Fatima Zahra",
    },
    {
      userName: "Bilal Ahmed",
    },
    {
      userName: "Hamza Iqbal",
    },
    {
      userName: "Sana Malik",
    },
    {
      userName: "Zain Abbas",
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row gap-5">
      <div className="TesimonialsDiv py-10 w-full bg-linear-to-t to-[#4E504E] via-black from-gray-500 overflow-hidden md:w-[70%] rounded-4xl  px-5 flex flex-col gap-4">
        {/* first line */}
        <div className="w-full -translate-x-[20%] font-semibold flex gap-5">
          {UserTestimonials.splice(0, 5).map((user, d) => (
            <div
              key={d}
              className="SingleStarsDiv gap-2 flex flex-col items-center p-3 rounded-4xl"
            >
              <p>{user.userName}</p>
              <div className="flex gap-4 outline-1 outline-gray-600 bg-[#100F10] py-3 px-2 rounded-3xl ">
                {Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <span key={index}>
                      <BsStar />
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
        {/* second line */}
        <div className="w-full font-semibold   flex gap-5">
          {UserTestimonials.map((user, d) => (
            <div
              key={d}
              className="SingleStarsDiv gap-2 flex flex-col items-center p-3 rounded-4xl"
            >
              <p>{user.userName}</p>
              <div className="flex gap-4 outline-1 outline-gray-600 bg-[#100F10] py-3 px-2 rounded-3xl ">
                {Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <span key={index}>
                      <BsStar />
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="GraphDiv relative overflow-hidden rounded-2xl w-full md:w-[30%]">
        <div className="w-full h-full absolute top-0 left-0 bg-black/55 hover:bg-black/70 duration-200 translate-all" />
        <img
          className="w-full  z-50 h-full object-cover"
          src="https://i.pinimg.com/originals/60/00/36/60003611f4524c47e495ad012f444459.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default UpperBento;
