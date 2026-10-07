import Image from "next/image";
import { accreditations, partners, type Brand } from "@/lib/upgrade-content";

function BrandGrid({ brands }: { brands: Brand[] }) {
  return <ul className="mt-8 grid grid-cols-2 border-l border-t border-[#c8c8c0] sm:grid-cols-3 lg:grid-cols-5">
    {brands.map((brand) => <li key={brand.name} className="flex min-h-32 items-center justify-center border-b border-r border-[#c8c8c0] p-5 text-center">
      {brand.logo ? <Image src={brand.logo} alt={brand.name} width={180} height={80} className="h-16 w-auto max-w-full object-contain" /> : <span className="font-display text-lg font-normal text-ink">{brand.name}</span>}
    </li>)}
  </ul>;
}
export function BrandSection() {
  return <section className="border-t border-border py-[var(--space-section)]">
    <div className="mx-auto max-w-[100rem] space-y-16 px-5 sm:px-8 lg:px-10">
      <div><p className="page-eyebrow">Accreditations.</p><h2 className="section-title mt-3">Standards behind every finish.</h2><BrandGrid brands={accreditations} /></div>
      <div><p className="page-eyebrow">Our partners.</p><h2 className="section-title mt-3">Good work starts with good relationships.</h2><BrandGrid brands={partners} /></div>
    </div>
  </section>;
}
