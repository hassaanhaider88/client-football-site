"use client";
import { createContext, useEffect, useState } from "react";
import getUserByToken from "../lib/getUserByToken";

export const userDataContext = createContext(null);

export const UseUserContext = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    isPro: false,
    token: "",
  });

  useEffect(() => {
    async function fetchData() {
      const data = await getUserByToken();
      if (data?.success) {
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

  return (
    <userDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </userDataContext.Provider>
  );
};
