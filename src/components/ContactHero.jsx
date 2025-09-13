import React from "react";
import { useTranslation } from "react-i18next";

export default function ContactHero() {
  const { t } = useTranslation();

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Vertical spacing */}
        <div className="py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Left: text */}
            <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-gray-900">
              {t("contactHero.text")}
            </p>

            {/* Right: outlined button */}
            <a href="#" className="inline-flex">
              <button className="px-8 py-3 border-2 border-[#55384C] text-[#55384C] rounded transition-colors duration-200 hover:bg-[#55384C] hover:text-white">
                {t("contactHero.cta")}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
