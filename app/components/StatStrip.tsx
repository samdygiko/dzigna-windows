const STATS = [
  { val: "5.0★", label: "Google Rating" },
  { val: "South Wales", label: "Local & trusted" },
  { val: "Res. & Commercial", label: "All property types" },
  { val: "Free", label: "No-obligation quotes" },
];

export default function StatStrip() {
  return (
    <section style={{ background: "var(--stone)" }}>
      {/* Rule */}
      <div style={{ width: "100%", height: "1px", background: "var(--border)" }} />

      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "0 5%",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
        className="stat-grid"
      >
        {STATS.map((s, i) => (
          <div
            key={s.label}
            style={{
              padding: "3rem 2rem 3rem 0",
              borderRight: i < STATS.length - 1 ? "1px solid var(--border)" : "none",
              paddingLeft: i === 0 ? 0 : "2rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                fontWeight: 400,
                color: "var(--navy)",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}
            >
              {s.val}
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div style={{ width: "100%", height: "1px", background: "var(--border)" }} />

      <style>{`
        @media (max-width: 700px) {
          .stat-grid { grid-template-columns: 1fr 1fr !important; }
          .stat-grid > div { border-right: none !important; border-bottom: 1px solid var(--border); padding-left: 0 !important; }
        }
      `}</style>
    </section>
  );
}
