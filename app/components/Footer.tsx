export default function Footer() {
  return (
    <footer style={{ background: "var(--navy-dark)", borderTop: "1px solid rgba(250,250,248,0.08)", padding: "2rem 5% 0" }}>
      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
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
          }}
        >
          07970 722720
        </a>
      </div>

      <div
        style={{
          maxWidth: "1360px",
          margin: "1.25rem auto 0",
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
    </footer>
  );
}
