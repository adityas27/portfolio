import { getExperience } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export function Experience() {
  const experience = getExperience();

  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-16">
      <SectionHeading eyebrow="Where I’ve worked" title="Experience built around product and systems thinking." />

      <div className="mt-8 space-y-6">
        {experience.map((item) => (
          <article key={item.id} className="rounded-[28px] border border-neutral-200 bg-white p-5 sm:p-6">
            <div className="flex flex-col gap-4 border-b border-neutral-200 pb-5 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                  {item.company}
                </div>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.06em] text-neutral-900">{item.role}</h3>
              </div>

              <div className="text-sm leading-6 text-neutral-500">
                <div>{item.startDate} – {item.current ? "Present" : item.endDate}</div>
                <div>{item.location}</div>
              </div>
            </div>

            <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-600">{item.description}</p>

            <ul className="mt-5 space-y-2 text-base leading-7 text-neutral-700">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-900" aria-hidden="true" />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {item.technologies.map((technology) => (
                <Tag key={`${item.id}-${technology}`}>{technology}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
