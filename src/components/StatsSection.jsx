import React from "react";
import { useTranslation } from "react-i18next";
import KitchenToolsIcon from "../assets/icons/kitchen-tools.svg";
import KitchenBarIcon from "../assets/icons/kitchen-bar.svg";
import CustomerIcon from "../assets/icons/costumer.svg";

export default function StatsSection() {
  const { t } = useTranslation();

  const stats = [
    { icon: KitchenToolsIcon, number: "6000", label: t("stats.items.products") },
    { icon: KitchenBarIcon,   number: "200",  label: t("stats.items.projects") },
    { icon: CustomerIcon,     number: "4600", label: t("stats.items.happy_clients") },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Equal columns on md+ (4 columns: 1 title + 3 stats).
            Same height across, with vertical dividers like the Figma. */}
        <div className="
          grid gap-10
          md:grid-cols-4 md:gap-0
          ">
          {/* Headline column */}
          <div className="
            flex items-center justify-center md:justify-start
            text-center md:text-left
            min-h-[210px] /* match Figma cell height */
            px-4
          ">
            <h2 className="text-[28px] md:text-[38px] font-semibold leading-tight">
              {/* Gold word like Figma */}
              <span className="text-[#D2AF6E]">
                {t("stats.headline").split("<br>")[0] || ""}
              </span>
              <br className="hidden md:block" />
              <span className="text-gray-800">
                {t("stats.headline").split("<br>")[1] || ""}
              </span>
            </h2>
          </div>

          {/* Stat columns (3 equal cells) */}
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="
                flex flex-col items-center justify-between
                text-center
                min-h-[210px] /* match Figma cell height */
                px-6 py-6
              "
            >
              {/* Icon at the top */}
              <img
                src={item.icon}
                alt={item.label}
                className="w-[84px] h-[84px] md:w-[100px] md:h-[100px] object-contain"
                loading="lazy"
                decoding="async"
              />

              {/* Number + label anchored towards the bottom */}
              <div className="mt-6">
                <p className="text-3xl md:text-[34px] font-bold text-[#D2AF6E] leading-none">
                  {item.number}
                </p>
                <p className="mt-1 text-sm md:text-base text-gray-600">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
