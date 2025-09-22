// src/components/AboutUs.jsx
import React from "react";
import { useTranslation } from "react-i18next";
// If you still want the image on some pages, toggle showImage to true.
import AboutImage from "../assets/images/about-us.jpg";

export default function AboutUsInfo({ showImage = false }) {
  const { t } = useTranslation();

  const values = [
    {
      title: t("about.values.customer_focus.title"),
      body: t("about.values.customer_focus.body"),
    },
    {
      title: t("about.values.high_quality.title"),
      body: t("about.values.high_quality.body"),
    },
    {
      title: t("about.values.sustainable_supply.title"),
      body: t("about.values.sustainable_supply.body"),
    },
    {
      title: t("about.values.professional_service.title"),
      body: t("about.values.professional_service.body"),
    },
  ];

  return (
    <section className="bg-[#F6F6F6] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Small section label + underline (like Figma) */}
        <h2 className="text-[22px] md:text-[24px] font-semibold text-[#D2AF6E] tracking-wide">
          {t("about.section_label")}
        </h2>
        <div className="mt-1 h-px w-full bg-gray-300" />

        <div
          className={[
            "mt-8 grid gap-10",
            showImage ? "lg:grid-cols-[1.1fr_1.3fr]" : "lg:grid-cols-1",
          ].join(" ")}
        >
          {showImage && (
            <div className="order-2 lg:order-1">
              <img
                src={AboutImage}
                alt={t("about.image_alt")}
                className="w-full h-full object-cover rounded-md shadow-sm"
                loading="lazy"
                decoding="async"
              />
            </div>
          )}

          {/* Text block */}
          <div className={showImage ? "order-1 lg:order-2" : ""}>
            <h3 className="text-[26px] md:text-[30px] font-semibold text-[#D2AF6E]">
              {t("about.title")}
            </h3>

            {/* Lead paragraph */}
            <p className="mt-4 text-[15px] md:text-[16px] leading-7 text-[#333]">
              {t("about.lead")}
            </p>

            {/* Values title */}
            <p className="mt-6 font-semibold text-[#55384C]">
              {t("about.values_title")}
            </p>

            {/* Values list with gold markers and bold gold titles */}
            <ul className="mt-2 space-y-4 list-disc pl-5 marker:text-[#D2AF6E]">
              {values.map((v, i) => (
                <li key={i} className="text-[15px] md:text-[16px] leading-7">
                  <span className="font-semibold text-[#D2AF6E]">{v.title}</span>
                  <br />
                  <span className="text-[#333]">{v.body}</span>
                </li>
              ))}
            </ul>

            {/* Closing paragraph */}
            <p className="mt-6 text-[15px] md:text-[16px] leading-7 text-[#333]">
              {t("about.closing")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
