import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { PRODUCTS, getProduct } from "../../lib/products";

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found — Dzigna Windows" };
  return {
    title: `${product.name} | Dzigna Windows & Home Improvements`,
    description: product.short,
    alternates: { canonical: `https://www.dzignawindows.co.uk/products/${product.slug}` },
  };
}

const STATS: { label: string }[] = [
  { label: "Free Survey" },
  { label: "Fully Fitted" },
  { label: "10+ Years Experience" },
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <Nav />
      <main style={{ paddingTop: "88px", background: "var(--bg)", minHeight: "100vh" }}>
        {/* Editorial hero */}
        <section
          style={{
            maxWidth: "1360px",
            margin: "0 auto",
            padding: "5rem 5% 4rem",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
          }}
          className="product-hero"
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--navy)",
                marginBottom: "1.25rem",
              }}
            >
              — Products
            </p>
            <h1
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
                fontWeight: 400,
                color: "var(--ink)",
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
                marginBottom: "2rem",
                maxWidth: "780px",
              }}
            >
              {product.name}
            </h1>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)",
                fontWeight: 300,
                lineHeight: 1.7,
                color: "var(--ink)",
                maxWidth: "640px",
                marginBottom: "2.5rem",
              }}
            >
              {product.description}
            </p>
            <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  background: "var(--navy)",
                  color: "var(--bg)",
                  padding: "1rem 1.8rem",
                  textDecoration: "none",
                }}
              >
                Get a Free Quote
              </Link>
              <Link
                href="/configure"
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  background: "transparent",
                  color: "var(--navy)",
                  border: "1.5px solid var(--navy)",
                  padding: "0.9rem 1.6rem",
                  textDecoration: "none",
                }}
              >
                Design Yours →
              </Link>
            </div>
          </div>
        </section>

        {/* Full-width image */}
        <section style={{ background: "var(--bg)" }}>
          <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 7" }}>
            <Image
              src={product.heroImage}
              alt={product.heroAlt}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>

        {/* What's included */}
        <section style={{ background: "var(--bg)", padding: "5rem 0" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 5%" }}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--navy)",
                marginBottom: "1.25rem",
              }}
            >
              What&rsquo;s included
            </p>
            <h2
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "var(--ink)",
                lineHeight: 1.1,
                marginBottom: "2.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              Every quote includes the lot.
            </h2>
            <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1.25rem" }}>
              {product.included.map((line, i) => (
                <li
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2.5rem 1fr",
                    alignItems: "baseline",
                    paddingBottom: "1.25rem",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      color: "var(--muted)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "1.05rem",
                      fontWeight: 400,
                      color: "var(--ink)",
                      lineHeight: 1.5,
                    }}
                  >
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why choose us strip */}
        <section
          style={{
            background: "rgba(28, 58, 94, 0.04)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "3.5rem 5%",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontFamily: "var(--font-dm-serif), serif",
                    fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)",
                    fontWeight: 400,
                    color: "var(--navy)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA band */}
        <section style={{ background: "var(--navy)" }}>
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "4.5rem 5%",
              display: "flex",
              flexDirection: "column",
              gap: "1.75rem",
              alignItems: "flex-start",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#fff",
                lineHeight: 1.1,
                letterSpacing: "-0.005em",
                maxWidth: "780px",
              }}
            >
              Ready to get started? Request a free quote today.
            </h2>
            <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  background: "var(--bg)",
                  color: "var(--navy)",
                  padding: "1rem 1.8rem",
                  textDecoration: "none",
                }}
              >
                Request a quote
              </Link>
              <Link
                href="/configure"
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  background: "transparent",
                  color: "#fff",
                  border: "1.5px solid rgba(255,255,255,0.4)",
                  padding: "0.9rem 1.6rem",
                  textDecoration: "none",
                }}
              >
                Design Yours
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
