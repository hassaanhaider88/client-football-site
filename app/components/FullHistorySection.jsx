"use client";

import { FiDelete } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { userDataContext } from "../store/UserDataContext";
import { useContext, useEffect } from "react";

const FullHistoryPage = () => {
  const { userData, setUserData } = useContext(userDataContext);
  const router = useRouter();

  const GetLatestData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/getbytoken", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();
      if (!data.success) return;

      setUserData({
        name: data.user.name,
        email: data.user.email,
        isPro: data.user.isPro,
        token: data.token,
        ChatWithAI: data.user.chats,
      });
    } catch (error) {
      console.log("Error loading history");
    }
  };

  useEffect(() => {
    GetLatestData();
  }, []);

  const handleUserDeleteChat = async (event, chatId) => {
    event.stopPropagation();
    if (window.confirm("Are you sure you want to delete this chat?")) {
      try {
        const Res = await fetch(`/api/use-ai/DeleteChat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chatId }),
        });
        const data = await Res.json();
        if (data.success) {
          GetLatestData();
          alert("Chat Deleted Successfully");
          return;
        } else {
          alert("Something Went Wrong");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="min-h-screen w-full px-6 py-8">
      <div className="w-full mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Chat History</h1>

        {userData?.ChatWithAI?.length === 0 && (
          <div className="text-gray-400 text-center mt-20">
            No chat history yet
          </div>
        )}

        <div className="space-y-4">
          {userData?.ChatWithAI?.map((chat) => (
            <div
              key={chat._id}
              onClick={() =>
                router.push(`/use-ai?service=MetaTags&chatId=${chat._id}`)
              }
              className="cursor-pointer rounded-xl border border-neutral-800 bg-neutral-900 p-5 hover:bg-neutral-800 transition"
            >
              <div className="flex relative justify-between items-center">
                <h2 className="text-lg font-medium line-clamp-1">
                  {chat.chatHeading || "Untitled Chat"}
                </h2>
                <span className="text-xs text-gray-400">
                  {new Date(chat.createdAt).toLocaleDateString()}
                </span>
                <button
                  title="Delete Chat"
                  onClick={(e) => handleUserDeleteChat(e, chat._id)}
                  className="absolute z-30 -bottom-8 right-0"
                >
                  <FiDelete size={24} color="red" />
                </button>
              </div>

              <p className="text-sm text-gray-400 mt-2">
                Click to continue this conversation
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullHistoryPage;
