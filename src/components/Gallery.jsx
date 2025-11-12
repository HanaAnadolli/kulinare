import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// Import gallery images
import gallery1 from "../assets/images/gallery1.png";
import gallery2 from "../assets/images/gallery2.png";
import gallery3 from "../assets/images/gallery3.png";
import gallery4 from "../assets/images/gallery4.png";
import gallery5 from "../assets/images/gallery5.png";
import gallery6 from "../assets/images/gallery6.png";
import gallery7 from "../assets/images/gallery7.png";
import gallery8 from "../assets/images/gallery8.png";

// Utility: chunk array into rows of 4
function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function Gallery() {
  const { t } = useTranslation();

  // Define gallery images
  const galleryImages = [
    { id: 1, image_url: gallery1, filename: "gallery1.png" },
    { id: 2, image_url: gallery2, filename: "gallery2.png" },
    { id: 3, image_url: gallery3, filename: "gallery3.png" },
    { id: 4, image_url: gallery4, filename: "gallery4.png" },
    { id: 5, image_url: gallery5, filename: "gallery5.png" },
    { id: 6, image_url: gallery6, filename: "gallery6.png" },
    { id: 7, image_url: gallery7, filename: "gallery7.png" },
    { id: 8, image_url: gallery8, filename: "gallery8.png" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);
  const showPrev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  const showNext = () =>
    setActiveIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );

  return (
    <section className="bg-[#D2AF6E] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-4xl font-bold text-white mb-4">
              {t("gallery.title")}
            </h2>
            <p className="text-white text-lg">{t("gallery.subtitle")}</p>
          </div>
          <button className="bg-transparent border border-[#55384C] text-[#55384C] px-6 py-3 font-medium hover:bg-[#55384C] hover:text-white transition duration-300">
            {t("gallery.viewMore")}
          </button>
        </div>

        {/* Gallery Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {galleryImages.map((img, index) => (
            <div
              key={img.id}
              className="cursor-pointer overflow-hidden"
              onClick={() => openModal(index)}
            >
              <img
                src={img.image_url}
                alt={`Gallery image ${img.id}`}
                className="w-full object-contain transition duration-500 ease-in-out filter grayscale hover:grayscale-0"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-gray-300"
            aria-label={t("gallery.closeAria")}
          >
            &times;
          </button>

          {galleryImages.length > 1 && (
            <button
              onClick={showPrev}
              className="absolute left-4 text-white text-4xl font-bold hover:text-gray-300"
              aria-label={t("gallery.prevAria")}
            >
              &#10094;
            </button>
          )}

          <img
            src={galleryImages[activeIndex]?.image_url}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain"
          />

          {galleryImages.length > 1 && (
            <button
              onClick={showNext}
              className="absolute right-4 text-white text-4xl font-bold hover:text-gray-300"
              aria-label={t("gallery.nextAria")}
            >
              &#10095;
            </button>
          )}
        </div>
      )}
    </section>
  );
}
