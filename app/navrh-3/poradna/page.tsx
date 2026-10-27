import type { Metadata } from "next";
import { faq } from "@/data/business";
import Accordion from "@/components/Accordion";
import { Cta, PageHero } from "@/components/n3/Blocks";
import { News, LeadMagnet } from "@/components/n3/Interactive";
import { BASE, serif, h2, wrap } from "@/components/n3/ui";

export const metadata: Metadata = {
  title: "Poradňa – príprava, články a časté otázky",
  description: "Tipy na konzultáciu, články a odpovede na časté otázky o permanentnom make-upe. Demonštračný obsah štúdia Conture Make-Up.",
  alternates: { canonical: `${BASE}/poradna` },
};

const news = [
  { t: "Ako si pripraviť podklady na konzultáciu", d: "Okt 2026", body: "Demonštračný článok: zoberte si fotografie obočia, ktoré sa vám páčia, a zamyslite sa nad tým, ako sa líčite dnes. Pomôže to pri výbere tvaru." },
  { t: "Predkreslenie: prečo je najdôležitejšie", d: "Sep 2026", body: "Demonštračný článok: tvar sa najprv nakreslí farebnou ceruzkou, kde je možné ho kedykoľvek upraviť. Až potom nasleduje pigmentácia." },
  { t: "Obočie, linky alebo pery – kde začať?", d: "Aug 2026", body: "Demonštračný článok: začať môžete tou partiou, ktorá vás každé ráno zdržuje najviac. Poradíme vám na konzultácii." },
];

export default function Poradna() {
  return (
    <>
      <PageHero kicker="Poradňa · demo" title="Poradňa" lead="Tipy na prípravu, články a odpovede na časté otázky. Obsah článkov je demonštračný." />

      <section className={`${wrap} py-24`}>
        <h2 className={h2} style={serif}>Články a tipy</h2>
        <News items={news} />
      </section>

      <section id="priprava" className="bg-[#2a1a24] py-20 text-white">
        <div className={`${wrap} grid items-center gap-8 md:grid-cols-2`}>
          <div><h2 className="text-3xl md:text-5xl" style={serif}>Príprava pred zákrokom</h2><p className="mt-3 text-white/80">Zadajte e-mail a zobrazí sa vám ukážka checklistu na konzultáciu (demo, nič sa neodosiela).</p></div>
          <LeadMagnet />
        </div>
      </section>

      <section className={`${wrap} py-24`}>
        <h2 className={h2} style={serif}>Starostlivosť po zákroku</h2>
        <p className="mt-5 max-w-2xl rounded-3xl bg-white p-7 text-[#4a3943]">Pôvodný web podrobnosti o starostlivosti po ošetrení neuvádza. Odporúčania vám preto poskytne špecialistka osobne pri ošetrení. Tu zámerne neuvádzame vymyslené zdravotné rady.</p>
      </section>

      <section id="faq" className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className={h2} style={serif}>Časté otázky</h2>
          <div className="mt-8"><Accordion items={faq} idPrefix="n3" item="border-b border-[#d9c2bb]" btn="flex w-full items-center justify-between gap-4 py-5 text-left text-lg" panel="pb-5 text-[#4a3943]" icons /></div>
        </div>
      </section>

      <Cta />
    </>
  );
}
