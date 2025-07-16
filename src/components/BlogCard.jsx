import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function BlogCard({ blog }) {
  const { i18n } = useTranslation();

  const getLocalized = (field) =>
    typeof field === "object" ? field[i18n.language] || field.en : field;

  const title = getLocalized(blog.title);
  const shortDescription = getLocalized(blog.short_description);

  return (
    <Link to={`/blog/${blog.id}`} className="block h-full">
      <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition duration-300 flex flex-col h-full min-h-[420px]">
        {/* Image */}
        <img
          src={blog.image_url}
          alt={title}
          className="w-full h-48 object-cover"
        />

        {/* Content */}
        <div className="p-5 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-[#55384C] font-semibold text-lg mb-2">
              {title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-3">
              {shortDescription}
            </p>
          </div>

          <div className="mt-4">
            <div className="w-8 h-[2px] bg-[#D2AF6E] mb-2"></div>
            <p className="text-xs text-gray-500">{blog.created_at}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
