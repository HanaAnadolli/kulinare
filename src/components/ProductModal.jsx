import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useProductFilter } from "../context/ProductFilterContext";
import { useTranslation } from "react-i18next";
import data from "../data/data.json";

export default function ProductModal({ onClose }) {
  const navigate = useNavigate();
  const { clearFilters } = useProductFilter();
  const { t, i18n } = useTranslation();

  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (data && data.categories) {
      setCategories(data.categories);
    } else {
      console.error("Data not loaded or categories missing");
    }
  }, []);

  const getDisplayName = (name) =>
    typeof name === "object" ? name[i18n.language] ?? name.en : name;

  const normalize = (str) => str?.toLowerCase().trim();

  const handleSearch = (term) => {
    const query = normalize(term);
    if (!query) {
      setSearchResults([]);
      return;
    }

    const results = [];

    // Search categories
    if (data.categories) {
      data.categories.forEach((cat) => {
        const catName = normalize(getDisplayName(cat.name));
        if (catName.includes(query)) {
          results.push({
            type: "category",
            name: getDisplayName(cat.name),
            id: cat.id,
          });
        }
      });
    }

    // Search subcategories
    if (data.subcategories) {
      data.subcategories.forEach((sub) => {
        const subName = normalize(getDisplayName(sub.name));
        if (subName.includes(query)) {
          results.push({
            type: "subcategory",
            name: getDisplayName(sub.name),
            id: sub.id,
            categoryId: sub.category_id,
          });
        }
      });
    }

    // Search products
    if (data.products) {
      data.products.forEach((prod) => {
        const prodName = normalize(getDisplayName(prod.name));
        if (prodName.includes(query)) {
          results.push({
            type: "product",
            name: getDisplayName(prod.name),
            id: prod.id,
            subcategoryId: prod.subcategory_id,
          });
        }
      });
    }

    setSearchResults(results.slice(0, 10));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      goToSearchPage();
    }
  };

  const goToSearchPage = () => {
    onClose();
    clearFilters();
    navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
  };

  const handleResultClick = (name) => {
    setSearchTerm(name);
    goToSearchPage();
  };

  const handleCategoryClick = (cat) => {
    onClose();
    navigate(`/products?category=${cat.id}`);
  };

  const middleIndex = Math.ceil(categories.length / 2);
  const column1 = categories.slice(0, middleIndex);
  const column2 = categories.slice(middleIndex);

  return (
    <div className="absolute left-0 w-full bg-white shadow-md z-30 border-t border-gray-200">
      <div className="max-w-7xl mx-auto p-8 flex flex-col md:flex-row gap-20 items-start relative">
        <div className="flex-1 relative">
          <FiSearch
            onClick={goToSearchPage}
            className="absolute top-1/2 left-2 -translate-y-1/2 text-[#55384C] cursor-pointer"
          />
          <input
            type="text"
            placeholder={t("search_placeholder")}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleSearch(e.target.value);
            }}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            className="border-b border-gray-400 focus:outline-none focus:border-[#55384C] pl-6 py-2 w-full placeholder-gray-400 text-gray-700"
          />

          {searchResults.length > 0 && (
            <div className="absolute top-full left-0 mt-2 bg-white shadow-md border border-gray-200 z-50 w-full max-h-64 overflow-y-auto">
              {searchResults.map((result, idx) => (
                <div
                  key={idx}
                  onClick={() => handleResultClick(result.name)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-[#55384C]"
                >
                  {result.name}{" "}
                  <span className="text-xs text-gray-400">({result.type})</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-24 flex-1 text-[#55384C]">
          {[column1, column2].map((column, idx) => (
            <div className="flex flex-col gap-6" key={idx}>
              {column.map((cat) => (
                <span
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat)}
                  className="cursor-pointer hover:underline hover:text-[#D2AF6E]"
                >
                  {getDisplayName(cat.name)}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
