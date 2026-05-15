const BADGES: string[] = [
  "FENSA Registered",
  "Which? Trusted Trader",
  "GGF Member",
  "TrustMark Government Endorsed",
  "Checkatrade Approved",
];

type Props = {
  variant?: "section" | "footer";
};

export default function Accreditations({ variant = "section" }: Props) {
  const isFooter = variant === "footer";
  return (
    <section
      aria-label="Accreditations"
      style={{
        background: isFooter ? "transparent" : "var(--bg)",
        padding: isFooter ? "0" : "5rem 0 4rem",
      }}
    >
      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: isFooter ? "0" : "0 5%",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: isFooter ? "rgba(250,250,248,0.55)" : "var(--navy)",
            marginBottom: isFooter ? "1rem" : "1.75rem",
            textAlign: isFooter ? "left" : "center",
          }}
        >
          Accredited &amp; Trusted
        </p>

        <ul
          className={isFooter ? "acc-row acc-row-footer" : "acc-row"}
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            gap: "0.85rem",
            flexWrap: isFooter ? "wrap" : "nowrap",
            justifyContent: isFooter ? "flex-start" : "center",
            overflowX: "auto",
            paddingBottom: "0.5rem",
          }}
        >
          {BADGES.map((b) => (
            <li key={b}>
              <div
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  color: isFooter ? "rgba(250,250,248,0.75)" : "var(--ink)",
                  background: isFooter ? "rgba(250,250,248,0.06)" : "rgba(28,58,94,0.05)",
                  border: `1px solid ${isFooter ? "rgba(250,250,248,0.12)" : "var(--border)"}`,
                  padding: "0.85rem 1.2rem",
                  borderRadius: "6px",
                  whiteSpace: "nowrap",
                }}
              >
                {b}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .acc-row { justify-content: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
