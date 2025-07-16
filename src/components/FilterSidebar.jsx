import React, { useEffect, useState } from "react";
import { useProductFilter } from "../context/ProductFilterContext";
import filter from "../assets/icons/filter.svg";
import close from "../assets/icons/close.svg";
import { useTranslation } from "react-i18next";

// 🟡 Import local data
import data from "../data/data.json";

export default function FilterSidebar() {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedSubcategories,
    setSelectedSubcategories,
  } = useProductFilter();
  const { i18n } = useTranslation();

  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    setCategories(data.categories || []);
    setSubcategories(data.subcategories || []);
  }, []);

  // Group subcategories by category_id
  const groupedSubcategories = subcategories.reduce((acc, sub) => {
    if (!acc[sub.category_id]) acc[sub.category_id] = [];
    acc[sub.category_id].push(sub);
    return acc;
  }, {});

  const toggleSubcategory = (subId) => {
    setSelectedSubcategories((prev) =>
      prev.includes(subId) ? prev.filter((id) => id !== subId) : [...prev, subId]
    );
  };

  const getDisplayName = (name) =>
    typeof name === "object" ? name[i18n.language] ?? name.en : name;

  // Sidebar content (desktop + mobile)
  const FilterContent = () => (
    <ul className="space-y-2 text-[#55384C] text-sm overflow-y-auto max-h-[70vh]">
      {categories.map((cat) => {
        const isActive = selectedCategory === cat.id;
        return (
          <li key={cat.id}>
            <div
              onClick={() => {
                setSelectedCategory(cat.id);
                setSelectedSubcategories([]);
              }}
              className={`font-semibold mb-1 cursor-pointer ${
                isActive ? "text-[#D2AF6E]" : ""
              }`}
            >
              {getDisplayName(cat.name)}
            </div>
            {isActive && groupedSubcategories[cat.id]?.length > 0 && (
              <ul className="ml-4 space-y-1 mt-2">
                {groupedSubcategories[cat.id].map((sub) => (
                  <li key={sub.id}>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedSubcategories.includes(sub.id)}
                        onChange={() => toggleSubcategory(sub.id)}
                        className="accent-[#55384C]"
                      />
                      {getDisplayName(sub.name)}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:block w-1/4 pr-4">{FilterContent()}</aside>

      {/* Mobile toggle button */}
      <div className="flex md:hidden justify-between items-center mb-4">
        <h2 className="text-base font-medium text-[#4C314B]">Filtro kategoritë</h2>
        <button onClick={() => setIsMobileOpen(true)}>
          <img src={filter} alt="Filter Icon" className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile filter sidebar */}
      {isMobileOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 p-6 rounded-t-lg shadow-2xl flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <button
              className="bg-[#55384C] text-white px-6 py-2 font-semibold rounded"
              onClick={() => setIsMobileOpen(false)}
            >
              Filtro
            </button>
            <button onClick={() => setIsMobileOpen(false)}>
              <img src={close} alt="Close Icon" className="h-6 w-6" />
            </button>
          </div>
          <div className="overflow-y-auto">{FilterContent()}</div>
        </div>
      )}
    </>
  );
}
