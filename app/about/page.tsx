import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "About — Dzigna Windows & Home Improvements",
  description:
    "South Wales' trusted window and door specialists. Trading in Tonyrefail, Porth and across the Rhondda Cynon Taf area. Supply and fit of double and triple glazed units, windows, doors and home improvements.",
};

const stats: { value: string; label: string }[] = [
  { value: "500+", label: "Installations" },
  { value: "5★", label: "Google Rating" },
  { value: "20+", label: "Years Experience" },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: "88px", background: "var(--bg)", minHeight: "100vh" }}>
        <section
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "8rem 6% 4rem",
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
              marginBottom: "1.5rem",
            }}
          >
            About Dzigna
          </p>
          <h1
            style={{
              fontFamily: "var(--font-dm-serif), serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              lineHeight: 1.02,
              color: "var(--ink)",
              maxWidth: "1000px",
              marginBottom: "3rem",
              letterSpacing: "-0.015em",
            }}
          >
            South Wales&rsquo; Trusted Window &amp; Door Specialists.
          </h1>

          <div
            style={{
              maxWidth: "780px",
              display: "flex",
              flexDirection: "column",
              gap: "1.75rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "var(--ink)",
              }}
            >
              Dzigna Windows &amp; Home Improvements has been trading out of Tonyrefail and Porth for over two decades. We supply and fit double and triple glazed windows, composite doors, bi-fold and patio doors, conservatories and broader home improvements for houses, flats, bungalows and commercial properties across South Wales.
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "var(--ink)",
              }}
            >
              We&rsquo;re a small team with deep roots in the Rhondda Cynon Taf area. Most of our work comes from neighbours of past customers — which is the only kind of recommendation that matters. We&rsquo;d rather quote a job honestly, fit it properly, and never hear from you again because nothing went wrong, than chase volume and cut corners. If you want a straight conversation about what your home actually needs, get in touch.
            </p>
          </div>
        </section>

        <section
          style={{
            background: "rgba(28, 58, 94, 0.04)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "3.5rem 6%",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontFamily: "var(--font-dm-serif), serif",
                    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                    lineHeight: 1,
                    color: "var(--navy)",
                    marginBottom: "0.6rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            background: "var(--navy)",
            color: "var(--bg)",
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "5rem 6%",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              alignItems: "flex-start",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Get in touch
            </p>
            <h2
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.1,
                color: "#fff",
                letterSpacing: "-0.005em",
                maxWidth: "700px",
              }}
            >
              Ready for a quote? We&rsquo;ll come out, measure up, and give you a plain-English number.
            </h2>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link
                href="/#contact"
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  background: "var(--bg)",
                  color: "var(--navy)",
                  padding: "1rem 1.8rem",
                  textDecoration: "none",
                }}
              >
                Request a quote
              </Link>
              <a
                href="tel:07970722720"
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(255,255,255,0.45)",
                  color: "#fff",
                  padding: "1rem 1.6rem",
                  textDecoration: "none",
                }}
              >
                Call 07970 722720
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
