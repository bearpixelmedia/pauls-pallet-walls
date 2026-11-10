/** Lightweight browser persistence for estimator + quote drafts. */

export const STORAGE_KEYS = {
  estimate: "ppw.estimate.v1",
  quoteDraft: "ppw.quoteDraft.v1",
  lastLead: "ppw.lastLead.v1",
  newsletter: "ppw.newsletter.v1",
} as const;

export type SavedEstimate = {
  widthFt: string;
  heightFt: string;
  projectType: string;
  updatedAt: string;
};

export type SavedQuoteDraft = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  wallWidthFt: string;
  wallHeightFt: string;
  city: string;
  zip: string;
  notes: string;
  newsletter: boolean;
  updatedAt: string;
};

export function readJson<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function writeJson(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore quota / private mode
  }
}

export function clearKey(key: string) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(key);
  } catch {
    // ignore
  }
}
