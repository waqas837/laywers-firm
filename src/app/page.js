import React from "react";
import HeroSection from "./components/HeroSection";
import Carousel from "./components/ImageDisplayCarousel";
import VerdictsSettlements from "./components/VerditcsAndSettlements";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Carousel />
      <VerdictsSettlements />
    </div>
  );
};

export default Home;
