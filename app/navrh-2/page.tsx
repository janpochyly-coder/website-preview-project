import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Sparkles, PenLine, ArrowRight } from "lucide-react";
import { services, demoReviews } from "@/data/business";
import { Cta } from "@/components/n2/Blocks";
import { BASE, serif, eyebrow, eyebrowLight, btnPrimary, btnGhost } from "@/components/n2/ui";

export const metadata: Metadata = {
  title: { absolute: "Conture Make-Up – prémiový permanentný make-up Bratislava | Návrh 2" },
  description: "Permanentný make-up obočia, očných liniek a pier v Bratislave. Predkreslenie, konzultácia a bezplatné dopigmentovanie do 3 mesiacov. Demonštračný návrh.",
  alternates: { canonical: BASE },
};

const blurbs: Record<string, string> = {
  obocie: "Čiarkované, púdrové alebo kombo – tvar najprv predkreslíme.",
  "ocne-linky": "Jemná alebo dekoratívna linka v línii mihalníc.",
  pery: "Plnovytieňované pery so sýtejšou farbou a prirodzeným tvarom.",
};

export default function Home() {
  return (
    <>
      {/* Hero a hlavný hodnotový prísľub */}
      <section className="relative overflow-hidden bg-[#07241f] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_.9fr] md:py-24">
          <div className="rise self-center">
            <p className={eyebrow}>Permanentný make-up · Bratislava</p>
            <h1 className="mt-6 text-5xl leading-[1.05] md:text-7xl" style={serif}>Presnosť, ktorú <span className="text-[#7fd1b9]">nikto nevidí.</span> Výsledok, ktorý vidia všetci.</h1>
            <p className="mt-6 max-w-lg text-lg font-light text-white/80">Obočie, očné linky a pery metódou Conture®. Tvar najprv predkreslíme, odsúhlasíme – a až potom pigmentujeme.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href={`${BASE}/kontakt`} className={btnPrimary}>Rezervovať konzultáciu</Link>
              <Link href={`${BASE}/sluzby#cennik`} className={btnGhost}>Cenník</Link>
            </div>
          </div>
          <div className="relative aspect-[3/4] w-full">
            <div className="absolute inset-0 translate-x-4 translate-y-4 border border-[#7fd1b9]" aria-hidden />
            <Image src="/images/portrait-dark.jpg" alt="Ilustračná fotografia: portrét ženy s upraveným obočím" fill priority sizes="(max-width:768px) 90vw, 500px" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section aria-label="Prehľad istôt" className="bg-[#123a5c] text-white">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-6 text-center text-xs uppercase tracking-[0.2em] md:grid-cols-4">
          <li>23 rokov praxe</li><li>Elite linergistka</li><li>Predkreslenie pred pigmentáciou</li><li>Dopigmentovanie do 3 mesiacov</li>
        </ul>
      </section>

      {/* Stručný prehľad služieb */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className={eyebrowLight}>Ponuka</p>
        <h2 className="mt-3 text-4xl md:text-5xl" style={serif}>Naše služby</h2>
        <div className="mt-12 grid gap-px bg-[#cfe0dc] md:grid-cols-3">
          {services.map((s) => (
            <Link key={s.id} href={`${BASE}/sluzby#${s.id}`} className="group bg-white">
              <div className="relative aspect-[4/3] overflow-hidden"><Image src={s.image} alt={`Ilustračná fotografia – ${s.title.toLowerCase()}`} fill sizes="(max-width:768px) 90vw, 400px" className="object-cover transition duration-500 group-hover:scale-105" loading="lazy" /></div>
              <div className="p-7">
                <h3 className="text-2xl" style={serif}>{s.title}</h3>
                <p className="mt-3 text-sm text-[#3d524d]">{blurbs[s.id]}</p>
                <p className="mt-4 flex items-center justify-between text-sm"><strong className="text-[#123a5c]">od {Math.min(...s.items.map((i) => i.price))} €</strong><span className="flex items-center gap-1 text-[#0f6b57]">Detail <ArrowRight size={14} aria-hidden /></span></p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Prečo si vybrať nás */}
      <section className="bg-[#eef5f3] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="max-w-xl text-4xl md:text-5xl" style={serif}>Prečo si vybrať nás</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              [PenLine, "Najprv predkreslenie", "Tvar upravujeme farebnou ceruzkou, kým vám dokonale nesadne."],
              [Award, "Skúsenosti", "23 rokov praxe elite linergistky v Bratislave."],
              [ShieldCheck, "Osobná záruka", "Bezplatné dopigmentovanie do 3 mesiacov."],
              [Sparkles, "Jemné vlásky", "Prirodzený efekt vďaka prístroju Long-Time-Liner®."],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof Award;
              return (<div key={t as string} className="border-t-2 border-[#0f6b57] pt-5"><I className="text-[#0f6b57]" aria-hidden /><h3 className="mt-4 text-xl" style={serif}>{t as string}</h3><p className="mt-2 text-sm text-[#3d524d]">{d as string}</p></div>);
            })}
          </div>
        </div>
      </section>

      {/* Výber referencií */}
      <section className="bg-[#07241f] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className={eyebrow}>Referencie · demo</p>
          <h2 className="mt-3 text-4xl md:text-5xl" style={serif}>Čo hovoria klientky</h2>
          <p className="mt-3 text-sm text-white/70">Demonštračný obsah: recenzie sú fiktívne.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {demoReviews.map((r) => (
              <figure key={r.name} className="border border-white/20 p-7">
                <blockquote className="leading-relaxed text-white/90">„{r.text}“</blockquote>
                <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-[#7fd1b9]">{r.name}</figcaption>
              </figure>
            ))}
          </div>
          <Link href={`${BASE}/realizacie`} className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#7fd1b9] hover:text-white">Všetky realizácie <ArrowRight size={14} aria-hidden /></Link>
        </div>
      </section>

      <Cta />
    </>
  );
}
