/**
 * Pallet wall example + package imagery.
 * Generated product/example shots live in /public/images (placeholders until Paul supplies real photos).
 */
export const images = {
  hero: {
    src: "/images/pallet-wall-example-living.jpg",
    alt: "Living room with a floor-to-ceiling horizontal pallet wood accent wall",
  },
  exampleLiving: {
    src: "/images/pallet-wall-example-living.jpg",
    alt: "Living room featuring a rustic horizontal pallet board feature wall",
  },
  exampleBedroom: {
    src: "/images/pallet-wall-example-bedroom.jpg",
    alt: "Bedroom with a vertical pallet wood accent wall behind the bed",
  },
  exampleCafe: {
    src: "/images/pallet-wall-example-cafe.jpg",
    alt: "Café bar backed by a full rustic pallet wood wall",
  },
  packageKit: {
    src: "/images/pallet-wall-package-kit.jpg",
    alt: "DIY pallet wall package kit with stacked boards, hardware, guide, and finish sample",
  },
  packageBoards: {
    src: "/images/pallet-wall-package-boards.jpg",
    alt: "Pallet wall package contents laid out: cut boards, fasteners, spacers, and instructions",
  },
  // Back-compat aliases used across older sections
  slatDetail: {
    src: "/images/pallet-wall-example-bedroom.jpg",
    alt: "Close detail of a vertical pallet wood feature wall",
  },
  boards: {
    src: "/images/pallet-wall-package-kit.jpg",
    alt: "Pallet wall package kit ready to ship",
  },
  commercial: {
    src: "/images/pallet-wall-example-cafe.jpg",
    alt: "Commercial café space with a pallet wood feature wall",
  },
  livingRoom: {
    src: "/images/pallet-wall-example-living.jpg",
    alt: "Residential living room pallet wall example",
  },
} as const;

export const examples = [
  {
    key: "living",
    title: "Living room feature",
    caption: "Horizontal mixed-tone pallet boards as a full accent wall.",
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
    title: "What’s in the box",
    caption: "Boards sorted by length with hardware and spacing sticks.",
    image: images.packageBoards,
  },
] as const;
