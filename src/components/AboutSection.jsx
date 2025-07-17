import React from "react";
import ImgAbout from "../assets/images/about.png";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* TEXT COLUMN */}
        <div className="md:w-4/3 w-full md:pr-12 text-center md:text-left">
          <h2 className="text-[32px] font-bold text-[#D2AF6E]">
            {t("about.title")}
          </h2>

          <p className="mt-6 text-base font-medium">
            {t("about.description1")}
            <br />
            {t("about.description2")}
          </p>

          <p className="mt-4 text-[#55384C] text-base font-medium">
            {t("about.note")}
          </p>

          <div className="mt-6 flex justify-center md:justify-start">
            <a href="/about">
              <button className="px-5 py-2 border border-[#55384C] text-[#55384C] rounded hover:bg-[#55384C] hover:text-white transition-colors duration-200">
              {t("about.button")}
            </button>
            </a>
            
          </div>
        </div>

        {/* IMAGE COLUMN */}
        <div className="md:w-2/3 w-full mt-12 md:mt-0 flex justify-end">
          <img
            src={ImgAbout}
            alt="About us"
            className="w-full max-w-md md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
