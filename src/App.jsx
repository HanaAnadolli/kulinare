import React from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./i18n/i18n";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import ContactUs from "./pages/ContactUs";
import { ProductFilterProvider } from "./context/ProductFilterContext";
import { LanguageProvider } from "./context/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const { t } = useTranslation();

  return (
    <ProductFilterProvider>
      <ScrollToTop />   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* 404 Page with translation */}
        <Route
          path="*"
          element={
            <div className="h-screen flex items-center justify-center">
              <h2 className="text-2xl">{t("notFound")}</h2>
            </div>
          }
        />
      </Routes>
    </ProductFilterProvider>
  );
}
