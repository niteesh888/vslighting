import React, { useState } from "react";
import "./whychooseus.css";

const FEATURES = [
  {
    id: "designs",
    label: "Authentic Contemporary Designs",
    title: "Authentic Contemporary Designs",
    description:
      "Experience lighting collections crafted by celebrated designers; every piece makes a statement and elevates your interiors.",
    image: "/images/choose3.jpg",
  },
  {
    id: "materials",
    label: "Premium Quality Materials",
    title: "Premium Quality Materials",
    description:
      "Our lights use only the finest, durable materials—combining aesthetics with long-lasting performance.",
    image: "/images/choose2.jpg",
  },
  {
    id: "efficiency",
    label: "Energy-Efficient Technology",
    title: "Energy-Efficient Technology",
    description:
      "Illuminate smarter with advanced, eco-friendly LED solutions that reduce energy costs and support sustainability.",
    image: "/images/choose1.jpg",
  },
  {
    id: "advice",
    label: "Expert Lighting Advice",
    title: "Expert Lighting Advice",
    description:
      "Get guidance from experienced professionals to help you find the ideal lighting setup for your unique space.",
    image: "/images/choose4.jpg",
  },
];

export default function WhyChooseUs() {
  const [active, setActive] = useState(FEATURES[0].id);
  const current = FEATURES.find((f) => f.id === active);

  return (
    <section className="wcu-wrap" aria-labelledby="wcu-heading">
      <div className="wcu-inner">
        <h2 id="wcu-heading" className="wcu-heading">
          Why Choose Us
        </h2>

        <div className="wcu-layout" role="tablist" aria-orientation="vertical">
          {/* LEFT: menu */}
          <nav className="wcu-menu" aria-label="Why Choose Us categories">
            {FEATURES.map((f) => {
              const isActive = f.id === active;
              return (
                <button
                  key={f.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${f.id}`}
                  id={`tab-${f.id}`}
                  className={`wcu-item ${isActive ? "active" : ""}`}
                  onClick={() => setActive(f.id)}
                >
                  <span className="wcu-item-label">{f.label}</span>
                  <svg
                    className="wcu-item-chevron"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M9 6l6 6-6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              );
            })}
          </nav>

          {/* RIGHT: content */}
          <div
            className="wcu-panel"
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
          >
            <div className="wcu-media">
              <img
                src={current.image}
                alt=""
                loading="lazy"
                className="wcu-img"
              />
            </div>

            <div className="wcu-copy">
              <h3 className="wcu-title">{current.title}</h3>
              <p className="wcu-desc">{current.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
