/** Shared package catalog + wall estimating helpers (placeholder pricing). */

export const BOARD_COVER_IN = 3.5; // typical pallet board face width
export const WASTE_FACTOR = 1.12; // ~12% waste / sorting

export const packageCatalog = [
  {
    id: "starter",
    name: "Starter Strip",
    size: "Approx. 6–8 ft feature",
    price: "$349",
    note: "Placeholder pricing — replace with Paul's rates",
    minWidthFt: 0,
    maxWidthFt: 8,
    includes: [
      "Pre-cut, sanded pallet boards",
      "Layout guide & spacing chart",
      "Fastener kit + finish sample",
    ],
  },
  {
    id: "accent",
    name: "Room Accent",
    size: "Approx. 10–14 ft wall",
    price: "$789",
    note: "Placeholder pricing — replace with Paul's rates",
    featured: true,
    minWidthFt: 8,
    maxWidthFt: 14,
    includes: [
      "Matched board set, kiln-dried look",
      "Stain/oil finish options",
      "Corner & trim pieces",
      "Install video walkthrough",
    ],
  },
  {
    id: "feature",
    name: "Full Feature",
    size: "Approx. 16–22 ft statement wall",
    price: "$1,450",
    note: "Placeholder pricing — replace with Paul's rates",
    minWidthFt: 14,
    maxWidthFt: 22,
    includes: [
      "Premium sorted boards",
      "Custom height & pattern",
      "Finish applied before ship",
      "Priority packing & support",
    ],
  },
] as const;

export type PackageId = (typeof packageCatalog)[number]["id"];
export type ProjectType = "package" | "construction" | "commercial";

export type EstimateInput = {
  widthFt: number;
  heightFt: number;
  projectType: ProjectType;
};

export type EstimateResult = {
  areaSqFt: number;
  boardLinearFt: number;
  boardCount40: number;
  recommended: {
    id: string;
    name: string;
    reason: string;
    price?: string;
    href: string;
  };
};

export function estimateWall(input: EstimateInput): EstimateResult | null {
  const widthFt = Number(input.widthFt);
  const heightFt = Number(input.heightFt);
  if (
    !Number.isFinite(widthFt) ||
    !Number.isFinite(heightFt) ||
    widthFt <= 0 ||
    heightFt <= 0
  ) {
    return null;
  }

  const areaSqFt = Math.round(widthFt * heightFt * 10) / 10;
  // Horizontal board rows: height / cover width → rows; each row ≈ wall width in LF
  const rows = (heightFt * 12) / BOARD_COVER_IN;
  const boardLinearFt =
    Math.round(widthFt * rows * WASTE_FACTOR * 10) / 10;
  const boardCount40 = Math.ceil(boardLinearFt / (40 / 12));

  const recommended = recommendPackage({
    widthFt,
    heightFt,
    projectType: input.projectType,
    areaSqFt,
  });

  return { areaSqFt, boardLinearFt, boardCount40, recommended };
}

function recommendPackage(args: {
  widthFt: number;
  heightFt: number;
  projectType: ProjectType;
  areaSqFt: number;
}): EstimateResult["recommended"] {
  const { widthFt, heightFt, projectType, areaSqFt } = args;

  if (projectType === "commercial" || areaSqFt >= 180) {
    return {
      id: "commercial",
      name: "Commercial install",
      reason:
        "Larger or commercial walls usually need on-site construction for durability and layout.",
      href: "/services/commercial",
    };
  }

  if (projectType === "construction" || heightFt > 10 || widthFt > 22) {
    return {
      id: "construction",
      name: "On-site construction",
      reason:
        "This size or preference fits professional measure, hang, and finish better than a shipped kit.",
      href: "/services/construction",
    };
  }

  const match =
    packageCatalog.find(
      (pkg) => widthFt > pkg.minWidthFt && widthFt <= pkg.maxWidthFt,
    ) ?? packageCatalog[packageCatalog.length - 1];

  return {
    id: match.id,
    name: match.name,
    price: match.price,
    reason: `About ${widthFt} ft wide fits the ${match.name} kit range (${match.size}).`,
    href: "/services/packages",
  };
}
