"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { estimateWall, type ProjectType } from "@/lib/packages";
import {
  STORAGE_KEYS,
  readJson,
  writeJson,
  type SavedEstimate,
} from "@/lib/persist";
import { SERVICE_ZIP_PREFIXES } from "@/lib/marketing";
import { site } from "@/lib/site";

const inputClass =
  "w-full rounded-sm border border-pine/20 bg-paper px-3 py-2.5 outline-none transition-colors focus:border-brass";

export function WallTools() {
  const [widthFt, setWidthFt] = useState("12");
  const [heightFt, setHeightFt] = useState("8");
  const [projectType, setProjectType] = useState<ProjectType>("package");
  const [zip, setZip] = useState("");
  const [areaResult, setAreaResult] = useState<"idle" | "in" | "ship" | "ask">(
    "idle",
  );

  useEffect(() => {
    const saved = readJson<SavedEstimate>(STORAGE_KEYS.estimate);
    if (!saved) return;
    if (saved.widthFt) setWidthFt(saved.widthFt);
    if (saved.heightFt) setHeightFt(saved.heightFt);
    if (
      saved.projectType === "package" ||
      saved.projectType === "construction" ||
      saved.projectType === "commercial"
    ) {
      setProjectType(saved.projectType);
    }
  }, []);

  useEffect(() => {
    writeJson(STORAGE_KEYS.estimate, {
      widthFt,
      heightFt,
      projectType,
      updatedAt: new Date().toISOString(),
    } satisfies SavedEstimate);
  }, [widthFt, heightFt, projectType]);

  const estimate = useMemo(
    () =>
      estimateWall({
        widthFt: Number(widthFt),
        heightFt: Number(heightFt),
        projectType,
      }),
    [widthFt, heightFt, projectType],
  );

  function checkZip(value: string) {
    const digits = value.replace(/\D/g, "");
    if (digits.length < 3) {
      setAreaResult("idle");
      return;
    }
    const prefix = digits.slice(0, 3);
    if (SERVICE_ZIP_PREFIXES.some((p) => prefix.startsWith(p))) {
      setAreaResult("in");
    } else if (projectType === "package") {
      setAreaResult("ship");
    } else {
      setAreaResult("ask");
    }
  }

  return (
    <section id="tools" className="relative bg-ash/50 py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
            Helpful tools
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Size the wall. Pick a path.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">
            Rough board counts and a package (or install) recommendation —
            saved in this browser so you can come back later.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="border border-pine/15 bg-paper p-6 sm:p-8">
            <h3 className="font-display text-2xl text-ink">
              Wall size &amp; board estimator
            </h3>
            <p className="mt-2 text-sm text-ink/60">
              Assumes ~{3.5}&quot; board face coverage + ~12% waste. Placeholder
              math — Paul can tune board widths later.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">
                  Width (ft)
                </span>
                <input
                  inputMode="decimal"
                  value={widthFt}
                  onChange={(e) => setWidthFt(e.target.value)}
                  className={inputClass}
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">
                  Height (ft)
                </span>
                <input
                  inputMode="decimal"
                  value={heightFt}
                  onChange={(e) => setHeightFt(e.target.value)}
                  className={inputClass}
                />
              </label>
            </div>
            <label className="mt-4 block text-sm">
              <span className="mb-1.5 block font-medium text-ink">
                What are you leaning toward?
              </span>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value as ProjectType)}
                className={inputClass}
              >
                <option value="package">DIY package / kit</option>
                <option value="construction">On-site construction</option>
                <option value="commercial">Commercial space</option>
              </select>
            </label>

            {estimate ? (
              <div className="mt-6 space-y-3 border-t border-pine/10 pt-6 animate-fade-in">
                <p className="text-sm text-ink/70">
                  Area ≈{" "}
                  <strong className="text-ink">{estimate.areaSqFt} sq ft</strong>
                </p>
                <p className="text-sm text-ink/70">
                  Board linear feet ≈{" "}
                  <strong className="text-ink">{estimate.boardLinearFt} LF</strong>{" "}
                  (~{estimate.boardCount40} boards at 40&quot;)
                </p>
                <div className="rounded-sm border border-brass/30 bg-brass/10 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">
                    Recommended
                  </p>
                  <p className="mt-1 font-display text-xl text-pine">
                    {estimate.recommended.name}
                    {estimate.recommended.price
                      ? ` · ${estimate.recommended.price} est.`
                      : ""}
                  </p>
                  <p className="mt-1 text-sm text-ink/65">
                    {estimate.recommended.reason}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href={estimate.recommended.href}
                      className="text-sm font-semibold text-pine hover:underline"
                    >
                      Learn more →
                    </Link>
                    <a
                      href="#quote"
                      className="inline-flex rounded-sm bg-pine px-3.5 py-2 text-sm font-semibold text-ash hover:bg-canopy"
                    >
                      Use this in quote
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <p className="mt-6 text-sm text-ink/50">
                Enter width and height greater than zero.
              </p>
            )}
          </div>

          <div className="flex flex-col gap-8">
            <div className="border border-pine/15 bg-paper p-6 sm:p-8">
              <h3 className="font-display text-2xl text-ink">
                Service-area check
              </h3>
              <p className="mt-2 text-sm text-ink/60">
                Stub checker for {site.location.areaLabel}. Replace ZIP prefixes
                in <code className="text-xs">src/lib/marketing.ts</code> with
                Paul&apos;s real market.
              </p>
              <label className="mt-6 block text-sm">
                <span className="mb-1.5 block font-medium text-ink">ZIP code</span>
                <input
                  inputMode="numeric"
                  autoComplete="postal-code"
                  placeholder="e.g. 10001"
                  value={zip}
                  onChange={(e) => {
                    setZip(e.target.value);
                    checkZip(e.target.value);
                  }}
                  className={inputClass}
                />
              </label>
              {areaResult === "in" ? (
                <p className="mt-4 text-sm text-pine">
                  Looks like core service area — packages and installs welcome.
                </p>
              ) : null}
              {areaResult === "ship" ? (
                <p className="mt-4 text-sm text-ink/70">
                  Outside the stub install radius — kits can still ship. Ask
                  about travel for construction.
                </p>
              ) : null}
              {areaResult === "ask" ? (
                <p className="mt-4 text-sm text-ink/70">
                  Outside the stub radius for installs — request a quote and
                  we&apos;ll confirm travel.
                </p>
              ) : null}
              <Link
                href="/service-area"
                className="mt-4 inline-flex text-sm font-semibold text-pine hover:underline"
              >
                Full service area →
              </Link>
            </div>

            <div className="border-t-2 border-brass bg-gradient-to-br from-ash/80 to-paper p-6 sm:p-8">
              <h3 className="font-display text-2xl text-ink">
                Ready for a real number?
              </h3>
              <p className="mt-2 text-sm text-ink/65">
                Your size draft carries into the quote form automatically.
              </p>
              <a
                href="#quote"
                className="mt-5 inline-flex rounded-sm bg-pine px-5 py-3 text-sm font-semibold text-ash hover:bg-canopy"
              >
                Request a quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
