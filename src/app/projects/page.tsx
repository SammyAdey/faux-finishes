import { ProjectMap } from "@/components/project-map";
import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
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
      <section className="border-b border-border">
        <div className="mx-auto max-w-[100rem] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <p className="page-eyebrow">Projects.</p>
          <h1 className="display-title mt-3 max-w-4xl">
            Every project is a proof of concept.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text sm:text-lg">
            Every project in our portfolio is built on the same foundation:
            speed, cost discipline, and quality — backed by the logistics and
            coating systems to deliver anywhere in Australia.
          </p>
        </div>
      </section>

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
