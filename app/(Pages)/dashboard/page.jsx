"use client";

import { userDataContext } from "../../store/UserDataContext";
import { useContext, useEffect } from "react";
const DashboardPage = () => {
  const { userData, setUserData } = useContext(userDataContext);
  const GetLatestData = async () => {
    try {
      const res = await fetch("/api/getbytoken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: localStorage.getItem("token"),
        }),
      });
      const data = await res.json();
      console.log(data);
      if (!data.success) {
        console.log(data.messsage);
        return;
      }
      setUserData({
        name: data.user.name,
        email: data.user.email,
        isPro: data.user.isPro,
        token: data.token,
      });
      // console.log(data);
    } catch (error) {
      console.log("errro in Dashboard");
    }
  };
  useEffect(() => {
    GetLatestData();
  }, []);

  return <div>DashboardPage</div>;
};

export default DashboardPage;
