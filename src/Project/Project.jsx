import React, { useEffect, useRef } from "react";
import "./Project.css";

const WHATSAPP_NUMBER = "+971507200342";

// 12 project images (gallery only)
// 12 project images from public/images folder
const projects = [
  { id: 1, image: "/images/product11.jpg" },
  { id: 2, image: "/images/hero22.jpg" },
  { id: 3, image: "/images/heroheader.jpg" },
  { id: 4, image: "/images/project444.jpg" },
  { id: 5, image: "/images/project55.jpg" },
  { id: 6, image: "/images/product666.jpg" },
  { id: 7, image: "/images/project77.jpg" },
  { id: 8, image: "/images/project88.jpg" },
  { id: 9, image: "/images/product999.jpg" },
  { id: 10, image: "/images/project10.jpg" },
  { id: 11, image: "/images/project11.jpg" },
  { id: 12, image: "/images/project12.jpg" },
];

export default function Project() {
  const itemsRef = useRef([]);

  useEffect(() => {
    // reveal on scroll into view
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal"); // triggers CSS animation
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    itemsRef.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="prj-page">
      <div className="prj-container">
        <div className="prj-grid">
          {projects.map((p, idx) => (
            <figure
              className="prj-imgWrap will-reveal"          // start hidden
              key={p.id}
              ref={(el) => (itemsRef.current[idx] = el)}
              style={{ animationDelay: `${idx * 0.06}s` }} // stagger on first paint
            >
              <img src={p.image} alt={`Project ${p.id}`} />
            </figure>
          ))}
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        className="prj-wsp"
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M19.1 17.4c-.2-.1-1.2-.6-1.3-.6-.2 0-.3-.1-.5.1s-.5.6-.6.8-.2.2-.4.1a7.5 7.5 0 0 1-3.6-3.1c-.3-.5.3-.5.8-1.6 0-.1 0-.2 0-.3s0-.2-.1-.3l-.6-1.5c-.2-.4-.4-.3-.5-.3h-.4a.9.9 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.1 5 5 0 0 0 1.1 2.6 11 11 0 0 0 4.1 3.8 9.2 9.2 0 0 0 1.7.7 4 4 0 0 0 1.8.1 3 3 0 0 0 2-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.2-.1-.3-.2zM16 3.1A12.9 12.9 0 0 0 3.1 16a12.7 12.7 0 0 0 1.5 6L3 29l7.2-1.9A12.9 12.9 0 1 0 16 3.1zm0 23.3a10.4 10.4 0 0 1-5-1.4l-.4-.2-3.3.9.9-3.2-.2-.4a10.4 10.4 0 1 1 8 4.3z"/>
        </svg>
      </a>
    </div>
  );
}
