import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, PenLine, Sparkles, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import { services } from "@/data/business";
import { Cta } from "@/components/n3/Blocks";
import { BASE, serif, btn, btnGhost, h2, wrap } from "@/components/n3/ui";

export const metadata: Metadata = {
  title: { absolute: "Conture Make-Up – interaktívny web, kalkulačka cien | Návrh 3" },
  description: "Permanentný make-up obočia, očných liniek a pier v Bratislave. Vyskladajte si ošetrenie a spočítajte orientačnú cenu. Demonštračný návrh.",
  alternates: { canonical: BASE },
};

export default function Home() {
  return (
    <>
      {/* Advanced Hero */}
      <section className="relative isolate overflow-hidden bg-[#2a1a24] pt-24 text-white">
        <Image src="/images/portrait-red.jpg" alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2a1a24] via-[#2a1a24]/80 to-transparent" aria-hidden />
        <div className={`${wrap} grid min-h-[80vh] items-center gap-10 py-16 md:grid-cols-[1.2fr_.8fr]`}>
          <div className="rise">
            <p className="text-xs uppercase tracking-[0.35em] text-[#f2b8a6]">Permanentný make-up · Bratislava</p>
            <h1 className="mt-5 text-5xl leading-[1.02] md:text-8xl" style={serif}>Zobuďte sa s dokonalou tvárou.</h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">Obočie, očné linky a pery metódou Conture®. Vyskladajte si ošetrenie v cenníku, spočítajte cenu a objednajte sa.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href={`${BASE}/cennik`} className={btn}>Vyskladať ošetrenie</Link>
              <Link href={`${BASE}/sluzby`} className={btnGhost}>Pozrieť služby</Link>
            </div>
          </div>
          <ul className="grid gap-3 text-sm md:justify-self-end">
            {["23 rokov praxe", "Predkreslenie pred pigmentáciou", "Dopigmentovanie do 3 mesiacov"].map((t) => (<li key={t} className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 backdrop-blur"><Check size={16} className="text-[#f2b8a6]" aria-hidden />{t}</li>))}
          </ul>
        </div>
      </section>

      {/* Social proof strip */}
      <section aria-label="Fakty o štúdiu" className="overflow-hidden bg-[#b3472f] py-4 text-white">
        <div className="marquee flex w-max gap-12 whitespace-nowrap text-sm uppercase tracking-[0.2em]" aria-hidden="true">
          {[0, 1].map((k) => (<div key={k} className="flex gap-12">{["Elite linergistka", "23 rokov praxe", "Metóda Conture®", "Long-Time-Liner®", "Palisády, Bratislava", "Bezplatné dopigmentovanie do 3 mesiacov"].map((t) => (<span key={t + k}>★ {t}</span>))}</div>))}
        </div>
        <p className="sr-only">Elite linergistka, 23 rokov praxe, metóda Conture, prevádzka Bratislava Palisády, bezplatné dopigmentovanie do 3 mesiacov.</p>
      </section>

      {/* Stručný prehľad služieb */}
      <section className={`${wrap} py-24`}>
        <h2 className={h2} style={serif}>Služby</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Link key={s.id} href={`${BASE}/sluzby/${s.id}`} className="group overflow-hidden rounded-3xl bg-white">
              <div className="relative aspect-[4/3] overflow-hidden"><Image src={s.image} alt={`Ilustračná fotografia – ${s.title.toLowerCase()}`} fill sizes="(max-width:768px) 90vw, 400px" className="object-cover transition duration-500 group-hover:scale-105" loading="lazy" /></div>
              <div className="p-6"><h3 className="text-3xl" style={serif}>{s.title}</h3><p className="mt-2 flex items-center justify-between text-sm"><span>od {Math.min(...s.items.map((i) => i.price))} €</span><span className="flex items-center gap-1 font-medium text-[#b3472f]">Detail <ArrowRight size={14} aria-hidden /></span></p></div>
            </Link>
          ))}
        </div>
      </section>

      {/* Benefity / USP */}
      <section className="bg-white py-24">
        <div className={wrap}>
          <h2 className={h2} style={serif}>Prečo práve my</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[[PenLine, "Predkreslenie", "Tvar najprv vidíte a upravujete."], [Sparkles, "Prirodzenosť", "Jemné vlásky, nie „namaľované“ obočie."], [ShieldCheck, "Osobná záruka", "Dopigmentovanie do 3 mesiacov bezplatne."], [Clock, "Skúsenosti", "23 rokov praxe elite linergistky."]].map(([Icon, t, d]) => {
              const I = Icon as typeof Clock;
              return (<div key={t as string} className="rounded-3xl bg-[#fbf1ee] p-7"><I className="text-[#b3472f]" aria-hidden /><h3 className="mt-4 text-2xl" style={serif}>{t as string}</h3><p className="mt-2 text-sm text-[#4a3943]">{d as string}</p></div>);
            })}
          </div>
        </div>
      </section>

      {/* Featured realizácia */}
      <section className={`${wrap} grid items-center gap-10 py-24 md:grid-cols-2`}>
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl"><Image src="/images/lips.jpg" alt="Ilustračná fotografia: líčenie očí a pier" fill sizes="(max-width:768px) 90vw, 560px" className="object-cover" loading="lazy" /></div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#b3472f]">Ukážka · demo</p>
          <h2 className={h2} style={serif}>Výrazné oči a pery</h2>
          <p className="mt-5 text-[#4a3943]">Demonštračná ukážka scenára: dekoratívna očná linka (160 €) v kombinácii s plnovytieňovanými perami (350 €). Fotografia je ilustračná a nezobrazuje reálnu realizáciu firmy.</p>
          <div className="mt-7 flex flex-wrap gap-4"><Link href={`${BASE}/cennik`} className={btn}>Vyskúšať v cenníku</Link><Link href={`${BASE}/realizacie`} className="inline-flex items-center rounded-full border border-[#2a1a24]/40 px-7 py-3 text-sm hover:border-[#b3472f]">Všetky realizácie</Link></div>
        </div>
      </section>

      <Cta />
    </>
  );
}
