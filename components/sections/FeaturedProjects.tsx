import { getFeaturedProjects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-16">
      <SectionHeading eyebrow="Selected work" title="Projects that moved the needle." />

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
