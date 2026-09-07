import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceGridCard } from "@/components/service-grid-card";
import { services } from "@/lib/site-data";

const featured = services.slice(0, 6);

export function ServicesPreview() {
  return (
    <section className="border-b border-border py-[var(--space-section)]">
      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl text-left">
            <p className="text-sm font-normal text-ink">Services.</p>
            <h2 className="mt-3 font-serif text-[clamp(1.75rem,4vw,3rem)] font-light leading-[1.15] tracking-[-0.025em] text-ink">
              Painting and coatings for every project.
            </h2>
          </div>
          <Link href="/services" className="focus-ring text-link shrink-0 text-sm">
            See all services
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-12 grid border-l border-t border-[#c8c8c0] sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, index) => (
            <ServiceGridCard
              key={service.slug}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
