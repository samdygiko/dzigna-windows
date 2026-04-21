export default function Nav() {
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
          height: "64px",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem" }}>
          <span
            style={{
              fontFamily: "var(--font-dm-serif), serif",
              fontSize: "1.2rem",
              color: "var(--navy)",
              letterSpacing: "0.01em",
            }}
          >
            Dzigna
          </span>
          <span
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            Windows & Home Improvements
          </span>
        </div>

        {/* Right actions */}
        <div
          className="nav-actions"
          style={{ display: "flex", alignItems: "center", gap: "2rem" }}
        >
          <a
            href="tel:07970722720"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.875rem",
              fontWeight: 400,
              color: "var(--ink)",
            }}
          >
            07970 722720
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              background: "var(--navy)",
              color: "var(--bg)",
              padding: "0.6rem 1.5rem",
            }}
          >
            Get a Quote
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .nav-actions a:first-child { display: none; }
        }
      `}</style>
    </nav>
  );
}
