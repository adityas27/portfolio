import { getAchievements } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Achievements() {
  const achievements = getAchievements();

  return (
    <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-16">
      <SectionHeading eyebrow="Highlights" title="Moments that shaped how I work." />

      <div className="mt-8 space-y-4">
        {achievements.map((achievement) => (
          <article key={achievement.id} className="flex flex-col gap-3 rounded-[26px] border border-neutral-200 bg-white p-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">{achievement.date}</div>
              <h3 className="mt-2 text-xl font-semibold tracking-[-0.05em] text-neutral-900">{achievement.title}</h3>
              <p className="mt-2 max-w-3xl text-base leading-7 text-neutral-600">{achievement.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
