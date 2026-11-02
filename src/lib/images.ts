/**
 * Pallet wall example + package imagery.
 * Using Unsplash remote URLs until local JPEG sidecars are fully on the deploy branch.
 * Replace with Paul's real project photos when available.
 */
export const images = {
  hero: {
    src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1800&q=80",
    alt: "Living room with a warm wood accent wall",
  },
  exampleLiving: {
    src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1400&q=80",
    alt: "Living room featuring a rustic wood feature wall",
  },
  exampleBedroom: {
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=80",
    alt: "Bedroom with a vertical wood accent wall behind the bed",
  },
  exampleCafe: {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=80",
    alt: "Café interior with warm wood wall texture",
  },
  packageKit: {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=80",
    alt: "Stacked sanded boards ready for a wood wall install",
  },
  packageBoards: {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    alt: "Workshop boards and lumber laid out for a project",
  },
  slatDetail: {
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=80",
    alt: "Close detail of a vertical wood feature wall",
  },
  boards: {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=80",
    alt: "Board stack ready to ship as a wall package",
  },
  commercial: {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=80",
    alt: "Commercial café space with warm wood walls",
  },
  livingRoom: {
    src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1400&q=80",
    alt: "Residential living room wood wall example",
  },
} as const;

export const examples = [
  {
    key: "living",
    title: "Living room feature",
    caption: "Horizontal mixed-tone boards as a full accent wall.",
    image: images.exampleLiving,
  },
  {
    key: "bedroom",
    title: "Bedroom headboard wall",
    caption: "Vertical planks for a calm, textured bedroom backdrop.",
    image: images.exampleBedroom,
  },
  {
    key: "cafe",
    title: "Café / commercial bar",
    caption: "Rustic full-wall install behind a service counter.",
    image: images.exampleCafe,
  },
] as const;

export const packageShots = [
  {
    key: "kit",
    title: "Shippable package kit",
    caption: "Stacked sanded boards, fastener box, layout guide, finish sample.",
    image: images.packageKit,
  },
  {
    key: "contents",
    title: "What's in the box",
    caption: "Boards sorted by length with hardware and spacing sticks.",
    image: images.packageBoards,
  },
] as const;
