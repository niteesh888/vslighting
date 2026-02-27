import React from "react";
import "./OurWork.css";

// Use a public folder image as default
const DEFAULT_BG = "/images/ourworkbg.jpg";

const OurWork = ({ bg, onProjectsClick }) => {
  return (
    <section
      className="ourwork"
      style={{
        backgroundImage: `url(${bg || DEFAULT_BG})`, // fallback to public image
      }}
      aria-label="See our work hero section"
    >
      <div className="ourwork__overlay" />

      <div className="ourwork__content">
        <h1 className="ourwork__title">See our work</h1>
        <p className="ourwork__subtitle">
          Assisting clients at every possible step to deliver the best
        </p>

        {onProjectsClick ? (
          <button className="ourwork__btn" onClick={onProjectsClick}>
            Projects
          </button>
        ) : (
          <a className="ourwork__btn" href="/projects">
            Projects
          </a>
        )}
      </div>

      {/* WhatsApp Floating Button */}
      <a
        className="wa-fab"
        href="https://wa.me/97142547899"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="wa-fab__icon" aria-hidden="true">
          <path d="M19.1 17.2c-.3-.1-1-.5-1.2-.6s-.3-.1-.5.1-.6.6-.7.7-.3.1-.5 0c-.3-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.4-1.6-.1-.3 0-.4.1-.6s.3-.4.4-.5c.1-.1.1-.3.2-.5s0-.4 0-.5c0-.1-.5-1.3-.7-1.8-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1.1 2.8 1.2 3 .2.4.5.8 1.6 2.5 3.8 3.4c2.3.9 2.3.6 2.7.6s1.3-.6 1.5-1.1.2-1 .1-1.1-.3-.1-.6-.2z" />
          <path d="M26.9 5.1C24.1 2.4 20.6 1 16.9 1 9.1 1 2.8 7.3 2.8 15.1c0 2.5.7 4.9 2 7L3 29l7.1-1.8c2 .9 4.1 1.4 6.3 1.4 7.8 0 14.1-6.3 14.1-14.1 0-3.8-1.5-7.3-4.2-10.1zm-10 22.8c-2 0-4-.5-5.8-1.3l-.4-.2-4.2 1.1 1.1-4.1-.2-.4c-1.3-1.9-1.9-4-1.9-6.3 0-6.2 5-11.2 11.2-11.2 3 0 5.8 1.2 7.9 3.3s3.3 4.9 3.3 7.9c0 6.2-5 11.2-11.2 11.2z" />
        </svg>
      </a>
    </section>
  );
};

export default OurWork;
