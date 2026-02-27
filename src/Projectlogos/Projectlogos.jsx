import React from "react";
import "./ProjectLogos.css";

/**
 * Put files in: public/images/logos/
 * Paths below are relative to the public root, so no imports needed.
 * Grouped into columns to keep the exact vertical arrangement you showed.
 */
const COLS = [
  // Col 1
  [
    { src: "/images/neon1.png", alt: "EO" },
    { src: "/images/logos/thumbay.png", alt: "Thumbay" },
    { src: "/images/logos/damac.png", alt: "Damac" },
    { src: "/images/logos/seha.png", alt: "SEHA" },
    { src: "/images/logos/debbas.png", alt: "Debbas" },
  ],
  // Col 2
  [
    { src: "/images/logos/radisson.png", alt: "Radisson Blu" },
    { src: "/images/logos/atom.png", alt: "Atom" },
    { src: "/images/logos/musanada.png", alt: "Musanada" },
    { src: "/images/logos/rak.png", alt: "RAK Ceramics" },
  ],
  // Col 3
  [
    { src: "/images/logos/meraas.png", alt: "Meraas" },
    { src: "/images/logos/dior.png", alt: "Dior" },
    { src: "/images/logos/belhasa.png", alt: "Belhasa Projects" },
    { src: "/images/logos/hlg.png", alt: "HLG" },
  ],
  // Col 4
  [
    { src: "/images/logos/bosch.png", alt: "Bosch" },
    { src: "/images/logos/emirates.png", alt: "Emirates" },
    { src: "/images/logos/jumeirah.png", alt: "Jumeirah" },
    { src: "/images/logos/stantec.png", alt: "Stantec" },
  ],
];

const ProjectLogos = () => {
  return (
    <section className="plogos" aria-label="Client logos">
      <div className="plogos__container">
        <div className="plogos__cols">
          {COLS.map((col, i) => (
            <div className="plogos__col" key={i}>
              {col.map((logo, j) => (
                <div className="plogos__cell" key={`${i}-${j}`}>
                  <img
                    className="plogos__img"
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectLogos;
