"use client";
import { userDataContext } from "../../store/UserDataContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useContext, useState } from "react";

const SignUpPage = () => {
  const router = useRouter();

  let { userData, setUserData } = useContext(userDataContext);

  const [InputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    acceptTerms: false,
  });
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: InputData.name,
        email: InputData.email,
        password: InputData.password,
      }),
    });
    const data = await response.json();
    if (data.success) {
      localStorage.setItem("token", data.token);
      setUserData({
        name: data.user.name,
        email: data.user.email,
        isPro: data.user.isPro,
        token: data.token,
      });
      router.push("/dashboard");
    } else {
      alert(data.message);
    }
  };
  return (
    <div className="w-full max-h-screen py-10 flex justify-center items-center">
      <form
        onSubmit={handleFormSubmit}
        className="bg-[#121214] max-w-87.5 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-200">
          Create Your Ones!
        </h2>
        <input
          id="name"
          value={InputData.name}
          onChange={(e) => {
            setInputData((prev) => ({
              ...prev,
              name: e.target.value,
            }));
          }}
          className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="text"
          placeholder="Enter your Name"
          required
        />
        <input
          id="email"
          value={InputData.email}
          onChange={(e) => {
            setInputData((prev) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
          className="w-full border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="email"
          placeholder="Enter your email"
          required
        />
        <input
          id="password"
          value={InputData.password}
          onChange={(e) => {
            setInputData((prev) => ({
              ...prev,
              password: e.target.value,
            }));
          }}
          className="w-full border mb-4 mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="password"
          placeholder="Enter your password"
          required
        />
        <div className="flex mb-2 items-center">
          <input
            id="acceptTerms"
            value={InputData.acceptTerms}
            onChange={(e) => {
              setInputData((prev) => ({
                ...prev,
                acceptTerms: e.target.checked,
              }));
            }}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset
            -2 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            type="checkbox"
            required
          />
          <label
            htmlFor="acceptTerms"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I accept the terms and conditions.
          </label>
        </div>
        <button
          type="submit"
          className="w-fit relative left-1/2 -translate-x-1/2 py-3 px-8 font-semibold mb-3 bg-white hover:bg-gray-300 text-black active:scale-95 transition rounded-full"
        >
          Create One
        </button>
        <p className="text-center mt-4">
          Have an account already!
          <Link href="/login" className="text-blue-500 ml-2 underline">
            Login Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
