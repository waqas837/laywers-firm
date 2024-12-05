import React from "react";
import HeroSection from "../../components/HeroSection";
import Carousel from "../../components/ImageDisplayCarousel";
import VerdictsSettlements from "../../components/VerditcsAndSettlements";
import PracticeAreas from "../../components/ParacticeAreas";
import AttorneysList from "@/components/AttornyesList";
import CasesWeHandle from "@/components/CasesWeHandle";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Newsletter from "@/components/NewsLetter/Index";
import Threesteps from "@/components/Threesteps/index";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Carousel />
      <VerdictsSettlements />
      <PracticeAreas />
      <AttorneysList />
      <CasesWeHandle />
      <Testimonials />
      <Blog />
      <Threesteps />
      <Newsletter />
    </>
  );
};

export default Home;
