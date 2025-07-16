import React from "react";
import MisionIcon from "../assets/icons/mission.svg";
import VisionIcon from "../assets/icons/vision.svg";
import { useTranslation } from "react-i18next";

export default function MissionVision() {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Mission Card */}
          <div className="group border border-[#D2AF6E] rounded-lg p-6 flex flex-col items-center text-center transition-colors duration-300 hover:bg-[#55384C]">
            <img
              src={MisionIcon}
              alt={t("mission.title")}
              className="w-16 h-16 mb-4 transition-filter duration-200 group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
            <h3 className="text-xl font-semibold text-[#D2AF6E] mb-2 transition-colors duration-300">
              {t("mission.title")}
            </h3>
            <p className="text-gray-700 transition-colors duration-300 group-hover:text-white">
              {t("mission.description")}
            </p>
          </div>

          {/* Vision Card */}
          <div className="group border border-[#D2AF6E] rounded-lg p-6 flex flex-col items-center text-center transition-colors duration-300 hover:bg-[#55384C]">
            <img
              src={VisionIcon}
              alt={t("vision.title")}
              className="w-16 h-16 mb-4 transition-filter duration-200 group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
            <h3 className="text-xl font-semibold text-[#D2AF6E] mb-2 transition-colors duration-300">
              {t("vision.title")}
            </h3>
            <p className="text-gray-700 transition-colors duration-300 group-hover:text-white">
              {t("vision.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
