"use client";
import { createContext, useContext, useState } from "react";

export const UserChatContext = createContext(null);

export const UserChatProvider = ({ children }) => {
  const [userChatData, setUserChatData] = useState([]);

  return (
    <UserChatContext.Provider value={{ userChatData, setUserChatData }}>
      {children}
    </UserChatContext.Provider>
  );
};


export const useUserChatData = () => {
  const context = useContext(UserChatContext);

  if (!context) {
    throw new Error(
      "useUserChatData must be used inside UserChatProvider"
    );
  }

  return context;
};
