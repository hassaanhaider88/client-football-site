"use client";
import { userDataContext } from "../../store/UserDataContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

const LoginPage = () => {
  const router = useRouter();

  const { userData, setUserData } = useContext(userDataContext);
  const [InputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(InputData),
    });

    const data = await response.json();
    if (data.sucess) {
      setUserData({
        name: data.user.name,
        email: data.user.email,
        isPro: data.user.isPro,
        token: data.token,
        ChatWithAI: data.chats,
      });
      localStorage.setItem("token", data.token);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/dashboard");
    }
  }, [userData.name, router]);
  return (
    <div className="w-full max-h-screen py-10 flex justify-center items-center">
      <form
        onSubmit={handleFormSubmit}
        className="bg-[#121214] max-w-87.5 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-200">
          Well Come Back!
        </h2>
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
        <button
          type="submit"
          className="w-fit relative left-1/2 -translate-x-1/2 py-3 px-8 font-semibold mb-3 bg-white hover:bg-gray-300 text-black active:scale-95 transition rounded-full"
        >
          Log in
        </button>
        <p className="text-center mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-500 ml-2 underline">
            Signup Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
