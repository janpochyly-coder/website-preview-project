import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { biz, services } from "@/data/business";
import { Cta, PageHero } from "@/components/n3/Blocks";
import { PriceBuilder } from "@/components/n3/Interactive";
import { BASE, serif, h2, wrap } from "@/components/n3/ui";

export const metadata: Metadata = {
  title: "Cenník a kalkulačka permanentného make-upu",
  description: "Cenník Bratislava k 19. 11. 2024: obočie 250 €, očné linky od 100 €, pery 350 €. Vyskladajte si ošetrenie a spočítajte orientačnú cenu.",
  alternates: { canonical: `${BASE}/cennik` },
};

export default function Cennik() {
  return (
    <>
      <PageHero kicker="Cenník" title="Cenník a kalkulačka" lead={`Prevádzka Bratislava · stav k ${biz.priceUpdated} · zmena cien vyhradená.`} />

      <section className={`${wrap} py-24`}>
        <h2 className={h2} style={serif}>Ceny služieb</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.id} className="rounded-3xl bg-white p-7">
              <h3 className="text-3xl" style={serif}><Link href={`${BASE}/sluzby/${s.id}`} className="hover:text-[#b3472f]">{s.title}</Link></h3>
              <ul className="mt-4 divide-y divide-[#ecd9d3] text-sm">{s.items.map((i) => (<li key={i.name} className="flex justify-between gap-3 py-2"><span>{i.name}</span><strong>{i.price} €</strong></li>))}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#2a1a24] py-24 text-white">
        <div className={wrap}>
          <h2 className={h2} style={serif}>Balíčky</h2>
          <p className="mt-3 text-white/75">Balíčky sú demonštračné a predstavujú súčet cien z cenníka.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[["Obočie", "250 €", ["Čiarkované, púdrové alebo kombo", "Predkreslenie a konzultácia"]], ["Oči a obočie", "370 €", ["Obočie + jemné očné linky", "Súčet 250 + 120 €"]], ["Kompletný look", "760 €", ["Obočie + dekoratívne linky + pery", "Súčet 250 + 160 + 350 €"]]].map(([t, p, l], k) => (
              <div key={t as string} className={`rounded-3xl p-8 ${k === 1 ? "bg-[#f2b8a6] text-[#2a1a24]" : "bg-white/10"}`}>
                <h3 className="text-2xl" style={serif}>{t as string}</h3><p className="mt-3 text-5xl" style={serif}>{p as string}</p>
                <ul className="mt-5 grid gap-2 text-sm">{(l as string[]).map((x) => (<li key={x} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0" aria-hidden />{x}</li>))}</ul>
                <Link href={`${BASE}/kontakt`} className={`mt-7 inline-flex rounded-full px-6 py-2.5 text-sm font-medium ${k === 1 ? "bg-[#2a1a24] text-white" : "bg-white text-[#2a1a24]"}`}>Objednať</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kalkulacka" className={`${wrap} py-24`}>
        <h2 className={h2} style={serif}>Vyskladajte si ošetrenie</h2>
        <p className="mt-3 text-[#4a3943]">Vyberte služby a odtieň – uvidíte orientačnú cenu a môžete pokračovať na objednávku.</p>
        <PriceBuilder />
      </section>

      <Cta />
    </>
  );
}
