const QUOTES = [
  {
    text: "Really pleased with the new windows — the difference in warmth and noise reduction is noticeable straight away. Neat, tidy job and no mess left behind. Would definitely recommend.",
    author: "David M.",
    location: "Tonyrefail",
  },
  {
    text: "Came out quickly, gave us a fair price, and the composite door looks fantastic. Very professional from start to finish. Already had two neighbours ask for their number.",
    author: "Leanne T.",
    location: "Porth",
  },
];

export default function Testimonials() {
  return (
    <section style={{ background: "var(--stone)", padding: "6rem 0" }} id="testimonials">
      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 5%" }}>

        {/* Label */}
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--navy)",
            marginBottom: "3rem",
          }}
        >
          — Customer Reviews · 5.0 Google Rating
        </p>

        {/* Rule */}
        <div style={{ width: "100%", height: "1px", background: "var(--border)", marginBottom: "0" }} />

        {/* Quotes */}
        {QUOTES.map((q, i) => (
          <div
            key={q.author}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 3fr",
              gap: "4rem",
              padding: "3.5rem 0",
              borderBottom: "1px solid var(--border)",
              alignItems: "start",
            }}
            className="quote-row"
          >
            <div>
              {/* Stars */}
              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "1rem", color: "var(--navy)", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>
                ★★★★★
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                }}
              >
                {q.author}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 400,
                  color: "var(--muted)",
                  marginTop: "0.2rem",
                }}
              >
                {q.location}
              </p>
            </div>
            <blockquote
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.55,
                color: "var(--ink)",
              }}
            >
              &ldquo;{q.text}&rdquo;
            </blockquote>
          </div>
        ))}

        {/* Google link note */}
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "0.75rem",
            color: "var(--muted)",
            marginTop: "2rem",
          }}
        >
          Find us on Google &rarr; search <strong style={{ color: "var(--ink)" }}>Dzigna Windows & Home Improvements</strong>
        </p>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .quote-row { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
