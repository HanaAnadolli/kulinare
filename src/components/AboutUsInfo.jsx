// src/components/AboutUs.jsx
import React from "react";
import AboutImage from "../assets/images/about-us.jpg";

export default function AboutUsInfo() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-[#D2AF6E] mb-2">
          RRETH NESH
        </h2>
        <div className="border-b border-gray-400 mb-8"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="h-full">
            <img
              src={AboutImage}
              alt="Kulinare delivery truck"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-xl font-semibold text-[#D2AF6E]">
              Te Kulinare, besojmë se suksesi i një kuzhine nuk fillon vetëm me
              një recetë të mirë
            </h3>
            <p className="text-gray-700">
              Ai fillon me pajisjet e duhura, organizimin efikas dhe zgjidhjet
              profesionale që i japin jetë çdo ideje kulinare.
            </p>

            <p className="text-gray-700">
              E themeluar në vitin 2006, Kulinare ka ndërtuar reputacionin e saj
              si një nga furnizuesit më të besueshëm në tregun kosovar për
              pajisje profesionale të kuzhinës, enë, aksesorë dhe zgjidhje të
              personalizuara për industrinë e hotelerisë dhe gastronomisë.
            </p>
            <p className="text-gray-700">
              Me përvojë të gjatë në këtë sektor dhe me një ekip të përkushtuar
              profesionistësh, ne jemi gjithmonë pranë klientëve tanë – nga
              ideja e parë deri te instalimi final i kuzhinës së tyre.
            </p>
            <p className="text-gray-700">
              Kuzhinierët që punojnë me pajisje cilësore ndihen më të sigurt dhe
              më të qetë në punën e tyre, ndërsa klientët e tyre e vlerësojnë
              këtë përmes shijes, komoditetit dhe përvojës që iu ofrojnë.
            </p>
            <p className="text-gray-700">
              Që nga viti 2006, ne kemi qenë zgjidhja e parë për shumë biznese
              që kërkojnë cilësi, profesionalizëm dhe partnerë të besueshëm.
              Nëse jeni në fillim të rrugëtimit tuaj ose kërkoni të rrisni
              performancën e biznesit tuaj, Kulinare është partneri juaj i
              duhur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
