import React from "react";
import { useTranslation } from "react-i18next";

import ImgPajisje from "../assets/images/pajisje-kuzhine.png";
import ImgVegla from "../assets/images/vegla-kuzhine.png";
import ImgBareteBuffet from "../assets/images/barete-buffet.png";
import ImgVeshje from "../assets/images/veshje-personeli.png";
import ImgDeterxhentet from "../assets/images/deterxhentet.png";

export default function ProductsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-4 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-8">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-semibold text-[#D2AF6E]">
              {t("products.title")}
            </h2>
            <p className="mt-4 text-gray-700">
              {t("products.description.part1")}{" "}
              <span className="font-semibold">
                {t("products.description.highlight")}
              </span>
              {t("products.description.part2")}
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="/products">
              <button className="px-5 py-2 border-2 border-[#55384C] text-[#55384C] rounded hover:bg-[#55384C] hover:text-white transition-colors duration-200">
                {t("products.view_more")}
              </button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Item 1 */}
          <ProductCard
            img={ImgPajisje}
            title={t("products.items.kitchen_equipment.title")}
            desc={t("products.items.kitchen_equipment.desc")}
            tall
          />

          {/* Item 2 */}
          <ProductCard
            img={ImgVegla}
            title={t("products.items.kitchen_tools.title")}
            desc={t("products.items.kitchen_tools.desc")}
          />

          {/* Item 3 */}
          <ProductCard
            img={ImgBareteBuffet}
            title={t("products.items.bars_buffets.title")}
            desc={t("products.items.bars_buffets.desc")}
          />

          {/* Item 4 */}
          <ProductCard
            img={ImgVeshje}
            title={t("products.items.staff_clothing.title")}
            desc={t("products.items.staff_clothing.desc")}
          />

          {/* Item 5 */}
          <ProductCard
            img={ImgDeterxhentet}
            title={t("products.items.detergents.title")}
            desc={t("products.items.detergents.desc")}
          />
        </div>
      </div>
    </section>
  );
}

function ProductCard({ img, title, desc, tall }) {
  return (
    <div className={`relative group ${tall ? "lg:row-span-2" : ""}`}>
      <img
        src={img}
        alt={title}
        className={`w-full ${
          tall
            ? "h-[350px] sm:h-[300px] md:h-[350px] lg:h-full"
            : "h-48 sm:h-56 md:h-64"
        } object-cover rounded-lg`}
      />
      <div className="absolute inset-0 bg-transparent rounded-lg transition-colors duration-200 group-hover:bg-[#55384CE5]" />
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm">{desc}</p>
        <span className="block h-[1px] bg-white w-10 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:w-30 mt-1 mb-2"></span>
      </div>
    </div>
  );
}
