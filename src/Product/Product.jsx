import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams, useParams, useNavigate } from "react-router-dom";
import "./Product.css";

/** Data */
const DATA = [
  {
    id: "indoor",
    label: "Indoor",
    title: "Indoor luminaires",
    text:
      "Architectural-grade fittings for offices, retail and hospitality—balanced efficiency, beam control and visual comfort.",
    items: [
      { name: "Spot Light",   image: "/images/spotlightor.jpg" },
      { name: "Down Light",   image: "/images/downlight.png" },
      { name: "Pendant",      image: "/images/pendantlight.jpg" },
      { name: "Wall Light",   image: "/images/walllight.jpg" },
      { name: "Panel Light",  image: "/images/panellight.jpg" },
      { name: "Track Light",  image: "/images/tracklight.jpg" },
      { name: "Lamp",         image: "/images/lamp.jpeg" },
      { name: "Hangtype",     image: "/images/hangtype.jpeg" },
    ],
  },
  {
    id: "strip-neon",
    label: "Strip & Neon",
    title: "LED Strip & Neon Flex",
    text:
      "Flexible lines of light: single color, tunable white, RGB/RGBW and neon flex profiles for indoor/outdoor use.",
    items: [
      { name: "LED Strip",  image: "/images/ledstrip.jpg" },
      { name: "RGB",        image: "/images/ledstrip1.jpg" },
      { name: "Neon Flex",  image: "/images/neonflex.jpg" },
    ],
  },
  {
    id: "outdoor",
    label: "Outdoor",
    title: "Outdoor luminaires",
    text:
      "Durable IP-rated fixtures for landscape and façade—inground, bollards, floods and more.",
    items: [
      { name: "Inground",       image: "/images/innerground.jpg" },
      { name: "Wall Light",     image: "/images/walllight22.jpg" },
      { name: "Bollard",        image: "/images/bollard.jpg" },
      { name: "Flood Light",    image: "/images/floodlight.jpg" },
      { name: "Straight Light", image: "/images/straight.jpg" },
      { name: "Wall Washer",    image: "/images/wallwasher.jpg" },
      { name: "Spike Light",    image: "/images/spikelight.jpg" },
    ],
  },
  {
    id: "facade",
    label: "Facade Light",
    title: "Façade lighting",
    text:
      "Accent, grazing and dynamic effects to highlight architecture with precision.",
    items: [
      { name: "Neon",         image: "/images/neon.jpg" },
      { name: "Wall Washer",  image: "/images/wallwasher.jpg" },
      { name: "Focus Light",  image: "/images/focus.jpg" },
    ],
  },
  {
    id: "aluminium",
    label: "Aluminium Profiles",
    title: "Aluminium LED Profiles",
    text:
      "Surface, recessed and pendant profiles for clean continuous lines of light.",
    items: [{ name: "Profiles (Mixed)", image: "/images/profile.jpg" }],
  },
  {
    id: "power",
    label: "Power Supply",
    title: "LED Drivers & Power",
    text:
      "Reliable constant-voltage/constant-current drivers across IP20/IP65, TRIAC & DALI dimmable options.",
    items: [
      { name: "Constant Voltage", image: "/images/constant.jpeg" },
      { name: "IP20",             image: "/images/ip20.jpeg" },
      { name: "IP65",             image: "/images/ip65.jpeg" },
      { name: "DALI Dimmable",    image: "/images/dali.jpg" },
      { name: "Phase Dimmable",   image: "/images/phase.jpg" },
    ],
  },
  {
    id: "programmable",
    label: "Programmable",
    title: "Control & Programmable",
    text:
      "DMX/DALI controllers, gateways and scenes for immersive experiences.",
    items: [{ name: "Controllers", image: "/images/controllers.jpeg" }],
  },
];

const WHATSAPP_NUMBER = "+971507200342";

