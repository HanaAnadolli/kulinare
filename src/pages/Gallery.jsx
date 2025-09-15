import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// ---- demo images (replace / extend as needed) ----
import g1 from "../assets/images/gallery1.png";
import g2 from "../assets/images/gallery2.png";
import g3 from "../assets/images/gallery3.png";
import g4 from "../assets/images/gallery4.png";
import g5 from "../assets/images/gallery5.png";
import g6 from "../assets/images/gallery6.png";
import g7 from "../assets/images/gallery7.png";
import g8 from "../assets/images/gallery8.png";

// ✅ make sure this stays defined above the component
const GALLERIES = {
  matisse: {
    title: "Matisse – Pastiçeri",
    images: [g1, g2, g3, g4, g5, g6, g7, g8, g2, g4, g6, g8],
  },
  osteria: {
    title: "Osteria Basilico",
    images: [g4, g5, g6, g7, g8, g1, g2, g3, g5, g7, g1, g3],
  },
  gizzi: {
    title: "Gizzi Restaurant",
    images: [g7, g8, g1, g2, g3, g4, g5, g6, g1, g3, g5, g7],
  },
};

export default function Gallery() {
  const { id } = useParams();
  const gallery = GALLERIES[id] || { title: "Gallery", images: [] };

  const [isOpen, setIsOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const open = (i) => {
    setIdx(i);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);
  const prev = () =>
    setIdx((p) => (p === 0 ? gallery.images.length - 1 : p - 1));
  const next = () =>
    setIdx((p) => (p === gallery.images.length - 1 ? 0 : p + 1));

  return (
    <>
      <Header />

      <main className="flex flex-col min-h-screen">
        <section className="flex-grow bg-gray-100 py-10">
          <div className="max-w-7xl mx-auto px-6">
            {/* back pill */}
            <div className="mb-4">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#55384C] text-[#55384C] font-semibold transition-colors duration-300 hover:bg-gray-50"
              >
                ← Kthehu
              </Link>
            </div>

            {/* title + divider */}
            <h1 className="text-2xl md:text-3xl font-semibold text-[#D2AF6E]">
              {gallery.title}
            </h1>
            <div className="border-b border-gray-300 mt-2 mb-6" />

            {/* grid */}
            {gallery.images.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {gallery.images.map((src, i) => (
                  <button
                    key={`${src}-${i}`}
                    onClick={() => open(i)}
                    className="group block overflow-hidden"
                    aria-label={`Open image ${i + 1}`}
                  >
                    <img
                      src={src}
                      alt={`Image ${i + 1}`}
                      className="w-full h-56 object-cover md:grayscale md:group-hover:grayscale-0 transition duration-300 ease-in-out"
                    />
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">
                No images available for this restaurant.
              </p>
            )}
          </div>
        </section>

        {/* footer always at bottom */}
        <Footer />
      </main>

      {/* lightbox */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={close}
            className="absolute top-5 right-5 text-white text-3xl font-bold"
            aria-label="Close"
          >
            &times;
          </button>

          {gallery.images.length > 1 && (
            <button
              onClick={prev}
              className="absolute left-4 text-white text-4xl font-bold hover:text-gray-300"
              aria-label="Previous"
            >
              &#10094;
            </button>
          )}

          <img
            src={gallery.images[idx]}
            alt={`Full ${idx + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain"
          />

          {gallery.images.length > 1 && (
            <button
              onClick={next}
              className="absolute right-4 text-white text-4xl font-bold hover:text-gray-300"
              aria-label="Next"
            >
              &#10095;
            </button>
          )}
        </div>
      )}
    </>
  );
}
