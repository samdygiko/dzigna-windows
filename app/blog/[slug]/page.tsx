import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { findPost, posts } from "../posts";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return { title: "Article not found — Dzigna" };
  return {
    title: `${post.title} — Dzigna Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main style={{ paddingTop: "64px", background: "var(--bg)", minHeight: "100vh" }}>
        <article
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "6rem 6% 6rem",
          }}
        >
          <Link
            href="/blog"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--navy)",
              textDecoration: "none",
              display: "inline-block",
              marginBottom: "3rem",
            }}
          >
            ← Back to blog
          </Link>

          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: "1.4rem",
            }}
          >
            {post.date}
          </p>

          <h1
            style={{
              fontFamily: "var(--font-dm-serif), serif",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              lineHeight: 1.08,
              color: "var(--ink)",
              marginBottom: "3rem",
              letterSpacing: "-0.01em",
            }}
          >
            {post.title}
          </h1>

          <div style={{ width: "60px", height: "1px", background: "var(--navy)", marginBottom: "3rem" }} />

          <div>
            {post.body.map((paragraph, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: "var(--ink)",
                  marginBottom: "1.6rem",
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div
            style={{
              marginTop: "4rem",
              padding: "2.5rem",
              background: "var(--navy)",
              color: "var(--bg)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                marginBottom: "1rem",
              }}
            >
              Tonyrefail · Porth · South Wales
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: "1.5rem",
                lineHeight: 1.3,
                marginBottom: "1.5rem",
                color: "#fff",
              }}
            >
              Thinking about new windows or a door replacement?
            </p>
            <a
              href="tel:07970722720"
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background: "var(--bg)",
                color: "var(--navy)",
                padding: "0.95rem 1.6rem",
                display: "inline-block",
                textDecoration: "none",
              }}
            >
              Call 07970 722720
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
