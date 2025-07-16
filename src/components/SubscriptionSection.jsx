// src/components/SubscriptionSection.jsx
import React from "react";
import Logo from "../assets/logo-dark.svg"; // Adjust path if needed

export default function SubscriptionSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-2xl mx-auto px-6 flex flex-col items-center">
        {/* Logo */}
        <img
          src={Logo}
          alt="Kulinare logo"
          className="h-12 w-auto mb-4"
        />

        {/* Heading */}
        <h2 className="text-lg md:text-xl font-semibold text-black mb-6 text-center">
          Regjistrohu për ofertat, idetë dhe sugjerimet tona speciale
        </h2>

        {/* Subscription Form */}
        <form className="w-full flex">
          <input
            type="email"
            placeholder="Shkruani emailin tuaj"
            className="
              flex-1
              border
              border-gray-300
              rounded-l-md
              px-4
              py-2
              focus:outline-none
              focus:ring-2
              focus:ring-[#55384C]
              focus:border-transparent
            "
          />
          <button
            type="submit"
            className="
              bg-transparent
              border
              border-[#55384C]
              text-[#55384C]
              rounded-r-md
              px-4
              py-2
              font-medium
              hover:bg-[#55384C]
              hover:text-white
              transition-colors
              duration-200
            "
          >
            Dërgo
          </button>
        </form>
      </div>
    </section>
  );
}
