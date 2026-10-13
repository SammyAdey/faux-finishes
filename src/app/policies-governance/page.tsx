import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Policies / Governance",
  description:
    "Quality, safety, and governance commitments from Faux Finishes Pty Ltd.",
};

const policies = [
  {
    title: "Quality management",
    body: "We plan and deliver coating programmes to agreed specifications, with inspection checkpoints and clear communication across the project team.",
  },
  {
    title: "Work health and safety",
    body: "Safe work methods, competent supervision, and site-specific risk controls underpin every mobilisation — including complex and remote environments.",
  },
  {
    title: "Environmental responsibility",
    body: "We manage materials, waste, and containment carefully, including specialised work such as lead paint removal and anti-graffiti systems.",
  },
  {
    title: "Professional conduct",
    body: "Our teams represent Faux Finishes with integrity on every site, respecting client facilities, communities, and programme commitments.",
  },
];

export default function PoliciesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Governance."
        title="Policies / Governance."
        description="How we approach quality, safety, and responsible delivery across Australia-wide programmes."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Building facade and structure under careful maintenance"
        priority
      />

      <section className="mx-auto max-w-[100rem] px-5 py-[var(--space-section)] sm:px-8 lg:px-10">
        <div className="grid gap-0 border-l border-t border-[#c8c8c0] md:grid-cols-2">
          {policies.map((policy) => (
            <article
              key={policy.title}
              className="border-b border-r border-[#c8c8c0] p-6 sm:p-8"
            >
              <h2 className="font-serif text-[clamp(1.35rem,2.4vw,1.85rem)] font-light leading-snug tracking-[-0.02em] text-ink">
                {policy.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-text">
                {policy.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
