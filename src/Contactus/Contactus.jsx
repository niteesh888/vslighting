import React from "react";
import "./ContactUs.css";

const DEFAULT_BG =
  "https://images.pexels.com/photos/14036247/pexels-photo-14036247.jpeg";

/**
 * Usage:
 * <ContactUs
 *   bg="/images/hero-contact.jpg"
 *   onContactClick={() => navigate('/contact')}
 * />
 * If you don't pass `bg`, it uses DEFAULT_BG.
 */
const ContactUs = ({ bg, onContactClick }) => {
  return (
    <section
      className="contacthero"
      style={{
        backgroundImage: `url(${bg || DEFAULT_BG})`, // ✅ fallback to default
      }}
      aria-label="Contact us hero section"
    >
      <div className="contacthero__overlay" />

      <div className="contacthero__content">
        <h1 className="contacthero__title">Contact us</h1>
        <p className="contacthero__subtitle">Contact us for more information</p>

        {onContactClick ? (
          <button className="contacthero__btn" onClick={onContactClick}>
            Contact us
          </button>
        ) : (
          <a className="contacthero__btn" href="/contact">
            Contact us
          </a>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
