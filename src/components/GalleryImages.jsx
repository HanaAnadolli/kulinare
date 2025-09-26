import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Utility: chunk array into rows of 4
function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function GalleryImages({ selectedRestaurant }) {
  const { t } = useTranslation();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Restaurant data with their folder names
  const restaurants = [
    { id: 1, name: "Al Trade", folder: "Al Trade foto" },
    { id: 2, name: "Faiku Palace - Viti", folder: "Faiku Palace -Viti" },
    { id: 3, name: "Gizzi", folder: "Gizzi" },
    { id: 4, name: "La Terraca - Hani Elezit", folder: "La Terraca - Hani Elezit" },
    { id: 5, name: "Missini Sweets", folder: "Missini Sweets" },
    { id: 6, name: "Osteria Basilico", folder: "Osteria Basilico" },
    { id: 7, name: "Sach Pizza", folder: "Sach Pizza" },
    { id: 8, name: "SOL by Venus Hotel", folder: "SOL by Vneus Hotel" }
  ];

  // Load images for the selected restaurant
  useEffect(() => {
    if (selectedRestaurant) {
      setLoading(true);
      loadRestaurantImages(selectedRestaurant.folder);
    }
  }, [selectedRestaurant]);

  const loadRestaurantImages = async (folderName) => {
    try {
      // Import all images from the specific restaurant folder
      const imageImports = import.meta.glob('/src/assets/*/*.{png,jpg,jpeg,JPG}', { eager: true });
      
      // Filter images for the specific restaurant folder
      const restaurantImages = Object.entries(imageImports)
        .filter(([path]) => path.includes(folderName))
        .map(([path, module], index) => ({
          id: index + 1,
          image_url: module.default,
          filename: path.split('/').pop()
        }));

      setImages(restaurantImages);
    } catch (error) {
      console.error('Error loading images:', error);
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

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

  // Don't render if no restaurant is selected
  if (!selectedRestaurant) {
    return null;
  }

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-[#D2AF6E] mb-2">
          {selectedRestaurant.name}
        </h2>
        <div className="border-b border-gray-400 mb-8"></div>

        {loading && (
          <div className="text-center py-8">
            <p className="text-gray-600">{t("gallery.loading")}</p>
          </div>
        )}

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

        {!loading && images.length === 0 && (
          <p className="text-gray-500 mt-8 text-center">
            {t("gallery.noImages")} {selectedRestaurant.name}
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
