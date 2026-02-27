import React, { useEffect, useMemo, useState } from "react";
import "./Aboutheader.css";
import About from "../About/About";
import { Link } from "react-router-dom";

const LOGO_URL = "/images/logo.png";
const BG_IMG_URL = "/images/2222.jpg"; 

const INTRO_MS = 2200;     
const BG_REVEAL_MS = 3500;  
const TYPE_SPEED = 35;     

export default function AboutHeader({
  headline = "VS LIGHTINGS ",
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [phase, setPhase] = useState("intro"); 
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

  return (
    <>
      <header className={`hdr ${phase}`} style={{ ["--bg"]: `url(${BG_IMG_URL})` }}>
        
        {/* ===== WHITE TOP BAR ===== */}
        {!menuOpen && (
          <div className="topbar">
            <div className="topbar-inner">
              <div className="brand">
                <img src={LOGO_URL} alt="VS Lighting" />
              </div>
              <button
                className="menuBtn"
                onClick={() => setMenuOpen(true)}
              >
                <span className="menuText">MENU</span>
                <span className="burger" aria-hidden />
              </button>
            </div>
            <div className="topbar-divider" />
          </div>
        )}

        {phase === "intro" && (
          <div className="introOverlay">
            <img src={LOGO_URL} alt="Intro logo" className="introLogo" />
          </div>
        )}

        <div
          className={`bgLayer ${phase === "bg" ? "zooming" : ""} ${phase === "text" ? "hold" : ""}`}
        />

        <div className={`heroCenter ${phase === "text" ? "show" : ""}`}>
          <h1 className="heroTitle" aria-label={safeHeadline}>
            <span className="typed">{typed}</span>
            {!typingDone && <span className="caret" aria-hidden="true" />}
          </h1>
          <p className="heroSub"></p>
        </div>

        {/* ===== FULLSCREEN MENU OVERLAY ===== */}
        <div className={`menuOverlay ${menuOpen ? "show" : ""}`}>
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

      <About />
    </>
  );
}
