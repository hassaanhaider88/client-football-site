"use client";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbArrowBadgeDown } from "react-icons/tb";
import Link from "next/link";
import React, { useContext } from "react";
import { userDataContext } from "../store/UserDataContext";
import { useRouter } from "next/navigation";

const ServicesMenu = () => {
  const { userData } = useContext(userDataContext);
  const router = useRouter();

  const servicesArray = [
    {
      services: "YT Video SEO",
    },
    {
      services: "Meta Tags",
    },
    {
      services: "Media Post",
    },
    {
      services: "Keyword Gens",
    },
  ];
  const handleUserRirectToSerives = (service) => {
    console.log(userData);
    if (userData.name === "") {
      alert("Please Login First");
      router.push("/");
      return;
    } else {
      if (service == "YT Video SEO") {
        if (!userData.isPro) {
          alert("Please Get Pro Plan First!!");
        } else {
          router.push("/use-ai?service=YtVideoSeo");
        }
      } else if (service == "Media Post") {
        if (!userData.isPro) {
          alert("Please Get Pro Plan First!!");
        } else {
          router.push("/use-ai?service=MediaPost");
        }
      } else if (service == "Meta Tags") {
        router.push("/use-ai?service=MetaTags");
      } else {
        router.push("/use-ai?service=KeywordGens");
      }
    }
  };
  return (
    <div className="w-fit text-[16px]  leading-[1.6]">
      <div className="relative group">
        {/* Main Link */}
        <Link
          href="/"
          className="
            relative z-10 flex items-center justify-center gap-3
            px-4 py-3 rounded-2xl overflow-hidden
            transition-all duration-480
            ease-[cubic-bezier(0.23,1,0.32,1)]
            group-hover:text-black
            group-hover:rounded-b-none
          "
        >
          <span>Our Services</span>

          {/* Arrow Icon */}

          <TbArrowBadgeDown
            size={20}
            className="duration-400 transition-all group-hover:rotate-180"
          />

          {/* Background animation */}
          <span
            className="
              absolute inset-0 -z-10 bg-[#cacbcf]
              scale-x-0 origin-left
              transition-transform duration-480
              ease-[cubic-bezier(0.23,1,0.32,1)]
              group-hover:scale-x-100
              group-hover:origin-right
            "
          />
        </Link>

        {/* Submenu */}
        <div
          className="
            absolute left-0 top-full w-full
            flex flex-col items-center overflow-hidden
            rounded-b-2xl border border-[#cccccc]
            opacity-0 invisible -translate-y-3
            pointer-events-none
            transition-all duration-480
            ease-[cubic-bezier(0.23,1,0.32,1)]
            group-hover:opacity-100
            group-hover:visible
            group-hover:translate-y-0
            group-hover:pointer-events-auto
            group-hover:border-t-transparent
            group-hover:border-[#e7e7e7]
          "
        >
          {servicesArray.map((item) => (
            <div
              key={item.services}
              className="w-full md:bg-transparent bg-gray-400"
            >
              <div
                title={
                  item.services == "YT Video SEO" ||
                  item.services == "Media Post"
                    ? "Please Get Pro Plan"
                    : ""
                }
                onClick={() => handleUserRirectToSerives(item.services)}
                className="
                cursor-pointer
                  relative block w-full px-6 py-3 text-center
                  transition-all duration-480
                  ease-[cubic-bezier(0.23,1,0.32,1)]
                  md:hover:text-white
                  hover:text-black
                "
              >
                {item.services}

                {/* Hover background */}
                <span
                  className="
                    absolute inset-0 -z-10 bg-[#0a3cff]
                    scale-x-0 origin-left
                    transition-transform duration-480
                    ease-[cubic-bezier(0.23,1,0.32,1)]
                    hover:scale-x-100
                    hover:origin-right
                  "
                />
                {item.services == "YT Video SEO" ||
                item.services == "Media Post" ? (
                  <BsFillLightningChargeFill className="absolute top-0 right-0" />
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesMenu;
