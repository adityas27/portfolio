import { getSkills } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export function Skills() {
  const skills = getSkills();

  return (
    <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-16">
      <SectionHeading eyebrow="Skills" title="A toolkit for building thoughtful products." />

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((group) => (
          <div key={group.category} className="rounded-[26px] border border-neutral-200 bg-white p-5">
            <h3 className="text-lg font-semibold tracking-[-0.05em] text-neutral-900">{group.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={`${group.category}-${item}`}>{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
