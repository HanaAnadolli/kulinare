import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/LOGO.png";
import { FiMenu, FiX } from "react-icons/fi";
import ProductModal from "./ProductModal";
import { useTranslation } from "react-i18next";

// Flags
import USFlag from "../assets/flags/united-states.png";
import ALFlag from "../assets/flags/albania.png";

export default function Header() {
  // Products modal (kept as-is)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Language dropdowns (desktop & mobile)
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setIsLangOpen(false);
    setIsMobileLangOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleCloseMobile = () => setIsMobileMenuOpen(false);

  const currentFlag = i18n.language === "sq" ? ALFlag : USFlag;
  const currentAlt = i18n.language === "sq" ? "Shqip" : "English";

  return (
    <header className="bg-[#55384C] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Kulinare logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 items-center">
          <Link to="/" className="text-white p-2 px-4 group text-lg">
            {t("nav.home")}
            <div className="bg-[#D2AF6E] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </Link>
          <Link to="/about" className="text-white p-2 px-4 group text-lg">
            {t("nav.about")}
            <div className="bg-[#D2AF6E] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </Link>
          <button
            onClick={() => setIsDropdownOpen((v) => !v)}
            className="text-white p-2 px-4 group text-lg focus:outline-none"
          >
            {t("nav.products")}
            <div className="bg-[#D2AF6E] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </button>
          <Link to="/gallery" className="text-white p-2 px-4 group text-lg">
            {t("nav.gallery")}
            <div className="bg-[#D2AF6E] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </Link>
          <Link to="/blog" className="text-white p-2 px-4 group text-lg">
            {t("nav.blog")}
            <div className="bg-[#D2AF6E] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </Link>
        </nav>

        {/* Language + Contact (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4 relative">
          {/* Language custom dropdown with flags */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen((v) => !v)}
              className="flex items-center gap-2 bg-[#55384C] text-white px-2 py-1 rounded focus:outline-none"
              aria-haspopup="listbox"
              aria-expanded={isLangOpen}
            >
              <img src={currentFlag} alt={currentAlt} className="h-5 w-7" />
            </button>

            {isLangOpen && (
              <div
                className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded border overflow-hidden"
                role="listbox"
              >
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`flex items-center w-full px-3 py-2 hover:bg-gray-100 ${
                    i18n.language === "en" ? "bg-gray-50" : ""
                  }`}
                  role="option"
                  aria-selected={i18n.language === "en"}
                >
                  <img src={USFlag} alt="English" className="h-5 w-7 mr-2" />
                  <span className="text-sm">English</span>
                </button>
                <button
                  onClick={() => handleLanguageChange("sq")}
                  className={`flex items-center w-full px-3 py-2 hover:bg-gray-100 ${
                    i18n.language === "sq" ? "bg-gray-50" : ""
                  }`}
                  role="option"
                  aria-selected={i18n.language === "sq"}
                >
                  <img src={ALFlag} alt="Shqip" className="h-5 w-7 mr-2" />
                  <span className="text-sm">Shqip</span>
                </button>
              </div>
            )}
          </div>

          <Link
            to="/contact-us"
            className="inline-block px-4 py-2 border border-white text-white rounded-full hover:bg-white hover:text-[#4C314B] transition-colors duration-200"
          >
            {t("nav.contact")}
          </Link>
        </div>

        {/* Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="text-white text-2xl"
            aria-label="Open Menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Product Modal */}
      {isDropdownOpen && <ProductModal onClose={() => setIsDropdownOpen(false)} />}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-0 right-0 w-2/3 h-full bg-white z-50 shadow-lg transition duration-300">
          <div className="flex justify-end p-4">
            <button
              onClick={handleCloseMobile}
              className="text-2xl text-[#55384C]"
              aria-label="Close Menu"
            >
              <FiX />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 text-[#55384C] font-semibold text-lg px-6">
            <Link to="/" onClick={handleCloseMobile}>
              {t("nav.home")}
            </Link>
            <Link to="/about" onClick={handleCloseMobile}>
              {t("nav.about")}
            </Link>
            <button
              onClick={() => {
                setIsDropdownOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="text-left"
            >
              {t("nav.products")}
            </button>
            <Link to="/gallery" onClick={handleCloseMobile}>
              {t("nav.gallery")}
            </Link>
            <Link to="/blog" onClick={handleCloseMobile}>
              {t("nav.blog")}
            </Link>
            <Link to="/contact-us" onClick={handleCloseMobile}>
              {t("nav.contact")}
            </Link>

            {/* Mobile: Language custom dropdown with flags */}
            <div className="relative mt-2">
              <button
                onClick={() => setIsMobileLangOpen((v) => !v)}
                className="flex items-center gap-2 border border-[#55384C] text-[#55384C] rounded px-3 py-2 w-max"
                aria-haspopup="listbox"
                aria-expanded={isMobileLangOpen}
              >
                <img src={currentFlag} alt={currentAlt} className="h-5 w-7" />
                <span className="text-base">
                  {i18n.language === "sq" ? "Shqip" : "English"}
                </span>
              </button>

              {isMobileLangOpen && (
                <div
                  className="absolute mt-2 bg-white shadow-lg rounded border overflow-hidden"
                  role="listbox"
                >
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className={`flex items-center w-full px-3 py-2 hover:bg-gray-100 ${
                      i18n.language === "en" ? "bg-gray-50" : ""
                    }`}
                    role="option"
                    aria-selected={i18n.language === "en"}
                  >
                    <img src={USFlag} alt="English" className="h-5 w-7 mr-2" />
                    <span>English</span>
                  </button>
                  <button
                    onClick={() => handleLanguageChange("sq")}
                    className={`flex items-center w-full px-3 py-2 hover:bg-gray-100 ${
                      i18n.language === "sq" ? "bg-gray-50" : ""
                    }`}
                    role="option"
                    aria-selected={i18n.language === "sq"}
                  >
                    <img src={ALFlag} alt="Shqip" className="h-5 w-7 mr-2" />
                    <span>Shqip</span>
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
