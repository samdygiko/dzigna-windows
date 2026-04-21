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
          width: "52%",
          minWidth: "320px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "110px 5% 80px 6%",
        }}
      >
        {/* Location tag */}
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--navy)",
            marginBottom: "2rem",
          }}
        >
          Tonyrefail · Porth · South Wales
        </p>

        {/* Rule */}
        <div style={{ width: "100%", height: "1px", background: "var(--border)", marginBottom: "2.5rem" }} />

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: "clamp(2.8rem, 5vw, 5rem)",
            fontWeight: 400,
            lineHeight: 1.08,
            color: "var(--ink)",
            marginBottom: "2rem",
            letterSpacing: "-0.01em",
          }}
        >
          Quality Windows&nbsp;&amp; Doors for{" "}
          <em style={{ fontStyle: "italic", color: "var(--navy)" }}>
            South Wales Homes.
          </em>
        </h1>

        {/* Rule */}
        <div style={{ width: "100%", height: "1px", background: "var(--border)", marginBottom: "2rem" }} />

        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "1rem",
            fontWeight: 300,
            lineHeight: 1.75,
            color: "var(--muted)",
            maxWidth: "400px",
            marginBottom: "3rem",
          }}
        >
          Supply and installation of double &amp; triple glazed units, windows and doors for houses, flats, bungalows and commercial properties across South Wales.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "1.25rem", alignItems: "center", flexWrap: "wrap" }}>
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              background: "var(--navy)",
              color: "var(--bg)",
              padding: "0.9rem 2.2rem",
              display: "inline-block",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "var(--navy-dark)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "var(--navy)")}
          >
            Get a free quote
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
            }}
          >
            07970 722720
          </a>
        </div>

        {/* Stats row */}
        <div
          style={{
            marginTop: "auto",
            paddingTop: "4rem",
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
                  fontSize: "1.5rem",
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
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  color: "var(--muted)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginTop: "0.35rem",
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
          width: "54%",
        }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Clean double-glazed windows on a South Wales home"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Gradient fade into left */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, var(--bg) 0%, transparent 20%)",
          }}
        />
      </div>

      <style>{`
        @media (max-width: 800px) {
          .hero-photo { display: none !important; }
          .hero-text { width: 100% !important; padding: 100px 6% 60px !important; }
        }
      `}</style>
    </section>
  );
}
