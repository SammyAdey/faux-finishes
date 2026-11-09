import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site-data";
import styles from "./home-finishes.module.css";

const featured = [projects[0], projects[5]];
const additional = [projects[1], projects[2]];

export function ProjectsPreview() {
  return (
    <section aria-labelledby="home-projects-title" className="border-b border-border py-[var(--space-section)]">
      <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-10">
        <div className={styles.sectionHeader}>
          <div>
            <p className="page-eyebrow">Selected work.</p>
            <h2 id="home-projects-title" className={`font-serif ${styles.sectionHeading}`}>
              The finish makes<br className="hidden sm:block" /> the difference.
            </h2>
          </div>
          <Link href="/projects" className="focus-ring text-link shrink-0 self-start text-sm md:self-end">
            See all projects <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className={styles.projectsGrid}>
          {featured.map((project, index) => (
            <article key={project.slug} className={styles.project}>
              <Link href={`/projects/${project.slug}`} className={`focus-ring ${styles.projectLink}`}>
                <div className={styles.projectImage}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes={index === 0 ? "(min-width: 1600px) 960px, (min-width: 768px) 60vw, 100vw" : "(min-width: 1600px) 560px, (min-width: 768px) 35vw, 100vw"}
                    className={styles.projectPhoto}
                  />
                  <span className={styles.projectNumber}>0{index + 1}</span>
                  <span className={styles.projectImageLabel}>Illustrative imagery</span>
                </div>
                <div className={styles.projectCaption}>
                  <div>
                    <p className="text-xs text-secondary">{project.location}</p>
                    <h3 className="mt-2 font-display text-xl font-normal leading-tight tracking-tight text-ink sm:text-2xl lg:text-3xl">{project.title}</h3>
                  </div>
                  <ArrowUpRight className={styles.projectArrow} aria-hidden="true" />
                </div>
              </Link>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-secondary">{project.summary}</p>
            </article>
          ))}
        </div>
        <div className={styles.projectRows}>
          {additional.map((project, index) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className={`focus-ring ${styles.projectRow}`}>
              <span className="font-display text-xs text-secondary">0{index + 3}</span>
              <h3 className="font-display text-lg font-normal tracking-tight sm:text-xl">{project.title}</h3>
              <span className={styles.projectRowLocation}>{project.location}</span>
              <ArrowUpRight className="size-5 shrink-0" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
