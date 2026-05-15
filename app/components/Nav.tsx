"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { PRODUCTS } from "../lib/products";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/configure", label: "Design Yours" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "0 5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "88px",
        }}
      >
        <Link
          href="/"
          aria-label="Dzigna Windows & Home Improvements — home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.9rem",
            textDecoration: "none",
          }}
        >
          <Image
            src="/images/dzigna-logo.png"
            alt="Dzigna Windows & Home Improvements logo"
            width={1024}
            height={1024}
            priority
            style={{ height: "64px", width: "auto", display: "block", background: "transparent" }}
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span
              className="brand-mark"
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: "1.8rem",
                color: "var(--navy)",
                letterSpacing: "-0.005em",
                lineHeight: 1,
              }}
            >
              Dzigna
            </span>
            <span
              className="brand-strap"
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginTop: "0.45rem",
              }}
            >
              Windows &amp; Home Improvements
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div
          className="nav-desktop"
          style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}
        >
          <Link
            href="/"
            style={navLinkSt}
          >
            Home
          </Link>
          <Link href="/about" style={navLinkSt}>
            About
          </Link>

          {/* Products dropdown */}
          <div
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
            style={{ position: "relative" }}
          >
            <button
              type="button"
              onClick={() => setProductsOpen((v) => !v)}
              aria-expanded={productsOpen}
              style={{
                ...navLinkSt,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              Products
              <span aria-hidden="true" style={{ fontSize: "0.6rem" }}>▾</span>
            </button>
            {productsOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 0.85rem)",
                  left: 0,
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  minWidth: "260px",
                  padding: "0.6rem 0",
                  boxShadow: "0 12px 28px rgba(28,58,94,0.08)",
                  zIndex: 10,
                }}
              >
                {PRODUCTS.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    onClick={() => setProductsOpen(false)}
                    style={{
                      display: "block",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "0.88rem",
                      color: "var(--ink)",
                      textDecoration: "none",
                      padding: "0.7rem 1.2rem",
                    }}
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/blog" style={navLinkSt}>
            Blog
          </Link>
          <Link href="/configure" style={navLinkSt}>
            Design Yours
          </Link>
          <a
            href="tel:07970722720"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              background: "var(--navy)",
              color: "var(--bg)",
              padding: "0.7rem 1.25rem",
              textDecoration: "none",
            }}
          >
            Call us
          </a>
        </div>

        {/* Mobile burger */}
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="nav-burger"
          onClick={() => setMobileOpen((v) => !v)}
          style={{
            display: "none",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            padding: "0.4rem",
            color: "var(--ink)",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            {mobileOpen ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="nav-mobile-panel"
          style={{
            display: "none",
            borderTop: "1px solid var(--border)",
            background: "var(--bg)",
            padding: "1rem 5% 1.5rem",
          }}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={mobileLinkSt}
            >
              {l.label}
            </Link>
          ))}

          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginTop: "1.2rem",
              marginBottom: "0.4rem",
            }}
          >
            Products
          </p>
          {PRODUCTS.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              onClick={() => setMobileOpen(false)}
              style={{ ...mobileLinkSt, fontSize: "0.95rem", padding: "0.55rem 0" }}
            >
              {p.name}
            </Link>
          ))}

          <a
            href="tel:07970722720"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "block",
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              background: "var(--navy)",
              color: "var(--bg)",
              padding: "0.85rem 1rem",
              textAlign: "center",
              marginTop: "1.25rem",
              textDecoration: "none",
            }}
          >
            Call 07970 722720
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .brand-strap { display: none !important; }
          .brand-mark { font-size: 1.45rem !important; }
          .nav-desktop { display: none !important; }
          .nav-burger { display: inline-flex !important; }
          .nav-mobile-panel { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

const navLinkSt: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans), sans-serif",
  fontSize: "0.85rem",
  fontWeight: 500,
  letterSpacing: "0.02em",
  color: "var(--ink)",
  textDecoration: "none",
};

const mobileLinkSt: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-dm-sans), sans-serif",
  fontSize: "1rem",
  fontWeight: 500,
  color: "var(--ink)",
  textDecoration: "none",
  padding: "0.75rem 0",
  borderBottom: "1px solid var(--border)",
};
