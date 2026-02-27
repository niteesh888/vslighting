import React, { useEffect, useMemo, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const LOGO_URL = "/images/logo.png";
const BG_IMG_URL = "/images/hero.png";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showBg, setShowBg] = useState(false);
  const [showFlyHeadline, setShowFlyHeadline] = useState(false);
  const [showMain, setShowMain] = useState(false);

  // lock/unlock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // typewriter text
  const fullText = useMemo(() => "ILLUMINATE WITH ELEGANCE", []);
  const [typedText, setTypedText] = useState("");
  const [headlineSlide, setHeadlineSlide] = useState(false);

  // intro → bg → type headline
  useEffect(() => {
    const t1 = setTimeout(() => { setShowIntro(false); setShowBg(true); }, 1600);
    const t2 = setTimeout(() => { setShowFlyHeadline(true); }, 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    if (!showFlyHeadline) return;
    setTypedText("");
    setHeadlineSlide(false);
    const speed = 45;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTypedText(fullText.slice(0, i));
      if (i >= fullText.length) {
        clearInterval(id);
        setTimeout(() => {
          setHeadlineSlide(true);
          setTimeout(() => { setShowFlyHeadline(false); setShowMain(true); }, 1200);
        }, 200);
      }
    }, speed);
    return () => clearInterval(id);
  }, [showFlyHeadline, fullText]);

  return (
    <>
      {/* ======= WHITE TOP BAR (hidden when menu open) ======= */}
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
              aria-controls="site-menu"
            >
              <span className="menuText">MENU</span>
              <span className="burger" aria-hidden />
            </button>
          </div>
          <div className="topbar-divider" />
        </div>
      )}

      {/* ======= FULLSCREEN MENU OVERLAY (with staggered links) ======= */}
      <div id="site-menu" className={`menuOverlay ${menuOpen ? "show" : ""}`}>
        <button className="closeBtn" onClick={() => setMenuOpen(false)}>CLOSE ✕</button>

        <div className="overlayInner">
          <nav className="overlayNav">
            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                // index used for CSS delay -> calc(var(--i) * 90ms + 120ms)
                style={{ "--i": idx }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* ======= DARK HERO ======= */}
      <header className="hdr">
        <div
          className={`hdr-bg ${showBg ? "show" : ""}`}
          style={{ backgroundImage: `url(${BG_IMG_URL})` }}
          aria-hidden="true"
        />

        {showIntro && (
          <div className="introOverlay">
            <img src={LOGO_URL} alt="Intro logo" className="introLogo" />
          </div>
        )}

        {showFlyHeadline && (
          <div className={`flyWrap ${headlineSlide ? "slideLeft" : ""}`}>
            <h1 className="flyText">{typedText}</h1>
            <span className="caret" />
          </div>
        )}

        {showMain && (
          <>
            <div className="heroLeft fadeInBlock">
              <h1 className="heroTitle">
                <span className="nowrap">ILLUMINATE WITH</span>
                <br className="force-break" />
                <span className="nowrap">ELEGANCE</span>
              </h1>
            </div>

            <div className="heroCTAs">
              <Link className="pillBtn pillBig" to="/products?cat=pendant">PENDANT LIGHTS</Link>
              <Link className="pillBtn pillBig" to="/products?cat=facade">FACADE LIGHTS</Link>
              <Link className="pillBtn pillBig" to="/products?cat=neon">NEON LIGHTS</Link>
            </div>
          </>
        )}
      </header>
    </>
  );
}
