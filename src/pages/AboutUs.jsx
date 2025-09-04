import React from "react";
import '../index.css'
import Header from "../components/Header";
import AboutUsInfo from "../components/AboutUsInfo";
import MissionVision from "../components/MissionVision";
import ValuesSection from "../components/ValuesSection";
import ImageSection from "../components/ImageSection";
import StatsSection from "../components/StatsSection";
import OurTeam from "../components/OurTeam";
import BlogSection from "../components/BlogSection";
import SubscriptionSection from "../components/SubscriptionSection";
import Footer from "../components/Footer";
import OurHistory from "../components/OurHistory";

export default function AboutUs() {
  return (
    <>
      <Header />
      <AboutUsInfo />
      <OurHistory />
      <MissionVision />
      {/* <ValuesSection /> */}
      <ImageSection />
      <StatsSection />
      {/* <OurTeam /> */}
      <BlogSection />
      <SubscriptionSection />
      <Footer />
    </>
  );
}
