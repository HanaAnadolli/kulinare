// src/pages/RestaurantGallery.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Restaurant data matching the actual folders
const restaurants = [
  { id: "al-trade", name: "Al Trade", folder: "Al Trade foto" },
  { id: "faiku-palace", name: "Faiku Palace - Viti", folder: "Faiku Palace -Viti" },
  { id: "gizzi", name: "Gizzi", folder: "Gizzi" },
  { id: "la-terraca", name: "La Terraca - Hani Elezit", folder: "La Terraca - Hani Elezit" },
  { id: "missini-sweets", name: "Missini Sweets", folder: "Missini Sweets" },
  { id: "osteria-basilico", name: "Osteria Basilico", folder: "Osteria Basilico" },
  { id: "sach-pizza", name: "Sach Pizza", folder: "Sach Pizza" },
  { id: "sol-venus", name: "SOL by Venus Hotel", folder: "SOL by Vneus Hotel" },
];

export default function RestaurantGallery() {
  const [restaurantCovers, setRestaurantCovers] = useState({});

  useEffect(() => {
    // Load first image from each restaurant folder as cover
    const loadCovers = async () => {
      try {
        // Import all images from all restaurant folders
        const allImageImports = import.meta.glob('/src/assets/*/*.{png,jpg,jpeg,JPG}', { eager: true });
        
        const covers = {};
        
        restaurants.forEach(restaurant => {
          // Find first image for this restaurant
          const restaurantImages = Object.entries(allImageImports)
            .filter(([path]) => path.includes(restaurant.folder))
            .map(([path, module]) => module.default);
          
          if (restaurantImages.length > 0) {
            covers[restaurant.id] = restaurantImages[0];
          }
        });
        
        setRestaurantCovers(covers);
      } catch (error) {
        console.error('Error loading restaurant covers:', error);
      }
    };

    loadCovers();
  }, []);

  return (
    <>
      <Header />
      <section className="bg-[#F2F2F2] py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#D2AF6E] mb-8">
            GALERIA
          </h1>

          {/* Grid of restaurant cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurants.map((r) => (
              <Link
                key={r.id}
                to={`/gallery/${r.id}`}
                className="group transition duration-300"
              >
                <div className="relative overflow-hidden">
                  {restaurantCovers[r.id] ? (
                    <img
                      src={restaurantCovers[r.id]}
                      alt={r.name}
                      className="w-full h-[300px] object-cover transform scale-110 transition duration-500 ease-in-out hover:scale-100"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-[300px] bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-500">Loading...</span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <div className="p-4 text-left">
                  <h3 className="text-lg font-bold text-[#55384C]">{r.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
