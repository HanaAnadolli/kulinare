import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import "../index.css";
import Testimonial1 from "../assets/images/testimonial1.svg";
import Testimonial2 from "../assets/images/testimonial2.svg";
import Testimonial3 from "../assets/images/testimonial3.svg";

const testimonials = [
  {
    img: Testimonial1,
    name: "Tsiamis Vasilieos",
    role: "Sach Pizza and Sach Caffe",
    rating: 5,
    text: `Partnerë të shkëlqyer për një kohë të gjatë!`,
  },
  {
    img: Testimonial2,
    name: "",
    role: "Gizzi Group",
    rating: 5,
    text: `Kulinare na ka ndihmuar të rritemi dhe të zhvillohemi`,
  },
  {
    img: Testimonial3,
    name: "Ale Haanes",
    role: "Lead of Pristina Hotel",
    rating: 5,
    text: `They turned my vision into reality with precision and style.`,
  },
  {
    img: Testimonial1,
    name: "Osteria Basilico",
    role: "",
    rating: 5,
    text: `Kulinare ka qenë një partner i shkëlqyer në rrugëtimin tonë`,
  },
  {
    img: Testimonial2,
    name: "Elena Petrova",
    role: "Owner of City Café",
    rating: 5,
    text: `They delivered a custom solution that perfectly fits our café.`,
  },
];

export default function TestimonialSlider() {
  const sliderRef = useRef(null);
  const { t } = useTranslation();

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: "smooth" });
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl w-full mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#D2AF6E] uppercase">
              {t("testimonials.title")}
            </h2>
            <p className="mt-1 text-gray-800">{t("testimonials.subtitle")}</p>
          </div>
          <div className="flex space-x-2 bg-[#DEDEDE] rounded-full p-2">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 bg-[#55384C] text-white rounded-full flex items-center justify-center hover:bg-[#D2AF6E] transition"
              aria-label="Previous testimonials"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 bg-[#55384C] text-white rounded-full flex items-center justify-center hover:bg-[#D2AF6E] transition"
              aria-label="Next testimonials"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div ref={sliderRef} className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[90%] sm:w-[400px] bg-white snap-center group mx-auto rounded-lg"
            >
              <div className="h-1 group-hover:h-2 bg-[#55384C] rounded-t-lg transition-all duration-200" />
              <div className="p-6 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500">{item.role}</p>
                <div className="flex mt-2 mb-4">
                  {Array.from({ length: item.rating }).map((_, starIdx) => (
                    <svg
                      key={starIdx}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.455a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.385-2.454a1 1 0 00-1.176 0l-3.385 2.454c-.784.57-1.838-.196-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.045 9.402c-.784-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69L9.05 2.927z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm text-center">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
