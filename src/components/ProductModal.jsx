import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useProductFilter } from "../context/ProductFilterContext";
import { useTranslation } from "react-i18next";
import data from "../data/data.json";

export default function ProductModal({ onClose }) {
  const navigate = useNavigate();
  const { setSelectedCategory, clearFilters } = useProductFilter();
  const { i18n } = useTranslation();
  const [categories, setCategories] = useState([]);

  // Load categories once from local JSON
  useEffect(() => {
    // the JSON structure we generated has { categories: [...] }
    setCategories(data.categories || []);
  }, []);

  const handleClick = (cat) => {
    clearFilters();
    setSelectedCategory(cat.id);      // store the numeric ID
    onClose();
    navigate("/products");
  };

  // Split list into two roughly even columns
  const middleIndex = Math.ceil(categories.length / 2);
  const column1 = categories.slice(0, middleIndex);
  const column2 = categories.slice(middleIndex);

  const getDisplayName = (name) =>
    typeof name === "object" ? name[i18n.language] ?? name.en : name;

  return (
    <div className="absolute left-0 w-full bg-white shadow-md z-30 border-t border-gray-200">
      <div className="max-w-7xl mx-auto p-8 flex flex-col md:flex-row gap-20 items-start">
        {/* Search bar UI (not wired up yet) */}
        <div className="flex-1 relative">
          <FiSearch className="absolute top-1/2 left-2 -translate-y-1/2 text-[#55384C]" />
          <input
            type="text"
            placeholder="Kërko produktin"
            className="border-b border-gray-400 focus:outline-none focus:border-[#55384C] pl-6 py-2 w-full placeholder-gray-400 text-gray-700"
          />
        </div>

        {/* Category links, two columns */}
        <div className="flex flex-col md:flex-row gap-24 flex-1 text-[#55384C]">
          {[column1, column2].map((column, idx) => (
            <div className="flex flex-col gap-6" key={idx}>
              {column.map((cat) => (
                <span
                  key={cat.id}
                  onClick={() => handleClick(cat)}
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
