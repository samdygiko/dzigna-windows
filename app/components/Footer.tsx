import Link from "next/link";
import { PRODUCTS } from "../lib/products";
import Accreditations from "./Accreditations";

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy-dark)", borderTop: "1px solid rgba(250,250,248,0.08)" }}>
      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "3.5rem 5% 0",
        }}
      >
        {/* Top — columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: "2.5rem",
            paddingBottom: "2.5rem",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: "1.4rem",
                color: "var(--bg)",
                lineHeight: 1.2,
                marginBottom: "0.75rem",
                letterSpacing: "-0.005em",
              }}
            >
              Dzigna Windows &amp; Home Improvements
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.85rem",
                fontWeight: 300,
                lineHeight: 1.6,
                color: "rgba(250,250,248,0.55)",
                maxWidth: "320px",
              }}
            >
              Supply and fit of windows, doors and home improvements across South Wales.
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "rgba(250,250,248,0.7)",
                marginTop: "1.25rem",
              }}
            >
              <a href="tel:07970722720" style={{ color: "rgba(250,250,248,0.7)", textDecoration: "none" }}>
                07970 722720
              </a>
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.8rem",
                fontWeight: 300,
                color: "rgba(250,250,248,0.45)",
                marginTop: "0.3rem",
              }}
            >
              9 Bryn Rhedyn, Tonyrefail, CF39 8EZ
            </p>
          </div>

          {/* Products column */}
          <div>
            <p style={colTitleSt}>Products</p>
            <ul style={listSt}>
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} style={linkSt}>
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages column */}
          <div>
            <p style={colTitleSt}>Pages</p>
            <ul style={listSt}>
              <li><Link href="/" style={linkSt}>Home</Link></li>
              <li><Link href="/about" style={linkSt}>About</Link></li>
              <li><Link href="/blog" style={linkSt}>Blog</Link></li>
              <li><Link href="/configure" style={linkSt}>Design Yours</Link></li>
              <li><Link href="/#contact" style={linkSt}>Contact</Link></li>
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <p style={colTitleSt}>Legal</p>
            <ul style={listSt}>
              <li><Link href="/privacy-policy" style={linkSt}>Privacy Policy</Link></li>
              <li><Link href="/privacy-policy" style={linkSt}>Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Accreditations strip */}
        <div style={{ paddingTop: "1.75rem", paddingBottom: "2rem", borderTop: "1px solid rgba(250,250,248,0.08)" }}>
          <Accreditations variant="footer" />
        </div>

        {/* Bottom — copyright row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            paddingTop: "1.5rem",
            paddingBottom: "1.25rem",
            borderTop: "1px solid rgba(250,250,248,0.08)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.75rem",
              fontWeight: 300,
              color: "rgba(250,250,248,0.35)",
            }}
          >
            © {new Date().getFullYear()} Dzigna Windows &amp; Home Improvements · Tonyrefail, CF39 8EZ
          </p>
          <a
            href="tel:07970722720"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "rgba(250,250,248,0.5)",
              textDecoration: "none",
            }}
          >
            07970 722720
          </a>
        </div>

        {/* Dygiko credit */}
        <div
          style={{
            paddingTop: "1rem",
            paddingBottom: "1.25rem",
            borderTop: "1px solid rgba(250,250,248,0.08)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.75rem",
              fontWeight: 400,
              color: "rgba(250,250,248,0.4)",
            }}
          >
            Designed by{" "}
            <a
              href="https://dygiko.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(250,250,248,0.55)",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Dygiko
            </a>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

const colTitleSt: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans), sans-serif",
  fontSize: "0.7rem",
  fontWeight: 600,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "rgba(250,250,248,0.55)",
  marginBottom: "1.1rem",
};

const listSt: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "grid",
  gap: "0.6rem",
};

const linkSt: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans), sans-serif",
  fontSize: "0.85rem",
  fontWeight: 400,
  color: "rgba(250,250,248,0.75)",
  textDecoration: "none",
};
