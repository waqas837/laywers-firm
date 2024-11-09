import React from "react";
import HeroSection from "../components/HeroSection";
import Carousel from "../components/ImageDisplayCarousel";
import VerdictsSettlements from "../components/VerditcsAndSettlements";
import PracticeAreas from "../components/ParacticeAreas";
import AttorneysList from "@/components/AttornyesList";
import CasesWeHandle from "@/components/CasesWeHandle";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Newsletter from "@/components/NewsLetter/Index";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Carousel />
      <VerdictsSettlements />
      <PracticeAreas />
      <AttorneysList />
      <CasesWeHandle />
      <Testimonials />
      <Blog />
      <Newsletter />
    </div>
  );
};

export default Home;
