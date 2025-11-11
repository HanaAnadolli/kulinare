import React, { useEffect, useState } from "react";
import { useProductFilter } from "../context/ProductFilterContext";
import { useTranslation } from "react-i18next";
import data from "../data/data.json"; // ⬅ local JSON import

export default function ProductGrid({ filters, searchTerm = "" }) {
  const { t, i18n } = useTranslation();
  const { selectedCategory, selectedSubcategories } = useProductFilter();
  const [subcategories, setSubcategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSubcategories(data.subcategories || []);
    setProducts(data.products || []);
    setLoading(false);
  }, []);

  const normalize = (str) => {
    if (!str || typeof str !== 'string') return '';
    return str.toLowerCase().trim();
  };

  const getDisplayName = (name) =>
    typeof name === "object" ? name[i18n.language] ?? name.en : name;

  const filteredProducts = products.filter((product) => {
    const sub = subcategories.find((s) => s.id === product.subcategory_id);
    if (!sub) return false;

    const prodName = normalize(getDisplayName(product.name)) || "";
    const subName = normalize(getDisplayName(sub.name)) || "";
    const cat = data.categories.find((c) => c.id === sub.category_id);
    const catName = normalize(getDisplayName(cat?.name)) || "";

    if (searchTerm) {
      return (
        (prodName && prodName.includes(searchTerm)) ||
        (subName && subName.includes(searchTerm)) ||
        (catName && catName.includes(searchTerm))
      );
    }

    const categoryMatch =
      selectedCategory && sub?.category_id === selectedCategory;

    const subMatch =
      selectedSubcategories.length > 0
        ? selectedSubcategories.includes(sub?.id)
        : true;

    return categoryMatch && subMatch;
  });

  const subMap = subcategories.reduce((acc, sub) => {
    acc[sub.id] = sub;
    return acc;
  }, {});

  const groupedBySub = filteredProducts.reduce((acc, product) => {
    if (!acc[product.subcategory_id]) acc[product.subcategory_id] = [];
    acc[product.subcategory_id].push(product);
    return acc;
  }, {});

  const subIdsToShow = Object.keys(groupedBySub);

  return (
    <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
      {loading ? (
        <p className="col-span-full text-center text-gray-500">
          {t("product.loading")}
        </p>
      ) : subIdsToShow.length === 0 ? (
        <p className="col-span-full text-center text-gray-500">
          {t("product.no_results")}
        </p>
      ) : (
        subIdsToShow.map((subId) => {
          const sub = subMap[subId];
          const subName = getDisplayName(sub?.name);
          const productWithFile = groupedBySub[subId].find((p) => p.file);
          let fileUrl = null;
          if (productWithFile?.file) {
            if (/^https?:\/\//i.test(productWithFile.file)) {
              fileUrl = productWithFile.file;
            } else {
              const normalizedPath = productWithFile.file.replace(/^\/+/, "");
              fileUrl = `/${encodeURI(normalizedPath)}`;
            }
          }
          const hasPdf = Boolean(fileUrl);

          return (
            <div
              key={subId}
              className="relative group shadow bg-white overflow-hidden h-[350px] w-[90%] sm:w-[295px]"
            >
              <img
                src={sub?.image || "/images/default.jpg"}
                alt={subName}
                className="w-full h-full object-cover transform transition-transform duration-800 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4 group-hover:opacity-0 transition-opacity duration-200">
                <h3 className="text-lg font-semibold">{subName}</h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-800 flex flex-col justify-end">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{subName}</h3>
                  {hasPdf && (
                    <a
                      href={fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline"
                    >
                      {t("product.download_pdf")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
