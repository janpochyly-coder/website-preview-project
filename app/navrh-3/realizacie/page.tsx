import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { demoReviews } from "@/data/business";
import { Cta, PageHero } from "@/components/n3/Blocks";
import { Gallery, BeforeAfter } from "@/components/n3/Interactive";
import { BASE, serif, btn, h2, wrap } from "@/components/n3/ui";

export const metadata: Metadata = {
  title: "Realizácie – galéria, pred a po, referencie",
  description: "Ilustračná galéria s filtrom, porovnanie pred a po a demonštračné referencie štúdia Conture Make-Up v Bratislave.",
  alternates: { canonical: `${BASE}/realizacie` },
};

export default function Realizacie() {
  return (
    <>
      <PageHero kicker="Realizácie · demo" title="Realizácie a galéria" lead="Fotografie sú ilustračné (Unsplash) a nezobrazujú reálne práce firmy." />

      <section className={`${wrap} grid items-center gap-10 py-24 md:grid-cols-2`}>
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl"><Image src="/images/lips.jpg" alt="Ilustračná fotografia: líčenie očí a pier" fill sizes="(max-width:768px) 90vw, 560px" className="object-cover" loading="lazy" /></div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#b3472f]">Vybraná ukážka · demo</p>
          <h2 className={h2} style={serif}>Výrazné oči a pery</h2>
          <p className="mt-5 text-[#4a3943]">Demonštračný scenár: dekoratívna očná linka a plnovytieňované pery.</p>
          <div className="mt-7 flex flex-wrap gap-4"><Link href={`${BASE}/sluzby/ocne-linky`} className={btn}>Očné linky</Link><Link href={`${BASE}/sluzby/pery`} className="inline-flex items-center rounded-full border border-[#2a1a24]/40 px-7 py-3 text-sm hover:border-[#b3472f]">Pery</Link></div>
        </div>
      </section>

      <section id="galeria" className="bg-white py-24">
        <div className={wrap}><h2 className={h2} style={serif}>Galéria</h2><p className="mt-3 text-[#4a3943]">Filtrujte a kliknutím zväčšite.</p><Gallery /></div>
      </section>

      <section id="pred-po" className="bg-[#f3dcd6] py-24">
        <div className={wrap}>
          <h2 className={`${h2} text-center`} style={serif}>Pred a po</h2>
          <p className="mx-auto mb-10 mt-3 max-w-lg text-center text-[#4a3943]">Posúvajte posuvník a porovnajte.</p>
          <BeforeAfter />
        </div>
      </section>

      <section className={`${wrap} py-24`}>
        <h2 className={h2} style={serif}>Referencie <span className="text-lg text-[#a0262f]">(fiktívne, demo)</span></h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {demoReviews.map((r) => (<figure key={r.name} className="rounded-3xl bg-white p-7"><blockquote className="text-lg leading-snug" style={serif}>„{r.text}“</blockquote><figcaption className="mt-4 text-sm text-[#4a3943]">{r.name}</figcaption></figure>))}
        </div>
      </section>

      <Cta />
    </>
  );
}
