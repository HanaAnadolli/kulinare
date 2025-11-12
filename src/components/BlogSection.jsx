import React from "react";
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";
import { useTranslation } from "react-i18next";

export default function BlogSection() {
  const { t } = useTranslation();

  const blogPosts = [
    {
      date: { month: "Maj", day: "15" },
      img: blog1,
      title:
        "Precizion dhe Performancë: Mjetet thelbësore që i nevojitet çdo shefi kuzhine",
      link: "/blog/1",
    },
    {
      date: { month: "March", day: "11" },
      img: blog2,
      title:
        "Nga tehet te dërrasat: Udhëzuesi juaj për pajisjet profesionale të shefit të kuzhinës",
      link: "/blog/2",
    },
    {
      date: { month: "March", day: "10" },
      img: blog3,
      title:
        "Pajisja e Mjeshtrave: Mjete të domosdoshme për përsosmëri kulinarie",
      link: "/blog/3",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-center mb-12"
          style={{
            color: "#D2AF6E",
            fontSize: "24px",
            fontWeight: "normal",
          }}
        >
          BLOG
        </h2>

        <div className="space-y-6">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 py-6 border-b border-[#D2AF6E] last:border-b-0"
            >
              {/* Date Section */}
              <div className="flex-shrink-0 flex sm:block items-center sm:items-start gap-2 sm:gap-0 sm:w-20">
                <p
                  className="text-sm text-gray-700"
                  style={{ fontWeight: "normal" }}
                >
                  {post.date.month}
                </p>
                <p className="text-2xl font-bold text-gray-700">
                  {post.date.day}
                </p>
              </div>

              {/* Image Section */}
              <div className="flex-shrink-0 w-full sm:w-24 h-44 sm:h-24 rounded overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title Section */}
              <div className="flex-1 text-left">
                <h3 className="text-gray-700 font-bold leading-tight text-lg sm:text-base">
                  {post.title}
                </h3>
              </div>

              {/* Read More Link */}
              <div className="flex-shrink-0">
                <a
                  href={post.link}
                  className="group relative inline-block text-[#D2AF6E] text-sm font-medium"
                >
                  {t("blog.readMore")}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#D2AF6E] transition-all duration-500 group-hover:w-full"></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
