import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { Cta, PageHero } from "@/components/n2/Blocks";
import { BASE, serif } from "@/components/n2/ui";

export const metadata: Metadata = {
  title: "O nás – elite linergistka s 23-ročnou praxou",
  description: "Conture Make-Up: štúdio permanentného make-upu na Palisádach v Bratislave. Metóda Conture®, predkreslenie a individuálny prístup.",
  alternates: { canonical: `${BASE}/o-nas` },
};

export default function ONas() {
  return (
    <>
      <PageHero kicker="O nás" title="Presnosť dôležitejšia než rýchlosť" lead="Štúdio permanentného make-upu s prevádzkou na Palisádach v Bratislave." />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div className="relative aspect-[4/3]"><Image src="/images/studio.jpg" alt="Ilustračná fotografia: svetlý kozmetický štúdiový interiér" fill sizes="(max-width:768px) 90vw, 600px" className="object-cover grayscale" loading="lazy" /></div>
        <div>
          <h2 className="text-4xl md:text-5xl" style={serif}>Predstavenie</h2>
          <p className="mt-5 leading-relaxed text-[#3d524d]">Conture Make-Up je štúdio permanentného make-upu s prevádzkou na Palisádach v Bratislave. Pracujeme metódou Conture®, kde je presnosť tvaru dôležitejšia než rýchlosť.</p>
          <ul className="mt-6 grid gap-3 text-sm">
            {["Konzultácia a predkreslenie pred každým ošetrením", "Individuálny tvar a odtieň", "Jedna prevádzka v Bratislave"].map((t) => (<li key={t} className="flex gap-3"><Check size={18} className="shrink-0 text-[#0f6b57]" aria-hidden />{t}</li>))}
          </ul>
        </div>
      </section>

      <section className="bg-[#07241f] py-20 text-white">
        <dl className="mx-auto grid max-w-7xl gap-8 px-6 text-center md:grid-cols-3">
          {[["23", "rokov praxe"], ["Elite", "linergistka"], ["3 mes.", "bezplatné dopigmentovanie"]].map(([v, l]) => (<div key={l}><dt className="text-5xl text-[#7fd1b9]" style={serif}>{v}</dt><dd className="mt-2 text-sm uppercase tracking-[0.2em] text-white/80">{l}</dd></div>))}
        </dl>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-4xl md:text-5xl" style={serif}>Prístup k práci</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[["Konzultácia", "Spoločne si prejdeme, čo chcete dosiahnuť a aký tvar vám pristane."], ["Predkreslenie", "Kontúry kreslíme špeciálnou farebnou ceruzkou a môžeme ich kedykoľvek upraviť."], ["Pigmentácia", "Až po odsúhlasení tvaru pigmentujeme prístrojom Long-Time-Liner® pre prirodzený vzhľad."]].map(([t, d]) => (
            <div key={t} className="border-t-2 border-[#0f6b57] pt-5"><h3 className="text-2xl" style={serif}>{t}</h3><p className="mt-2 text-sm text-[#3d524d]">{d}</p></div>
          ))}
        </div>
      </section>

      <Cta />
    </>
  );
}
