import { getProjects } from "@/lib/data";
import { Metric } from "@/components/ui/Metric";

export function ProofMap() {
  const projects = getProjects();
  const metrics = projects
    .flatMap((project) => project.metrics)
    .slice(0, 4);

  return (
    <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric, index) => (
          <div key={`${metric.label}-${index}`} className="rounded-[26px] border border-neutral-200 bg-neutral-50 p-5">
            <div className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </div>
            <Metric value={metric.value} label={metric.label} />
          </div>
        ))}
      </div>
    </section>
  );
}
