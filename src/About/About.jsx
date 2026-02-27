import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      {/* Section 1: Story */}
      <section className="about__section">
        <h2>About VS LIGHTINGS</h2>
        <p>
          VS LIGHTINGS is a Dubai–based specialist in architectural and
          commercial LED lighting. We design, source and deliver lighting
          solutions that blend aesthetics with performance—helping developers,
          consultants and brands create spaces that look remarkable and work
          beautifully.
        </p>
        <p>
          From boutique interiors to large hospitality and façade projects,
          our team supports the full journey: concept guidance, product
          selection, sampling, value-engineering and on-site coordination.
          Every fixture we recommend is chosen for reliability, efficiency
          and visual comfort.
        </p>
        <p>
          Our portfolio spans indoor luminaires, façade and landscape systems,
          LED strip & neon flex, aluminium profiles and professional drivers &
          controls—curated from trusted manufacturing partners and validated by
          our in-house quality checks.
        </p>
      </section>

      {/* Section 2: Why choose us */}
      <section className="about__section about__section--gray">
        <h2>Why Choose VS LIGHTINGS</h2>
        <p>
          We believe great lighting should be effortless to specify and
          exceptional to experience. That’s why we focus on the details that
          matter to designers, contractors and end-users alike.
        </p>
        <p>
          Our lighting collections are built on authentic contemporary design,
          crafted with premium materials and attention to detail. Every fixture
          is engineered for durability, finish quality and superior thermal
          management—ensuring longevity in GCC conditions.
        </p>
        <p>
          By combining high-efficacy LED engines with advanced drivers, we
          deliver energy-efficient performance while supporting smooth,
          flicker-free dimming and smart control options. This balance of
          design and technology allows our products to elevate both the
          ambience and functionality of your spaces.
        </p>
        <p>
          With expert guidance at every stage, we help you choose the right
          optics, color temperature, and mounting solutions. Reliable delivery,
          sample support, and responsive after-sales service make us a trusted
          partner for projects across Dubai and the wider GCC region.
        </p>
      </section>

      {/* Section 3: Quality & assurance */}
      <section className="about__section">
        <h2>Quality You Can Specify With Confidence</h2>
        <p>
          Products are evaluated for photometric accuracy, finish consistency
          and electrical safety, with documentation available on request
          (LM79/LM80 reports, IP/IK ratings, and relevant compliance marks).
          We emphasise flicker-safe dimming, stable colour rendering and
          thermal performance for demanding applications.
        </p>
        <p>
          Our recommended ranges include indoor downlights, spots and track;
          panels and pendants; outdoor bollards, wall washers and floods; plus
          LED strip & neon systems with matched drivers and controls. Warranty
          coverage is defined per product family, backed by responsive local
          support.
        </p>
        <p>
          Whether you’re lighting retail, hospitality, offices or façades,
          VS LIGHTINGS delivers a balanced solution—design-forward,
          technically sound, and built to last in GCC conditions.
        </p>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+971507200342"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <img src="/images/whatsapp.png" alt="WhatsApp" />
      </a>
    </div>
  );
};

export default About;
