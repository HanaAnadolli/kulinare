import React, { createContext, useContext, useEffect, useState } from "react";

const ProductFilterContext = createContext();

export const useProductFilter = () => useContext(ProductFilterContext);

export function ProductFilterProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  // Load filters from localStorage on first render
  useEffect(() => {
    const storedCategory = localStorage.getItem("selectedCategory");
    const storedSubcategories = localStorage.getItem("selectedSubcategories");

    if (storedCategory) {
      setSelectedCategory(storedCategory);
    }

    if (storedSubcategories) {
      try {
        setSelectedSubcategories(JSON.parse(storedSubcategories));
      } catch (err) {
        setSelectedSubcategories([]);
      }
    }
  }, []);

  // Persist changes to localStorage
  useEffect(() => {
    if (selectedCategory) {
      localStorage.setItem("selectedCategory", selectedCategory);
    } else {
      localStorage.removeItem("selectedCategory");
    }

    localStorage.setItem(
      "selectedSubcategories",
      JSON.stringify(selectedSubcategories)
    );
  }, [selectedCategory, selectedSubcategories]);

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedSubcategories([]);
    localStorage.removeItem("selectedCategory");
    localStorage.removeItem("selectedSubcategories");
  };

  return (
    <ProductFilterContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        selectedSubcategories,
        setSelectedSubcategories,
        clearFilters,
      }}
    >
      {children}
    </ProductFilterContext.Provider>
  );
}
