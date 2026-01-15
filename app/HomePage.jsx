import React from "react";
import HeroSection from "./components/HeroSection";
import TrustedBrand from "./components/TrustedBrand";
import SEOToolsGrid from "./components/SEOToolsGrid";
import SEORetsults from "./components/SEORetsults";
import PriceSection from "./components/PriceSection";
import TestimonialSection from "./components/TestimonialSection";
import FAQsSection from "./components/FAQsSection";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className="w-full relative py-10 h-[400x] overflow-x-hidden overflow-y-auto gap-10  flex justify-center items-center flex-nowrap">
        <div className="bg-[#333333cb] w-full h-full -top-10  blur-2xl absolute" />
        <TrustedBrand />
        <TrustedBrand />
        <TrustedBrand />
      </div>
      <SEOToolsGrid />
      <SEORetsults />
      <PriceSection />
      <TestimonialSection />
      <FAQsSection />
    </>
  );
};

export default HomePage;
