import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { ServiceGridCard } from "@/components/service-grid-card";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Major projects, remote area works, specialised coatings, rendering, epoxy floors, and more from Faux Finishes.",
};

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Services."
        title="Painting and coatings for every project."
        description="End-to-end painting systems for commercial, industrial, defence, and residential programmes across Australia."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Commercial highrise building exterior"
        priority
      />

      <section className="mx-auto max-w-[100rem] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid border-l border-t border-[#c8c8c0] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceGridCard
              key={service.slug}
              service={service}
              index={index}
              showViewLink
              headingLevel="h2"
            />
          ))}
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
