"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

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
            style={{
              height: "64px",
              width: "auto",
              display: "block",
              background: "transparent",
              boxShadow: "none",
            }}
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
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.16em",
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
          style={{ display: "flex", alignItems: "center", gap: "2rem" }}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.85rem",
                fontWeight: 500,
                letterSpacing: "0.02em",
                color: "var(--ink)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}
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
              padding: "0.7rem 1.3rem",
              textDecoration: "none",
            }}
          >
            Call us
          </a>
        </div>

        {/* Mobile burger */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="nav-burger"
          onClick={() => setOpen((v) => !v)}
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
            {open ? (
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
      {open && (
        <div
          className="nav-mobile-panel"
          style={{
            display: "none",
            borderTop: "1px solid var(--border)",
            background: "var(--bg)",
            padding: "1.2rem 5% 1.5rem",
          }}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "1rem",
                fontWeight: 500,
                color: "var(--ink)",
                textDecoration: "none",
                padding: "0.75rem 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:07970722720"
            onClick={() => setOpen(false)}
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
              marginTop: "1rem",
              textDecoration: "none",
            }}
          >
            Call 07970 722720
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 800px) {
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
