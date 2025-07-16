import React from "react";
import { useTranslation } from "react-i18next";
import CheckIcon from "../assets/icons/check.svg";
import ValuesIcon from "../assets/icons/value.svg";
import kitchen from "../assets/images/kitchen.jpg";

export default function ValuesSection() {
  const { t } = useTranslation();
  const values = t("values.list", { returnObjects: true });

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Column */}
        <div className="space-y-6 flex flex-col">
          {/* Header */}
          <div className="flex items-center space-x-4">
            <img
              src={ValuesIcon}
              alt="Our Values"
              className="w-[100px] h-[100px]"
            />
            <h2 className="text-2xl font-semibold text-[#D2AF6E]">
              {t("values.title")}
            </h2>
          </div>

          {/* Values List */}
          <div className="space-y-6 flex-1">
            {values.map((item, idx) => (
              <div key={idx} className="group">
                <div className="flex items-center space-x-4">
                  <div className="relative bg-[#55384C] rounded-full p-2 transition-all duration-200 group-hover:bg-transparent group-hover:scale-105 flex-shrink-0">
                    <img
                      src={CheckIcon}
                      alt="Check"
                      className="w-[30px] h-[30px] transition-all group-hover:opacity-0 group-hover:scale-90"
                    />
                    <img
                      src={CheckIcon}
                      alt="Check hover"
                      className="absolute inset-0 m-auto w-[35px] h-[35px] text-[#D2AF6E] opacity-0 group-hover:opacity-100 group-hover:scale-125"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-[#55384C] group-hover:text-black transition-colors duration-200">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="h-full">
          <img
            src={kitchen}
            alt="Kitchen Values"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
