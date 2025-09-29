import React, { useState, useRef } from "react";

// New logos added today
import AristarcoLogo  from "../assets/logos/Aristarco.png";
import ArtemisLogo    from "../assets/logos/artemis.png";
import BeaumontLogo   from "../assets/logos/beaumont.png";
import Images4Logo    from "../assets/logos/images4.png";
import PrismafoodLogo from "../assets/logos/Prismafood.png";
import RcrLogo        from "../assets/logos/rcr.png";
import RenzacciLogo   from "../assets/logos/renzacci.png";
import StoeckelLogo   from "../assets/logos/stoeckel.png";
import UnoxLogo       from "../assets/logos/unox.png";
import WinterhalterLogo from "../assets/logos/Winterhalter.png";

/**
 * Pure JS + CSS (no TypeScript, no Tailwind required)
 * Responsive, seamless logos slider with strong defaults.
 */
export default function LogosSlider({
  height = 120,   // viewport height in px
  gap = 40,       // px between items
  speed = 30,     // seconds for full cycle
  grayscale = true,
}) {
  const logos = [
    { src: AristarcoLogo,  alt: "Aristarco" },
    { src: ArtemisLogo,    alt: "Artemis" },
    { src: BeaumontLogo,   alt: "Beaumont" },
    { src: Images4Logo,    alt: "Images4" },
    { src: PrismafoodLogo, alt: "Prismafood" },
    { src: RcrLogo,        alt: "RCR" },
    { src: RenzacciLogo,   alt: "Renzacci" },
    { src: StoeckelLogo,   alt: "Stoeckel" },
    { src: UnoxLogo,       alt: "Unox" },
    { src: WinterhalterLogo, alt: "Winterhalter" },
  ];

  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  const styleVars = {
    "--logos-height": `${height}px`,
    "--logos-gap": `${gap}px`,
    "--logos-speed": `${speed}s`,
  };

  return (
    <div className="logos-wrapper max-w-7xl mx-auto bg-white py-8" style={styleVars}>
      <div className="logos-viewport" aria-label="Our partners" role="region">
        <div 
          ref={trackRef}
          className={`logos-track ${isPaused ? 'paused' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="logo-item">
              <img
                src={logo.src}
                alt={logo.alt}
                className={grayscale ? "logo-img logo-gray" : "logo-img"}
                loading="lazy"
                decoding="async"
                draggable={false}
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
          width: 100%; 
          margin: 0 auto;
        }

        .logos-track { 
          display: flex; 
          align-items: center; 
          gap: var(--logos-gap); 
          white-space: nowrap; 
          animation: logosroll var(--logos-speed) linear infinite;
          will-change: transform;
          user-select: none;
        }

        /* Pause animation when isPaused state is true */
        .logos-track.paused { 
          animation-play-state: paused; 
        }

        .logo-item { 
          flex: 0 0 auto;
          display: flex; 
          align-items: center; 
          justify-content: center;
          min-width: 150px;
          max-width: 200px;
        }

        .logo-img { 
          display: block; 
          max-width: 100%; 
          max-height: 80px; 
          height: auto; 
          object-fit: contain; 
          opacity: 0.8;
          transition: transform 0.3s ease;
        }
        .logo-img:hover { 
          transform: scale(1.05); 
        }
        .logo-gray { 
          filter: grayscale(100%); 
        }

        /* Keyframes for seamless loop */
        @keyframes logosroll { 
          0% { transform: translateX(0); } 
          100% { transform: translateX(calc(-100% / 3)); } 
        }

        /* Reduced motion accessibility */
        @media (prefers-reduced-motion: reduce) { 
          .logos-track { animation: none; transform: none; }
        }
      `}</style>
    </div>
  );
}
