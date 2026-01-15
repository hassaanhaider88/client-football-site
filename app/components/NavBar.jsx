"use client";

import { TbArrowsCross } from "react-icons/tb";
import { BiMenuAltRight } from "react-icons/bi";
import Link from "next/link";
import { useState, useEffect } from "react";
import ServicesMenu from "./ServicesMenu";

const NavBar = () => {
  const navLinks = [
    { name: "Price", path: "#price" },
    { name: "Support", path: "/support" },
    { name: "Contact", path: "/contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 my-5 w-full mx-auto z-50 flex items-center justify-between 
      px-4 md:px-16 lg:px-24 xl:px-32 py-3 md:py-4 
      rounded-2xl shadow-md transition-all duration-500 text-white
      ${
        isScrolled
          ? "bg-linear-to-bl from-[#ffffffa6] via-[#333333c4] to-[#333333a6]"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 text-2xl font-semibold font-serif"
      >
        TagVion
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-2 lg:gap-8">
        <ServicesMenu />
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className="group flex flex-col gap-0.5"
          >
            {link.name}
            <span className="h-0.5 w-0 bg-gray-300 transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        <Link href="/log-in">Log in</Link>
        <Link
          href="/sign-up"
          className="ml-4 rounded-full bg-white px-8 py-2.5 text-black transition-all duration-500"
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="md:hidden"
        aria-label="Open menu"
      >
        <BiMenuAltRight size={28} />
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 
        bg-black text-gray-200 transition-transform duration-500 md:hidden
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4"
          aria-label="Close menu"
        >
          <TbArrowsCross size={28} />
        </button>

        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        <ServicesMenu />
        <Link href="/log-in" onClick={() => setIsMenuOpen(false)}>
          Log in
        </Link>

        <Link
          href="/sign-up"
          onClick={() => setIsMenuOpen(false)}
          className="rounded-full bg-white px-8 py-2.5 text-black"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
