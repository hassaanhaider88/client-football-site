import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import TrustedBrand from "./components/TrustedBrand";
import SEOToolsGrid from "./components/SEOToolsGrid";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <div
        id="BgBlurry"
        className="w-full overflow-hidden gap-10 flex flex-nowrap"
      >
        <TrustedBrand />
        <TrustedBrand />
        <TrustedBrand />
      </div>
      <SEOToolsGrid/>
    </>
  );
};

export default HomePage;
