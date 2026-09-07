import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
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
      <section className="border-b border-border">
        <div className="mx-auto max-w-[100rem] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <p className="page-eyebrow">Services.</p>
          <h1 className="display-title mt-3 max-w-4xl">
            Painting and coatings for every project.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text sm:text-lg">
            End-to-end painting systems for commercial, industrial, defence, and
            residential programmes across Australia.
          </p>
        </div>
      </section>

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
