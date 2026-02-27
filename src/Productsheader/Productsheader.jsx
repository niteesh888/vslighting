import React, { useEffect, useMemo, useState } from "react";
import "./Productsheader.css";
import Product from "../Product/Product";
import { Link } from "react-router-dom";

// Configurable assets
const LOGO_URL = "/images/logo.png";
const BG_IMG_URL = "/images/aboutbg.png";

// Timings (ms)
const INTRO_MS = 2200;      // solid bg + logo
const BG_REVEAL_MS = 3500;  // zoom-out duration
const TYPE_SPEED = 35;      // ms per character

export default function Header({ headline = "OUR PRODUCTS" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // phases: "intro" -> "bg" -> "text"
  const [phase, setPhase] = useState("intro");

  // typewriter
  const [typed, setTyped] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const safeHeadline = useMemo(() => headline.trim(), [headline]);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("bg"), INTRO_MS);
    const t2 = setTimeout(() => setPhase("text"), INTRO_MS + BG_REVEAL_MS);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    if (phase !== "text") return;
    let i = 0;
    setTyped("");
    setTypingDone(false);
    const id = setInterval(() => {
      i++;
      setTyped(safeHeadline.slice(0, i));
      if (i >= safeHeadline.length) {
        clearInterval(id);
        setTimeout(() => setTypingDone(true), 120);
      }
    }, TYPE_SPEED);
    return () => clearInterval(id);
  }, [phase, safeHeadline]);

  // lock body scroll when menu open (nice UX)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`hdr ${phase}`} style={{ ["--bg"]: `url(${BG_IMG_URL})` }}>
        {/* ===== WHITE TOP BAR (hidden when overlay open) ===== */}
        {!menuOpen && (
          <div className="topbar">
            <div className="topbar-inner">
              <div className="brand">
                <img src={LOGO_URL} alt="VS Lighting" />
              </div>
              <button
                className="menuBtn"
                onClick={() => setMenuOpen(true)}
                aria-expanded={menuOpen}
                aria-controls="prod-menu"
              >
                <span className="menuText">MENU</span>
                <span className="burger" aria-hidden />
              </button>
            </div>
            <div className="topbar-divider" />
          </div>
        )}

        {/* Intro: solid bg + centered logo */}
        {phase === "intro" && (
          <div className="introOverlay">
            <img src={LOGO_URL} alt="Intro logo" className="introLogo" />
          </div>
        )}

        {/* Background image layer (fades in + zooms out) */}
        <div
          className={`bgLayer ${phase === "bg" ? "zooming" : ""} ${phase === "text" ? "hold" : ""}`}
        />

        {/* Final hero content */}
        <div className={`heroCenter ${phase === "text" ? "show" : ""}`}>
          <h1 className="heroTitle" aria-label={safeHeadline}>
            <span className="typed">{typed}</span>
            {!typingDone && <span className="caret" aria-hidden="true" />}
          </h1>
          <p className="heroSub"></p>
        </div>

        {/* ===== FULLSCREEN MENU OVERLAY (staggered links) ===== */}
        <div id="prod-menu" className={`menuOverlay ${menuOpen ? "show" : ""}`}>
          <button className="closeBtn" onClick={() => setMenuOpen(false)}>CLOSE ✕</button>
          <nav className="overlayNav">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      </header>

      <Product />
    </>
  );
}
