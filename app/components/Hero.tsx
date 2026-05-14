"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100svh",
        display: "flex",
        alignItems: "stretch",
        position: "relative",
        background: "var(--bg)",
        overflow: "hidden",
      }}
    >
      {/* Left text panel */}
      <div
        className="hero-text"
        style={{
          position: "relative",
          zIndex: 2,
          width: "58%",
          minWidth: "320px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "180px 5% 80px 6%",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--navy)",
            marginBottom: "2.25rem",
          }}
        >
          Tonyrefail · Porth · South Wales
        </p>

        <div style={{ width: "100%", height: "1px", background: "var(--border)", marginBottom: "2.75rem" }} />

        <h1
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: "clamp(3.5rem, 8vw, 7rem)",
            fontWeight: 400,
            lineHeight: 1.02,
            color: "var(--ink)",
            marginBottom: "2.5rem",
            letterSpacing: "-0.015em",
          }}
        >
          Quality Windows&nbsp;&amp; Doors for{" "}
          <em style={{ fontStyle: "italic", color: "var(--navy)" }}>
            South Wales Homes.
          </em>
        </h1>

        <div style={{ width: "100%", height: "1px", background: "var(--border)", marginBottom: "2.5rem" }} />

        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
            fontWeight: 300,
            lineHeight: 1.6,
            color: "var(--muted)",
            maxWidth: "640px",
            marginBottom: "3rem",
          }}
        >
          Supply and installation of double &amp; triple glazed units, windows and doors for houses, flats, bungalows and commercial properties across South Wales.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              background: "var(--navy)",
              color: "var(--bg)",
              padding: "1rem 2.2rem",
              display: "inline-block",
              transition: "background 0.2s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "var(--navy-dark)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "var(--navy)")}
          >
            Get a free quote
          </a>

          <a
            href="https://wa.me/447970722720"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              background: "#25D366",
              color: "#fff",
              padding: "1rem 1.6rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.55rem",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#1ebd5a")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#25D366")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="18"
              height="18"
              fill="#fff"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M16.004 3.2C8.94 3.2 3.2 8.94 3.2 16.004c0 2.257.59 4.46 1.709 6.396L3.2 28.8l6.585-1.724a12.762 12.762 0 0 0 6.219 1.585h.005c7.063 0 12.803-5.74 12.806-12.803 0-3.42-1.331-6.635-3.75-9.054A12.722 12.722 0 0 0 16.004 3.2Zm0 23.34h-.004a10.62 10.62 0 0 1-5.413-1.482l-.388-.23-3.907 1.024 1.043-3.81-.253-.4a10.586 10.586 0 0 1-1.621-5.638c.002-5.872 4.781-10.65 10.654-10.65 2.846 0 5.52 1.11 7.532 3.124a10.585 10.585 0 0 1 3.117 7.534c-.003 5.871-4.78 10.527-10.76 10.527Zm5.84-7.978c-.32-.16-1.893-.934-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.825 1.04-1.012 1.253-.187.213-.373.24-.693.08-.32-.16-1.352-.498-2.575-1.587-.951-.848-1.594-1.896-1.78-2.216-.187-.32-.02-.493.14-.652.143-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.736-.987-2.376-.26-.624-.524-.54-.72-.55a13.05 13.05 0 0 0-.613-.012c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667 0 1.573 1.147 3.094 1.307 3.307.16.213 2.257 3.447 5.467 4.834.764.33 1.36.527 1.825.674.767.244 1.465.21 2.017.128.616-.092 1.893-.774 2.16-1.522.267-.747.267-1.387.187-1.522-.08-.133-.293-.213-.613-.373Z" />
            </svg>
            WhatsApp Us
          </a>

          <a
            href="tel:07970722720"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.875rem",
              fontWeight: 400,
              color: "var(--ink)",
              borderBottom: "1px solid var(--border)",
              paddingBottom: "2px",
              textDecoration: "none",
            }}
          >
            07970 722720
          </a>
        </div>

        {/* Stats row */}
        <div
          style={{
            marginTop: "4.5rem",
            display: "flex",
            gap: "2.5rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { val: "5.0★", label: "Google Rating" },
            { val: "20+", label: "Years Experience" },
            { val: "CF39", label: "South Wales" },
          ].map((s) => (
            <div key={s.label}>
              <p
                style={{
                  fontFamily: "var(--font-dm-serif), serif",
                  fontSize: "1.75rem",
                  fontWeight: 400,
                  color: "var(--navy)",
                  lineHeight: 1,
                }}
              >
                {s.val}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  color: "var(--muted)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginTop: "0.4rem",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right: tall image panel */}
      <div
        className="hero-photo"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "48%",
        }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Clean double-glazed windows on a South Wales home"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, var(--bg) 0%, transparent 18%)",
          }}
        />
      </div>

      <style>{`
        @media (max-width: 800px) {
          .hero-photo { display: none !important; }
          .hero-text { width: 100% !important; padding: 140px 6% 60px !important; }
        }
      `}</style>
    </section>
  );
}
