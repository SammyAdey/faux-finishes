import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Faux Finishes 24/7 — Bowen Hills, Queensland. Phone (07) 3216 0876 or mobile 0418 887 158.",
};

export default function ContactPage() {
  return (
    <main id="main">
      <section className="border-b border-border">
        <div className="mx-auto max-w-[100rem] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <p className="page-eyebrow">Contact.</p>
          <h1 className="display-title mt-3 max-w-4xl">
            Partner with us:
            <span className="block text-secondary">
              fast, disciplined &amp; accountable.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text sm:text-lg">
            We&apos;re partnering with builders, facility managers, and asset
            owners to deliver coating programmes faster and better. Get in touch
            below.
          </p>
        </div>
      </section>

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
