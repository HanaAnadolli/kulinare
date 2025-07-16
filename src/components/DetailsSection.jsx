import React from "react";
import ImgDetails from "../assets/images/details.png";
import { useTranslation } from "react-i18next";

export default function DetailsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-0 md:px-6 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2 w-full relative">
          <img
            src={ImgDetails}
            alt="Professional kitchen team"
            className="w-full h-auto object-cover rounded-none md:rounded-lg"
          />

          {/* Responsive overlay box */}
          <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 md:left-full md:-translate-x-1/2 bg-[#D2AF6E] text-white rounded-lg px-4 md:px-6 py-3 md:py-4 w-[90%] md:w-[400px] text-[30px] md:text-[32px] font-medium text-center md:text-left">
            {t("details.overlayText")}
          </div>
        </div>

        <div className="md:w-1/2 w-full md:pl-12 mt-16 md:mt-0 px-6 md:px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D2AF6E] leading-tight">
            {t("details.heading")}
          </h2>

          <p className="mt-6 text-base text-gray-700">
            {t("details.paragraph")}
          </p>
        </div>
      </div>
    </section>
  );
}
