import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 w-12 h-12 rounded-full z-50 transition-all duration-300 shadow-md 
        flex items-center justify-center border-2 border-[#D2AF6E] bg-white group
        ${isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      <FaArrowUp
        className="
          text-[#55384C]
          transform
          transition-transform
          duration-200
          group-hover:-translate-y-1
        "
      />
    </button>
  );
};

export default ScrollToTopButton;
