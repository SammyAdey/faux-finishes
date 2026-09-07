import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";

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
      <section className="border-b border-border">
        <div className="mx-auto max-w-[100rem] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <p className="page-eyebrow">Governance.</p>
          <h1 className="display-title mt-3 max-w-4xl">
            Policies / Governance.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text sm:text-lg">
            How we approach quality, safety, and responsible delivery across
            Australia-wide programmes.
          </p>
        </div>
      </section>

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
