import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// ✅ make sure this stays defined above the component
const GALLERIES = {
  "al-trade": {
    title: "Al Trade",
    folder: "Al Trade foto",
  },
  "faiku-palace": {
    title: "Faiku Palace - Viti",
    folder: "Faiku Palace -Viti",
  },
  "gizzi": {
    title: "Gizzi",
    folder: "Gizzi",
  },
  "la-terraca": {
    title: "La Terraca - Hani Elezit",
    folder: "La Terraca - Hani Elezit",
  },
  "missini-sweets": {
    title: "Missini Sweets",
    folder: "Missini Sweets",
  },
  "osteria-basilico": {
    title: "Osteria Basilico",
    folder: "Osteria Basilico",
  },
  "sach-pizza": {
    title: "Sach Pizza",
    folder: "Sach Pizza",
  },
  "sol-venus": {
    title: "SOL by Venus Hotel",
    folder: "SOL by Vneus Hotel",
  },
};

// Virtual scrolling component
const VirtualImageGrid = ({ images, onImageClick }) => {
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 12 }); // Show first 12 images initially
  const [loadedImages, setLoadedImages] = useState(new Set());
  
  const ITEMS_PER_ROW = 4;
  const ITEM_HEIGHT = 224; // h-56 = 224px
  const ROWS_TO_RENDER = 3; // Render 3 rows initially
  
  const totalRows = Math.ceil(images.length / ITEMS_PER_ROW);
  const visibleRows = Math.min(ROWS_TO_RENDER, totalRows);
  const visibleImages = images.slice(0, visibleRows * ITEMS_PER_ROW);
  
  const loadMoreImages = useCallback(() => {
    setVisibleRange(prev => ({
      start: 0,
      end: Math.min(prev.end + 8, images.length) // Load 8 more images
    }));
  }, [images.length]);
  
  const handleImageLoad = useCallback((index) => {
    setLoadedImages(prev => new Set([...prev, index]));
  }, []);
  
  // Intersection observer for loading more images
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadMoreImages();
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const sentinel = document.getElementById('load-more-sentinel');
    if (sentinel) {
      observer.observe(sentinel);
    }
    
    return () => {
      if (sentinel) {
        observer.unobserve(sentinel);
      }
    };
  }, [loadMoreImages]);
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleImages.map((src, i) => (
          <button
            key={`${src}-${i}`}
            onClick={() => onImageClick(i)}
            className="group block overflow-hidden"
            aria-label={`Open image ${i + 1}`}
          >
            <div className="relative w-full h-56 bg-gray-200">
              {loadedImages.has(i) ? (
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-56 object-cover md:grayscale md:group-hover:grayscale-0 transition duration-300 ease-in-out"
                  width="300"
                  height="224"
                  style={{ aspectRatio: '4/3' }}
                />
              ) : (
                <div className="w-full h-56 bg-gray-200 animate-pulse flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Loading...</span>
                </div>
              )}
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-56 object-cover md:grayscale md:group-hover:grayscale-0 transition duration-300 ease-in-out opacity-0"
                width="300"
                height="224"
                style={{ aspectRatio: '4/3' }}
                loading="lazy"
                decoding="async"
                onLoad={() => handleImageLoad(i)}
              />
            </div>
          </button>
        ))}
      </div>
      
      {visibleImages.length < images.length && (
        <div id="load-more-sentinel" className="h-4 w-full">
          <div className="text-center py-4">
            <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-[#D2AF6E]"></div>
            <p className="text-gray-500 mt-2">Loading more images...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Gallery() {
  const { id } = useParams();
  const gallery = GALLERIES[id] || { title: "Gallery", folder: "" };
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  // Load images for the selected restaurant
  useEffect(() => {
    if (gallery.folder) {
      setLoading(true);
      loadRestaurantImages(gallery.folder);
    }
  }, [gallery.folder]);

  const loadRestaurantImages = async (folderName) => {
    try {
      // Import all images from all restaurant folders at build time
      const allImageImports = import.meta.glob('/src/assets/*/*.{png,jpg,jpeg,JPG}', { eager: true });
      
      // Filter images for the specific restaurant folder
      const restaurantImages = Object.entries(allImageImports)
        .filter(([path]) => path.includes(folderName))
        .map(([path, module]) => module.default);

      setImages(restaurantImages);
    } catch (error) {
      console.error('Error loading images:', error);
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  const open = (i) => {
    setIdx(i);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);
  const prev = () =>
    setIdx((p) => (p === 0 ? images.length - 1 : p - 1));
  const next = () =>
    setIdx((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <>
      <Header />
      {/* Preload critical images */}
      {images.length > 0 && (
        <link rel="preload" as="image" href={images[0]} />
      )}

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
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="w-full h-56 bg-gray-300 rounded"></div>
                  </div>
                ))}
              </div>
            ) : images.length ? (
              <VirtualImageGrid images={images} onImageClick={open} />
            ) : (
              <p className="text-gray-600 text-center py-8">
                No images available for {gallery.title}.
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

          {images.length > 1 && (
            <button
              onClick={prev}
              className="absolute left-4 text-white text-4xl font-bold hover:text-gray-300"
              aria-label="Previous"
            >
              &#10094;
            </button>
          )}

          <img
            src={images[idx]}
            alt={`Full ${idx + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain"
          />

          {images.length > 1 && (
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
