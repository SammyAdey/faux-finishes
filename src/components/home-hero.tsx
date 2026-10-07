import { HeroPaint } from "@/components/hero-paint";
import { HeroSlider } from "@/components/hero-slider";
import { LiveClock } from "@/components/live-clock";
import { site } from "@/lib/site-data";

const slides = [
  {
    href: "/projects/111-eagle-st-brisbane",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Commercial office tower exterior",
  },
  {
    href: "/projects/project-and-residential-housing",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Modern residential house facade",
  },
  {
    href: "/projects/lady-cilento-childrens-hospital-qch",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Bright commercial office interior",
  },
  {
    href: "/projects/project-and-residential-housing",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Contemporary house exterior",
  },
  {
    href: "/projects/111-eagle-st-brisbane",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Open commercial office workspace",
  },
  {
    href: "/projects/project-and-residential-housing",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Suburban residential house",
  },
];

export function HomeHero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5.5rem)] flex-col justify-between pb-3 pt-10 sm:pb-4 sm:pt-14 lg:pt-16">
      <div className="mx-auto flex w-full max-w-[100rem] flex-1 flex-col px-5 sm:px-8 lg:px-10">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <p className="animate-rise text-sm font-medium text-secondary sm:text-[0.95rem]">
            Faux Finishes — painters, protective coatings &amp; specialised
            finishes
          </p>

          <h1 className="animate-rise-delay-1 mx-auto mt-4 max-w-5xl font-serif text-[clamp(2rem,5.2vw,4.35rem)] font-light leading-[1.12] tracking-[-0.02em] text-ink sm:mt-5">
            Doing <em className="italic">right</em> by those who trust us
            isn&apos;t a strategy — it&apos;s the{" "}
            <em className="italic">only</em> way we know how to work.
          </h1>
          <HeroPaint />
        </div>

        <div className="animate-rise-delay-2 mt-12 grid grid-cols-1 items-end gap-3 border-b border-border pb-3 text-[11px] tracking-[0.04em] text-secondary sm:mt-16 sm:grid-cols-3 sm:gap-4 sm:text-xs">
          <p className="sm:justify-self-start">
            <LiveClock timeZone="Australia/Brisbane" label="Brisbane, QLD" />
          </p>
          <p className="font-medium text-ink sm:justify-self-center">
            {site.name} © Since {site.established}
          </p>
          <p className="sm:justify-self-end">
            <LiveClock timeZone="Australia/Perth" label="Perth, WA" />
          </p>
        </div>
      </div>

      <div className="animate-rise-delay-2 mt-3 w-full sm:mt-4">
        <HeroSlider slides={slides} />
      </div>
    </section>
  );
}
