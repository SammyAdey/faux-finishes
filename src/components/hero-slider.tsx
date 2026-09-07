"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export type HeroSlide = {
  href: string;
  image: string;
  imageAlt: string;
};

type Props = {
  slides: HeroSlide[];
};

export function HeroSlider({ slides }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const visible = slides.slice(0, 6);
  const loopSlides = [...visible, ...visible, ...visible];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    let frame = 0;
    let last = performance.now();
    let paused = false;
    let isDragging = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    const pause = () => {
      paused = true;
    };
    const resume = () => {
      if (!isDragging) paused = false;
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      isDragging = true;
      moved = false;
      paused = true;
      startX = event.clientX;
      startScroll = track.scrollLeft;
      track.setPointerCapture(event.pointerId);
      track.style.cursor = "grabbing";
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!isDragging) return;
      const delta = event.clientX - startX;
      if (Math.abs(delta) > 4) moved = true;
      track.scrollLeft = startScroll - delta;
    };

    const onPointerUp = (event: PointerEvent) => {
      if (!isDragging) return;
      isDragging = false;
      track.releasePointerCapture(event.pointerId);
      track.style.cursor = "grab";
      window.setTimeout(() => {
        paused = false;
      }, 1200);
    };

    const onClickCapture = (event: MouseEvent) => {
      if (moved) {
        event.preventDefault();
        event.stopPropagation();
        moved = false;
      }
    };

    track.addEventListener("pointerdown", onPointerDown);
    track.addEventListener("pointermove", onPointerMove);
    track.addEventListener("pointerup", onPointerUp);
    track.addEventListener("pointercancel", onPointerUp);
    track.addEventListener("pointerenter", pause);
    track.addEventListener("pointerleave", resume);
    track.addEventListener("focusin", pause);
    track.addEventListener("focusout", resume);
    track.addEventListener("click", onClickCapture, true);

    const setWidth = () => track.scrollWidth / 3;
    track.scrollLeft = setWidth();

    const tick = (now: number) => {
      const delta = now - last;
      last = now;

      if (!paused && !isDragging) {
        track.scrollLeft += delta * 0.05;
        const width = setWidth();
        if (track.scrollLeft >= width * 2) {
          track.scrollLeft -= width;
        }
      }

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("pointermove", onPointerMove);
      track.removeEventListener("pointerup", onPointerUp);
      track.removeEventListener("pointercancel", onPointerUp);
      track.removeEventListener("pointerenter", pause);
      track.removeEventListener("pointerleave", resume);
      track.removeEventListener("focusin", pause);
      track.removeEventListener("focusout", resume);
      track.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  return (
    <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2">
      <div
        ref={trackRef}
        className="flex cursor-grab gap-3 overflow-x-auto px-0 active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Project image slider"
        aria-roledescription="carousel"
      >
        {loopSlides.map((slide, index) => (
          <Link
            key={`${slide.image}-${index}`}
            href={slide.href}
            draggable={false}
            className="focus-ring group relative h-[min(38vh,23rem)] w-[72vw] shrink-0 overflow-hidden rounded-2xl sm:h-[min(36vh,25rem)] sm:w-[44vw] lg:h-[min(34vh,26rem)] lg:w-[36vw] xl:w-[32vw]"
            onDragStart={(event) => event.preventDefault()}
          >
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              priority={index < 6}
              draggable={false}
              className="pointer-events-none object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 72vw, (max-width: 1024px) 44vw, 36vw"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
