import type { Metadata } from "next";
import Image from "next/image";
import { biz, services, faq } from "@/data/business";
import Accordion from "@/components/Accordion";
import { PageHero, Cta } from "@/components/n2/Blocks";
import { BASE, serif, eyebrowLight } from "@/components/n2/ui";

export const metadata: Metadata = {
  title: "Služby a cenník permanentného make-upu",
  description: "Permanentný make-up obočia, očných liniek a pier v Bratislave: postup, cenník a časté otázky. Ceny z cenníka k 19. 11. 2024.",
  alternates: { canonical: `${BASE}/sluzby` },
};

const steps = ["Objednanie telefonicky alebo cez formulár", "Konzultácia a výber tvaru a odtieňa", "Predkreslenie a odsúhlasenie kontúr", "Pigmentácia a prípadné dopigmentovanie"];

export default function Sluzby() {
  return (
    <>
      <PageHero kicker="Ponuka" title="Služby a cenník" lead={`Prevádzka Bratislava · ceny z cenníka k ${biz.priceUpdated}, zmena cien vyhradená.`} />

      <section id="cennik" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-3xl md:text-4xl" style={serif}>Prehľad služieb</h2>
        <div className="mt-12 grid gap-px bg-[#cfe0dc] md:grid-cols-3">
          {services.map((s) => (
            <article key={s.id} id={s.id} className="bg-white">
              <div className="relative aspect-[4/3]"><Image src={s.image} alt={`Ilustračná fotografia – ${s.title.toLowerCase()}`} fill sizes="(max-width:768px) 90vw, 400px" className="object-cover" loading="lazy" /></div>
              <div className="p-7">
                <h3 className="text-2xl" style={serif}>{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#3d524d]">{s.text}</p>
                <ul className="mt-5 text-sm">
                  {s.items.map((i) => (<li key={i.name} className="flex justify-between gap-3 border-t border-[#cfe0dc] py-2.5"><span>{i.name}</span><strong className="text-[#123a5c]">{i.price} €</strong></li>))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="proces" className="bg-[#eef5f3] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className={eyebrowLight}>Postup</p>
          <h2 className="mt-3 text-4xl md:text-5xl" style={serif}>Ako prebieha spolupráca</h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map((t, i) => (
              <li key={t} className="border border-[#cfe0dc] bg-white p-6"><span className="text-5xl text-[#123a5c]/25" style={serif}>0{i + 1}</span><p className="mt-3 font-medium">{t}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section id="faq" className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl md:text-5xl" style={serif}>Časté otázky</h2>
          <div className="mt-10">
            <Accordion items={faq} idPrefix="n2" item="border-b border-[#bcd3cd]" btn="flex w-full items-center justify-between gap-4 py-5 text-left text-lg" panel="pb-5 text-[#3d524d]" icons />
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
