import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Dzigna Windows & Home Improvements | Double Glazing Tonyrefail",
  description:
    "Supply and fit of double and triple glazed windows, doors and home improvements in Tonyrefail, Porth and South Wales. Free quotes. Call 07970 722720.",
  keywords:
    "double glazing Tonyrefail, windows Porth, uPVC windows South Wales, door fitting Rhondda, triple glazing Wales, home improvements Tonyrefail, window installation CF39",
  metadataBase: new URL("https://www.dzignawindows.co.uk"),
  alternates: { canonical: "https://www.dzignawindows.co.uk" },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Dzigna Windows & Home Improvements",
    description:
      "Quality windows, doors and home improvements across South Wales. Call 07970 722720.",
    url: "https://www.dzignawindows.co.uk",
    siteName: "Dzigna Windows & Home Improvements",
    images: [
      {
        url: "/images/dzigna-logo.png",
        width: 1200,
        height: 630,
        alt: "Dzigna Windows & Home Improvements",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dzigna Windows & Home Improvements",
    description: "Quality windows, doors and home improvements across South Wales.",
    images: ["/images/dzigna-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Dzigna Windows & Home Improvements",
  image: "https://www.dzignawindows.co.uk/images/dzigna-logo.png",
  logo: "https://www.dzignawindows.co.uk/images/dzigna-logo.png",
  "@id": "https://www.dzignawindows.co.uk",
  url: "https://www.dzignawindows.co.uk",
  telephone: "07970722720",
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9 Bryn Rhedyn",
    addressLocality: "Tonyrefail",
    addressRegion: "Porth",
    postalCode: "CF39 8EZ",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5985,
    longitude: -3.4318,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.google.com/maps/search/Dzigna+Windows+Tonyrefail",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
