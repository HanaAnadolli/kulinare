import React from "react";
import MisionIcon from "../assets/icons/mission.svg";
import VisionIcon from "../assets/icons/vision.svg";
import { useTranslation } from "react-i18next";

export default function MissionVision() {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Mission Card */}
          <div className="group border border-[#D2AF6E] rounded-xl bg-white p-8 md:p-10 flex flex-col items-center text-center transition-colors duration-300 hover:bg-[#55384C]">
            {/* icon + title on one centered row */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <img
                src={MisionIcon}
                alt={t("mission.title")}
                className="w-16 h-16 transition duration-200 group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
              <h3 className="text-2xl font-semibold text-[#D2AF6E] transition-colors duration-300">
                {t("mission.title")}
              </h3>
            </div>
            <p className="text-gray-700 max-w-xl mx-auto leading-relaxed transition-colors duration-300 group-hover:text-white">
              {t("mission.description")}
            </p>
          </div>

          {/* Vision Card */}
          <div className="group border border-[#D2AF6E] rounded-xl bg-white p-8 md:p-10 flex flex-col items-center text-center transition-colors duration-300 hover:bg-[#55384C]">
            {/* icon + title on one centered row */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <img
                src={VisionIcon}
                alt={t("vision.title")}
                className="w-16 h-16 transition duration-200 group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
              <h3 className="text-2xl font-semibold text-[#D2AF6E] transition-colors duration-300">
                {t("vision.title")}
              </h3>
            </div>
            <p className="text-gray-700 max-w-xl mx-auto leading-relaxed transition-colors duration-300 group-hover:text-white">
              {t("vision.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
