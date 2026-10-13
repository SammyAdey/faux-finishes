"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const finishes = [
  { name: "Facade", color: "#5e3bbd" },
  { name: "Protect", color: "#6e655c" },
  { name: "Texture", color: "#ffb81c" },
];

type Props = {
  children: React.ReactNode;
};

export function HeroPaint({ children }: Props) {
  const [finish, setFinish] = useState(0);
  const [coverage, setCoverage] = useState(0);
  const [replay, setReplay] = useState(0);
  const animation = useRef<number | null>(null);
  const paint = finishes[finish];
  const hidden = Math.max(0, 100 - coverage);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      animation.current = requestAnimationFrame(() => setCoverage(100));
    } else {
      let start: number | undefined;
      const roll = (time: number) => {
        start ??= time;
        const progress = Math.min((time - start) / 1600, 1);
        setCoverage(100 * (1 - Math.pow(1 - progress, 3)));
        if (progress < 1) animation.current = requestAnimationFrame(roll);
      };
      animation.current = requestAnimationFrame(roll);
    }
    return () => {
      if (animation.current !== null) cancelAnimationFrame(animation.current);
    };
  }, [finish, replay]);

  const stopRolling = () => {
    if (animation.current !== null) cancelAnimationFrame(animation.current);
  };

  return (
    <div className="hero-paint animate-rise-delay-1 mt-4 w-full max-w-5xl sm:mt-5">
      <div className="hero-paint-stage">
        <div className="hero-paint-copy" aria-hidden="true">
          <div className="hero-paint-ghost font-serif text-[clamp(2rem,5.2vw,4.35rem)] font-light leading-[1.12] tracking-[-0.02em]">
            {children}
          </div>
        </div>

        <div
          className="hero-paint-wash"
          style={{
            width: `${coverage}%`,
            backgroundColor: paint.color,
          }}
        />

        <h1
          className="hero-paint-revealed font-serif text-[clamp(2rem,5.2vw,4.35rem)] font-light leading-[1.12] tracking-[-0.02em] text-ink"
          style={{ clipPath: `inset(0 ${hidden}% 0 0)` }}
        >
          {children}
        </h1>

        <div
          className="hero-paint-roller"
          style={{ left: `${Math.min(coverage, 100)}%` }}
          aria-hidden="true"
        >
          <Image
            src="/paint-rollers-paintbrush-painting.png"
            alt=""
            width={1075}
            height={1527}
            sizes="150px"
            className="hero-paint-tool"
            draggable={false}
            priority
          />
        </div>

        <input
          type="range"
          min="0"
          max="100"
          step="0.5"
          value={coverage}
          aria-label="Drag the roller to reveal the statement"
          aria-valuetext={`${Math.round(coverage)} percent revealed in ${paint.name}`}
          className="hero-paint-input focus-ring"
          onPointerDown={stopRolling}
          onKeyDown={stopRolling}
          onChange={(event) => {
            stopRolling();
            setCoverage(Number(event.target.value));
          }}
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-secondary">
        <p>Drag a little. Reveal the finish.</p>
        <div
          className="flex items-center gap-2"
          role="group"
          aria-label="Paint finishes"
        >
          {finishes.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Reveal in ${item.name}`}
              aria-pressed={finish === index}
              onClick={() => {
                setCoverage(0);
                setFinish(index);
                setReplay((value) => value + 1);
              }}
              className={`focus-ring cursor-pointer rounded-full p-1 transition-colors duration-200 ${
                finish === index
                  ? "ring-1 ring-ink"
                  : "hover:ring-1 hover:ring-muted"
              }`}
            >
              <span
                className="block size-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => {
            setCoverage(0);
            setReplay((value) => value + 1);
          }}
          className="focus-ring text-link text-xs"
        >
          Roll again ↗
        </button>
      </div>
    </div>
  );
}
