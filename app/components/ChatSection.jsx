"use client";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { BsFillClipboard2Fill } from "react-icons/bs";
import React, { useContext, useState } from "react";
import { useUserChatData } from "../store/UseChatData";

const ChatSection = ({ chatId }) => {
  const { userChatData, setUserChatData } = useUserChatData();

  console.log(userChatData);
  console.log(chatId);
  const ChatData = [
    {
      role: "user",
      service: "MetaTags",
      message: "kuchh to yaha mujhe do please",
    },
    {
      role: "seo-wala-ai",
      service: "MetaTags",
      message:
        "Zaroor! Thora wait karein, main meta tags generate kar raha hoon.",
    },
  ];

  const [CopyLoading, setCopyLoading] = useState(false);

  const hanldeClickClipBoardTextCopy = (text) => {
    setCopyLoading(true);
    setTimeout(() => {
      setCopyLoading(false);
    }, 1000);
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="w-full overflow-y-auto px-4 py-6 space-y-4">
      {ChatData.map((chat, index) => {
        const isUser = chat.role === "user";

        return (
          <div
            key={index}
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] overflow-hidden duration-200 transition-all cursor-pointer group relative sm:max-w-[60%] px-4 py-3 rounded-2xl text-sm leading-relaxed
                ${
                  isUser
                    ? "bg-[#18181B] text-white rounded-br-none"
                    : "bg-zinc-800 text-gray-200 rounded-bl-none"
                }`}
            >
              {/* Optional Service Badge */}
              <p className="text-[10px] opacity-70 mb-1">
                {isUser ? "You" : "SEO Wala AI"} • {chat.service}
              </p>

              <p>{chat.message}</p>
              <span
                onClick={() => hanldeClickClipBoardTextCopy(chat.message)}
                className="absolute right-0 hidden group-hover:flex top-0 px-3 cursor-pointer bg-[#333333b6] w-fit justify-center duration-200 transition-all items-center  h-16.25"
              >
                {CopyLoading ? (
                  <BsFillClipboard2CheckFill size={25} />
                ) : (
                  <BsFillClipboard2Fill
                    className="hover:scale-95 active:scale-105 duration-200 transition-all"
                    size={25}
                  />
                )}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatSection;
