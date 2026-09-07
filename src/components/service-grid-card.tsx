import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/site-data";

type Props = {
  service: Service;
  index: number;
  showViewLink?: boolean;
  headingLevel?: "h2" | "h3";
};

export function ServiceGridCard({
  service,
  index,
  showViewLink = false,
  headingLevel = "h3",
}: Props) {
  const Heading = headingLevel;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="focus-ring group flex min-h-[22rem] cursor-pointer flex-col border-r border-b border-[#c8c8c0] p-6 sm:min-h-[26rem] sm:p-8"
    >
      <span className="text-sm text-muted">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="my-4 grid flex-1 grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
        <div className="min-h-0 overflow-hidden">
          <div className="relative mt-2 aspect-[4/3] w-full overflow-hidden opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-focus-within:opacity-100">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Heading className="font-display text-xl font-medium tracking-tight text-ink transition-colors duration-200 group-hover:text-accent sm:text-2xl">
          {service.title}
        </Heading>
        <p className="mt-3 text-sm leading-relaxed text-text sm:text-base">
          {service.summary}
        </p>
        {showViewLink ? (
          <span className="text-link mt-5 text-sm">View service</span>
        ) : null}
      </div>
    </Link>
  );
}
