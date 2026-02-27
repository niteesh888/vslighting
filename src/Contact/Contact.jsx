import React, { useState } from "react";
import "./Contact.css";

const TO_EMAIL = "bharatnaik231@gmail.com";

function buildPayload(form) {
  const subject = `Website Contact — ${form.purpose}`;
  return new URLSearchParams({
    _subject: subject,
    _template: "table",
    _captcha: "false",
    Name: form.name,
    Email: form.email,
    Phone: form.phone || "-",
    Purpose: form.purpose,
    Message: form.message,
  });
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "Product Enquiry",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("Please fill Name, Email and Description.");
      return;
    }
    try {
      setSending(true);
      const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(TO_EMAIL)}`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: buildPayload(form).toString(),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      if (data.success) {
        alert("Message sent successfully ✅");
        setForm({
          name: "",
          email: "",
          phone: "",
          purpose: "Product Enquiry",
          message: "",
        });
      } else {
        alert("Failed to send. Please try again.");
      }
    } catch (err) {
      alert("Error sending message ❌. If this is your first time, check your inbox for a verification email from FormSubmit.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us For Lighting Solutions In Dubai</h1>

      <div className="contact-content">
        {/* LEFT: Info */}
        <div className="contact-info">
          <div className="info-block">
            <h2>Head Office</h2>
            <p>T: +35699622266</p>
            <p>E: {TO_EMAIL}</p>
          </div>

          <div className="info-block">
            <h2>Operating Hours</h2>
            <p>Monday to Friday</p>
            <p>9.00 to 18.00 hours</p>
          </div>

          <div className="info-block">
            <h2>Location</h2>
            <p>
              Meydan Grandstand, 6th floor, Meydan Road,
              Nad Al Sheba, Dubai, U.A.E.
            </p>
          </div>

          <div className="contact-image">
            <img
              src="https://images.pexels.com/photos/12836767/pexels-photo-12836767.jpeg"
              alt="Office Building"
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="contact-form">
          <h2 className="form-title">Send us a message</h2>
          <form onSubmit={handleSubmit} noValidate>
            <input type="text" name="_honey" style={{ display: "none" }} onChange={()=>{}} />

            <div className="form-row">
              <label htmlFor="name">Name*</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={onChange}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email*</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={onChange}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+971 5x xxx xxxx"
                value={form.phone}
                onChange={onChange}
              />
            </div>

            <div className="form-row">
              <label htmlFor="purpose">Purpose</label>
              <select
                id="purpose"
                name="purpose"
                value={form.purpose}
                onChange={onChange}
              >
                <option>Product Enquiry</option>
                <option>Support</option>
              </select>
            </div>

            <div className="form-row">
              <label htmlFor="message">Description*</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us about your requirements…"
                value={form.message}
                onChange={onChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn" disabled={sending}>
              {sending ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Floating WhatsApp Button */}
      <a
        href="https://wa.me/+971507200342"  // replace with your WhatsApp number
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
}
