import Image from "next/image";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  image: string;
  imageAlt: string;
  priority?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  priority = false,
}: Props) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-[100rem] lg:grid-cols-2 lg:items-stretch">
        <div className="flex flex-col justify-center px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <p className="page-eyebrow">{eyebrow}</p>
          <h1 className="display-title mt-3 max-w-xl">{title}</h1>
          {description ? (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-text sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>

        <div className="relative min-h-[18rem] border-t border-[#c8c8c0] sm:min-h-[24rem] lg:min-h-[32rem] lg:border-t-0 lg:border-l lg:border-[#c8c8c0]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority={priority}
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
