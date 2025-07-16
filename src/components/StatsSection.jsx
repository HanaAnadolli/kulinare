import React from "react";
import { useTranslation } from "react-i18next";
import KitchenToolsIcon from "../assets/icons/kitchen-tools.svg";
import KitchenBarIcon from "../assets/icons/kitchen-bar.svg";
import CustomerIcon from "../assets/icons/costumer.svg";

export default function StatsSection() {
  const { t } = useTranslation();

  const stats = [
    {
      icon: KitchenToolsIcon,
      number: "100+",
      label: t("stats.items.products"),
    },
    {
      icon: KitchenBarIcon,
      number: "76",
      label: t("stats.items.projects"),
    },
    {
      icon: CustomerIcon,
      number: "243",
      label: t("stats.items.happy_clients"),
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* Left side: Headline */}
          <div className="text-[28px] md:text-[38px] font-semibold text-[#D2AF6E] leading-tight text-center md:text-left">
            {t("stats.headline").split("<br>").map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>

          {/* Right side: Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 md:gap-[100px]">
            {stats.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-[90px] h-[90px] md:w-[105px] md:h-[105px] object-contain"
                />
                <p className="mt-2 text-3xl font-bold text-[#D2AF6E]">{item.number}</p>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
