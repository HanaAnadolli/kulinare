import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import FilterSidebar from "../components/FilterSidebar";
import ProductGrid from "../components/ProductGrid";
import Header from "../components/Header";
import SubscriptionSection from "../components/SubscriptionSection";
import Footer from "../components/Footer";

import data from "../data/data.json";
import { useProductFilter } from "../context/ProductFilterContext";

export default function Products() {
  const [activeFilters, setActiveFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useTranslation();
  const location = useLocation();

  const {
    setSelectedCategory,
    setSelectedSubcategories,
  } = useProductFilter();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("search")?.toLowerCase().trim();
    if (!query) return;

    setSearchTerm(query);

    // Clear manual filters when searching
    setSelectedCategory(null);
    setSelectedSubcategories([]);
  }, [location.search]);

  return (
    <>
      <Header />
      <main className="bg-[#f5f5f5] py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Line Row with Headings */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-6">
            {/* Left: Filter categories – hidden on small screens */}
            <div className="hidden md:block w-full md:w-1/4">
              <h2 className="text-base font-medium text-[#4C314B] mb-1">
                {t("products.filter")}
              </h2>
              <hr className="border-[#55384C] w-3/4" />
            </div>

            {/* Right: Our Products – full width on mobile */}
            <div className="w-full md:w-3/4 text-left md:text-right">
              <h1 className="text-3xl font-bold text-[#B69147] mb-1">
                {t("products.title")}
              </h1>
              <hr className="border-[#55384C] w-full" />
            </div>
          </div>

          {/* Sidebar + Grid */}
          <div className="flex flex-col md:flex-row gap-8">
            <FilterSidebar onFilterChange={setActiveFilters} />
            <ProductGrid filters={activeFilters} searchTerm={searchTerm} />
          </div>
        </div>
      </main>
      <SubscriptionSection />
      <Footer />
    </>
  );
}
