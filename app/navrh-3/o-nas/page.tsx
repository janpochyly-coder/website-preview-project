import type { Metadata } from "next";
import Image from "next/image";
import { Cta, PageHero } from "@/components/n3/Blocks";
import { Counters } from "@/components/n3/Interactive";
import { BASE, serif, h2, wrap } from "@/components/n3/ui";

export const metadata: Metadata = {
  title: "O nás – elite linergistka, technológie a vybavenie",
  description: "Štúdio Conture Make-Up v Bratislave: 23 rokov praxe, metóda Conture®, prístroje Conture MED 2000 a Long-Time-Liner®.",
  alternates: { canonical: `${BASE}/o-nas` },
};

export default function ONas() {
  return (
    <>
      <PageHero kicker="O nás" title="Pomaly, presne, prirodzene" lead="Bratislavskú prevádzku na Palisádach vedie elite linergistka s 23-ročnou praxou." />

      <section className={`${wrap} grid items-center gap-10 py-24 md:grid-cols-2`}>
        <div>
          <h2 className={h2} style={serif}>Predstavenie a tím</h2>
          <p className="mt-5 text-[#4a3943]">Pracujeme metódou Conture® – pomaly, presne a s dôrazom na prirodzený výsledok.</p>
          <div className="mt-7 flex items-center gap-4 rounded-2xl bg-white p-5"><div className="grid h-14 w-14 place-items-center rounded-full bg-[#e8c4c0] text-xl" style={serif} aria-hidden>CM</div><div><p className="font-medium">Elite linergistka</p><p className="text-sm text-[#4a3943]">Prevádzka Bratislava · 23 rokov praxe</p></div></div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl"><Image src="/images/studio.jpg" alt="Ilustračná fotografia: svetlý štúdiový interiér" fill sizes="(max-width:768px) 90vw, 600px" className="object-cover grayscale" loading="lazy" /></div>
      </section>

      <section className="bg-[#2a1a24] py-20 text-white">
        <div className={wrap}>
          <h2 className="mb-10 text-3xl md:text-5xl" style={serif}>Štúdio v číslach</h2>
          <Counters items={[{ to: 23, suffix: "", label: "rokov praxe" }, { to: 3, suffix: "", label: "hlavné služby" }, { to: 3, suffix: " mes.", label: "bezplatné dopigmentovanie" }, { to: 1, suffix: "", label: "prevádzka v Bratislave" }]} />
        </div>
      </section>

      <section className="bg-white py-24">
        <div className={wrap}>
          <h2 className={h2} style={serif}>Technológie a vybavenie</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[["Conture MED 2000", "Prístroj na implantáciu farieb podľa popisu na pôvodnom webe."], ["Long-Time-Liner®", "Prístroj na pigmentáciu jemných vlások obočia."], ["Farebná ceruzka", "Na predkreslenie a úpravu kontúr pred pigmentáciou."]].map(([t, d]) => (<div key={t} className="rounded-3xl bg-[#fbf1ee] p-7"><h3 className="text-2xl" style={serif}>{t}</h3><p className="mt-2 text-sm text-[#4a3943]">{d}</p></div>))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
