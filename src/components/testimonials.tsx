"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { testimonials, type Testimonial } from "@/lib/upgrade-content";

export function Testimonials({ items = testimonials }: { items?: Testimonial[] }) {
  const track = useRef<HTMLDivElement>(null);
  const id = useId();
  const [position, setPosition] = useState({ first: 0, visible: 1 });

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const update = () => {
      const card = element.firstElementChild as HTMLElement | null;
      if (!card) return;
      const step = card.getBoundingClientRect().width + 40;
      const visible = Math.max(1, Math.round((element.clientWidth + 40) / step));
      const first = Math.min(Math.max(0, items.length - visible), Math.round(element.scrollLeft / step));
      setPosition(current => current.first === first && current.visible === visible ? current : { first, visible });
    };
    const observer = new ResizeObserver(update);
    observer.observe(element);
    element.addEventListener("scroll", update, { passive: true });
    update();
    return () => { observer.disconnect(); element.removeEventListener("scroll", update); };
  }, [items.length]);

  if (!items.length) return null;
  const canBrowse = items.length > position.visible;
  const goTo = (index: number) => {
    const element = track.current;
    const card = element?.firstElementChild as HTMLElement | null;
    if (!element || !card) return;
    const next = Math.max(0, Math.min(items.length - position.visible, index));
    element.scrollTo({ left: next * (card.getBoundingClientRect().width + 40), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };

  return (
    <section className="border-t border-border py-[var(--space-section)]" aria-labelledby={`${id}-title`}>
      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div><p className="page-eyebrow">Testimonials.</p><h2 id={`${id}-title`} className="section-title mt-3">Care, in our clients’ words.</h2></div>

        </div>
        <div ref={track} id={`${id}-track`} className="focus-ring mt-10 flex snap-x snap-mandatory gap-10 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="region" aria-label="Client testimonials" tabIndex={canBrowse ? 0 : undefined} onKeyDown={event => { if (event.target !== event.currentTarget) return; if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); goTo(position.first + (event.key === "ArrowRight" ? 1 : -1)); } }}>
          {items.map((item, index) => (
            <figure key={`${item.name}-${index}`} className={`flex shrink-0 snap-start flex-col border-t border-[#c8c8c0] pt-8 w-full`} aria-label={`Testimonial ${index + 1} of ${items.length}, ${item.name}`}>
              <blockquote className="max-w-4xl font-serif text-2xl font-light leading-relaxed text-ink">“{item.quote}”</blockquote>
              <figcaption className="mt-auto pt-6 text-sm text-secondary">
                <span className="block font-display text-ink">{item.name}</span>
                <span className="block">{[item.role, item.company].filter(Boolean).join(", ")}</span>
                {item.source && <a href={item.source} target="_blank" rel="noopener noreferrer" className="focus-ring text-link mt-2 text-sm">Read the original review<ArrowUpRight size={16} aria-hidden /></a>}
              </figcaption>
            </figure>
          ))}
        </div>
        {canBrowse && (
          <div className="mt-8 flex flex-wrap items-center gap-2" role="group" aria-label="Choose a testimonial">
            {items.map((item, index) => (
              <button
                key={`${item.name}-bucket-${index}`}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Show testimonial ${index + 1}: ${item.name}`}
                aria-controls={`${id}-track`}
                aria-current={position.first === index ? "true" : undefined}
                className={`focus-ring flex size-11 cursor-pointer items-center justify-center transition-colors hover:text-accent ${position.first === index ? "text-accent" : "text-secondary"}`}
              >
                <svg viewBox="0 0 32 32" className="size-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 10V8a7 7 0 0 1 14 0v2" />
                  <path d="m6 12 2.5 15a3 3 0 0 0 3 2h9a3 3 0 0 0 3-2L26 12" fill={position.first === index ? "currentColor" : "none"} fillOpacity="0.15" />
                  <ellipse cx="16" cy="12" rx="10" ry="3" />
                  <path d="M10 14v4a2 2 0 0 0 4 0v-3" />
                  <path d="M13 24h6" />
                  {position.first === index && <path d="m13 21 2 2 4-4" />}
                </svg>
              </button>
            ))}
            <span className="ml-3 text-sm tabular-nums text-secondary" aria-live="polite" aria-atomic="true">{position.first + 1} / {items.length}</span>
          </div>
        )}
      </div>
    </section>
  );
}
