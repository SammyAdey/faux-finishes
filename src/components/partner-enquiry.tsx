import Image from "next/image";
import { Phone, ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site-data";

export function PartnerEnquiry() {
  return (
    <section className="border-t border-[#c8c8c0] bg-background text-ink" aria-labelledby="partner-enquiry-title">
      <div className="mx-auto grid max-w-[100rem] lg:grid-cols-2">
        <div className="px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <p className="page-eyebrow">Partner with us.</p>
          <h2 id="partner-enquiry-title" className="section-title mt-3 max-w-xl">Let’s put your project<br className="hidden sm:block" /> in good hands.</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-secondary">Tell us what you’re planning, where it is and when you need it. We’ll help you find the right approach to painting, finishes and protective coatings.</p>
          <div className="mt-9"><ContactForm /></div>
          <a href={site.phoneHref} className="focus-ring text-link mt-7 text-sm"><Phone size={16} aria-hidden />Prefer to talk? {site.phone}<ArrowUpRight size={16} aria-hidden /></a>
        </div>
        <div className="relative min-h-80 overflow-hidden bg-[#5f6f82] sm:min-h-[28rem] lg:min-h-full">
          <Image src="/projects/modern-facade.png" alt="Architectural facade with a carefully finished exterior" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-8 lg:p-10">
            <p className="text-sm">Painters of Distinction. Since {site.established}.</p>
            <p className="mt-4 max-w-md font-serif text-3xl font-light leading-tight sm:text-4xl">From the first conversation<br />to the final coat.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
