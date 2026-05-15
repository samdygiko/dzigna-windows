import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ConfiguratorClient from "./ConfiguratorClient";

export const metadata = {
  title: "Design Your Quote",
  description:
    "Configure your windows, doors, conservatory, bifolds or warm roof in four steps. Free, no-obligation quote from Dzigna Windows in Tonyrefail.",
  alternates: { canonical: "https://www.dzignawindows.co.uk/configure" },
};

export default function ConfigurePage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: "88px", background: "var(--bg)", minHeight: "100vh" }}>
        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 5% 1rem" }}>
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
            — Design Yours
          </p>
          <h1
            style={{
              fontFamily: "var(--font-dm-serif), serif",
              fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
              fontWeight: 400,
              color: "var(--ink)",
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
              maxWidth: "800px",
            }}
          >
            Build your free quote in four steps.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "1.05rem",
              fontWeight: 300,
              lineHeight: 1.7,
              color: "var(--muted)",
              maxWidth: "640px",
              marginTop: "1.25rem",
            }}
          >
            Pick a product, choose your options, send us your details, and we&rsquo;ll
            be in touch within 24 hours with a tailored quote. No obligation.
          </p>
        </section>
        <ConfiguratorClient />
      </main>
      <Footer />
    </>
  );
}
