"use client";

import { useState } from "react";
import { shareLinks } from "@/lib/marketing";
import { site } from "@/lib/site";

type Props = {
  path?: string;
  title?: string;
  compact?: boolean;
};

export function ShareBar({
  path = "/",
  title = site.name,
  compact = false,
}: Props) {
  const links = shareLinks(path, title);
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(links.copyUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const linkClass = compact
    ? "text-xs font-semibold text-pine hover:underline"
    : "rounded-sm border border-pine/20 px-3 py-1.5 text-xs font-semibold text-pine hover:border-pine/40 hover:bg-ash/60";

  return (
    <div className={compact ? "flex flex-wrap items-center gap-3" : "space-y-3"}>
      {!compact ? (
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage">
          Share this page
        </p>
      ) : null}
      <div className="flex flex-wrap gap-2">
        <a
          href={links.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Facebook
        </a>
        <a
          href={links.x}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          X / Twitter
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          LinkedIn
        </a>
        <a href={links.email} className={linkClass}>
          Email
        </a>
        <button type="button" onClick={copy} className={linkClass}>
          {copied ? "Copied" : "Copy link"}
        </button>
      </div>
    </div>
  );
}
