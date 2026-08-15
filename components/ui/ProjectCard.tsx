import Image from "next/image";
import type { Project } from "@/types/project";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const hasMetrics = Array.isArray(project.metrics) && project.metrics.length > 0;

  return (
    <article className={`group overflow-hidden rounded-[28px] border border-neutral-200 bg-white ${compact ? "p-4 sm:p-5" : "p-4 sm:p-6"}`}>
      <div className={`overflow-hidden rounded-[22px] border border-neutral-200 bg-neutral-100 ${compact ? "mb-4" : "mb-5"}`}>
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={720}
          className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] sm:h-72"
        />
      </div>

      <div className="mb-4 flex items-center justify-between gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
        <span>{project.year}</span>
        <span>{project.role}</span>
      </div>

      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-2xl font-semibold tracking-[-0.06em] text-neutral-900">{project.title}</h3>
        <span className="text-sm font-medium text-neutral-500">{project.number}</span>
      </div>

      <p className="mb-5 max-w-xl text-base leading-7 text-neutral-600">{project.shortDescription}</p>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      {hasMetrics ? (
        <div className="mb-6 grid gap-3 sm:grid-cols-2">
          {project.metrics.map((metric) => (
            <div key={`${project.id}-${metric.label}`} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3">
              <div className="text-xl font-semibold tracking-[-0.05em] text-neutral-900">{metric.value}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.12em] text-neutral-500">{metric.label}</div>
            </div>
          ))}
        </div>
      ) : null}

      <div className="flex flex-wrap gap-3">
        {project.githubUrl ? (
          <Button href={project.githubUrl} external variant="secondary">
            GitHub
          </Button>
        ) : null}
        {project.liveUrl ? (
          <Button href={project.liveUrl} external>
            Live demo
          </Button>
        ) : null}
        {project.caseStudyUrl ? (
          <Button href={project.caseStudyUrl} external variant="ghost">
            Case study
          </Button>
        ) : null}
      </div>
    </article>
  );
}
