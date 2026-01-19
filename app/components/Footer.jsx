"use client";
import { BsInstagram } from "react-icons/bs";

import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Footer() {
  const PathName = usePathname();

  const [IShowNav, setIShowNav] = useState(true);

  useEffect(() => {
    if (
      PathName == "/use-ai" ||
      PathName == "/dashboard" ||
      PathName == "/full-history"
    ) {
      setIShowNav(false);
    } else {
      setIShowNav(true);
    }
  }, [PathName]);

  const fullYear = new Date().getFullYear();
  return (
    <footer
      className={`${IShowNav ? "block" : "hidden"}  px-6  md:px-16 bg-[#121214] lg:px-24 xl:px-32 pt-8 w-full text-gray-500`}
    >
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
          <h1 className="text-2xl font-semibold text-gray-400">TabVion.com</h1>
          <p className="mt-6 text-sm">
            All Your Sites. One SEO Dashboard. Real-Time SEO Testing with Google
            Search Console Data
          </p>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/" onClick={() => window.scrollTo(0, 0)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/contact">Contact us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+92-343-7117831</p>
              <p>hassaanhaider.dev@proton.me</p>
            </div>
            <div className="Icons flex gap-3 text-2xl justify-evenly items-center mt-5 text-gray-500">
              <FaFacebook />
              <BsGithub />
              <FaLinkedin />
              <BsInstagram />
            </div>
          </div>
        </div>
      </div>
      <div className="BigText  tracking-tighter w-full text-center text-[300px]  font-bold flex gap-1 justify-center items-center">
        <p
          className="font-bold ext-transparent bg-clip-text bg-linear-to-r from-[#666] via-[#e6e6e6] to-[#333232]"
          style={{ "-webkitTextStroke": "3px #D3D3D3" }}
        >
          TAG{" "}
        </p>
        <h1
          className="font-bold text-transparent"
          style={{ "-webkiTextStroke": "2px white" }}
        >
          Vion
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
