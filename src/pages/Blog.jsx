import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import BlogCard from "../components/BlogCard";
import SubscriptionSection from "../components/SubscriptionSection";
import Footer from "../components/Footer";
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";

export default function Blog() {
  const { t } = useTranslation();

  const blogs = [
    {
      id: 1,
      title: {
        en: "Precision and Performance: Essential Tools Every Chef Needs",
        sq: "Precizion dhe Performancë: Mjetet thelbësore që i nevojiten çdo shefi kuzhine",
      },
      short_description: {
        en: "The tools you use in the kitchen define your precision and creativity.",
        sq: "Mjetet që përdorni në kuzhinë përcaktojnë saktësinë dhe kreativitetin tuaj.",
      },
      created_at: "15.05.2025",
      image_url: blog1,
    },
    {
      id: 2,
      title: {
        en: "From Chopping to Plating: Your Guide to Professional Kitchen Gear",
        sq: "Nga tehet te dërrasat: Udhëzuesi juaj për pajisjet profesionale të shefit të kuzhinës",
      },
      short_description: {
        en: "A chef is only as good as their tools — from knives to ovens.",
        sq: "Një shef është aq i mirë sa pajisjet e tij — nga thikat te furrat.",
      },
      created_at: "12.05.2025",
      image_url: blog2,
    },
    {
      id: 3,
      title: {
        en: "Secrets in Every Detail: The Professional Kitchen Know-How",
        sq: "Sekretet në Çdo Detaj: Sekretet i Kuzhinës Profesionale",
      },
      short_description: {
        en: "Professional secrets that make all the difference in a busy kitchen.",
        sq: "Sekretet profesionale që bëjnë diferencën në një kuzhinë të ngarkuar.",
      },
      created_at: "10.05.2025",
      image_url: blog3,
    },
  ];

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-[#D2AF6E] mb-4">
          {t("blogTitle")}
        </h2>
        <div className="border-b h-[2px] border-[#55384C] mb-8"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {blogs.length === 0 && (
          <p className="text-center text-gray-500 mt-12">{t("noBlogs")}</p>
        )}
      </div>
      <SubscriptionSection />
      <Footer />
    </>
  );
}
