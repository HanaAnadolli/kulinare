import React from "react";
import { useTranslation } from "react-i18next";
import History2006 from "../assets/images/history-2006.png";
import History2016 from "../assets/images/history-2016.png";

export default function OurHistory() {
  const { t } = useTranslation();

  const history = [
    { year: "2006", image: History2006 },
    { year: "2016", image: History2016 },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Title column */}
          <div className="flex items-center justify-center md:justify-start h-full">
            <h2 className="text-xl md:text-2xl font-semibold text-[#D2AF6E] tracking-wide text-center md:text-left">
              {t("history.title")}
            </h2>
          </div>

          {/* History images */}
          {history.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img
                src={item.image}
                alt={`${t("history.image_alt")} ${item.year}`}
                className="w-full h-[402px] rounded-lg object-cover shadow-md"
              />
              <p className="mt-4 text-lg md:text-xl font-bold text-gray-800">
                {item.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
