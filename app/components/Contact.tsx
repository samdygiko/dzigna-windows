"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  const inputStyle: React.CSSProperties = {
    background: "rgba(250,250,248,0.08)",
    border: "1px solid rgba(250,250,248,0.2)",
    color: "#FAFAF8",
    fontFamily: "var(--font-dm-sans), sans-serif",
    fontSize: "0.95rem",
    fontWeight: 300,
    padding: "0.85rem 1rem",
    outline: "none",
    width: "100%",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-dm-sans), sans-serif",
    fontSize: "0.65rem",
    fontWeight: 600,
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
    color: "rgba(250,250,248,0.5)",
    display: "block",
    marginBottom: "0.5rem",
  };

  return (
    <section id="contact" style={{ background: "var(--navy)", padding: "7rem 0" }}>
      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 5%" }}>

        {/* Header row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            marginBottom: "5rem",
            alignItems: "start",
          }}
          className="contact-header"
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(250,250,248,0.4)",
                marginBottom: "1.25rem",
              }}
            >
              — Get in touch
            </p>
            <h2
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
                fontWeight: 400,
                lineHeight: 1.05,
                color: "#FAFAF8",
              }}
            >
              Get your free,{" "}
              <em style={{ fontStyle: "italic" }}>no-obligation quote.</em>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", paddingTop: "0.5rem" }}>
            <div>
              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(250,250,248,0.4)", marginBottom: "0.5rem" }}>
                Phone
              </p>
              <a
                href="tel:07970722720"
                style={{
                  fontFamily: "var(--font-dm-serif), serif",
                  fontSize: "2rem",
                  fontWeight: 400,
                  color: "#FAFAF8",
                  letterSpacing: "0.01em",
                }}
              >
                07970 722720
              </a>
            </div>
            <div style={{ width: "100%", height: "1px", background: "rgba(250,250,248,0.1)" }} />
            <div>
              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(250,250,248,0.4)", marginBottom: "0.5rem" }}>
                Address
              </p>
              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.875rem", fontWeight: 300, color: "rgba(250,250,248,0.7)", lineHeight: 1.7 }}>
                9 Bryn Rhedyn<br />
                Tonyrefail, Porth<br />
                CF39 8EZ · South Wales
              </p>
            </div>
            <div style={{ width: "100%", height: "1px", background: "rgba(250,250,248,0.1)" }} />
            <div>
              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(250,250,248,0.4)", marginBottom: "0.4rem" }}>
                Areas Covered
              </p>
              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.8rem", fontWeight: 300, color: "rgba(250,250,248,0.55)", lineHeight: 1.7 }}>
                Tonyrefail · Porth · Pontypridd · Treorchy<br />
                Bridgend · Cardiff · All of South Wales
              </p>
            </div>
          </div>
        </div>

        {/* Rule */}
        <div style={{ width: "100%", height: "1px", background: "rgba(250,250,248,0.12)", marginBottom: "4rem" }} />

        {/* Form */}
        {sent ? (
          <div style={{ padding: "4rem 0" }}>
            <h3
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: "2.5rem",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#FAFAF8",
                marginBottom: "1rem",
              }}
            >
              Thank you.
            </h3>
            <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "1rem", fontWeight: 300, color: "rgba(250,250,248,0.6)" }}>
              We&apos;ll be in touch shortly to arrange your free quote.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}
            className="contact-form"
          >
            {[
              { label: "Your name", name: "name", type: "text", required: true },
              { label: "Phone number", name: "phone", type: "tel", required: true },
              { label: "Email address", name: "email", type: "email", required: false },
            ].map((f) => (
              <div key={f.name} style={{ display: "flex", flexDirection: "column" }}>
                <label style={labelStyle}>
                  {f.label}{f.required && <span style={{ color: "#FAFAF8", marginLeft: "3px" }}>*</span>}
                </label>
                <input
                  type={f.type}
                  name={f.name}
                  value={form[f.name as keyof typeof form]}
                  onChange={handleChange}
                  required={f.required}
                  style={inputStyle}
                />
              </div>
            ))}

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={labelStyle}>Service required</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                style={{ ...inputStyle, color: form.service ? "#FAFAF8" : "rgba(250,250,248,0.35)" }}
              >
                <option value="" style={{ background: "var(--navy)" }}>Select...</option>
                {[
                  "Double Glazing",
                  "Triple Glazing",
                  "Windows",
                  "Doors",
                  "Both Windows & Doors",
                  "Commercial Property",
                  "Other / Not sure",
                ].map((o) => (
                  <option key={o} value={o} style={{ background: "var(--navy)" }}>{o}</option>
                ))}
              </select>
            </div>

            <div style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column" }}>
              <label style={labelStyle}>Tell us about your project</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Property type, number of windows/doors, any existing frames..."
                style={{
                  ...inputStyle,
                  resize: "vertical",
                }}
              />
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <button
                type="submit"
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  background: "#FAFAF8",
                  color: "var(--navy)",
                  padding: "0.95rem 2.8rem",
                  border: "none",
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Request free quote →
              </button>
            </div>
          </form>
        )}
      </div>

      <style>{`
        .contact-header { grid-template-columns: 1fr 1fr; }
        .contact-form { grid-template-columns: 1fr 1fr; }
        @media (max-width: 700px) {
          .contact-header { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .contact-form { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
