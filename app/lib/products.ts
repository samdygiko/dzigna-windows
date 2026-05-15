export type Product = {
  slug: string;
  name: string;
  short: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  included: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "windows",
    name: "Windows",
    short: "uPVC, aluminium and timber windows — double or triple glazed.",
    description:
      "Casement, sash, tilt-and-turn and bay windows in uPVC, aluminium and composite frames. Double or triple glazed for thermal performance, with A-rated units fitted as standard. Measured, manufactured and installed to your exact spec across South Wales.",
    heroImage: "/images/products/windows-hero.jpg",
    heroAlt: "Modern uPVC windows on a South Wales residential property",
    included: [
      "Free at-home survey and measurement",
      "A-rated double or triple glazed units",
      "All popular frame colours including Anthracite and Chartwell Green",
      "10-year guarantee on glazing and frames",
    ],
  },
  {
    slug: "doors",
    name: "Doors",
    short: "Composite front doors, French doors, patio doors.",
    description:
      "Secure, draught-free composite front doors that hold their finish for 25 years. French doors, patio sliders and back doors fitted to match your existing frames. Multi-point locking as standard, with a range of glass and panel designs.",
    heroImage: "/images/products/doors-hero.jpg",
    heroAlt: "A composite front door fitted to a UK home",
    included: [
      "Composite, uPVC and aluminium options",
      "Multi-point locking, insurance-approved",
      "Solid-core for thermal and acoustic insulation",
      "Wide range of styles, colours and glass panels",
    ],
  },
  {
    slug: "conservatories",
    name: "Conservatories",
    short: "Glass extensions that add real living space.",
    description:
      "Bespoke conservatories that add usable, year-round living space without losing the feel of your home. Victorian, Edwardian, Lean-To and P-Shape designs. Glass, polycarbonate or fully insulated warm roofs available.",
    heroImage: "/images/products/conservatories-hero.jpg",
    heroAlt: "A glass conservatory looking onto a garden",
    included: [
      "Free design consultation and plans",
      "Planning support where needed",
      "Choice of warm roof, glass or polycarbonate roofing",
      "Self-cleaning glass options",
    ],
  },
  {
    slug: "bifold-doors",
    name: "Bifold Doors",
    short: "Slim-line aluminium bifolds for rear extensions.",
    description:
      "Slim-line aluminium bifold doors that fold flat to open up a room. 2 to 6 panel configurations, with thermally broken frames in any RAL colour. Perfect for rear extensions, garden rooms and bright open-plan reworks.",
    heroImage: "/images/products/bifold-hero.jpg",
    heroAlt: "Aluminium bifold doors opening onto a garden patio",
    included: [
      "2 to 6 panel configurations",
      "Thermally broken aluminium frames",
      "Stainless steel running gear with 10-year warranty",
      "Toughened safety glass as standard",
    ],
  },
  {
    slug: "soffits-fascias",
    name: "Soffits & Fascias",
    short: "uPVC soffits, fascias and guttering for the roofline.",
    description:
      "Maintenance-free uPVC soffits, fascias and guttering to finish the roofline cleanly and keep weather out for decades. Available in white, brown, black and woodgrain finishes to match your property.",
    heroImage: "/images/products/soffits-hero.jpg",
    heroAlt: "Clean uPVC soffits and fascias on a UK home roofline",
    included: [
      "Full strip-out and disposal of old fascias",
      "uPVC and aluminium finishes",
      "Matching guttering and downpipes",
      "Backed by a 10-year guarantee",
    ],
  },
  {
    slug: "warm-roof-conversions",
    name: "Warm Roof Conversions",
    short: "Replace a cold conservatory roof with a usable warm one.",
    description:
      "Convert a tired or freezing conservatory roof into a fully insulated warm roof — usable year-round, no extra heating bills, dramatically reduced solar glare in summer. Choice of slate, Roman or plain tile finishes.",
    heroImage: "/images/products/warm-roof-hero.jpg",
    heroAlt: "A modern warm roof conversion on a residential property",
    included: [
      "Full structural survey and Building Regulations sign-off",
      "Enhanced insulation as standard",
      "Choice of slate, Roman and plain tile finishes",
      "Internal plastered ceiling included",
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
