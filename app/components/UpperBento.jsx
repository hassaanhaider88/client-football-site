import { BsStar } from "react-icons/bs";
import React from "react";

const UpperBento = () => {
  return (
    <div className="w-full flex gap-5">
      <div className="TesimonialsDiv py-10 w-full bg-linear-to-t to-[#4E504E] via-black from-gray-500 overflow-hidden md:w-[70%] rounded-4xl  px-5 flex flex-col gap-4">
        {/* first line */}
        <div className="w-full -translate-x-[20%] font-semibold flex gap-5">
          {/* one  */}
          <div className="SingleStarsDiv gap-2 flex flex-col items-center p-3 rounded-4xl">
            <p>HassaanHaider</p>
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

          {/* two */}
          <div className="SingleStarsDiv gap-2 flex flex-col items-center p-3 rounded-4xl">
            <p>HassaanHaider</p>
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

          {/* three */}
          <div className="SingleStarsDiv gap-2 flex flex-col items-center p-3 rounded-4xl">
            <p>HassaanHaider</p>
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

          {/* four */}
          <div className="SingleStarsDiv gap-2 flex flex-col items-center p-3 rounded-4xl">
            <p>HassaanHaider</p>
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
        </div>
        {/* second line */}
        <div className="w-full font-semibold   flex gap-5">
          {/* one  */}
          <div className="SingleStarsDiv gap-2 flex flex-col items-center p-3 rounded-4xl">
            <p>HassaanHaider</p>
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

          {/* two */}
          <div className="SingleStarsDiv gap-2 flex flex-col items-center p-3 rounded-4xl">
            <p>HassaanHaider</p>
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

          {/* three */}
          <div className="SingleStarsDiv gap-2 flex flex-col items-center p-3 rounded-4xl">
            <p>HassaanHaider</p>
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

          {/* four */}
          <div className="SingleStarsDiv gap-2 flex flex-col items-center p-3 rounded-4xl">
            <p>HassaanHaider</p>
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
        </div>
      </div>
      <div className="GraphDiv rounded-2xl w-full md:w-[30%]">
       <div className="GraphCssCoantainer">

       </div>
      </div>
    </div>
  );
};

export default UpperBento;
