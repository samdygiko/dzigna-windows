const SERVICES = [
  {
    num: "01",
    title: "Windows",
    desc: "Casement, sash, tilt-and-turn and bay windows in uPVC and composite. Double and triple glazed units, measured, made and installed to spec.",
  },
  {
    num: "02",
    title: "Doors",
    desc: "Composite front doors, French doors, patio doors. Secure, draught-free and built to last.",
  },
  {
    num: "03",
    title: "Conservatories",
    desc: "Sympathetic glass extensions that add real living space without losing the feel of the original property.",
  },
  {
    num: "04",
    title: "Bifold Doors",
    desc: "Slim-line aluminium bifolds for rear extensions, garden rooms and bright open-plan reworks.",
  },
  {
    num: "05",
    title: "Soffits & Fascias",
    desc: "uPVC soffits, fascias and guttering to finish the roofline cleanly and keep weather out for decades.",
  },
  {
    num: "06",
    title: "Warm Roof Conversions",
    desc: "Replace a tired conservatory roof with a fully insulated warm roof — usable year-round, no extra heating bills.",
  },
  {
    num: "07",
    title: "Residential & Commercial",
    desc: "Houses, flats, bungalows and commercial properties across South Wales. One installer for the whole project.",
  },
];

export default function Services() {
  return (
    <section style={{ background: "var(--bg)", padding: "6rem 0 5rem" }} id="services">
      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 5%" }}>

        {/* Section header */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "2rem", marginBottom: "3.5rem", flexWrap: "wrap" }}>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--navy)",
              whiteSpace: "nowrap",
            }}
          >
            — Our Services
          </p>
          <h2
            style={{
              fontFamily: "var(--font-dm-serif), serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 400,
              color: "var(--ink)",
              lineHeight: 1.1,
            }}
          >
            Everything your home needs, fitted right.
          </h2>
        </div>

        {/* Rule */}
        <div style={{ width: "100%", height: "1px", background: "var(--border)", marginBottom: "0" }} />

        {/* Services list */}
        {SERVICES.map((s, i) => (
          <div
            key={s.num}
            style={{
              display: "grid",
              gridTemplateColumns: "3rem 1fr 3fr",
              gap: "0 3rem",
              padding: "2.2rem 0",
              borderBottom: "1px solid var(--border)",
              alignItems: "start",
            }}
            className="service-row"
          >
            {/* Number */}
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.7rem",
                fontWeight: 500,
                color: "var(--muted)",
                letterSpacing: "0.08em",
                paddingTop: "0.2rem",
              }}
            >
              {s.num}
            </p>
            {/* Title */}
            <h3
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)",
                fontWeight: 400,
                color: "var(--navy)",
                lineHeight: 1.2,
              }}
            >
              {s.title}
            </h3>
            {/* Description */}
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.9rem",
                fontWeight: 300,
                lineHeight: 1.7,
                color: "var(--muted)",
                maxWidth: "520px",
              }}
            >
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .service-row { grid-template-columns: 2.5rem 1fr !important; gap: 0 1.5rem !important; }
          .service-row p:last-child { grid-column: 2 / -1; padding-top: 0.5rem; }
        }
      `}</style>
    </section>
  );
}
