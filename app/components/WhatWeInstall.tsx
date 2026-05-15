import Image from "next/image";

const tiles: { src: string; label: string; alt: string }[] = [
  {
    src: "/images/install/windows.jpg",
    label: "Windows",
    alt: "uPVC casement windows installed on a residential property exterior",
  },
  {
    src: "/images/install/doors.jpg",
    label: "Doors",
    alt: "Composite front door installation on a UK home",
  },
  {
    src: "/images/install/conservatories.jpg",
    label: "Conservatories",
    alt: "Glass conservatory and rear extension overlooking a garden",
  },
  {
    src: "/images/install/bifold-doors.jpg",
    label: "Bifold Doors",
    alt: "Aluminium bifold doors opening onto a garden patio",
  },
  {
    src: "/images/install/soffits-fascias.jpg",
    label: "Soffits & Fascias",
    alt: "Clean uPVC soffits and fascias finishing the roofline of a house",
  },
  {
    src: "/images/install/warm-roof.jpg",
    label: "Warm Roof Conversions",
    alt: "Warm roof flat-roof conversion on a residential property",
  },
];

export default function WhatWeInstall() {
  return (
    <section
      id="what-we-install"
      style={{ background: "var(--bg)", padding: "6rem 0 5rem" }}
    >
      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 5%" }}>
        <h2
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
            fontWeight: 400,
            color: "var(--ink)",
            lineHeight: 1.05,
            marginBottom: "3rem",
            letterSpacing: "-0.01em",
          }}
        >
          What We Install
        </h2>

        <div className="wwi-grid">
          {tiles.map((t) => (
            <figure key={t.label} className="wwi-cell">
              <Image
                src={t.src}
                alt={t.alt}
                width={1200}
                height={800}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <figcaption>
                <span>{t.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        .wwi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .wwi-cell {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4 / 3;
          background: var(--border);
        }
        .wwi-cell figcaption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(28, 58, 94, 0.86);
          color: #fff;
          padding: 0.85rem 1.1rem;
          font-family: var(--font-dm-sans), sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          letterSpacing: 0.04em;
        }
        @media (max-width: 1024px) {
          .wwi-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .wwi-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
