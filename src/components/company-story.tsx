import Image from "next/image";
import { story, teamPhoto } from "@/lib/upgrade-content";

export function CompanyStory() {
  return <section className="border-t border-border py-[var(--space-section)]">
    <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-10">
      {teamPhoto && <figure className="mb-16"><Image src={teamPhoto.src} alt={teamPhoto.alt} width={1600} height={900} sizes="(max-width: 768px) 100vw, 90vw" className="aspect-[16/9] w-full object-cover" /><figcaption className="mt-3 text-sm text-secondary">The people behind the finish.</figcaption></figure>}
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4"><p className="page-eyebrow">Our story.</p><h2 className="section-title mt-3">Built on trust.<br />Since 1992.</h2></div>
        <ol className="ml-2 border-l border-[#c8c8c0] lg:col-span-8">
          {story.map((chapter) => <li key={chapter.label} className="relative pb-12 pl-8 last:pb-0 sm:pl-12"><span aria-hidden className="absolute -left-[5px] top-1.5 size-[9px] rounded-full bg-ink" /><p className="page-eyebrow">{chapter.label}</p><h3 className="mt-3 font-serif text-2xl font-light text-ink sm:text-3xl">{chapter.title}</h3><p className="mt-4 max-w-2xl text-base leading-relaxed text-text">{chapter.body}</p></li>)}
        </ol>
      </div>
    </div>
  </section>;
}
