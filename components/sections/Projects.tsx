import { getProjects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  const projects = getProjects().filter((project) => !project.featured);

  return (
    <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-16">
      <SectionHeading eyebrow="More work" title="Additional product and platform work." />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} compact />
        ))}
      </div>
    </section>
  );
}
