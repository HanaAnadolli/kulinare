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
              Kush jemi ne
            </h3>
            <p className="text-[#000]">
              Kulinare është një kompani lidere në tregun kosovar, e
              specializuar <br />
              në pajisje profesionale për kuzhina, restorante, hotele dhe çdo
              ambient të <br />
              industrisë Ho.Re.Ca. Me një përkushtim të thellë ndaj cilësisë,
              klientit dhe <br />
              shërbimit, ne ofrojmë zgjidhje moderne dhe të besueshme për
              përgatitjen, <br />
              servimin, ruajtjen dhe transportimin e ushqimit.
            </p>

            <h3 className="text-xl font-semibold text-[#55384C]">Qasja jonë</h3>
            <p className="text-[#000]">
              Qasja jonë bazohet në tri shtylla kryesore:
            </p>
            <p className="text-[#D2AF6E]">
              <ul className="text-[#D2AF6E] list-disc pl-5">
                <li>Përkushtim ndaj klientit</li>
                <li>Cilësi e padiskutueshme e produkteve</li>
                <li>Shërbim profesional dhe i kujdesshëm</li>
              </ul>
            </p>
            <p className="text-[#000]">
              Ne nuk jemi vetëm një furnitor – jemi partner strategjik për çdo
              profesionist <br />
              të gastronomisë që kërkon zgjidhje të personalizuara dhe efikase.
              Falë <br />
              përvojës sonë dhe njohurive të thella të industrisë, ne ofrojmë
              edhe <br />
              konsulencë dhe projekte të plota për ambientet tuaja, nga kuzhinat
              e <br />
              vogla familjare deri te restorantet dhe hotelet më të mëdha.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
