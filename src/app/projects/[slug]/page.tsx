import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { ContactCta } from "@/components/contact-cta";
import { projects } from "@/lib/site-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main id="main">
      <section className="border-b border-border">
        <div className="mx-auto max-w-[100rem] px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
          <Link
            href="/projects"
            className="focus-ring text-sm text-muted transition-colors duration-200 hover:text-ink cursor-pointer"
          >
            ← All projects
          </Link>
          <p className="page-eyebrow mt-8">Project.</p>
          <h1 className="display-title mt-3 max-w-4xl">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text sm:text-lg">
            {project.summary}
          </p>
          <dl className="mt-10 grid gap-6 border-t border-[#c8c8c0] pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-xs tracking-[0.16em] text-muted uppercase">
                Status
              </dt>
              <dd className="mt-2 text-sm font-medium text-ink">
                {project.status}
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-muted uppercase">
                Location
              </dt>
              <dd className="mt-2 text-sm font-medium text-ink">
                {project.location}
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-muted uppercase">
                Client
              </dt>
              <dd className="mt-2 text-sm font-medium text-ink">
                {project.client}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto grid max-w-[100rem] gap-12 px-5 py-[var(--space-section)] sm:px-8 lg:grid-cols-12 lg:px-10">
        <div className="relative aspect-[16/10] overflow-hidden lg:col-span-7">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
        </div>
        <div className="lg:col-span-5">
          <h2 className="page-eyebrow">Project overview.</h2>
          <p className="mt-4 font-serif text-[clamp(1.15rem,2.2vw,1.5rem)] font-light leading-[1.4] tracking-[-0.02em] text-ink">
            {project.description}
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact" variant="text">
              Enquire about similar work
            </ButtonLink>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
