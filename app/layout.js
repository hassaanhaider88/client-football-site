import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { UseUserContext } from "./store/UserDataContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TagVion",
  description:
    "A platform that turns simple ideas into powerful tags and optimized content.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid-background`}
      >
        <UseUserContext>
        <NavBar />
        {children}
        <Footer />
        </UseUserContext>
      </body>
    </html>
  );
}
