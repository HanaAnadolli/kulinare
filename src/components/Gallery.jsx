import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Img1 from "../assets/images/gallery1.png";
import Img2 from "../assets/images/gallery2.png";
import Img3 from "../assets/images/gallery3.png";
import Img4 from "../assets/images/gallery4.png";
import Img5 from "../assets/images/gallery5.png";
import Img6 from "../assets/images/gallery6.png";
import Img7 from "../assets/images/gallery7.png";
import Img8 from "../assets/images/gallery8.png";

export default function Gallery() {
  const { t } = useTranslation();
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const showPrev = () => {
    setCurrentIndex((idx) => (idx === 0 ? images.length - 1 : idx - 1));
  };
  const showNext = () => {
    setCurrentIndex((idx) => (idx === images.length - 1 ? 0 : idx + 1));
  };

  return (
    <section className="bg-[#D2AF6E] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <h2 className="text-3xl font-bold text-white">{t("gallery.title")}</h2>
          <p className="mt-4 md:mt-0 text-white max-w-md">
            {t("gallery.subtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-48 object-cover filter grayscale group-hover:grayscale-0 transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-4xl focus:outline-none"
            aria-label={t("gallery.closeAria")}
          >
            &times;
          </button>
          <button
            onClick={showPrev}
            className="absolute left-6 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 focus:outline-none"
            aria-label={t("gallery.prevAria")}
          >
            &#8249;
          </button>
          <img
            src={images[currentIndex]}
            alt={`Gallery ${currentIndex + 1}`}
            className="max-h-[80vh] max-w-[80vw] object-contain"
          />
          <button
            onClick={showNext}
            className="absolute right-6 text-white text-3xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 focus:outline-none"
            aria-label={t("gallery.nextAria")}
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
}
