/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useContext } from "react";
import { userDataContext } from "../../store/UserDataContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

const UpgradeQRPage = () => {
  const { userData } = useContext(userDataContext);
  const router = useRouter();

  if (!userData?.name) {
    router.push("/");
    return null;
  }

  // WhatsApp link prefilled message
  const whatsappLink = `https://wa.me/923437117831?text=Hello,%20I%20have%20paid%20for%20SEOWala%20Pro.%20My%20userEmail%20is:%20${encodeURIComponent(
    userData.email,
  )}%20and%20my%20name%20is:%20${encodeURIComponent(userData.name)}`;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-semibold mb-4 text-center">
        Upgrade to SEOWala Pro – Only 999 PKR / month
      </h1>
      <p className="text-center text-zinc-400 mb-6">
        Scan the EasyPaisa QR code below to make your payment. After payment,
        contact us on WhatsApp for verification.
      </p>

      {/* QR Code Image */}

      <div className="mb-6">

        <img
          src="./Hassaan_EP.jpeg" // Add your QR code image here in public folder
          alt="EasyPaisa QR Code"
          width={250}
          height={250}
          className="rounded-xl"
        />
      </div>

      {/* WhatsApp Contact */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg text-white font-medium"
      >
        Contact Us on WhatsApp
      </a>

      <p className="text-zinc-500 mt-4 text-sm text-center">
        After verification, your account will be upgraded to Pro.
      </p>
    </div>
  );
};

export default UpgradeQRPage;
