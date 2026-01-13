"use client";
import { TbArrowsCross } from "react-icons/tb";

import { BiMenuAltRight } from "react-icons/bi";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
const NavBar = () => {
  const navLinks = [
    { name: "Resourses", path: "/resourses" },
    { name: "Price", path: "/price" },
    { name: "Support", path: "/support" },
    { name: "Contact", path: "/contact" },
  ];

  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav
        className={`BgBlurry sticky text-white top-0 my-3 left-0  w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50  shadow-md backdrop-blur-lg py-3 md:py-4}`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          Logo
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              className={`group flex flex-col gap-0.5 }`}
            >
              {link.name}
              <div className="bg-gray-300 h-0.5 w-0 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/log-in" className="text-md">
            Log in
          </Link>
          <button
            onClick={() => router.push("/sign-up")}
            className="px-8 py-2.5 rounded-full ml-4 transition-all duration-500 bg-white text-black"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex cursor-pointer items-center gap-3 md:hidden">
          <BiMenuAltRight
            size={28}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-200 transition-all duration-500 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <TbArrowsCross size={28} />
          </button>

          {navLinks.map((link, i) => (
            <Link key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </Link>
          ))}

          <Link href="/log-in">Log in</Link>

          <button
            onClick={() => router.push("/sign-up")}
            className="bg-white text-black px-8 py-2.5 rounded-full transition-all duration-500"
          >
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
