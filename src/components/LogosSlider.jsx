import React from "react";

import KulinareLogo   from "../assets/logos/Kulinare.png";
import MarenoLogo     from "../assets/logos/mareno.png";
import OtimadeLogo    from "../assets/logos/ottimade.png";
import FimarLogo      from "../assets/logos/FIMAR.png";
import Forcarbyfimar  from "../assets/logos/Forcarbyfimar.png";
import HamiltonBeach  from "../assets/logos/Hamilton_Beach.png";
import KulsanLogo     from "../assets/logos/kulsan.png";
import PeugeotLogo    from "../assets/logos/peugeot.svg";
import PujadasLogo    from "../assets/logos/pujadas.png";
import SklarryLogo    from "../assets/logos/sklarny.png";
import WmfLogo        from "../assets/logos/WMF.svg";
import SanitecLogo    from "../assets/logos/sanitec.png";
import DihrLogo       from "../assets/logos/DIHR.png";

export default function LogosSlider() {
  const logos = [
    { src: KulinareLogo,   alt: "Kulinare" },
    { src: MarenoLogo,     alt: "Mareno" },
    { src: OtimadeLogo,    alt: "Otimade" },
    { src: FimarLogo,      alt: "Fimar" },
    { src: Forcarbyfimar,  alt: "Forcar by Fimar" },
    { src: HamiltonBeach,  alt: "Hamilton Beach" },
    { src: KulsanLogo,     alt: "Kulsan" },
    { src: PeugeotLogo,    alt: "Peugeot" },
    { src: PujadasLogo,    alt: "Pujadas" },
    { src: SklarryLogo,    alt: "Sklarry" },
    { src: WmfLogo,        alt: "WMF" },
    { src: SanitecLogo,    alt: "Sanitec" },
    { src: DihrLogo,       alt: "DIHR" },
  ];

  return (
    <div className="relative overflow-hidden bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6 flex justify-center whitespace-nowrap animate-[scroll_20s_linear_infinite]">
        {[...logos, ...logos].map((logo, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 mx-4 w-36 flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-16 object-contain grayscale opacity-80"
            />
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
}
