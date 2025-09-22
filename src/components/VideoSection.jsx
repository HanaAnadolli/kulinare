import React from "react";
import { useTranslation } from "react-i18next";
import CookingVideo from "../assets/videos/cooking.mp4";

export default function VideoSection() {
  const { t } = useTranslation();

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={CookingVideo}
        autoPlay
        muted
        loop
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-0">
        

        <p className="mt-4 max-w-2xl text-white text-2xl md:text-base">
          {t("video.description")}
        </p>
        {/* <a href="/products">
          <button className="mt-8 px-6 py-3 border-2 text-[#D2AF6E] rounded hover:bg-[#fff] hover:text-[#55384C] transition-colors duration-200">
            {t("video.button")}
          </button>
        </a> */}

        <h2 className="text-2xl font-bold text-[#D2AF6E]">
          {t("video.title")}
        </h2>
      </div>
    </section>
  );
}
