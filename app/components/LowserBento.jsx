import { BsEyeFill } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { HiCursorClick } from "react-icons/hi";
/* eslint-disable @next/next/no-img-element */
import React from "react";

const LowserBento = () => {
  return (
    <div className="w-full md:flex-row flex-col flex gap-5 py-2  font-semibold">
      <div className="TesimonialsDiv Stripes py-5 bg-linear-to-b to-[#141414cc] via-[#333333e3] from-[#1a1919af] rounded-2xl w-full flex flex-col items-center justify-center  md:w-[30%]">
        <button className="py-3 px-6 relative bg-black text-white rounded-4xl outline-2 outline-gray-500">
          Connet With
          <span className="absolute -bottom-3">
            <HiCursorClick size={45} />
          </span>
        </button>
        <BsGoogle size={60} className="mt-4 mb-2" />
        <p className="text-xl text-gray-300">Search Console</p>
      </div>
      <div className="GraphDiv h-75  rounded-2xl relative py-3 bg-linear-to-t to-[#4E504E] via-black from-gray-500 w-full md:w-[70%]">
        {Array(3)
          .fill(0)
          .map((_, indx) => {
            return (
              <div
                key={indx}
                style={{
                  bottom: `${indx * 80}px`,
                  right: `${indx * 60}px`,
                  rotate : `-${(indx +1) * 5}deg`
                }}
                className="w-75 py-3 bottom-2 mb-5 absolute flex justify-between items-center px-4 text-black bg-white rounded-xl"
              >
                <div>
                  <p className="text-gray-700">www.hmkcode.com</p>
                  <p className="text-xl text-gray-900">HMKCodeWeb</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                  <BsEyeFill />
                  <p className="text-right">1.4K Views</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default LowserBento;
