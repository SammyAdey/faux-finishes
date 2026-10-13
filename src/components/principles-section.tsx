const principles = [
  {
    title: "Craft with Discipline",
    body: "We think big by staying precise — careful surface prep, the right system, and finishes that hold up on site.",
    tone: "slate" as const,
    graphic: "sunburst" as const,
  },
  {
    title: "Clear Accountability",
    body: "We share openly with builders and asset owners, keeping programmes aligned from first coat to handover.",
    tone: "ink" as const,
    graphic: "bars" as const,
  },
  {
    title: "Long-Term Finish",
    body: "We specify for durability and partner for the life of the asset — not just the painting schedule.",
    tone: "stone" as const,
    graphic: "chevron" as const,
  },
];

const tones = {
  slate: "bg-accent text-white",
  ink: "bg-[#111111] text-white",
  stone: "bg-highlight text-ink",
};

function PrincipleGraphic({
  type,
  ink,
}: {
  type: "sunburst" | "bars" | "chevron";
  ink?: boolean;
}) {
  const stroke = ink ? "rgba(17,17,17,0.85)" : "rgba(255,255,255,0.9)";

  if (type === "sunburst") {
    return (
      <svg viewBox="0 0 200 120" className="h-auto w-full" aria-hidden>
        <g className="principle-sunburst">
          {Array.from({ length: 40 }, (_, i) => {
            const deg = (i / 40) * 360;
            const outer = i % 5 === 0 ? 54 : i % 3 === 0 ? 46 : i % 2 === 0 ? 38 : 30;
            return (
              <g key={i} transform={`rotate(${deg} 100 60)`}>
                <line
                  className="principle-ray"
                  style={{ animationDelay: `${(i % 10) * 120}ms` }}
                  x1={100}
                  y1={60 - 18}
                  x2={100}
                  y2={60 - outer}
                  stroke={stroke}
                  strokeWidth="1.2"
                />
              </g>
            );
          })}
        </g>
      </svg>
    );
  }

  if (type === "bars") {
    return (
      <svg viewBox="0 0 200 120" className="h-auto w-full" aria-hidden>
        {Array.from({ length: 22 }, (_, i) => {
          const x = 14 + i * 8;
          const height = 16 + i * 3.4;
          return (
            <line
              key={i}
              className="principle-bar"
              style={{ animationDelay: `${i * 90}ms` }}
              x1={x}
              y1={100}
              x2={x}
              y2={100 - height}
              stroke={stroke}
              strokeWidth="1.2"
            />
          );
        })}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 120" className="h-auto w-full" aria-hidden>
      {Array.from({ length: 16 }, (_, i) => {
        const y = 22 + i * 5.5;
        const inset = Math.abs(i - 7.5) * 6.5;
        return (
          <line
            key={i}
            className="principle-line"
            style={{ animationDelay: `${i * 80}ms` }}
            x1={28 + inset}
            y1={y}
            x2={172 - inset}
            y2={y}
            stroke={stroke}
            strokeWidth="1.2"
          />
        );
      })}
    </svg>
  );
}

export function PrinciplesSection() {
  return (
    <section className="border-b border-border py-[var(--space-section)]">
      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-10">
        <h2 className="mx-auto max-w-3xl text-center font-serif text-[clamp(1.35rem,2.6vw,2rem)] font-light leading-[1.3] tracking-[-0.02em] text-ink">
          These 3 principles show how we work and why our partners stick with us
          — a clear perspective that guides every decision we make.
        </h2>

        <div className="mt-12 grid gap-3 md:grid-cols-3 md:gap-4">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className={`flex min-h-[28rem] flex-col justify-between p-7 sm:min-h-[32rem] sm:p-8 ${tones[principle.tone]}`}
            >
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {principle.title}
                </h3>
                <p className="mt-3 max-w-sm font-serif text-base leading-relaxed opacity-90 sm:text-lg">
                  {principle.body}
                </p>
              </div>
              <div className="mt-10 px-2 pb-2">
                <PrincipleGraphic
                  type={principle.graphic}
                  ink={principle.tone === "stone"}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
