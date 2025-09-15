// src/pages/RestaurantGallery.jsx
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Demo data — replace with your real covers
const restaurants = [
  { id: "matisse", name: "Matisse", cover: "/src/assets/images/gallery1.png" },
  {
    id: "osteria",
    name: "Osteria Basilico",
    cover: "/src/assets/images/gallery4.png",
  },
  {
    id: "gizzi",
    name: "Gizzi Restaurant",
    cover: "/src/assets/images/gallery7.png",
  },
  { id: "sachpizza", name: "Sach Pizza", cover: "/src/assets/images/gallery2.png" },
  { id: "terrazzan", name: "La Terrazzan", cover: "/src/assets/images/gallery3.png" },
  {
    id: "faikupalace",
    name: "Faiku Palace",
    cover: "/src/assets/images/gallery5.png",
  },
];

export default function RestaurantGallery() {
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
                className="grouptransition duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={r.cover}
                    alt={r.name}
                    className="w-full h-[300px] object-cover transform scale-110 transition duration-500 ease-in-out hover:scale-100"
                  />
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
