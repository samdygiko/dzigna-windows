export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "choosing-the-right-window-frame-for-a-welsh-home",
    title: "How to Choose the Right Window Frame for a Welsh Home",
    date: "12 May 2026",
    excerpt:
      "Welsh weather is a particular kind of test for a window — wet most of the year, salt-laced near the coast, and rarely still. Here's how we think about frames when we're specifying for a home in Tonyrefail, Porth or the Rhondda valleys.",
    body: [
      "Welsh weather is a particular kind of test for a window. It's wet most of the year, salt-laced near the coast, and rarely still. A frame that holds up beautifully on a south-facing terrace in Surrey will sometimes give in surprisingly quickly to a wind-driven January in the Rhondda.",
      "uPVC is the default for most homes we fit, and for good reason: it's cost-effective, low-maintenance, and modern profiles look far better than the chunky white frames people remember from the 1990s. We tend to specify multi-chambered profiles with steel reinforcement for anything beyond a small bathroom unit.",
      "Aluminium suits more contemporary homes and large openings — bi-folds, picture windows, full-height sliders. The slim sightlines are the draw. The cost premium over uPVC is real, but on the right property the result is hard to beat.",
      "Timber and timber-alternative composites are worth considering for listed buildings, period cottages, and conservation areas — the planners often insist on it, and frankly the look is right for the building. They need a bit more care, but a properly painted hardwood frame has another 30 years in it without complaint.",
      "Whatever the material, the seals and the installation matter more than the brochure. A premium frame fitted poorly leaks; a mid-range frame fitted well doesn't. We'd rather you spent the budget on getting both right than on the highest spec frame with corners cut on the install.",
    ],
  },
  {
    slug: "double-glazing-vs-triple-glazing-2026",
    title: "Double Glazing vs Triple Glazing: What's Worth It in 2026?",
    date: "5 May 2026",
    excerpt:
      "Triple glazing isn't always the right answer. For most South Wales homes, a well-specified double glazed unit will outperform a poorly specified triple — and cost less. Here's how the maths actually works.",
    body: [
      "Triple glazing has a reputation as the obvious upgrade, but for most South Wales homes the picture is more nuanced than \"more panes is better\". A well-specified A-rated double glazed unit will outperform a poorly specified triple — and cost less.",
      "The real number to look at is U-value, measured in W/m²K. The lower the better. Modern double glazing typically delivers a window U-value of around 1.2–1.4. Triple glazing brings that down to roughly 0.8–1.0. That sounds dramatic, but in a typical room with a 1.2m × 1.2m window, the practical saving is modest — perhaps £15–£25 a year on a north-facing room.",
      "Where triple glazing earns its money is acoustic performance and resilience against extreme cold. If you're near a busy road, a railway, or you have north-east exposed gables that feel cold to the touch in January, triple is worth the extra spend. If you're replacing tired single glazing in a mid-terrace, you'll get most of the comfort improvement from good double glazing for two-thirds of the cost.",
      "Our usual recommendation: A-rated argon-filled double glazing as the default, triple on north-facing elevations, bedrooms over busy streets, and any room where you've previously been driven to wear a jumper indoors in winter. That tends to give the best comfort-per-pound across a whole house.",
    ],
  },
  {
    slug: "5-signs-its-time-to-replace-your-front-door",
    title: "5 Signs It's Time to Replace Your Front Door",
    date: "28 April 2026",
    excerpt:
      "A front door doesn't usually fail dramatically. It deteriorates quietly until one wet morning it lets in a draught you can feel from the sofa. Five things we look for when we're called out for a survey.",
    body: [
      "A front door rarely fails dramatically. It deteriorates quietly, year by year, until one wet morning it lets in a draught you can feel from the sofa. Here are five signs we look for when we're called out for a survey in Tonyrefail or Porth.",
      "1. Draughts. If you can feel air moving across the threshold or around the frame on a windy day, the seals have given up. New seals sometimes fix it. Often they don't, because the door itself has warped a fraction off true.",
      "2. Condensation between the glass. If your door has a glazed panel and you can see misting inside the sealed unit, that unit has failed. The unit can usually be replaced without changing the whole door — but if the door is more than 20 years old it's often worth replacing the lot.",
      "3. Sticking or dropping. A door that no longer closes cleanly, or that you have to lift slightly to lock, is telling you the frame has shifted or the hinges have worn through. Both are fixable in the short term but rarely without a planned replacement in mind.",
      "4. Locks that feel insecure. Old multi-point locking mechanisms wear out. If your front door still relies on a single Yale, an insurer will likely tell you it's not up to standard — and a determined opportunist will agree.",
      "5. It looks tired. Less of a functional problem, more of an honest one. A composite door costs less than people often expect, lasts 25–30 years, and changes the front of the house entirely. Sometimes that's the right call.",
      "We're happy to give you an honest read on whether a repair or a replacement is the better call. We're not in the business of selling you a door you don't need.",
    ],
  },
];

export function findPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
