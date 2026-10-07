import { BrandSection } from "@/components/brand-section";
import { Testimonials } from "@/components/testimonials";
import { ProjectMap } from "@/components/project-map";
import { HomeHero } from "@/components/home-hero";
import { PrinciplesSection } from "@/components/principles-section";
import { ProjectsPreview } from "@/components/projects-preview";
import { ServicesPreview } from "@/components/services-preview";
import { site } from "@/lib/site-data";

export default function HomePage() {
  return (
    <main id="main">
      <HomeHero />

      <section className="border-b border-border py-[var(--space-section)]">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8 lg:px-10">
          <h2 className="sr-only">About Faux Finishes</h2>
          <p className="font-serif text-[clamp(1.15rem,2.2vw,1.65rem)] font-light leading-[1.35] tracking-[-0.02em] text-ink">
            Since {site.established}, Faux Finishes has provided premier painting
            services across Australia. We&apos;re specialists in protective
            coatings, commercial finishes and residential programmes, with a
            track record of delivering major projects, remote logistics and
            lasting quality on every site.
          </p>
        </div>
      </section>

      <ServicesPreview />
      <PrinciplesSection />
      <ProjectsPreview />
      <ProjectMap />
      <BrandSection />
      <Testimonials />
    </main>
  );
}
