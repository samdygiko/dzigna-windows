import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy | Dzigna Windows & Home Improvements",
  description:
    "How Dzigna Windows & Home Improvements handles the personal data submitted via our quote forms and website.",
  alternates: { canonical: "https://www.dzignawindows.co.uk/privacy-policy" },
};

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "Who we are",
    body: [
      "Dzigna Windows & Home Improvements (\"we\", \"us\", \"our\") is the data controller for the personal information you provide through this website.",
      "Address: 9 Bryn Rhedyn, Tonyrefail, Porth, CF39 8EZ.",
      "Phone: 07970 722720.",
      "Website: dzignawindows.co.uk.",
    ],
  },
  {
    heading: "What data we collect",
    body: [
      "We collect only the personal information you give us when you submit a quote request or contact form: your name, phone number, email address, postal address or postcode, and the details of your enquiry.",
      "If you use our quote configurator, we also record the product specifications and options you selected.",
    ],
  },
  {
    heading: "Why we collect it",
    body: [
      "We use your information for the sole purpose of responding to your enquiry, preparing a quote, and (with your consent) carrying out the work you ask us to.",
      "We do not use your data for marketing or profiling. We do not sell or share it with anyone for advertising.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "We keep your enquiry data for no longer than 2 years from the date of your last contact with us, unless we are legally required to keep it longer (for example for tax or contract records).",
      "You can ask us to delete your data sooner — see Your rights below.",
    ],
  },
  {
    heading: "Third parties",
    body: [
      "We do not sell your data.",
      "We use Resend (resend.com) as an email delivery provider to forward quote enquiries to our team inbox. Resend processes your data on our behalf under their own privacy terms.",
      "We host this website on Vercel (vercel.com) which receives standard server logs (IP, browser, request URL) needed to serve the site.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "You have the right to access the personal data we hold about you, to correct it if it is wrong, and to ask us to delete it.",
      "To exercise these rights, contact us at the address or phone number above. We will respond within 30 days.",
      "You also have the right to complain to the Information Commissioner's Office (ico.org.uk) if you think we've mishandled your data.",
    ],
  },
  {
    heading: "Cookies",
    body: [
      "We use only essential cookies needed for the site to work. We do not use tracking, analytics or advertising cookies.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: "88px", background: "var(--bg)", minHeight: "100vh" }}>
        <article
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "6rem 6% 6rem",
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
              marginBottom: "1.25rem",
            }}
          >
            — Privacy Policy
          </p>
          <h1
            style={{
              fontFamily: "var(--font-dm-serif), serif",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 400,
              color: "var(--ink)",
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
              marginBottom: "1.5rem",
            }}
          >
            How we handle your data.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.85rem",
              fontWeight: 500,
              color: "var(--muted)",
              marginBottom: "3.5rem",
            }}
          >
            Last updated: May 2026
          </p>

          {sections.map((s) => (
            <section key={s.heading} style={{ marginBottom: "2.75rem" }}>
              <h2
                style={{
                  fontFamily: "var(--font-dm-serif), serif",
                  fontSize: "clamp(1.4rem, 2.2vw, 1.75rem)",
                  fontWeight: 400,
                  color: "var(--ink)",
                  lineHeight: 1.15,
                  marginBottom: "1rem",
                  letterSpacing: "-0.005em",
                }}
              >
                {s.heading}
              </h2>
              {s.body.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: "var(--ink)",
                    marginBottom: "1rem",
                  }}
                >
                  {p}
                </p>
              ))}
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </>
  );
}
