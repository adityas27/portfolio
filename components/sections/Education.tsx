import { getEducation } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  const education = getEducation();

  return (
    <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-16">
      <SectionHeading eyebrow="Education" title="Foundations for systems, design, and engineering." />

      <div className="mt-8 space-y-6">
        {education.map((item) => (
          <article key={item.id} className="rounded-[28px] border border-neutral-200 bg-white p-5 sm:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">{item.institution}</div>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.06em] text-neutral-900">{item.degree}</h3>
              </div>

              <div className="text-sm leading-6 text-neutral-500">
                <div>{item.startYear} – {item.endYear}</div>
                <div>{item.location}</div>
              </div>
            </div>

            {item.description ? <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-600">{item.description}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
