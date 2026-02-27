import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";
import "./Contactheader.css";

const LOGO_URL = "/images/logo.png";
const MENU_IMG_URL = "/images/menu11.png"; // public/images/menu.png

export default function Contactheader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(true); // hide on scroll down, show on scroll up

  const lastY = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 20);

        if (y > lastY.current && y > 80) {
          // going down
          setShow(false);
        } else {
          // going up
          setShow(true);
        }
        lastY.current = y;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={[
          "contact-hdr",
          scrolled ? "is-scrolled" : "",
          show ? "is-visible" : "is-hidden",
        ].join(" ")}
      >
        {/* centered logo */}
        <a href="/" className="contact-logo" aria-label="VS Lighting - Home">
          <img src={LOGO_URL} alt="VS Lighting logo" />
        </a>

        {/* same MENU button style as your main Header */}
        <button
          className="hdr-menuBtn contact-menuBtn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          type="button"
        >
          <span className="hdr-menuText">MENU</span>
          <img src={MENU_IMG_URL} alt="menu" />
        </button>
      </header>

      {/* SAME overlay markup/classes you already use */}
      <div className={`menuOverlay ${menuOpen ? "show" : ""}`}>
        <div className="menuInner">
          <button
            className="closeBtn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            type="button"
          >
            CLOSE ✕
          </button>

          <nav className="menuNav">
            <Link to="/" style={{ animationDelay: "0.2s" }} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" style={{ animationDelay: "0.4s" }} onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link to="/products" style={{ animationDelay: "0.6s" }} onClick={() => setMenuOpen(false)}>
              Products
            </Link>
            <Link to="/projects" style={{ animationDelay: "0.8s" }} onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
            <Link to="/contact" style={{ animationDelay: "1s" }} onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
      <Contact />
    </>
    
  );
}
