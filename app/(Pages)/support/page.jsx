"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Supportpage = () => {
  const router = useRouter();
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...FormData,

      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(FormData);
    const res = await fetch("/api/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: FormData.name,
        email: FormData.email,
        message: FormData.message,
      }),
    });
    const data = await res.json();
    if (data.success) {
      alert(data.message);
      router.push("/");
    } else {
      alert(data.message);
    }
  };
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center">
      <div className="Img px-10 w-full md:w-1/2">
        <Image
          width={400}
          height={300}
          src="/TelephoneImg.png"
          className="w-1/2 h-1/2  object-cover"
          alt=""
        />
      </div>
      <div className="Form px-5 md:px-10 bg-red-300 w-full  md:w-1/2">
        <form
          onSubmit={handleSubmit}
          className="grid   mx-auto mr-5 text-slate-500 w-full"
        >
          <h1 className="text-4xl bg-red-700 text-green-700 font-semibold">
            Need Support?
          </h1>
          <p className="text-md mt-1 font-semibold text-gray-700">
            Contact Us if you need futher assistance!
          </p>

          <div>
            <p className="mb-2 mt-5 font-medium">Your name</p>
            <div className="flex rounded-4xl  items-center px-5 my-2  overflow-hidden border border-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user size-5"
                aria-hidden="true"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <input
                placeholder="Enter your name"
                className="w-full p-3 bg-transparent outline-none"
                type="text"
                required
                name="name"
                onChange={handleChange}
                value={FormData.name}
              />
            </div>
          </div>
          <div>
            <p className="mb-2 font-medium">Email id</p>
            <div className="flex rounded-4xl  items-center px-5 my-2  overflow-hidden border border-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail size-5"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
              <input
                placeholder="Enter your email"
                className="w-full p-3 bg-transparent outline-none"
                type="email"
                name="email"
                required
                onChange={handleChange}
                value={FormData.email}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <p className="mb-2 font-medium">Message</p>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              className="focus:border-pink-500 resize-none w-full p-3 bg-transparent outline-none rounded-2xl overflow-hidden border border-slate-700"
              required
              onChange={handleChange}
              value={FormData.message}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-300 flex items-center gap-2  text-white px-10 py-3 rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Supportpage;
