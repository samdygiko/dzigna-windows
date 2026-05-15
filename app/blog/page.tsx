import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { posts } from "./posts";

export const metadata = {
  title: "Blog",
  description:
    "Notes on windows, doors and home improvements from the Dzigna team in Tonyrefail, South Wales.",
};

export default function BlogIndexPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: "88px", background: "var(--bg)", minHeight: "100vh" }}>
        <section
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "8rem 6% 4rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--navy)",
              marginBottom: "1.5rem",
            }}
          >
            The Dzigna Blog
          </p>
          <h1
            style={{
              fontFamily: "var(--font-dm-serif), serif",
              fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
              lineHeight: 1.05,
              color: "var(--ink)",
              maxWidth: "880px",
              marginBottom: "1.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            Notes from the workshop on windows, doors and home improvements.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "1.05rem",
              fontWeight: 300,
              lineHeight: 1.65,
              color: "var(--muted)",
              maxWidth: "640px",
            }}
          >
            Honest, plain-English guides written for South Wales homeowners by the team who fits the units.
          </p>
        </section>

        <section
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 6% 8rem",
            display: "grid",
            gap: "2.5rem",
          }}
        >
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 220px) 1fr",
                gap: "2rem",
                padding: "2rem 0",
                borderTop: "1px solid var(--border)",
                textDecoration: "none",
              }}
              className="blog-card"
            >
              <div
                aria-hidden="true"
                style={{
                  background: "rgba(28, 58, 94, 0.06)",
                  aspectRatio: "4 / 3",
                  border: "1px solid var(--border)",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: "0.9rem",
                  }}
                >
                  {p.date}
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-dm-serif), serif",
                    fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)",
                    lineHeight: 1.1,
                    color: "var(--ink)",
                    marginBottom: "1rem",
                    letterSpacing: "-0.005em",
                  }}
                >
                  {p.title}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "1rem",
                    fontWeight: 300,
                    lineHeight: 1.65,
                    color: "var(--muted)",
                    marginBottom: "1.25rem",
                  }}
                >
                  {p.excerpt}
                </p>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--navy)",
                  }}
                >
                  Read article →
                </span>
              </div>
            </Link>
          ))}
        </section>
      </main>
      <Footer />

      <style>{`
        .blog-card:hover h2 {
          color: var(--navy);
        }
        @media (max-width: 700px) {
          .blog-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
