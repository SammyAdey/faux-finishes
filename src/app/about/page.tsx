import { CompanyStory } from "@/components/company-story";
import { Testimonials } from "@/components/testimonials";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { recentProjects, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Faux Finishes has provided premier painting services across Australia since 1992.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="About."
        title={`Painters of Distinction since ${site.established}.`}
        description="Faux Finishes Pty Ltd delivers premier painting and protective coating services for commercial, industrial, defence, and residential clients across Australia."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Bright commercial workspace with refined interior finishes"
        priority
      />

      <section className="mx-auto grid max-w-[100rem] gap-12 px-5 py-[var(--space-section)] sm:px-8 lg:grid-cols-12 lg:px-10">
        <div className="space-y-6 lg:col-span-7">
          <p className="font-serif text-[clamp(1.15rem,2.2vw,1.5rem)] font-light leading-[1.4] tracking-[-0.02em] text-ink">
            For more than three decades our teams have built a reputation for
            reliable programmes, specialised coating systems, and the logistics
            to work anywhere — from Brisbane highrise cores to remote island and
            mining facilities.
          </p>
          <p className="text-base leading-relaxed text-text sm:text-lg">
            We partner with builders, facility managers, and asset owners who
            need finishes that meet specification, schedule, and site safety
            requirements without compromise.
          </p>
        </div>
        <aside className="space-y-10 border-t border-border pt-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:border-[#c8c8c0] lg:pt-0 lg:pl-10">
          <div>
            <h2 className="page-eyebrow">Governance.</h2>
            <p className="mt-3 text-sm leading-relaxed text-text">
              Review our policies and governance commitments for quality,
              safety, and responsible delivery.
            </p>
            <Link
              href="/policies-governance"
              className="focus-ring text-link mt-4 text-sm"
            >
              Policies / Governance
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div>
            <h2 className="page-eyebrow">Landmark programmes.</h2>
            <ul className="mt-4 space-y-2.5">
              {recentProjects.slice(0, 5).map((item) => (
                <li key={item} className="text-sm leading-relaxed text-text">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <CompanyStory />
      <Testimonials />
      <ContactCta />
    </main>
  );
}
