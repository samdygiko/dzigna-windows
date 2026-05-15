import Image from "next/image";

const tiles: { src: string; label: string; alt: string }[] = [
  {
    src: "/images/products/window.jpg",
    label: "Windows",
    alt: "uPVC casement windows on a house exterior",
  },
  {
    src: "/images/products/door.jpg",
    label: "Doors",
    alt: "Stylish front door of a residential home",
  },
  {
    src: "/images/products/conservatory.jpg",
    label: "Conservatories",
    alt: "Glass conservatory attached to a home",
  },
  {
    src: "/images/products/bifold.jpg",
    label: "Bifold Doors",
    alt: "Large glass bifold doors opening to a garden",
  },
  {
    src: "/images/products/soffit.jpg",
    label: "Soffits & Fascias",
    alt: "Clean house exterior roofline showing soffits and fascias",
  },
  {
    src: "/images/products/warmroof.jpg",
    label: "Warm Roof Conversions",
    alt: "House with a tiled warm roof extension",
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
