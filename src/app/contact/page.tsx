import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Faux Finishes 24/7 — Bowen Hills, Queensland. Phone (07) 3216 0876 or mobile 0418 887 158.",
};

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Contact."
        title={
          <>
            Partner with us:
            <span className="block text-secondary">
              fast, disciplined &amp; accountable.
            </span>
          </>
        }
        description="We're partnering with builders, facility managers, and asset owners to deliver coating programmes faster and better. Get in touch below."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Commercial office interior with natural light"
        priority
      />

      <section className="mx-auto grid max-w-[100rem] gap-12 px-5 py-[var(--space-section)] sm:px-8 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
        <aside className="space-y-8 border-t border-border pt-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:border-[#c8c8c0] lg:pt-0 lg:pl-10">
          <div>
            <p className="page-eyebrow">Call us.</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="focus-ring font-medium text-ink transition-colors duration-200 hover:text-accent cursor-pointer"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.mobileHref}
                  className="focus-ring font-medium text-ink transition-colors duration-200 hover:text-accent cursor-pointer"
                >
                  {site.mobile}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="page-eyebrow">Visit.</p>
            <p className="mt-4 text-sm leading-relaxed text-text">
              {site.address.line1}
              <br />
              {site.address.line2}
            </p>
          </div>
          <div>
            <p className="page-eyebrow">Socials.</p>
            <div className="mt-4 flex gap-4 text-sm font-medium">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring text-ink transition-colors duration-200 hover:text-accent cursor-pointer"
              >
                Facebook ↗
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring text-ink transition-colors duration-200 hover:text-accent cursor-pointer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
