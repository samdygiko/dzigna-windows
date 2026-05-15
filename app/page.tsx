import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import StatStrip from "./components/StatStrip";
import WhatWeInstall from "./components/WhatWeInstall";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <StatStrip />
        <WhatWeInstall />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