/** Build WhatsApp link with pre-filled message */
function waLink(number, categoryId, categoryTitle, itemName) {
  const digits = number.replace(/\D/g, "");
  const text = `Hello VS Lighting,
I'm interested in: ${itemName}
Category: ${categoryTitle} (${categoryId})
Please share details and price.`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

export default function Product() {
  const [searchParams] = useSearchParams();
  const params = useParams(); // supports /products/:cat
  const navigate = useNavigate();

  // read cat from either /products/:cat or ?cat=
  const urlCat = (params.cat || searchParams.get("cat") || "").toLowerCase();
  const validCat = DATA.find((d) => d.id === urlCat)?.id ?? DATA[0].id;

  const [tab, setTab] = useState(validCat);
  const itemsRef = useRef([]);

  // keep URL in sync when tab changes
  useEffect(() => {
    const currentParamCat = (params.cat || "").toLowerCase();
    const currentQueryCat = (searchParams.get("cat") || "").toLowerCase();
    if (currentParamCat === tab || currentQueryCat === tab) return;

    if (params.cat) {
      navigate(`/products/${tab}`, { replace: true });
    } else {
      const sp = new URLSearchParams(searchParams);
      sp.set("cat", tab);
      navigate({ pathname: "/products", search: `?${sp.toString()}` }, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  // when URL changes externally (e.g., from footer click), update tab
  useEffect(() => {
    const nextCat = (params.cat || searchParams.get("cat") || "").toLowerCase();
    if (nextCat && DATA.some((d) => d.id === nextCat) && nextCat !== tab) {
      setTab(nextCat);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, searchParams]);

  const active = useMemo(() => DATA.find((t) => t.id === tab) || DATA[0], [tab]);

  // reveal on scroll + stagger
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    itemsRef.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [tab]);

  return (
    <section className="pt-section">
      <div className="pt-wrap">
        {/* Left vertical tabs */}
        <nav className="pt-nav" role="tablist" aria-orientation="vertical">
          {DATA.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={tab === cat.id}
              className={`pt-navItem ${tab === cat.id ? "is-active" : ""}`}
              onClick={() => setTab(cat.id)}
            >
              <span className="pt-label">{cat.label}</span>
              <span className="pt-arrow" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    d="M8 5l7 7-7 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          ))}
        </nav>

        {/* Right content */}
        <div className="pt-content" role="tabpanel">
          <h2 className="pt-title">{active.title}</h2>
          <p className="pt-text">{active.text}</p>

          <div className="pt-grid">
            {active.items.map((it, i) => (
              <article
                className="pt-card will-reveal"
                key={`${active.id}-${it.name}-${i}`}
                ref={(el) => (itemsRef.current[i] = el)}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <figure className="pt-img">
                  <img loading="lazy" src={it.image} alt={it.name} />
                </figure>

                <div className="pt-meta">
                  <h3 className="pt-name">{it.name}</h3>
                  <a
                    href={waLink(WHATSAPP_NUMBER, active.id, active.title, it.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="pt-btn"
                  >
                    Enquiry
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile accordion version */}
      <div className="pt-accordion">
        {DATA.map((cat) => {
          const open = tab === cat.id;
          return (
            <details
              key={cat.id}
              open={open}
              onToggle={(e) => e.currentTarget.open && setTab(cat.id)}
              className="pt-accItem"
            >
              <summary className="pt-accSummary">
                <span>{cat.label}</span>
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    d="M8 5l7 7-7 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>

              <div className="pt-accPanel">
                <h3>{cat.title}</h3>
                <p>{cat.text}</p>

                <div className="pt-grid">
                  {cat.items.map((it, i) => (
                    <article className="pt-card" key={`${cat.id}-${it.name}-${i}`}>
                      <figure className="pt-img">
                        <img loading="lazy" src={it.image} alt={it.name} />
                      </figure>
                      <div className="pt-meta">
                        <h4 className="pt-name">{it.name}</h4>
                        <a
                          href={waLink(WHATSAPP_NUMBER, cat.id, cat.title, it.name)}
                          target="_blank"
                          rel="noreferrer"
                          className="pt-btn"
                        >
                          Enquiry
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </details>
          );
        })}
      </div>

      {/* WhatsApp Floating Button (kept) */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
        className="pt-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </a>
    </section>
  );
}
