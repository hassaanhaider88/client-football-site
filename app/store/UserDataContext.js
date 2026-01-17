"use client";
import { createContext, useEffect, useState } from "react";
import getUserByToken from "../lib/getUserByToken";

export const userDataContext = createContext();

export const UseUserContext = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    isPro: false,
    ChatWithAI: [],
    token: "",
  });

  useEffect(() => {
    async function fetchData() {
      const data = await getUserByToken();
      console.log(data);
      if (data.success) {
        setUserData({
          name: data.user.name,
          email: data.user.email,
          isPro: data.user.isPro,
          ChatWithAI: data.user.ChatCreatedWithAI,
          token: data.token,
        });
      } else {
        return;
      }
    }
    fetchData();
  }, []);

  console.log(userData, "userData in context");
  useEffect(() => {
    console.log("UPDATED userData:", userData);
  }, [userData]);

  return (
    <userDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </userDataContext.Provider>
  );
};
