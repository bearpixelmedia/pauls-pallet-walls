import { site } from "@/lib/site";

/** Append UTM params for outbound / share destinations. */
export function withUtm(
  url: string,
  params: {
    source: string;
    medium: string;
    campaign: string;
    content?: string;
  },
): string {
  try {
    const u = new URL(url);
    u.searchParams.set("utm_source", params.source);
    u.searchParams.set("utm_medium", params.medium);
    u.searchParams.set("utm_campaign", params.campaign);
    if (params.content) u.searchParams.set("utm_content", params.content);
    return u.toString();
  } catch {
    return url;
  }
}

export function siteShareUrl(path = "/", content = "share") {
  const base = path.startsWith("http") ? path : `${site.url}${path}`;
  return withUtm(base, {
    source: "share",
    medium: "social",
    campaign: "site_share",
    content,
  });
}

export function referralUrl() {
  return withUtm(`${site.url}/`, {
    source: "referral",
    medium: "word_of_mouth",
    campaign: "tell_a_neighbor",
    content: "referral_snippet",
  });
}

export function shareLinks(path = "/", title: string = site.name) {
  const url = encodeURIComponent(siteShareUrl(path, path.replace(/\W+/g, "_") || "home"));
  const text = encodeURIComponent(title);
  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    x: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    email: `mailto:?subject=${text}&body=${encodeURIComponent(`Check out ${site.name}: ${siteShareUrl(path, "email_share")}`)}`,
    copyUrl: siteShareUrl(path, "copy_link"),
  };
}

/** Placeholder service-area ZIP prefixes for the checker stub. */
export const SERVICE_ZIP_PREFIXES = [
  "000", // placeholder — replace with Paul's real prefixes
  "100",
  "101",
  "102",
] as const;
