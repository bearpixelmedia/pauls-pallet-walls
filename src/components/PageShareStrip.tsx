import { ShareBar } from "@/components/ShareBar";

type Props = {
  path: string;
  title: string;
};

/** Server-friendly wrap — ShareBar is client. */
export function PageShareStrip({ path, title }: Props) {
  return (
    <section className="border-t border-pine/10 bg-paper py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ShareBar path={path} title={title} />
        <p className="mt-3 text-xs text-ink/45">
          Links include UTM tags so Paul can see which shares convert.
        </p>
      </div>
    </section>
  );
}
