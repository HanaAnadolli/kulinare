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

export default function Gallery() {
  const { t } = useTranslation();
  
  // Restaurant data with their folder names and display names
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

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [restaurantImages, setRestaurantImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
    loadRestaurantImages(restaurant.folder);
  };

  const loadRestaurantImages = async (folderName) => {
    setLoading(true);
    try {
      // Import all images from all restaurant folders at build time
      const allImageImports = import.meta.glob('/src/assets/*/*.{png,jpg,jpeg,JPG}', { eager: true });
      
      // Filter images for the specific restaurant folder
      const restaurantImages = Object.entries(allImageImports)
        .filter(([path]) => path.includes(folderName))
        .map(([path, module], index) => ({
          id: index + 1,
          image_url: module.default,
          filename: path.split('/').pop()
        }));

      setRestaurantImages(restaurantImages);
    } catch (error) {
      console.error('Error loading images:', error);
      setRestaurantImages([]);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);
  const showPrev = () =>
    setActiveIndex((prev) => (prev === 0 ? restaurantImages.length - 1 : prev - 1));
  const showNext = () =>
    setActiveIndex((prev) => (prev === restaurantImages.length - 1 ? 0 : prev + 1));

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

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="relative overflow-hidden cursor-pointer group bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
              onClick={() => handleRestaurantClick(restaurant)}
            >
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-[#D2AF6E] group-hover:text-[#B8941F] transition duration-300">
                  {restaurant.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {t("gallery.clickToView")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Restaurant Images Section */}
        {selectedRestaurant && (
          <div className="mt-12 bg-white rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-[#D2AF6E] mb-4">
              {selectedRestaurant.name}
            </h3>
            <div className="border-b border-gray-300 mb-6"></div>

            {loading && (
              <div className="space-y-6">
                {[...Array(2)].map((_, rowIndex) => (
                  <div key={rowIndex} className="flex gap-4 md:grid md:grid-cols-4 md:gap-6">
                    {[...Array(4)].map((_, index) => (
                      <div key={index} className="animate-pulse flex-shrink-0 w-[80%] sm:w-[48%] md:w-auto">
                        <div className="w-full h-56 bg-gray-300 rounded"></div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {!loading && restaurantImages.length > 0 && (
              <div className="space-y-6">
                {chunkArray(restaurantImages, 4).map((row, rowIndex) => (
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
                            alt={`${selectedRestaurant.name} ${img.id}`}
                            className="w-full h-56 object-cover transition duration-300 ease-in-out transform md:grayscale md:hover:grayscale-0 md:hover:scale-105"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}

            {!loading && restaurantImages.length === 0 && (
              <p className="text-gray-500 mt-8 text-center">
                {t("gallery.noImages")} {selectedRestaurant.name}
              </p>
            )}
          </div>
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

          {restaurantImages.length > 1 && (
            <button
              onClick={showPrev}
              className="absolute left-4 text-white text-4xl font-bold hover:text-gray-300"
              aria-label={t("gallery.prevAria")}
            >
              &#10094;
            </button>
          )}

          <img
            src={restaurantImages[activeIndex]?.image_url}
            alt="Full"
            className="max-w-full max-h-full object-contain"
          />

          {restaurantImages.length > 1 && (
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
