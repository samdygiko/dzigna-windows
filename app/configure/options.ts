export type OptionGroup = { label: string; choices: string[] };
export type ProductConfig = {
  slug: string;
  name: string;
  blurb: string;
  groups: OptionGroup[];
};

export const CONFIGURATOR_PRODUCTS: ProductConfig[] = [
  {
    slug: "windows",
    name: "Windows",
    blurb: "Casement, sash, tilt-and-turn or bay — fitted in uPVC, aluminium or timber.",
    groups: [
      { label: "Frame material", choices: ["uPVC", "Aluminium", "Timber"] },
      { label: "Glazing", choices: ["Double", "Triple"] },
      { label: "Style", choices: ["Casement", "Sash", "Tilt & Turn", "Bay"] },
      {
        label: "Colour",
        choices: ["White", "Grey", "Black", "Cream", "Chartwell Green", "Irish Oak"],
      },
    ],
  },
  {
    slug: "doors",
    name: "Doors",
    blurb: "Composite front doors, French doors, patio doors and back doors.",
    groups: [
      { label: "Type", choices: ["Front Door", "Back Door", "French Doors", "Patio Doors"] },
      { label: "Material", choices: ["Composite", "uPVC", "Aluminium"] },
      {
        label: "Colour",
        choices: ["White", "Grey", "Black", "Cream", "Anthracite", "Rosewood"],
      },
    ],
  },
  {
    slug: "conservatories",
    name: "Conservatories",
    blurb: "Glass extensions designed and built around your home.",
    groups: [
      { label: "Style", choices: ["Victorian", "Edwardian", "Lean-To", "P-Shape"] },
      { label: "Roof", choices: ["Glass", "Polycarbonate", "Warm Roof"] },
      { label: "Frame", choices: ["uPVC", "Aluminium"] },
    ],
  },
  {
    slug: "bifold-doors",
    name: "Bifold Doors",
    blurb: "Slim-line bifolds that fold flat to open up a room.",
    groups: [
      { label: "Panels", choices: ["2", "3", "4", "5", "6"] },
      { label: "Material", choices: ["uPVC", "Aluminium"] },
      { label: "Colour", choices: ["White", "Grey", "Black", "Anthracite"] },
    ],
  },
  {
    slug: "soffits-fascias",
    name: "Soffits & Fascias",
    blurb: "uPVC and aluminium roofline finishes that fit straight on.",
    groups: [
      { label: "Material", choices: ["uPVC", "Aluminium"] },
      { label: "Colour", choices: ["White", "Brown", "Black", "Woodgrain"] },
    ],
  },
  {
    slug: "warm-roof-conversions",
    name: "Warm Roof Conversions",
    blurb: "Replace a cold conservatory or extension roof with a usable warm one.",
    groups: [
      { label: "Existing structure", choices: ["Conservatory", "Extension", "Flat Roof"] },
      { label: "Tile style", choices: ["Slate", "Roman", "Plain"] },
      { label: "Insulation", choices: ["Standard", "Enhanced"] },
    ],
  },
];

export function getConfigProduct(slug: string): ProductConfig | undefined {
  return CONFIGURATOR_PRODUCTS.find((p) => p.slug === slug);
}
