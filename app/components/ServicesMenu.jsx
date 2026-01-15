import { TbArrowBadgeDown } from "react-icons/tb";
import Link from "next/link";
import React from "react";

const ServicesMenu = () => {
  const servicesArray = [
    {
      services: "YT Video SEO",
      url: "yt-video-seo",
    },
    {
      services: "Meta Tags",
      url: "meta-tags",
    },
    {
      services: "Media Post",
      url: "media-post",
    },
    {
      services: "Keyword Gens",
      url: "keyword-gens",
    },
  ];
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
              <Link
                href={`/${item.url}`}
                className="
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesMenu;
