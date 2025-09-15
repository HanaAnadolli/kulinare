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
import BormioliLogo   from "../assets/logos/Bormioli.png";

export default function LogosSlider() {
  const logos = [
    { src: KulinareLogo,   alt: "Kulinare" },
    { src: MarenoLogo,     alt: "Mareno" },
    { src: OtimadeLogo,    alt: "Otimade" },
    { src: FimarLogo,      alt: "Fimar" },
    { src: Forcarbyfimar,  alt: "Forcar by Fimar" },
    { src: DihrLogo,       alt: "DIHR" },
    { src: KulsanLogo,     alt: "Kulsan" },
    { src: WmfLogo,        alt: "WMF" },
    { src: SklarryLogo,    alt: "Sklarry" },
    { src: PeugeotLogo,    alt: "Peugeot" },
    { src: BormioliLogo,   alt: "Bormioli" },
    { src: HamiltonBeach,  alt: "Hamilton Beach" },
    { src: PujadasLogo,    alt: "Pujadas" },
    { src: SanitecLogo,    alt: "Sanitec" },
  ];

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto overflow-hidden">
        {/* Viewport (Figma sizes) */}
        <div className="logos-viewport">
          {/* Track (duplicated for seamless loop) */}
          <div className="logos-track">
            {[...logos, ...logos].map((logo, idx) => (
              <div key={idx} className="logo-item">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="logo-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* Figma-aligned viewport */
        .logos-viewport {
          display: flex;
          height: 196px;
          padding: 26px 100px;
          justify-content: center;
          align-items: center;
          align-self: stretch;
          overflow: hidden;
        }

        /* Pause animation on hover */
        .logos-viewport:hover .logos-track {
          animation-play-state: paused;
        }

        /* Track */
        .logos-track {
          display: flex;
          align-items: center;
          white-space: nowrap;
          animation: logosroll 30s linear infinite;
        }

        /* Exactly 5 logos visible at any time */
        .logo-item {
          flex: 0 0 calc(100% / 5); /* each item is 20% of the viewport width */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Logo sizing (Figma) */
        .logo-img {
          max-height: 144px;         /* per your note */
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.8;
        }

        /* Seamless loop: move by half the track since we duplicate the array */
        @keyframes logosroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
