import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Utility: chunk array into rows of 4
function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function GalleryImages() {
  const { t } = useTranslation();

  // Local image filenames
  const imageFilenames = [
    "gallery1.png",
    "gallery2.png",
    "gallery3.png",
    "gallery4.png",
    "gallery5.png",
    "gallery6.png",
    "gallery7.png",
    "gallery8.png"
  ];

  // Convert to objects for consistency
  const images = imageFilenames.map((name, idx) => ({
    id: idx + 1,
    image_url: `/src/assets/images/${name}`
  }));

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);
  const showPrev = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const showNext = () =>
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const imageChunks = chunkArray(images, 4);

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-[#D2AF6E] mb-2">
          {t("gallery.dynamicTitle")}
        </h2>
        <div className="border-b border-gray-400 mb-8"></div>

        {/* Image Rows */}
        <div className="space-y-6">
          {imageChunks.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-4 md:gap-6 md:overflow-visible"
            >
              {row.map((img, index) => {
                const globalIndex = rowIndex * 4 + index;
                return (
                  <div
                    key={img.id}
                    className="flex-shrink-0 snap-start w-[80%] sm:w-[48%] md:w-auto cursor-pointer"
                    onClick={() => openModal(globalIndex)}
                  >
                    <img
                      src={img.image_url}
                      alt={`Gallery ${img.id}`}
                      className="w-full h-56 object-cover transition duration-300 ease-in-out transform md:grayscale md:hover:grayscale-0 md:hover:scale-105"
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {images.length === 0 && (
          <p className="text-gray-500 mt-8 text-center">
            {t("gallery.noImages")}
          </p>
        )}
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl font-bold"
            aria-label={t("gallery.closeAria")}
          >
            &times;
          </button>

          {images.length > 1 && (
            <button
              onClick={showPrev}
              className="absolute left-4 text-white text-4xl font-bold hover:text-gray-300"
              aria-label={t("gallery.prevAria")}
            >
              &#10094;
            </button>
          )}

          <img
            src={images[activeIndex].image_url}
            alt="Full"
            className="max-w-full max-h-full object-contain"
          />

          {images.length > 1 && (
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
