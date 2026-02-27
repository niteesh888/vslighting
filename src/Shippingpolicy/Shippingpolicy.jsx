import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Shippingpolicy.css";

const LOGO_URL =
  "https://vslighting.uk/wp-content/uploads/2025/07/vs-lighting-logo.png";
const MENU_IMG_URL =
  "https://cdn-icons-png.flaticon.com/128/6015/6015685.png";
const HERO_BG =
  "https://images.pexels.com/photos/26859066/pexels-photo-26859066.jpeg";

// WhatsApp number
const WHATSAPP_NUMBER = "+97142547899";

export default function ShippingPolicy() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main className="sp">
      {/* top bar */}
      <div className="sp-top">
        <div className="sp-brand">
          <img src={LOGO_URL} alt="VS Lighting" />
        </div>

        <button
          className="sp-menuBtn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="sp-menuText">MENU</span>
          <img src={MENU_IMG_URL} alt="menu" />
        </button>
      </div>

      {/* hero */}
      <section className="sp-hero" style={{ ["--bg"]: `url(${HERO_BG})` }}>
        <div className="sp-heroInner">
          <h1>Shipping Policy</h1>
          <p>Last updated: 21 Aug 2025</p>
        </div>
      </section>

      {/* content only (no left toc) */}
      <section className="sp-wrap">
        <article className="sp-content">
          <p>
            This Shipping Policy describes how and when orders are processed and delivered,
            applicable fees, and what to do if an issue occurs during transit.
          </p>

          <h2 id="areas">1. Shipping Areas</h2>
          <p>
            We currently ship across the UAE. International shipping may be available on
            select products—please contact us for availability and quotes.
          </p>

          <h2 id="processing">2. Order Processing</h2>
          <ul>
            <li>Standard processing time: <strong>1–3 business days</strong> after payment confirmation.</li>
            <li>Customized or made-to-order items may require additional lead time.</li>
            <li>Orders placed on weekends/holidays are processed on the next business day.</li>
          </ul>

          <h2 id="delivery">3. Delivery Timeframes</h2>
          <ul>
            <li><strong>Within UAE:</strong> Typically <strong>1–4 business days</strong> after dispatch.</li>
            <li><strong>International:</strong> Typically <strong>5–12 business days</strong>, depending on destination and carrier.</li>
            <li>Remote/out-of-service areas may require additional days.</li>
          </ul>

          <h2 id="fees">4. Shipping Fees</h2>
          <ul>
            <li>Shipping charges are calculated at checkout based on weight/volume and destination.</li>
            <li>Large/oversized or fragile items may incur handling or special packaging fees.</li>
            <li>Promotional free shipping, if offered, will be clearly stated on eligible products.</li>
          </ul>

          <h2 id="tracking">5. Order Tracking</h2>
          <p>
            When your order ships, you’ll receive an email/SMS with your tracking number
            and carrier details. Tracking updates may take up to 24 hours to appear after dispatch.
          </p>

          <h2 id="address">6. Address Changes</h2>
          <p>
            Need to change the delivery address? Contact us <strong>before dispatch</strong>.
            Once an order has shipped, rerouting is subject to the carrier’s policy and may incur fees.
          </p>

          <h2 id="attempts">7. Delivery Attempts</h2>
          <p>
            Carriers typically make <strong>1–2 delivery attempts</strong>. If unsuccessful, the parcel
            may be held at a pickup point or returned. Re-delivery/return charges may apply.
          </p>

          <h2 id="damaged-lost">8. Damaged or Lost Parcels</h2>
          <ul>
            <li>Inspect your parcel upon delivery. If damaged, note it with the driver and take photos.</li>
            <li>Report damage or loss to us within <strong>48 hours</strong> of delivery/expected delivery date.</li>
            <li>We’ll work with the carrier to file a claim and arrange a replacement or refund where applicable.</li>
          </ul>

          <h2 id="international">9. International & Duties</h2>
          <p>
            International orders may be subject to import duties, taxes, and customs fees
            levied by the destination country. These charges are the customer’s responsibility
            and are not included in our prices or shipping rates.
          </p>

          <h2 id="restrictions">10. Restrictions</h2>
          <ul>
            <li>We do not ship to P.O. boxes or military addresses unless the carrier supports it.</li>
            <li>Some products (e.g., oversized fixtures) may be restricted in certain regions.</li>
            <li>Compliance with local regulations (voltage, plugs, certifications) is the customer’s responsibility for international orders.</li>
          </ul>

          <h2 id="delays">11. Delays & Force Majeure</h2>
          <p>
            Delivery estimates are not guarantees. Weather, customs inspection, carrier delays,
            peak seasons, or events beyond our control may extend timelines. We appreciate your patience.
          </p>

          <h2 id="contact">12. Contact Us</h2>
          <p>
            Questions about shipping? Email <a href="mailto:info@nakashi.ae">info@vslighting.uk</a> or call
            <a href="tel:+97145579440">+35699622266</a>.
          </p>
        </article>
      </section>

      {/* full-screen overlay menu */}
      <div className={`spMenuOverlay ${menuOpen ? "show" : ""}`}>
        <div className="spMenuInner">
          <button
            className="spCloseBtn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            CLOSE ✕
          </button>

          {/* center logo */}
          <div className="spMenuLogo">
            <img src={LOGO_URL} alt="VS Lighting" />
          </div>

          <nav className="spMenuNav">
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
        className="sp-whatsapp"
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
