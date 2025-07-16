import React from "react";
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";
import { useTranslation } from "react-i18next";

export default function BlogSection() {
  const { t } = useTranslation();

  const blogPosts = [
    {
      date: { month: t("months.march"), day: "12" },
      img: blog1,
      title: t("blog.posts.0.title"),
      link: "#",
    },
    {
      date: { month: t("months.march"), day: "11" },
      img: blog2,
      title: t("blog.posts.1.title"),
      link: "#",
    },
    {
      date: { month: t("months.march"), day: "10" },
      img: blog3,
      title: t("blog.posts.2.title"),
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-[#D2AF6E] text-center mb-8">
          {t("blog.title")}
        </h2>

        <div className="space-y-8">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0 border-b border-[#D2AF6E] pb-6"
            >
              <div className="w-full md:w-20 text-center md:text-right">
                <p className="text-sm text-gray-600">{post.date.month}</p>
                <p className="text-2xl font-bold text-[#55384C]">
                  {post.date.day}
                </p>
              </div>

              <div className="w-full md:w-36 flex-shrink-0">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-auto rounded"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-base font-medium text-gray-800 mb-1">
                  {post.title}
                </h3>
                <a
                  href={post.link}
                  className="group inline-block text-[#D2AF6E] text-sm font-medium"
                >
                  {t("blog.readMore")}
                  <div className="h-[2px] w-0 group-hover:w-full bg-[#D2AF6E] transition-all duration-500"></div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
