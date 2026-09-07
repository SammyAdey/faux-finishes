import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/site-data";

type Props = {
  project: Project;
};

export function ProjectRow({ project }: Props) {
  return (
    <article className="group grid border-b border-r border-[#c8c8c0] lg:grid-cols-12">
      <div className="grid border-b border-[#c8c8c0] transition-[grid-template-columns] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:col-span-7 lg:grid-cols-[0fr_1fr] lg:border-b-0 lg:border-r lg:group-hover:grid-cols-[1fr_2fr] lg:group-focus-within:grid-cols-[1fr_2fr]">
        <div className="hidden min-w-0 overflow-hidden lg:block">
          <Link
            href={`/projects/${project.slug}`}
            tabIndex={-1}
            aria-hidden
            className="relative block h-full min-h-[14rem] w-full min-w-[12rem] overflow-hidden border-r border-[#c8c8c0] opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-focus-within:opacity-100"
          >
            <Image
              src={project.image}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="25vw"
            />
          </Link>
        </div>

        <div className="p-6 sm:p-8">
        <h3 className="font-display text-2xl font-normal tracking-tight text-ink sm:text-3xl">
          {project.title}
        </h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text">
            {project.summary}
          </p>
          <Link
            href={`/projects/${project.slug}`}
            className="focus-ring text-link mt-6 text-sm"
          >
            View full project
          </Link>
        </div>
      </div>

      <dl className="grid sm:grid-cols-2 lg:col-span-5">
        <div className="border-b border-[#c8c8c0] p-6 sm:border-r sm:p-8">
          <dt className="text-xs tracking-[0.16em] text-muted uppercase">
            Status
          </dt>
          <dd className="mt-2 text-sm font-medium text-ink">{project.status}</dd>
        </div>
        <div className="border-b border-[#c8c8c0] p-6 sm:p-8">
          <dt className="text-xs tracking-[0.16em] text-muted uppercase">
            Location
          </dt>
          <dd className="mt-2 text-sm font-medium text-ink">
            {project.location}
          </dd>
        </div>
        <div className="p-6 sm:col-span-2 sm:p-8">
          <dt className="text-xs tracking-[0.16em] text-muted uppercase">
            Client
          </dt>
          <dd className="mt-2 text-sm font-medium text-ink">{project.client}</dd>
        </div>
      </dl>
    </article>
  );
}
