"use client";

import Link from "next/link";
import { ArrowUpRight, PaintRoller } from "lucide-react";
import { useState } from "react";
import { australiaPath } from "@/lib/australia-map";
import { projects } from "@/lib/site-data";
import { projectLocations } from "@/lib/upgrade-content";

export function ProjectMap() {
  const [selected, setSelected] = useState(projectLocations[0].id);
  return <section className="border-t border-border py-[var(--space-section)]">
    <div className="mx-auto max-w-[100rem] px-5 sm:px-8 lg:px-10">
      <p className="page-eyebrow">Where we work.</p><h2 className="section-title mt-3">From the city to the remote.</h2>
      <p className="mt-5 max-w-2xl leading-relaxed">Explore selected project locations across Australia and Christmas Island. Select a roller or location to see our work.</p>
      <div className="mt-10 grid items-center gap-10 lg:grid-cols-12">
        <div className="relative lg:col-span-8">
          <div className="relative"><svg viewBox="0 0 800 624" className="w-full" role="img" aria-label="Map of Australia showing selected project locations. Use the location buttons to explore."><path d={australiaPath} fill="var(--color-map)" /><path d="M763 314 L643 345" fill="none" stroke="var(--color-map-marker)" strokeWidth="1.5" strokeDasharray="4 4" /><text x="18" y="85" className="fill-secondary text-[14px]">Christmas Island</text><path d="M10 40l6-4 7 3-3 5-8 1z" fill="var(--color-map)" /></svg>
          {projectLocations.map((item) => {
            const x = ((item.longitude - 105) / 50) * 100;
            const y = ((-item.latitude - 8) / 39) * 100;
            // Close Queensland sites are separated visually, with leader lines.
            const dx = item.id === "amberley" ? -15 : item.id === "christmas" ? 4 : 0;
            const dy = item.id === "amberley" ? 5 : 0;
            return <button key={item.id} type="button" onClick={() => setSelected(item.id)} aria-label={`Explore ${item.name} projects`} aria-pressed={selected === item.id} className={`focus-ring absolute flex size-11 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-[var(--color-map-marker)] bg-[var(--color-map)] text-[var(--color-map-marker)] transition-shadow duration-200 ease-out hover:ring-4 hover:ring-[var(--color-map-marker)]/40 ${selected === item.id ? "ring-4 ring-[var(--color-map-marker)]/40" : ""}`} style={{ left: `${x + dx}%`, top: `${y + dy}%` }}><PaintRoller size={22} aria-hidden /></button>;
          })}
          </div><p className="mt-2 text-xs text-secondary">Regional locations are approximate; nearby markers are offset for readability.</p>
        </div>
        <div className="lg:col-span-4">
          <div className="grid grid-cols-2 gap-2" aria-label="Project locations">{projectLocations.map((item) => <button type="button" key={item.id} onClick={() => setSelected(item.id)} aria-pressed={selected === item.id} className={`focus-ring cursor-pointer border px-3 py-3 text-left text-sm transition-colors duration-200 ease-out ${selected === item.id ? "border-ink bg-ink text-white" : "border-[#c8c8c0] text-ink hover:bg-surface"}`}>{item.name}</button>)}</div>
          <div className="mt-8 grid border-t border-[#c8c8c0] pt-6" aria-live="polite" aria-atomic="true">
            {projectLocations.map((location) => {
              const active = location.id === selected;
              return (
                <div
                  key={location.id}
                  aria-hidden={!active}
                  inert={!active}
                  className={`col-start-1 row-start-1 transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none ${active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"}`}
                >
                  <p className="page-eyebrow">{location.region}.</p>
                  <h3 className="mt-2 font-serif text-3xl font-light text-ink">{location.name}</h3>
                  <ul className="mt-5 space-y-6">
                    {projects.filter((project) => location.slugs.includes(project.slug)).map((project) => (
                      <li key={project.slug}>
                        <Link href={`/projects/${project.slug}`} className="focus-ring text-link text-sm">
                          {project.title}<ArrowUpRight size={16} aria-hidden />
                        </Link>
                        <p className="mt-2 text-sm leading-relaxed">{project.summary}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </section>;
}
