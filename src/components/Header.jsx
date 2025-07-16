import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/LOGO.png";
import { FiMenu, FiX } from "react-icons/fi";
import ProductModal from "./ProductModal";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang); // optional: persist language
  };

  const handleCloseMobile = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-[#55384C] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Kulinare logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex space-x-8 items-center">
          <Link to="/" className="text-white p-2 px-4 group text-lg">
            {t("nav.home")}
            <div className="bg-[#D2AF6E] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </Link>
          <Link to="/about" className="text-white p-2 px-4 group text-lg">
            {t("nav.about")}
            <div className="bg-[#D2AF6E] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </Link>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
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

        {/* Language + Contact */}
        <div className="hidden sm:flex items-center space-x-4">
          <select
            value={i18n.language}
            onChange={handleLanguageChange}
            className="bg-[#55384C] text-white px-2 py-1"
          >
            <option value="en">EN</option>
            <option value="sq">SQ</option>
          </select>

          <Link
            to="/contact-us"
            className="inline-block px-4 py-2 border border-white text-white rounded-full hover:bg-white hover:text-[#4C314B] transition-colors duration-200"
          >
            {t("nav.contact")}
          </Link>
        </div>

        {/* Hamburger */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-2xl"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Product Modal */}
      {isDropdownOpen && (
        <ProductModal onClose={() => setIsDropdownOpen(false)} />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed top-0 right-0 w-2/3 h-full bg-white z-50 shadow-lg transition duration-300">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
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

            <select
              value={i18n.language}
              onChange={(e) => {
                i18n.changeLanguage(e.target.value);
                localStorage.setItem("lang", e.target.value);
                setIsMobileMenuOpen(false);
              }}
              className="border border-[#55384C] text-[#55384C] rounded px-2 py-1 mt-4"
            >
              <option value="en">{t("lang.english")}</option>
              <option value="sq">{t("lang.albanian")}</option>
            </select>
          </nav>
        </div>
      )}
    </header>
  );
}
