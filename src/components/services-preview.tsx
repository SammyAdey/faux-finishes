import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MaterialSample } from "@/components/material-sample";
import { services } from "@/lib/site-data";
import styles from "./home-finishes.module.css";

const featured = [
  {
    slug: "major-projects",
    title: "Commercial painting",
    summary: "From multi-storey buildings to major infrastructure. The people and precision for projects of every scale.",
    finish: "purple" as const,
    label: "Facade",
  },
  {
    slug: "specialised-coatings-and-finishes",
    title: "Protective coatings",
    summary: "Coating systems matched to the surface, the environment and the life of your asset.",
    finish: "steel" as const,
    label: "Protect",
  },
  {
    slug: "textured-finishes",
    title: "Specialised finishes",
    summary: "Texture, colour and architectural detail. Carefully applied to bring a surface to life.",
    finish: "yellow" as const,
    label: "Texture",
  },
];

const additional = services.filter((service) =>
  ["complex-environments", "remote-area-projects", "maintenance-and-remedial-works", "rendering"].includes(service.slug),
);

export function ServicesPreview() {
  return (
    <section aria-labelledby="home-services-title" className="border-b border-border py-[var(--space-section)]">
      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-10">
        <div className={styles.sectionHeader}>
          <div>
            <p className="page-eyebrow">Services.</p>
            <h2 id="home-services-title" className={`font-serif ${styles.sectionHeading}`}>
              Painting and coatings<br className="hidden sm:block" /> for every project.
            </h2>
          </div>
          <Link href="/services" className="focus-ring text-link shrink-0 self-start text-sm md:self-end">
            See all services <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className={styles.servicesGrid}>
          {featured.map((service, index) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className={`focus-ring ${styles.serviceCard}`}>
              <div className={styles.serviceImage}>
                <MaterialSample finish={service.finish} className={styles.serviceMaterial} />
                <span className={styles.sampleLabel}>{service.label}</span>
                <span className={styles.serviceArrow}>
                  <ArrowUpRight className="size-5" aria-hidden="true" />
                </span>
              </div>
              <div className={styles.serviceCopy}>
                <span className="font-display text-xs text-secondary">{String(index + 1).padStart(2, "0")}</span>
                <h3 className={`font-serif ${styles.serviceTitle}`}>{service.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-text sm:text-base">{service.summary}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.additionalServices}>
          <p className="text-sm text-secondary">And beyond.</p>
          <div className="flex flex-wrap gap-x-7 gap-y-2">
            {additional.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="focus-ring text-link min-h-11 text-sm">
                {service.title} <ArrowUpRight className="size-3.5 shrink-0" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
