import Link from "next/link";
import { site } from "@/lib/site-data";

const swatches = [
  {
    label: "Facade",
    description: "Highrise, commercial cores & architectural coatings",
    color: "#5f6f82",
  },
  {
    label: "Protect",
    description: "Industrial systems, marine & protective coatings",
    color: "#6e655c",
  },
  {
    label: "Texture",
    description: "Rendered surfaces, interiors & character finishes",
    color: "#8a5a0c",
  },
  {
    label: "Specialist",
    description: "Epoxy, remedial works & unique site systems",
    color: "#111111",
  },
];

function SwatchMark() {
  return (
    <div className="flex items-center gap-2 text-white" aria-hidden>
      <svg
        viewBox="0 0 28 12"
        className="h-3 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M1 8c3-5 6-5 9 0s6 5 9 0 6-5 8-2" />
      </svg>
      <span className="font-display text-lg font-medium leading-none tracking-tight">
        F
      </span>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-inverse text-white">
      <div className="mx-auto max-w-[100rem] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl font-light tracking-[-0.02em] sm:text-4xl lg:text-5xl">
              <span className="block text-white">
                Good finishes take good partners.
              </span>
              <span className="mt-1 block text-white/55">
                Let&apos;s talk.
              </span>
            </h2>
            <Link
              href="/contact"
              className="focus-ring mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition-all duration-200 hover:gap-3 hover:text-white/80 cursor-pointer"
            >
              Partner with us →
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5">
            <div>
              <p className="text-xs tracking-[0.16em] text-white/45 uppercase">
                Contact
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>
                  <a
                    href={site.phoneHref}
                    className="focus-ring transition-colors duration-200 hover:text-white cursor-pointer"
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={site.mobileHref}
                    className="focus-ring transition-colors duration-200 hover:text-white cursor-pointer"
                  >
                    {site.mobile}
                  </a>
                </li>
                <li className="pt-2 text-white/55">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs tracking-[0.16em] text-white/45 uppercase">
                Explore
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>
                  <Link
                    href="/about"
                    className="focus-ring transition-colors duration-200 hover:text-white cursor-pointer"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="focus-ring transition-colors duration-200 hover:text-white cursor-pointer"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="focus-ring transition-colors duration-200 hover:text-white cursor-pointer"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/policies-governance"
                    className="focus-ring transition-colors duration-200 hover:text-white cursor-pointer"
                  >
                    Policies / Governance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Faux Finishes Pty Ltd. All rights
            reserved.
          </p>
          <p>Painters of Distinction · Est. {site.established}</p>
        </div>
      </div>

      <div
        className="grid grid-cols-2 md:grid-cols-4"
        aria-label="Finish categories"
      >
        {swatches.map((swatch) => (
          <div
            key={swatch.label}
            className="relative flex min-h-[16rem] flex-col justify-between p-5 sm:min-h-[20rem] sm:p-6 lg:min-h-[22rem] lg:p-7"
            style={{ backgroundColor: swatch.color }}
          >
            <SwatchMark />

            <div className="relative flex items-end justify-between gap-4">
              <p className="max-w-[10rem] font-serif text-sm font-light leading-snug text-white sm:max-w-[12rem] sm:text-base">
                {swatch.description}
              </p>
              <p className="shrink-0 [writing-mode:vertical-rl] rotate-180 font-serif text-xs font-light tracking-[0.12em] text-white/85 sm:text-sm">
                {swatch.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
