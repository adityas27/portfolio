import { getProfile } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  const profile = getProfile();

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-16">
      <SectionHeading eyebrow="About" title="I care about clarity, craft, and useful systems." />

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-neutral-200 bg-white p-5 sm:p-6">
          <p className="text-lg leading-8 text-neutral-700">{profile.longBio}</p>
        </div>

        <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-5 sm:p-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">Current focus</p>
          <ul className="mt-4 space-y-3 text-base leading-7 text-neutral-700">
            <li>• Product systems that feel calm and easy to trust.</li>
            <li>• Frontend work with strong architectural discipline.</li>
            <li>• Cross-functional delivery with clear user value.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
