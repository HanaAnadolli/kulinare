import React from "react";
import { useTranslation } from "react-i18next";

import BlueprintIcon from "../assets/icons/blueprint.svg";
import CookingIcon from "../assets/icons/cooking.svg";
import ApplianceIcon from "../assets/icons/appliances.svg";
import CustomerIcon from "../assets/icons/costumer2.svg";

export default function OurServices() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-semibold text-[#D2AF6E]">
          {t("services.title")}
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="group border-2 border-[#D2AF6E] rounded-lg p-6 flex flex-col items-center text-center transition-colors duration-200 hover:bg-[#55384C] cursor-pointer">
            <img
              src={BlueprintIcon}
              alt={t("services.card1.title")}
              className="h-12 w-12 mb-4 group-hover:filter group-hover:brightness-0 group-hover:invert transition-filter duration-200"
            />
            <h3 className="text-lg font-semibold text-[#D2AF6E] mb-2">
              {t("services.card1.title")}
            </h3>
            <p className="text-gray-600 text-sm group-hover:!text-white">
              {t("services.card1.description")}
            </p>
          </div>

          {/* Card 2 */}
          <div className="group border-2 border-[#D2AF6E] rounded-lg p-6 flex flex-col items-center text-center transition-colors duration-200 hover:bg-[#55384C] cursor-pointer">
            <img
              src={ApplianceIcon}
              alt={t("services.card2.title")}
              className="h-12 w-12 mb-4 group-hover:filter group-hover:brightness-0 group-hover:invert transition-filter duration-200"
            />
            <h3 className="text-lg font-semibold text-[#D2AF6E] mb-2">
              {t("services.card2.title")}
            </h3>
            <p className="text-gray-600 text-sm group-hover:!text-white">
              {t("services.card2.description")}
            </p>
          </div>

          {/* Card 3 */}
          <div className="group border-2 border-[#D2AF6E] rounded-lg p-6 flex flex-col items-center text-center transition-colors duration-200 hover:bg-[#55384C] cursor-pointer">
            <img
              src={CookingIcon}
              alt={t("services.card3.title")}
              className="h-12 w-12 mb-4 group-hover:filter group-hover:brightness-0 group-hover:invert transition-filter duration-200"
            />
            <h3 className="text-lg font-semibold text-[#D2AF6E] mb-2">
              {t("services.card3.title")}
            </h3>
            <p className="text-gray-600 text-sm group-hover:!text-white">
              {t("services.card3.description")}
            </p>
          </div>

          {/* Card 4 */}
          <div className="group border-2 border-[#D2AF6E] rounded-lg p-6 flex flex-col items-center text-center transition-colors duration-200 hover:bg-[#55384C] cursor-pointer">
            <img
              src={CustomerIcon}
              alt={t("services.card4.title")}
              className="h-12 w-12 mb-4 group-hover:filter group-hover:brightness-0 group-hover:invert transition-filter duration-200"
            />
            <h3 className="text-lg font-semibold text-[#D2AF6E] mb-2">
              {t("services.card4.title")}
            </h3>
            <p className="text-gray-600 text-sm group-hover:!text-white">
              {t("services.card4.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
