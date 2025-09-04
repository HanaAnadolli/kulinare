import React from "react";
import '../index.css'
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import OurServices from "../components/OurServices";
import DetailsSection from "../components/DetailsSection";
import ProductsSection from "../components/ProductsSection";
import VideoSection from "../components/VideoSection";
import LogosSlider from "../components/LogosSlider";
import Gallery from "../components/Gallery";
import TestimonialSlider from "../components/TestimonialSlider";
import BlogSection from "../components/BlogSection";
import SubscriptionSection from "../components/SubscriptionSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <OurServices />
      {/* <DetailsSection /> */}
      <ProductsSection />
      <VideoSection />
      <LogosSlider />
      <Gallery />
      <TestimonialSlider />
      <BlogSection />
      <SubscriptionSection />
      <Footer />
    </>
  );
}
