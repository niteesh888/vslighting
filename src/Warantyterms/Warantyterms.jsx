import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Warantyterms.css";

const LOGO_URL =
  "https://vslighting.uk/wp-content/uploads/2025/07/vs-lighting-logo.png";
const MENU_IMG_URL =
  "https://cdn-icons-png.flaticon.com/128/6015/6015685.png";
const HERO_BG =
  "https://images.pexels.com/photos/26859066/pexels-photo-26859066.jpeg";

// WhatsApp link
const WHATSAPP_URL = "https://wa.me/+9714 254 7899?text=Hello%20VS%20Lighting";

export default function WarrantyTerms() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="wt">
      {/* top bar */}
      <div className="wt-top">
        <div className="wt-brand">
          <img src={LOGO_URL} alt="VS Lighting" />
        </div>

        <button
          className="wt-menuBtn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="wt-menuText">MENU</span>
          <img src={MENU_IMG_URL} alt="menu" />
        </button>
      </div>

      {/* hero */}
      <section className="wt-hero" style={{ ["--bg"]: `url(${HERO_BG})` }}>
        <div className="wt-heroInner">
          <h1>Warranty Terms</h1>
          <p>Last updated: 21 Aug 2025</p>
        </div>
      </section>

      {/* content only (no left TOC) */}
      <section className="wt-wrap">
        <article className="wt-content">
          <p>
            VS Lighting (Nakash General Trading LLC) provides a limited warranty
            to the original purchaser covering manufacturing defects in
            materials and workmanship, subject to the terms below.
          </p>

          <h2 id="general">1. General Warranty</h2>
          <p>
            We warrant our products against defects in materials and workmanship
            under normal use. This warranty is valid only if the product is
            purchased directly from VS Lighting / Nakash General Trading LLC.
          </p>

          <h2 id="period">2. Warranty Period</h2>
          <p>
            The warranty period ranges from <strong>5 to 10 years</strong>
            (depending on the product), not exceeding 4000 burning hours per
            year.
          </p>

          <h2 id="conditions">3. Conditions for Warranty</h2>
          <ul>
            <li>The product must be properly installed, handled, and maintained.</li>
            <li>Proof of purchase (invoice) must be provided with the warranty claim.</li>
            <li>
              The product may be requested for inspection at our Dubai office:
              <br />
              Unit 2214, The Burlington Tower, Al Abraj Street, Business Bay,
              Dubai, UAE.
            </li>
          </ul>

          <h2 id="exclusions">4. Exclusions</h2>
          <ul>
            <li>Fuses, accessories, or third-party items not supplied by us.</li>
            <li>Damage due to misuse, improper installation, storage, or transport.</li>
            <li>Warranty expired or tampered serial numbers.</li>
            <li>
              Normal wear and tear, color changes, or flux variations due to
              technology updates.
            </li>
          </ul>

          <h2 id="claims">5. Warranty Claims Process</h2>
          <p>
            To make a claim, contact our support team with your purchase details.
            We may request product inspection before approval. The decision to
            repair or replace rests solely with VS Lighting.
          </p>

          <h2 id="replacement">6. Replacement & Repairs</h2>
          <p>
            In case of product discontinuation, we may replace it with an equal
            or better alternative. Reconditioned or refurbished products may be
            used for replacement.
          </p>

          <h2 id="limitations">7. Limitations of Liability</h2>
          <p>
            Our liability is limited to repair, replacement, or refund of the
            defective product. We are not responsible for incidental or
            consequential damages, including labor or reinstallation costs.
          </p>

          <h2 id="changes">8. Changes to Warranty Terms</h2>
          <p>
            VS Lighting reserves the right to amend warranty terms or product
            specifications without prior notice.
          </p>

          <h2 id="contact">9. Contact Us</h2>
          <p>
            Email: <a href="mailto:info@nakashi.ae">info@vslighting.uk</a> · Phone:{" "}
            <a href="tel:+97145579440">+35699622266</a>
          </p>
        </article>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="wt-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </a>

      {/* full-screen overlay menu */}
      <div className={`wtMenuOverlay ${menuOpen ? "show" : ""}`}>
        <div className="wtMenuInner">
          <button
            className="wtCloseBtn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            CLOSE ✕
          </button>

          {/* center logo */}
          <div className="wtMenuLogo">
            <img src={LOGO_URL} alt="VS Lighting" />
          </div>

          <nav className="wtMenuNav">
            <Link to="/" style={{ animationDelay: "0.2s" }} onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" style={{ animationDelay: "0.4s" }} onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/products" style={{ animationDelay: "0.6s" }} onClick={() => setMenuOpen(false)}>Products</Link>
            <Link to="/projects" style={{ animationDelay: "0.8s" }} onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="/contact" style={{ animationDelay: "1s" }} onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
