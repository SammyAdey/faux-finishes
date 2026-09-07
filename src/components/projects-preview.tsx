import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectRow } from "@/components/project-row";
import { projects } from "@/lib/site-data";

export function ProjectsPreview() {
  return (
    <section className="border-b border-border py-[var(--space-section)]">
      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl text-left">
            <p className="text-sm font-normal text-ink">Explore further.</p>
            <h2 className="mt-3 font-serif text-[clamp(1.75rem,4vw,3rem)] font-light leading-[1.15] tracking-[-0.025em] text-ink">
              Every project is a proof of concept.
            </h2>
          </div>
          <Link href="/projects" className="focus-ring text-link shrink-0 text-sm">
            See all projects
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-12 border-l border-t border-[#c8c8c0]">
          {projects.slice(0, 4).map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
