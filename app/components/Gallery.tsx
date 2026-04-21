import Image from "next/image";

const IMAGES = [
  { src: "/images/work-1.jpg", alt: "Double glazed window installation on a semi-detached home", span: "tall" },
  { src: "/images/work-2.jpg", alt: "Composite front door fitted in Tonyrefail", span: "normal" },
  { src: "/images/work-3.jpg", alt: "uPVC casement windows — residential property South Wales", span: "normal" },
  { src: "/images/work-4.jpg", alt: "Bi-fold patio doors installed on rear extension", span: "tall" },
  { src: "/images/work-5.jpg", alt: "Triple glazed units — new build installation", span: "normal" },
];

export default function Gallery() {
  return (
    <section style={{ background: "var(--bg)", padding: "6rem 0" }} id="gallery">
      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 5%" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--navy)",
                marginBottom: "0.75rem",
              }}
            >
              — Our Work
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
              Fitted across South Wales.
            </h2>
          </div>
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--navy)",
              borderBottom: "1px solid var(--navy)",
              paddingBottom: "2px",
            }}
          >
            Get a free quote →
          </a>
        </div>

        {/* Rule */}
        <div style={{ width: "100%", height: "1px", background: "var(--border)", marginBottom: "2rem" }} />

        {/* Asymmetric grid */}
        <div
          className="gallery-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr",
            gridTemplateRows: "340px 260px",
            gap: "8px",
          }}
        >
          {/* Large left — spans 2 rows */}
          <div style={{ gridRow: "1 / 3", position: "relative", background: "var(--stone)", overflow: "hidden" }}>
            <Image
              src="/images/work-1.jpg"
              alt="Double glazed window installation on a semi-detached home"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          {/* Top middle */}
          <div style={{ position: "relative", background: "var(--stone)", overflow: "hidden" }}>
            <Image
              src="/images/work-2.jpg"
              alt="Composite front door fitted in South Wales"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          {/* Top right */}
          <div style={{ position: "relative", background: "#D0CAC0", overflow: "hidden" }}>
            <Image
              src="/images/work-3.jpg"
              alt="uPVC casement windows — residential property South Wales"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          {/* Bottom middle */}
          <div style={{ position: "relative", background: "#C8C2B8", overflow: "hidden" }}>
            <Image
              src="/images/work-4.jpg"
              alt="Bi-fold patio doors installed on rear extension"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          {/* Bottom right */}
          <div style={{ position: "relative", background: "var(--navy)", overflow: "hidden" }}>
            <Image
              src="/images/work-5.jpg"
              alt="Triple glazed units — new build installation"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            {/* Overlay text on navy placeholder */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "1.5rem",
                background: "linear-gradient(to top, rgba(28,58,94,0.7) 0%, transparent 60%)",
              }}
            >
              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(250,250,248,0.75)" }}>
                South Wales
              </p>
              <p style={{ fontFamily: "var(--font-dm-serif), serif", fontSize: "1.1rem", color: "#FAFAF8", lineHeight: 1.2 }}>
                Residential &amp; Commercial
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .gallery-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: 220px 200px 200px !important;
          }
          .gallery-grid > div:first-child { grid-row: auto !important; }
        }
        @media (max-width: 440px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: repeat(5, 220px) !important;
          }
        }
      `}</style>
    </section>
  );
}
