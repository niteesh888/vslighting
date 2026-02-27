import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Refundpolicy.css";

const LOGO_URL =
  "https://vslighting.uk/wp-content/uploads/2025/07/vs-lighting-logo.png";
const MENU_IMG_URL =
  "https://cdn-icons-png.flaticon.com/128/6015/6015685.png";
const HERO_BG =
  "https://images.pexels.com/photos/26859066/pexels-photo-26859066.jpeg";

// WhatsApp number (edit to your WhatsApp-enabled number)
const WHATSAPP_NUMBER = "+97142547899";

export default function RefundPolicy() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="rp">
      {/* top bar */}
      <div className="rp-top">
        <div className="rp-brand">
          <img src={LOGO_URL} alt="VS Lighting" />
        </div>

        <button
          className="rp-menuBtn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="rp-menuText">MENU</span>
          <img src={MENU_IMG_URL} alt="menu" />
        </button>
      </div>

      {/* hero */}
      <section className="rp-hero" style={{ ["--bg"]: `url(${HERO_BG})` }}>
        <div className="rp-heroInner">
          <h1>Refund Policy</h1>
          <p>Last updated: 21 Aug 2025</p>
        </div>
      </section>

      {/* content only (no left TOC) */}
      <section className="rp-wrap">
        <article className="rp-content">
          <p>
            Our Refund Policy outlines the terms under which customers may be
            eligible for a refund. By making a purchase, you agree to this
            policy.
          </p>

          <h2 id="eligibility">1. Eligibility for Refunds</h2>
          <ul>
            <li>Refunds are available for defective or damaged products.</li>
            <li>
              To be eligible, items must be unused, in original packaging, and
              returned within <strong>7 days</strong> of delivery.
            </li>
            <li>
              Proof of purchase (invoice/receipt) is required to process a
              refund.
            </li>
          </ul>

          <h2 id="process">2. Refund Process</h2>
          <p>
            To request a refund, please contact our customer support team via
            email or phone with your order details. Our team will review the
            request and provide return instructions.
          </p>

          <h2 id="timelines">3. Processing Timelines</h2>
          <p>
            Once we receive and inspect your returned item, we will notify you
            of approval or rejection. If approved, refunds will be processed
            within <strong>7–10 business days</strong>.
          </p>

          <h2 id="non-refundable">4. Non-Refundable Items</h2>
          <ul>
            <li>Customized or made-to-order products.</li>
            <li>Items on clearance or marked as “Final Sale”.</li>
            <li>Gift cards or promotional vouchers.</li>
          </ul>

          <h2 id="exchanges">5. Exchanges</h2>
          <p>
            We only replace items if they are defective or damaged. For
            exchanges, please contact support for available options.
          </p>

          <h2 id="late-missing">6. Late or Missing Refunds</h2>
          <p>If you haven’t received a refund within the stated timeframe:</p>
          <ul>
            <li>Check your bank account again.</li>
            <li>Contact your credit card company and bank.</li>
            <li>If issues persist, contact us at info@nakashi.ae.</li>
          </ul>

          <h2 id="contact">7. Contact Us</h2>
          <p>
            For refund questions, email:{" "}
            <a href="mailto:info@nakashi.ae">info@vslighting.uk</a> · Phone:{" "}
            <a href="tel:+97145579440">+35699622266</a>
          </p>
        </article>
      </section>

      {/* full-screen overlay menu */}
      <div className={`rpMenuOverlay ${menuOpen ? "show" : ""}`}>
        <div className="rpMenuInner">
          <button
            className="rpCloseBtn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            CLOSE ✕
          </button>

          {/* center logo */}
          <div className="rpMenuLogo">
            <img src={LOGO_URL} alt="VS Lighting" />
          </div>

          <nav className="rpMenuNav">
            <Link to="/" style={{ animationDelay: "0.2s" }} onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" style={{ animationDelay: "0.4s" }} onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/products" style={{ animationDelay: "0.6s" }} onClick={() => setMenuOpen(false)}>Products</Link>
            <Link to="/projects" style={{ animationDelay: "0.8s" }} onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="/contact" style={{ animationDelay: "1s" }} onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      </div>

      {/* ✅ WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
        className="rp-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </a>
    </main>
  );
}
