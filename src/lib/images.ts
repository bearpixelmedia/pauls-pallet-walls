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
    alt: "Café interior with warm pallet wood wall behind the service counter",
  },
  packageKit: {
    src: "/images/pallet-wall-package-kit.jpg",
    alt: "Shippable pallet wall package kit with stacked boards and hardware box",
  },
  packageBoards: {
    src: "/images/pallet-wall-package-boards.jpg",
    alt: "Sorted pallet boards by length with fasteners and spacing sticks",
  },
  slatDetail: {
    src: "/images/pallet-wall-example-bedroom.jpg",
    alt: "Close detail of vertical pallet board texture",
  },
  boards: {
    src: "/images/pallet-wall-package-kit.jpg",
    alt: "Board stack ready to ship as a wall package",
  },
  commercial: {
    src: "/images/pallet-wall-example-cafe.jpg",
    alt: "Commercial café space with warm pallet wood walls",
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
