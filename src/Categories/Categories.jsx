import React, { useEffect } from "react";
import "./Categories.css";
import { useLocation, useNavigate } from "react-router-dom";

const categories = [
  {
    id: "pendant",
    title: "Pendant Lights",
    images: [
      "/images/pendant.jpg",
      "/images/pendant1.jpg",
      "/images/pendant2.jpg",
      "/images/pendant3.jpg",
    ],
  },
  {
    id: "facade",
    title: "Facade Lights",
    images: [
      "/images/facade.jpg",
      "/images/facade1.jpg",
      "/images/facade2.jpg",
      "/images/facade3.jpg",
    ],
  },
  {
    id: "neon",
    title: "Neon Lights",
    images: [
      "/images/neon.jpg",
      "/images/neon1.png",
      "/images/neon2.png",
      "/images/neon3.png",
    ],
  },
  {
    id: "wall",
    title: "Wall Lights",
    images: [
      "/images/wall.png",
      "/images/wall1.png",
      "/images/wall2.png",
      "/images/wall3.jpeg",
    ],
  },
];

function CategoryCard({ id, title, images }) {
  return (
    <div id={id} className="cat-card" aria-label={title}>
      <div className="cat-imgs">
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={title}
            loading="lazy"
            className="cat-img slide"
            style={{ "--i": idx }}
          />
        ))}
      </div>
      <span className="cat-overlay" />
      <h3 className="cat-title">{title}</h3>
    </div>
  );
}

export default function Categories() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search || "");
    const fromState = location.state && location.state.cat;
    const fromQuery = params.get("cat");
    const fromHash = location.hash ? location.hash.replace("#", "") : null;
    const target = fromState || fromQuery || fromHash;

    if (target) {
      requestAnimationFrame(() => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [location]);

  return (
    <section className="cat-wrap">
      <h2 className="cat-heading">Featured Categories</h2>

      <div className="cat-grid">
        {categories.map((c) => (
          <CategoryCard
            key={c.id}
            id={c.id}
            title={c.title}
            images={c.images}
          />
        ))}
      </div>

      <button
        className="view-all"
        type="button"
        onClick={() => navigate("/products")}
      >
        View all Categories
        <svg className="chev" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M7 10l5 5 5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
