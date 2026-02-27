import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Termscond.css";

const LOGO_URL =
  "https://vslighting.uk/wp-content/uploads/2025/07/vs-lighting-logo.png";
const MENU_IMG_URL =
  "https://cdn-icons-png.flaticon.com/128/6015/6015685.png";
const HERO_BG =
  "https://images.pexels.com/photos/26859066/pexels-photo-26859066.jpeg";

// WhatsApp number (edit to yours if needed)
const WHATSAPP_NUMBER = "+97142547899";

export default function TermsAndConditions() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="tc">
      {/* top bar */}
      <div className="tc-top">
        <div className="tc-brand">
          <img src={LOGO_URL} alt="VS Lighting" />
        </div>

        <button
          className="tc-menuBtn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="tc-menuText">MENU</span>
          <img src={MENU_IMG_URL} alt="menu" />
        </button>
      </div>

      {/* hero */}
      <section className="tc-hero" style={{ ["--bg"]: `url(${HERO_BG})` }}>
        <div className="tc-heroInner">
          <h1>Terms & Conditions</h1>
          <p>Last updated: 21 Aug 2025</p>
        </div>
      </section>

      {/* content only (no left TOC) */}
      <section className="tc-wrap">
        <article className="tc-content">
          <p>
            These Terms & Conditions (“Terms”) govern your access to and use of
            our website, products, and services. By using our site, you agree to
            these Terms.
          </p>

          <h2 id="acceptance">1. Acceptance of Terms</h2>
          <p>
            By accessing our website or placing an order, you accept these Terms.
            If you do not agree, please do not use the site.
          </p>

          <h2 id="accounts">2. Accounts & Accuracy</h2>
          <ul>
            <li>You are responsible for maintaining the confidentiality of your account.</li>
            <li>Provide accurate, current, and complete information at all times.</li>
          </ul>

          <h2 id="orders">3. Orders & Pricing</h2>
          <ul>
            <li>All orders are subject to acceptance and availability.</li>
            <li>
              We reserve the right to cancel or refuse any order (e.g., suspected fraud,
              pricing/stock errors).
            </li>
            <li>Prices may change without notice before you place an order.</li>
          </ul>

          <h2 id="products">4. Product Info</h2>
          <p>
            We strive for accuracy, but colors/specifications may vary due to display
            settings or minor production variations.
          </p>

          <h2 id="payments">5. Payments</h2>
          <p>
            We accept the payment methods shown at checkout. By submitting payment,
            you represent you are authorized to use the selected method.
          </p>

          <h2 id="shipping">6. Shipping & Delivery</h2>
          <p>
            Shipping timelines are estimates and may be affected by carrier delays,
            customs, or events beyond our control. See our{" "}
            <Link to="/shipping">Shipping Policy</Link> for details.
          </p>

          <h2 id="returns">7. Returns & Refunds</h2>
          <p>
            Eligible returns and refunds are handled per our{" "}
            <Link to="/refund">Refund Policy</Link>.
          </p>

          <h2 id="warranty">8. Warranty</h2>
          <p>
            Warranty coverage (if applicable) is limited to repair, replacement, or
            refund as specified with the product or in our warranty terms.
          </p>

          <h2 id="liability">9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we are not liable for indirect,
            incidental, special, or consequential damages. Our total liability for any
            claim shall not exceed the amount you paid for the relevant product/service.
          </p>

          <h2 id="ip">10. Intellectual Property</h2>
          <p>
            All content on this site (logos, images, text, designs) is owned by or
            licensed to us and protected by applicable IP laws. You may not copy,
            reproduce, or exploit any content without written permission.
          </p>

          <h2 id="prohibited">11. Prohibited Uses</h2>
          <ul>
            <li>Illegal activities or violation of applicable laws/regulations.</li>
            <li>Infringing third-party rights or attempting to breach site security.</li>
            <li>Uploading harmful code, scraping, or abusive conduct.</li>
          </ul>

          <h2 id="thirdparty">12. Third-Party Links</h2>
          <p>
            We may link to third-party sites for your convenience. We do not control or
            endorse their content and are not responsible for their policies or practices.
          </p>

          <h2 id="privacy">13. Privacy</h2>
          <p>
            Your use of the site is also governed by our{" "}
            <Link to="/privacy">Privacy Policy</Link>.
          </p>

          <h2 id="termination">14. Termination</h2>
          <p>
            We may suspend or terminate access for violations of these Terms or other
            legitimate reasons, with or without notice.
          </p>

          <h2 id="law">15. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the United Arab Emirates. Courts in
            Dubai, UAE shall have exclusive jurisdiction, unless otherwise required by law.
          </p>

          <h2 id="changes">16. Changes to Terms</h2>
          <p>
            We may update these Terms at any time. Continued use after updates constitutes
            acceptance of the revised Terms.
          </p>

          <h2 id="contact">17. Contact Us</h2>
          <p>
            Questions about these Terms? Email <a href="mailto:info@nakashi.ae">info@vslighting.uk</a> or call
            <a href="tel:+97145579440"> +35699622266</a>.
          </p>
        </article>
      </section>

      {/* full-screen overlay menu */}
      <div className={`tcMenuOverlay ${menuOpen ? "show" : ""}`}>
        <div className="tcMenuInner">
          <button
            className="tcCloseBtn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            CLOSE ✕
          </button>

        {/* center logo */}
          <div className="tcMenuLogo">
            <img src={LOGO_URL} alt="VS Lighting" />
          </div>

          <nav className="tcMenuNav">
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
        className="tc-whatsapp"
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
