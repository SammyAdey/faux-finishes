import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site-data";

export function ContactCta() {
  return (
    <section className="border-t border-border py-[var(--space-section)]">
      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-10">
        <p className="page-eyebrow">Next step.</p>
        <h2 className="section-title mt-3 max-w-3xl">
          Ready when the programme is.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-text">
          Talk to Faux Finishes about coatings, logistics, and site delivery.
          Phone {site.phone} or mobile {site.mobile}.
        </p>
        <Link href="/contact" className="focus-ring text-link mt-8 text-sm">
          Partner with us
          <ArrowUpRight className="size-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
