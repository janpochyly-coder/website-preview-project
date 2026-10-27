import type { Metadata } from "next";
import { X, Check } from "lucide-react";
import { Cta, PageHero } from "@/components/n3/Blocks";
import { ServiceTabs } from "@/components/n3/Interactive";
import { BASE, serif, h2, wrap } from "@/components/n3/ui";

export const metadata: Metadata = {
  title: "Služby permanentného make-upu – obočie, očné linky, pery",
  description: "Prehľad služieb štúdia Conture Make-Up v Bratislave: obočie, očné linky a pery. Postup, metódy a odkazy na podrobné informácie.",
  alternates: { canonical: `${BASE}/sluzby` },
};

export default function Sluzby() {
  return (
    <>
      <PageHero kicker="Ponuka" title="Služby" lead="Vyberte partiu a pozrite si postup, ceny a metódu. Každá služba má vlastnú podstránku." />

      <section className={`${wrap} py-24`}>
        <h2 className={h2} style={serif}>Vyberte službu</h2>
        <ServiceTabs />
      </section>

      <section className={`${wrap} pb-24`}>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[#a0262f]">Problém</p>
            <h2 className="mt-3 text-3xl md:text-4xl" style={serif}>Ráno nestíhate, líčenie sa rozmaže.</h2>
            <ul className="mt-6 grid gap-3 text-[#4a3943]">{["Každodenné kreslenie obočia zaberá čas", "Linka a farba pier sa počas dňa stratia", "Strach z neprirodzeného alebo nepodareného tvaru"].map((t) => (<li key={t} className="flex gap-3"><X size={18} className="mt-1 shrink-0 text-[#a0262f]" aria-hidden />{t}</li>))}</ul>
          </div>
          <div className="rounded-3xl bg-[#2a1a24] p-8 text-white md:p-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[#f2b8a6]">Riešenie</p>
            <h2 className="mt-3 text-3xl md:text-4xl" style={serif}>Najprv predkreslíme, potom pigmentujeme.</h2>
            <ul className="mt-6 grid gap-3 text-white/85">{["Tvar odsúhlasíte ešte pred prvým vpichom", "Pigmentujeme jemné vlásky pre prirodzený efekt", "Ak je výsledok príliš jemný, dopigmentujeme do 3 mesiacov"].map((t) => (<li key={t} className="flex gap-3"><Check size={18} className="mt-1 shrink-0 text-[#f2b8a6]" aria-hidden />{t}</li>))}</ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className={wrap}>
          <h2 className={h2} style={serif}>Proces spolupráce</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-4">
            {[["Objednanie", "Telefonicky alebo cez formulár."], ["Konzultácia", "Spoločne zvolíme tvar a odtieň."], ["Predkreslenie", "Odsúhlasíte kontúry ceruzkou."], ["Pigmentácia", "Ošetrenie a prípadné dopigmentovanie."]].map(([t, d], i) => (
              <li key={t} className="rounded-3xl bg-[#fbf1ee] p-7"><span className="text-6xl text-[#e8c4c0]" style={serif}>{i + 1}</span><h3 className="mt-2 text-2xl" style={serif}>{t}</h3><p className="mt-2 text-sm text-[#4a3943]">{d}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <Cta />
    </>
  );
}
