import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Privacypolicy.css";

const LOGO_URL =
  "https://vslighting.uk/wp-content/uploads/2025/07/vs-lighting-logo.png";
const MENU_IMG_URL =
  "https://cdn-icons-png.flaticon.com/128/6015/6015685.png";
const HERO_BG =
  "https://images.pexels.com/photos/26859066/pexels-photo-26859066.jpeg";

// WhatsApp number (replace with yours)
const WHATSAPP_NUMBER = "+9714 254 7899";

export default function PrivacyPolicy() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="pp">
      {/* top bar */}
      <div className="pp-top">
        <div className="pp-brand">
          <img src={LOGO_URL} alt="VS Lighting" />
        </div>

        <button
          className="pp-menuBtn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="pp-menuText">MENU</span>
          <img src={MENU_IMG_URL} alt="menu" />
        </button>
      </div>

      {/* hero */}
      <section className="pp-hero" style={{ ["--bg"]: `url(${HERO_BG})` }}>
        <div className="pp-heroInner">
          <h1>Privacy Policy</h1>
          <p>Last updated: 21 Aug 2025</p>
        </div>
      </section>

      {/* ✅ content only (no left TOC) */}
      <section className="pp-wrap">
        <article className="pp-content">
          <p>
            This Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website and use our services.
          </p>

          <h2 id="info-we-collect">1. Information We Collect</h2>
          <ul>
            <li><strong>Personal data</strong> (name, email, phone) from forms or contact.</li>
            <li><strong>Usage data</strong> (pages visited, device, browser, approx. location).</li>
            <li><strong>Order/Project data</strong> you share for quotations or purchases.</li>
          </ul>

          <h2 id="how-we-use">2. How We Use Information</h2>
          <ul>
            <li>Provide and improve products/services, and respond to enquiries.</li>
            <li>Send transactional and (with consent) marketing communications.</li>
            <li>Analytics, security, fraud prevention, and legal compliance.</li>
          </ul>

          <h2 id="cookies">3. Cookies & Tracking</h2>
          <p>
            We use cookies and similar technologies for functionality and analytics.
            You can control cookies via your browser settings.
          </p>

          <h2 id="sharing">4. Sharing of Information</h2>
          <p>
            We may share information with service providers (hosting, payments, delivery),
            professional advisors, or as required by law. We do not sell personal data.
          </p>

          <h2 id="security">5. Data Security</h2>
          <p>
            We implement reasonable measures to protect your data, but no method is 100% secure.
          </p>

          <h2 id="your-rights">6. Your Rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct, delete,
            or restrict processing. Contact us to exercise these rights.
          </p>

          <h2 id="retention">7. Data Retention</h2>
          <p>We retain data only as long as necessary or legally required.</p>

          <h2 id="children">8. Children’s Privacy</h2>
          <p>Our services are not directed to children under 13; we don’t knowingly collect their data.</p>

          <h2 id="international">9. International Transfers</h2>
          <p>When transferring data internationally, we apply appropriate safeguards.</p>

          <h2 id="changes">10. Changes to This Policy</h2>
          <p>We may update this policy; the “Last updated” date reflects the latest version.</p>

          <h2 id="contact">11. Contact Us</h2>
          <p>
            Email: <a href="mailto:info@nakashi.ae">info@vslighting.uk</a> · Phone:
            <a href="tel:+97145579440"> +35699622266</a>
          </p>
        </article>
      </section>

      {/* full-screen overlay menu */}
      <div className={`ppMenuOverlay ${menuOpen ? "show" : ""}`}>
        <div className="ppMenuInner">
          <button
            className="ppCloseBtn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            CLOSE ✕
          </button>

          <div className="ppMenuLogo">
            <img src={LOGO_URL} alt="VS Lighting" />
          </div>

          <nav className="ppMenuNav">
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
        className="pp-whatsapp"
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
