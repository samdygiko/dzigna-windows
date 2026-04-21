export default function Footer() {
  return (
    <footer style={{ background: "var(--navy-dark)", borderTop: "1px solid rgba(250,250,248,0.08)", padding: "2rem 5%" }}>
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
    </footer>
  );
}
