'use client'
import { createContext, useState } from "react";

export const userDataContext = createContext();

export const UseUserContext = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    isPro: false,
    ChatWithAI: [],
    token: "",
  });
  return (
    <userDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </userDataContext.Provider>
  );
};
