const steps = [
  {
    title: "Share the space",
    body: "Send wall dimensions, photos, and whether you want a package or full construction.",
  },
  {
    title: "Pick a look",
    body: "Choose pattern, board tone, and finish. Paul confirms materials and a clear estimate.",
  },
  {
    title: "Ship or install",
    body: "Kits arrive ready to hang — or Paul schedules an on-site build and walks you through care.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-ash/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sage">
            How it works
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Three steps from blank wall to wood feature.
          </h2>
        </div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-pine/20 bg-paper font-display text-lg text-pine">
                {index + 1}
              </div>
              <h3 className="mt-5 font-display text-xl tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
