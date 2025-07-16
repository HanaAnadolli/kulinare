import React from "react";
import '../index.css'
import Header from "../components/Header";
import BlogSection from "../components/BlogSection";
import SubscriptionSection from "../components/SubscriptionSection";
import Footer from "../components/Footer";
import GalleryImages from "../components/GalleryImages";

export default function Gallery() {
  return (
    <>
      <Header />
      <GalleryImages />
      <BlogSection />
      <SubscriptionSection />
      <Footer />
    </>
  );
}
