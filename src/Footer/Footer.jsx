import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const products = [
    { label: "INDOOR", cat: "indoor" },
    { label: "STRIP & NEON", cat: "strip-neon" },
    { label: "OUTDOOR", cat: "outdoor" },
    { label: "FACADE LIGHT", cat: "facade" },
    { label: "ALLUMINIUM PROFILES", cat: "aluminium" },
    { label: "POWER SUPPLY", cat: "power" },
    { label: "PROGRAMMABLE", cat: "programmable" },
  ];

  const policies = [
    { label: "PRIVACY POLICY", href: "/privacy" },
    { label: "REFUND POLICY", href: "/refund" },
    { label: "SHIPPING POLICY", href: "/shipping" },
    { label: "TERMS & CONDITIONS", href: "/terms" },
    { label: "WARANTY TERMS", href: "/waranty" },
  ];

  const IconPhone = (props) => (
    <svg viewBox="0 0 24 24" width="18" height="18" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 4.2 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.98.36 1.93.69 2.84a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.24-1.24a2 2 0 0 1 2.11-.45c.91.33 1.86.56 2.84.69A2 2 0 0 1 22 16.92Z" fill="currentColor"/>
    </svg>
  );
  const IconMail = (props) => (
    <svg viewBox="0 0 24 24" width="18" height="18" {...props}>
      <path d="M4 4h16a2 2 0 0 1 2 2v.4l-10 6.25L2 6.4V6a2 2 0 0 1 2-2Zm16 16H4a2 2 0 0 1-2-2V8.1l9.37 5.86a2 2 0 0 0 2.26 0L22 8.1V18a2 2 0 0 1-2 2Z" fill="currentColor"/>
    </svg>
  );
  const IconWhatsApp = (props) => (
    <svg viewBox="0 0 32 32" width="18" height="18" {...props}>
      <path d="M19.1 17.2c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.1.2-.3.2-.5.1-1.5-.6-2.7-1.6-3.5-3-.1-.2 0-.3.1-.5.1-.1.2-.3.3-.4.1-.1.1-.2.2-.4.1-.2 0-.3 0-.4 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.6.6-.9 1.4-.9 2.2 0 .3.1.6.2.9.3.8.8 1.5 1.3 2.1.2.2.4.5.8.8.9.8 1.9 1.4 3 1.8.3.1.6.2.9.3.4.1.8.1 1.2.1.5 0 1 0 1.5-.2.7-.2 1.3-.6 1.9-1.1.3-.3.5-.7.6-1.1.1-.4 0-.8-.4-1ZM16 3C9.4 3 4 8.4 4 14.9c0 2.1.6 4.1 1.6 5.9L4 29l8.4-1.6c1.7 1 3.6 1.6 5.6 1.6 6.6 0 12-5.4 12-12.1S22.6 3 16 3Zm0 22.3c-1.9 0-3.6-.5-5.1-1.5l-.4-.2-5 .9.9-4.9-.3-.5c-1-1.6-1.5-3.4-1.5-5.2C4.6 9.1 9.7 4 16 4s11.4 5.1 11.4 11.4S22.3 25.3 16 25.3Z" fill="currentColor"/>
    </svg>
  );
  const IconMapPin = (props) => (
    <svg viewBox="0 0 24 24" width="18" height="18" {...props}>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" fill="currentColor"/>
    </svg>
  );

  return (
    <footer className="site-footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* PRODUCTS */}
          <nav className="footer__col">
            <h4 className="footer__title">PRODUCTS</h4>
            <ul className="footer__list">
              {products.map((i) => (
                <li key={i.label}>
                  <Link className="footer__link" to={`/products?cat=${encodeURIComponent(i.cat)}`}>
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* TERMS & POLICIES + CORPORATE OFFICE */}
          <nav className="footer__col">
            <h4 className="footer__title">TERMS & POLICIES</h4>
            <ul className="footer__list">
              {policies.map((i) => (
                <li key={i.label}>
                  <Link className="footer__link" to={i.href}>
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* 👇 Corporate Office location inside this column */}
            <div className="footer__labelRow mt12">
              <span className="icon-wrap" aria-hidden="true"><IconMapPin /></span>
              <span className="footer__labelText">Corporate Office</span>
            </div>
            <p className="footer__text">
              26B Sunrise, Triq-Achille Ferris<br />
              Haz-Zebbug, Malta ZBG1430
            </p>
          </nav>

          {/* CONTACT */}
          <address className="footer__col footer__contact">
            <h4 className="footer__title">CONTACT</h4>
            <div className="footer__company">VS LIGHTINGS L.L.C - FZ</div>

            <div className="footer__row">
              <span className="icon-wrap"><IconPhone /></span>
              <a href="tel:+35699622266" className="footer__text">+35699622266</a>
            </div>
            <div className="footer__row">
              <span className="icon-wrap"><IconMail /></span>
              <a href="mailto:info@vslighting.uk" className="footer__text">info@vslighting.uk</a>
            </div>
            <div className="footer__row">
              <span className="icon-wrap"><IconWhatsApp /></span>
              <a href="https://wa.me/97142547899" target="_blank" rel="noreferrer" className="footer__text">
                +9714 254 7899
              </a>
            </div>

            {/* Head office location stays here */}
            <div className="footer__labelRow mt12">
              <span className="icon-wrap"><IconMapPin /></span>
              <span className="footer__labelText">Head Office</span>
            </div>
            <p className="footer__text">
              Meydan Grandstand, 6th floor, Meydan Road,
              Nad Al Sheba, Dubai, U.A.E.
            </p>
          </address>
        </div>

        <hr className="footer__rule" />

        <div className="footer__bottom">
          <div className="footer__copy">
            Copyright © 2025 by{" "}
            <a
              href="https://dvilite.com/"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
              style={{ fontWeight: "700" }}
            >
              dvilite.com
            </a>
          </div>
          <div className="footer__socials">
            <a href="https://facebook.com" className="sbtn" target="_blank" rel="noreferrer">
              <img src="/images/fb.png" alt="Facebook" className="sbtn__icon" />
            </a>
            <a href="https://instagram.com" className="sbtn" target="_blank" rel="noreferrer">
              <img src="/images/insta.jpeg" alt="Instagram" className="sbtn__icon" />
            </a>
            <a href="https://linkedin.com" className="sbtn" target="_blank" rel="noreferrer">
              <img src="/images/linkedin.png" alt="LinkedIn" className="sbtn__icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
