import { MaterialSample } from "@/components/material-sample";
import styles from "./home-finishes.module.css";

const principles = [
  {
    title: "Craft with discipline",
    body: "Careful preparation, the right system, and a finish that holds up on site. We think big by staying precise.",
  },
  {
    title: "Clear accountability",
    body: "Straightforward communication with builders and asset owners. From the first coat to handover, we keep programmes aligned.",
  },
  {
    title: "Long-term finish",
    body: "We specify for durability and partner for the life of the asset. Quality that carries beyond the painting schedule.",
  },
];

export function PrinciplesSection() {
  return (
    <section aria-labelledby="home-principles-title" className={styles.principles}>
      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-10">
        <div className={styles.principlesComposition}>
          <div>
            <p className="text-sm">Our principles.</p>
            <h2 id="home-principles-title" className={`font-serif ${styles.principlesHeading}`}>
              Precision<br />in every<br /><em>layer.</em>
            </h2>
          </div>
          <div className={styles.sampleStack} aria-hidden="true">
            <MaterialSample finish="cream" className={styles.stackCream} />
            <MaterialSample finish="yellow" className={styles.stackYellow} />
            <MaterialSample finish="purple" className={styles.stackPurple} />
            <span className={styles.stackCaption}>Preparation. Protection. Finish.</span>
          </div>
        </div>
        <div className={styles.principlesGrid}>
          {principles.map((principle, index) => (
            <article key={principle.title} className={styles.principle}>
              <p className="inline-flex min-h-6 min-w-6 items-center justify-center bg-highlight px-1 font-display text-xs text-ink">0{index + 1}</p>
              <h3 className={`font-serif ${styles.principleTitle}`}>{principle.title}</h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed sm:text-base">{principle.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
