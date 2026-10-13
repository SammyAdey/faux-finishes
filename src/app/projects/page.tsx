import { ProjectMap } from "@/components/project-map";
import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { ProjectRow } from "@/components/project-row";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected Faux Finishes projects including 111 Eagle Street, RAAF Amberley, Christmas Island IPRC, and more.",
};

export default function ProjectsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Projects."
        title="Every project is a proof of concept."
        description="Every project in our portfolio is built on the same foundation: speed, cost discipline, and quality — backed by the logistics and coating systems to deliver anywhere in Australia."
        image="/projects/modern-facade.png"
        imageAlt="Modern mixed-use building facade with clean architectural finishes"
        priority
      />

      <section className="mx-auto max-w-[100rem] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="border-l border-t border-[#c8c8c0]">
          {projects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <ProjectMap />
      <ContactCta />
    </main>
  );
}
