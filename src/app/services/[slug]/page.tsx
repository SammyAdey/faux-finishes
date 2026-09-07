import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { ContactCta } from "@/components/contact-cta";
import { services } from "@/lib/site-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const related = services.filter((item) => item.slug !== slug).slice(0, 4);

  return (
    <main id="main">
      <section className="border-b border-border">
        <div className="mx-auto max-w-[100rem] px-5 py-14 sm:px-8 lg:px-10">
          <Link
            href="/services"
            className="focus-ring text-sm text-muted transition-colors duration-200 hover:text-ink cursor-pointer"
          >
            ← All services
          </Link>
          <p className="page-eyebrow mt-8">Service.</p>
          <h1 className="display-title mt-3 max-w-4xl">{service.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text sm:text-lg">
            {service.summary}
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact" variant="text">
              Discuss this service
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[100rem] gap-12 px-5 py-[var(--space-section)] sm:px-8 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-7">
          <h2 className="page-eyebrow">Overview.</h2>
          <p className="mt-4 font-serif text-[clamp(1.15rem,2.2vw,1.5rem)] font-light leading-[1.4] tracking-[-0.02em] text-ink">
            {service.description}
          </p>
        </div>
        <aside className="border-t border-border pt-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:border-[#c8c8c0] lg:pt-0 lg:pl-10">
          <h2 className="page-eyebrow">Related services.</h2>
          <ul className="mt-5 space-y-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/services/${item.slug}`}
                  className="focus-ring text-sm font-medium text-ink transition-colors duration-200 hover:text-accent cursor-pointer"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <ContactCta />
    </main>
  );
}
