/* eslint-disable @next/next/no-img-element */
"use client";

import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { SiLetsencrypt } from "react-icons/si";
import { TbLayoutDashboard } from "react-icons/tb";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FiHome, FiFileText, FiSend } from "react-icons/fi";
import { userDataContext } from "../../store/UserDataContext";
import SuggestionCardHome from "../../components/SuggestionCardHome";
import ChatSection from "../../components/ChatSection";

const UseAIPage = () => {
  const { userData, setUserData } = useContext(userDataContext);
  const [UserNameLetter, setUserNameLetter] = useState("");
  const [ShowLeftBar, setShowLeftBar] = useState(true);

  const router = useRouter();
  const searchParams = useSearchParams();
  const Service = searchParams.get("service");
  const chatId = searchParams.get("chatId");
  const [ServiceSelect, setServiceSelect] = useState(Service);

  useEffect(() => {
    if (userData.name == "") {
      router.push("/");
    } else {
      return;
    }
  }, [router, userData.name]);

  useEffect(() => {
    const FirstToLetter = userData.name
      .trim()
      .split(/\s+/)
      .map((word) => word[0]?.toUpperCase())
      .join("");

    setUserNameLetter(FirstToLetter);
  }, [router, userData.name]);
  const [inputValue, setInputValue] = useState("");
  const [reloadChat, setReloadChat] = useState(false);
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);

    const textarea = textareaRef.current;
    textarea.style.height = "auto";

    const maxHeight = 8 * 24; // 8 lines × line-height (24px)
    textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + "px";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    try {
      const res = await fetch("/api/use-ai/new-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userToken: userData.token,
          chatId,
          userMessage: inputValue,
          serviceUsed: ServiceSelect,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setInputValue("");
        setReloadChat((prev) => !prev);

        if (!chatId) {
          router.replace(
            `/use-ai?service=${ServiceSelect}&chatId=${data.chatId}`,
          );
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex h-screen  text-white font-sans">
      {/* Sidebar */}
      <div
        className={` ${ShowLeftBar ? "flex" : "hidden"} duration-200 transition-all bg-[#18181B] md:w-[25%] w-62.5 flex flex-col`}
      >
        {/* Logo */}
        <div
          onClick={() => router.push("/")}
          className="p-6 flex items-center gap-3 cursor-pointer"
        >
          <img
            src="/SEOWalaAI.png"
            alt="SEO Wala AI Loggo"
            className="h-12 w-12 object-cover"
          />
          <span className="text-lg font-medium">SEOWala</span>
        </div>

        {/* New Chat Button */}
        <div className="px-4 mb-6">
          <button
            onClick={() => router.push("/use-ai?service=KeywordGens")}
            className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-2.5 px-4 rounded-lg flex items-center duration-200 justify-center gap-2 transition-colors"
          >
            <span className="text-xl">+</span>
            <span className="text-sm font-medium">New chat</span>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4">
          <div className="space-y-1">
            <button
              onClick={() => router.push("/")}
              title="Back To Home"
              className="w-full flex duration-200 transition-all items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800  text-zinc-400 hover:text-white"
            >
              <FiHome className="w-5 h-5" />
              <span className="text-sm">Home</span>
            </button>
            <button
              onClick={() => router.push("/dashboard")}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg duration-200 transition-all hover:bg-zinc-800  text-zinc-400 hover:text-white"
            >
              <TbLayoutDashboard className="w-5 h-5" />
              <span className="text-sm">Dashboard</span>
            </button>
            <button
              onClick={() => router.push("/full-history")}
              className="w-full flex duration-200 transition-all items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800  text-zinc-400 hover:text-white"
            >
              <FiFileText className="w-5 h-5" />
              <span className="text-sm">My history</span>
            </button>
          </div>
        </nav>

        {/* Upgrade Section */}
        {userData.isPro ? (
          ""
        ) : (
          <div className="p-4 m-4 bg-linear-to-br from-pink-500/10 to-orange-500/10 border border-pink-500/20 rounded-xl">
            <h3 className="text-sm font-semibold mb-1">Upgrade to premium</h3>
            <p className="text-xs text-zinc-400 mb-3">Enjoy premium benefits</p>
            <button
              onClick={() => router.push("/upgrade")}
              className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
            >
              Upgrade now
            </button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div
        className={` ${ShowLeftBar ? "sm:w-[75%] w-[30ppx]" : "w-full"} duration-200 transition-all relative min-h-screen flex flex-col`}
      >
        <span
          onClick={() => setShowLeftBar(!ShowLeftBar)}
          className="absolute cursor-pointer duration-200 transition-all active:scale-105 top-16 left-1"
        >
          <TbLayoutSidebarLeftExpand size={30} color="white" />
        </span>
        {/* Header */}
        <div className="h-16 py-5 flex items-center justify-between px-6">
          <div className="flex items-center gap-2 text-zinc-500">
            <SiLetsencrypt size={15} />
            <span className="text-sm">End-To-End Encrypted</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push("/dashborad")}
              className="w-12 h-12 rounded-full hover:bg-zinc-800 flex items-center justify-center"
            >
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-gray-500 via-sky-600 to-blue-500 flex items-center justify-center text-white text-sm font-medium">
                {UserNameLetter}
              </div>
            </button>
          </div>
        </div>
        <div>
          <div className="flex-1 min-h-screen flex flex-col items-center justify-center mt-6 px-6 pb-32">
            {chatId ? (
              <ChatSection chatId={chatId} reload={reloadChat} />
            ) : (
              <SuggestionCardHome />
            )}
            {/* Welcome Text */}
            {/*  */}
            {/* Chat Section */}
          </div>

          {/* input place */}
          <div className=" sticky bottom-0 w-full">
            <div className="max-w-4xl mx-auto">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 mb-3">
                <textarea
                  ref={textareaRef}
                  placeholder="Ask me anything about SEO..."
                  name="message"
                  id="message"
                  rows={1}
                  value={inputValue}
                  onChange={handleChange}
                  className="w-full resize-none overflow-y-scroll bg-transparent text-white placeholder-zinc-500 outline-none text-base"
                  style={{ maxHeight: "12rem" }}
                />

                <div className="flex items-center justify-end">
                  <div className="flex items-center gap-3">
                    <select
                      name="source"
                      value={ServiceSelect}
                      onChange={(e) => setServiceSelect(e.target.value)}
                      id="source"
                      className="w-full bg-zinc-900
    text-white border border-zinc-700 rounded-lg  px-2 py-3 text-sm outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 appearance-none cursor-pointer"
                    >
                      <option
                        defaultValue="Select source"
                        disabled
                        className="text-zinc-500"
                      >
                        Select source
                      </option>
                      <option value="MetaTags">Website Meta Tags</option>
                      <option value="KeywordGens">Keyword Generator</option>
                      <option
                        disabled={userData.isPro ? false : true}
                        value="YtVideoSeo"
                      >
                        YouTube Video SEO
                      </option>
                      <option
                        disabled={userData.isPro ? false : true}
                        value="MediaPost"
                      >
                        Social Media Post
                      </option>
                    </select>

                    <button
                      onClick={handleSendMessage}
                      className="w-12 h-12 px-4 bg-zinc-700 hover:bg-zinc-600 rounded-full flex items-center justify-center transition-colors"
                    >
                      <FiSend className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-center text-xs text-zinc-600">
                FlyPerplex can make mistakes. Check important info.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseAIPage;
