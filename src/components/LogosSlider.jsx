import React, { useState, useRef } from "react";

// New logos added today
import Logo1  from "../assets/logos/IMG-20250930-WA0001.jpg";
import Logo2  from "../assets/logos/IMG-20250930-WA0002.jpg";
import Logo3  from "../assets/logos/IMG-20250930-WA0003.jpg";
import Logo4  from "../assets/logos/IMG-20250930-WA0004.jpg";
import Logo5  from "../assets/logos/IMG-20250930-WA0005.jpg";
import Logo6  from "../assets/logos/IMG-20250930-WA0006.jpg";
import Logo7  from "../assets/logos/IMG-20250930-WA0007.jpg";
import Logo8  from "../assets/logos/IMG-20250930-WA0008.jpg";
import Logo9  from "../assets/logos/IMG-20250930-WA0009.jpg";
import Logo10 from "../assets/logos/IMG-20250930-WA0010.jpg";
import Logo11 from "../assets/logos/IMG-20250930-WA0011.jpg";
import Logo12 from "../assets/logos/IMG-20250930-WA0012.jpg";
import Logo13 from "../assets/logos/IMG-20250930-WA0013.jpg";
import Logo14 from "../assets/logos/IMG-20250930-WA0014.jpg";
import Logo15 from "../assets/logos/IMG-20250930-WA0015.jpg";
import Logo16 from "../assets/logos/IMG-20250930-WA0016.jpg";
import Logo17 from "../assets/logos/IMG-20250930-WA0017.jpg";
import Logo18 from "../assets/logos/IMG-20250930-WA0018.jpg";
import Logo19 from "../assets/logos/IMG-20250930-WA0019.jpg";
import Logo20 from "../assets/logos/IMG-20250930-WA0020.jpg";
import Logo21 from "../assets/logos/IMG-20250930-WA0021.jpg";
import Logo22 from "../assets/logos/IMG-20250930-WA0022.jpg";
import Logo23 from "../assets/logos/IMG-20250930-WA0023.jpg";
import Logo24 from "../assets/logos/IMG-20250930-WA0024.jpg";
import Logo25 from "../assets/logos/IMG-20250930-WA0025.jpg";
import Logo26 from "../assets/logos/IMG-20250930-WA0026.jpg";
import Logo27 from "../assets/logos/IMG-20250930-WA0027.jpg";
import Logo28 from "../assets/logos/IMG-20250930-WA0028.jpg";
import Logo29 from "../assets/logos/IMG-20250930-WA0029.jpg";
import Logo30 from "../assets/logos/IMG-20250930-WA0030.jpg";

export default function LogosSlider({
  height = 120,  
  gap = 40,      
  speed = 300,    
  grayscale = true,
}) {
  const logos = [
    { src: Logo1,  alt: "Partner 1" },
    { src: Logo2,  alt: "Partner 2" },
    { src: Logo3,  alt: "Partner 3" },
    { src: Logo4,  alt: "Partner 4" },
    { src: Logo5,  alt: "Partner 5" },
    { src: Logo6,  alt: "Partner 6" },
    { src: Logo7,  alt: "Partner 7" },
    { src: Logo8,  alt: "Partner 8" },
    { src: Logo9,  alt: "Partner 9" },
    { src: Logo10, alt: "Partner 10" },
    { src: Logo11, alt: "Partner 11" },
    { src: Logo12, alt: "Partner 12" },
    { src: Logo13, alt: "Partner 13" },
    { src: Logo14, alt: "Partner 14" },
    { src: Logo15, alt: "Partner 15" },
    { src: Logo16, alt: "Partner 16" },
    { src: Logo17, alt: "Partner 17" },
    { src: Logo18, alt: "Partner 18" },
    { src: Logo19, alt: "Partner 19" },
    { src: Logo20, alt: "Partner 20" },
    { src: Logo21, alt: "Partner 21" },
    { src: Logo22, alt: "Partner 22" },
    { src: Logo23, alt: "Partner 23" },
    { src: Logo24, alt: "Partner 24" },
    { src: Logo25, alt: "Partner 25" },
    { src: Logo26, alt: "Partner 26" },
    { src: Logo27, alt: "Partner 27" },
    { src: Logo28, alt: "Partner 28" },
    { src: Logo29, alt: "Partner 29" },
    { src: Logo30, alt: "Partner 30" },
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
          {[...logos, ...logos].map((logo, idx) => (
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
          filter: grayscale(100%));
        }
        .logo-img:hover { 
          transform: scale(1.05); 
          opacity: 1;
          filter: grayscale(100%) brightness(1);
        }
        .logo-gray { 
          filter: grayscale(100%) ; 
        }

        /* Keyframes for seamless loop */
        @keyframes logosroll { 
          0% { transform: translateX(0); } 
          100% { transform: translateX(calc(-100% / 2)); } 
        }

        /* Reduced motion accessibility */
        @media (prefers-reduced-motion: reduce) { 
          .logos-track { animation: none; transform: none; }
        }
      `}</style>
    </div>
  );
}
