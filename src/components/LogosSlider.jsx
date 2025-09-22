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

/**
 * Pure JS + CSS (no TypeScript, no Tailwind required)
 * Responsive, seamless logos slider with strong defaults.
 */
export default function LogosSlider({
  height = 180,   // viewport height in px
  gap = 24,       // px between items
  speed = 30,     // seconds to traverse half-track
  grayscale = true,
}) {
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

  const styleVars = {
    "--logos-height": `${height}px`,
    "--logos-gap": `${gap}px`,
    "--logos-speed": `${Math.max(6, Number(speed))}s`,
    "--logos-per-view": 5,
  };

  return (
    <div className="logos-wrapper" style={styleVars}>
      <div className="logos-viewport" aria-label="Our partners" role="region">
        <div className="logos-track">
          {[...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="logo-item">
              <img
                src={logo.src}
                alt={logo.alt}
                className={grayscale ? "logo-img logo-gray" : "logo-img"}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .logos-viewport { 
          height: var(--logos-height);
          overflow: hidden; 
          padding: 20px 16px; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          max-width: 1200px; 
          margin: 0 auto;
        }

        .logos-track { 
          display: flex; 
          align-items: center; 
          gap: var(--logos-gap); 
          white-space: nowrap; 
          animation: logosroll var(--logos-speed) linear infinite;
          will-change: transform;
        }

        /* Pause on hover/focus */
        .logos-viewport:hover .logos-track, 
        .logos-viewport:focus-within .logos-track { 
          animation-play-state: paused; 
        }

        /* Responsive number of logos per view */
        :root { --logos-per-view: 2; }
        @media (min-width: 480px) { :root { --logos-per-view: 3; } }
        @media (min-width: 768px) { :root { --logos-per-view: 4; } }
        @media (min-width: 1024px){ :root { --logos-per-view: 5; } }
        @media (min-width: 1280px){ :root { --logos-per-view: 6; } }

        .logo-item { 
          flex: 0 0 calc(100% / var(--logos-per-view));
          display: flex; 
          align-items: center; 
          justify-content: center;
        }

        .logo-img { 
          display: block; 
          max-width: 100%; 
          max-height: 144px; 
          height: auto; 
          object-fit: contain; 
          opacity: 0.9;
          transition: transform 0.3s ease;
        }
        .logo-img:hover { transform: scale(1.04); }
        .logo-gray { filter: grayscale(100%); }

        /* Keyframes for seamless loop */
        @keyframes logosroll { 
          0% { transform: translateX(0); } 
          100% { transform: translateX(-50%); } 
        }

        /* Reduced motion accessibility */
        @media (prefers-reduced-motion: reduce) { 
          .logos-track { animation: none; transform: none; }
        }
      `}</style>
    </div>
  );
}
