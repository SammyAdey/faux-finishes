export function PainterMark() {
  return <svg viewBox="0 0 100 90" className="painter-mark mt-6 h-16 w-20 text-ink" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path className="painter-stroke" d="M72 20v44" stroke="var(--color-map-marker)" strokeWidth="12" /><circle cx="36" cy="22" r="7" /><path d="M36 30v27m0-18 15 8 16-12M36 57 24 78m12-21 14 21M36 35 23 49" /><g className="painter-arm"><path d="M67 35v-9h10v-6" /><rect x="68" y="10" width="18" height="9" rx="2" fill="var(--color-map)" /></g></svg>;
}
