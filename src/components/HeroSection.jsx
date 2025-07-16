import React from "react";
import HeroImg from "../assets/images/hero-img.png";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      className="relative bg-cover bg-center min-h-screen w-full"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl max-w-4xl leading-tight">
          {t("hero.heading")}
        </h1>

        <p className="mt-4 text-white text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
          {t("hero.subtext")}
        </p>

        <button className="mt-6 px-6 py-3 border border-[#D2AF6E] text-[#D2AF6E] text-base sm:text-lg font-medium rounded hover:bg-white hover:text-[#55384C] transition-colors duration-200">
          {t("hero.button")}
        </button>
      </div>
    </section>
  );
}
