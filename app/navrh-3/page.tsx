import Image from "next/image";
import { Phone, MapPin, Mail, Check, X, PenLine, Sparkles, ShieldCheck, Clock } from "lucide-react";
import { biz, faq, demoReviews } from "@/data/business";
import ContactForm, { type FormStyle } from "@/components/ContactForm";
import Accordion from "@/components/Accordion";
import { SmartHeader, ServiceTabs, Counters, Gallery, BeforeAfter, Configurator, Calculator, News, LeadMagnet } from "@/components/n3/Interactive";

const serif = { fontFamily: "var(--f-serif)" };
const btn = "inline-flex items-center justify-center rounded-full bg-[#b3472f] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#8f3722]";
const h2 = "text-4xl md:text-6xl";
const wrap = "mx-auto max-w-7xl px-6";

const formStyle: FormStyle = {
  form: "grid gap-4", field: "grid gap-1.5", label: "text-sm text-[#2a1a24]",
  input: "w-full rounded-2xl border border-[#d9c2bb] bg-white px-4 py-3 text-[#2a1a24] focus:border-[#b3472f] focus:outline-none",
  error: "text-sm text-[#a0262f]", button: btn + " mt-2", ok: "rounded-2xl bg-white p-6 text-[#2a1a24]",
};

const news = [
  { t: "Ako si pripraviť podklady na konzultáciu", d: "Okt 2026", body: "Demonštračný článok: zoberte si fotografie obočia, ktoré sa vám páčia, a zamyslite sa nad tým, ako sa líčite dnes. Pomôže to pri výbere tvaru." },
  { t: "Predkreslenie: prečo je najdôležitejšie", d: "Sep 2026", body: "Demonštračný článok: tvar sa najprv nakreslí farebnou ceruzkou, kde je možné ho kedykoľvek upraviť. Až potom nasleduje pigmentácia." },
  { t: "Obočie, linky alebo pery – kde začať?", d: "Aug 2026", body: "Demonštračný článok: začať môžete tou partiou, ktorá vás každé ráno zdržuje najviac. Poradíme vám na konzultácii." },
];

export default function Navrh3() {
  return (
    <div className="bg-[#fbf1ee] text-[#2a1a24]">
      <a href="#obsah" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[90] focus:bg-white focus:p-2">Preskočiť na obsah</a>

      {/* 1. Smart header */}
      <SmartHeader />

      <main id="obsah">
        {/* 2. Advanced Hero */}
        <section className="relative isolate overflow-hidden bg-[#2a1a24] pt-24 text-white">
          <Image src="/images/portrait-red.jpg" alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-40" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2a1a24] via-[#2a1a24]/80 to-transparent" aria-hidden />
          <div className={`${wrap} grid min-h-[80vh] items-center gap-10 py-16 md:grid-cols-[1.2fr_.8fr]`}>
            <div className="rise">
              <p className="text-xs uppercase tracking-[0.35em] text-[#f2b8a6]">Permanentný make-up · Bratislava</p>
              <h1 className="mt-5 text-5xl leading-[1.02] md:text-8xl" style={serif}>Zobuďte sa s dokonalou tvárou.</h1>
              <p className="mt-6 max-w-xl text-lg text-white/85">Obočie, očné linky a pery metódou Conture®. Vyskladajte si ošetrenie v konfigurátore, spočítajte cenu a objednajte sa.</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#konfigurator" className={btn}>Vyskladať ošetrenie</a>
                <a href="#kalkulacka" className="inline-flex rounded-full border border-white/50 px-7 py-3 text-sm transition hover:border-[#f2b8a6]">Spočítať cenu</a>
              </div>
            </div>
            <ul className="grid gap-3 text-sm md:justify-self-end">
              {["23 rokov praxe", "Predkreslenie pred pigmentáciou", "Dopigmentovanie do 3 mesiacov"].map((t) => (<li key={t} className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 backdrop-blur"><Check size={16} className="text-[#f2b8a6]" aria-hidden />{t}</li>))}
            </ul>
          </div>
        </section>

        {/* 3. Social proof strip */}
        <section aria-label="Fakty o štúdiu" className="overflow-hidden bg-[#b3472f] py-4 text-white">
          <div className="marquee flex w-max gap-12 whitespace-nowrap text-sm uppercase tracking-[0.2em]" aria-hidden="true">
            {[0, 1].map((k) => (<div key={k} className="flex gap-12">{["Elite linergistka", "23 rokov praxe", "Metóda Conture®", "Long-Time-Liner®", "Palisády, Bratislava", "Bezplatné dopigmentovanie do 3 mesiacov"].map((t) => (<span key={t + k}>★ {t}</span>))}</div>))}
          </div>
          <p className="sr-only">Elite linergistka, 23 rokov praxe, metóda Conture, prevádzka Bratislava Palisády, bezplatné dopigmentovanie do 3 mesiacov.</p>
        </section>

        {/* 4. Problém a riešenie */}
        <section className={`${wrap} py-24`}>
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

        {/* 5. Interaktívne služby */}
        <section id="sluzby" className="bg-[#f3dcd6] py-24">
          <div className={wrap}><h2 className={h2} style={serif}>Služby</h2><p className="mt-3 text-[#4a3943]">Vyberte partiu a pozrite si postup a ceny.</p><ServiceTabs /></div>
        </section>

        {/* 6. Benefity / USP */}
        <section className={`${wrap} py-24`}>
          <h2 className={h2} style={serif}>Prečo práve my</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[[PenLine, "Predkreslenie", "Tvar najprv vidíte a upravujete."], [Sparkles, "Prirodzenosť", "Jemné vlásky, nie „namaľované“ obočie."], [ShieldCheck, "Osobná záruka", "Dopigmentovanie do 3 mesiacov bezplatne."], [Clock, "Skúsenosti", "23 rokov praxe elite linergistky."]].map(([Icon, t, d]) => {
              const I = Icon as typeof Clock;
              return (<div key={t as string} className="rounded-3xl bg-white p-7"><I className="text-[#b3472f]" aria-hidden /><h3 className="mt-4 text-2xl" style={serif}>{t as string}</h3><p className="mt-2 text-sm text-[#4a3943]">{d as string}</p></div>);
            })}
          </div>
        </section>

        {/* 7. Kľúčové výsledky */}
        <section className="bg-[#2a1a24] py-20 text-white">
          <div className={wrap}>
            <h2 className="mb-10 text-3xl md:text-5xl" style={serif}>Štúdio v číslach</h2>
            <Counters items={[{ to: 23, suffix: "", label: "rokov praxe" }, { to: 3, suffix: "", label: "hlavné služby" }, { to: 3, suffix: " mes.", label: "bezplatné dopigmentovanie" }, { to: 1, suffix: "", label: "prevádzka v Bratislave" }]} />
          </div>
        </section>

        {/* 8. Proces spolupráce */}
        <section id="proces" className={`${wrap} py-24`}>
          <h2 className={h2} style={serif}>Proces spolupráce</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-4">
            {[["Objednanie", "Telefonicky alebo cez formulár."], ["Konzultácia", "Spoločne zvolíme tvar a odtieň."], ["Predkreslenie", "Odsúhlasíte kontúry ceruzkou."], ["Pigmentácia", "Ošetrenie a prípadné dopigmentovanie."]].map(([t, d], i) => (
              <li key={t} className="rounded-3xl bg-white p-7"><span className="text-6xl text-[#e8c4c0]" style={serif}>{i + 1}</span><h3 className="mt-2 text-2xl" style={serif}>{t}</h3><p className="mt-2 text-sm text-[#4a3943]">{d}</p></li>
            ))}
          </ol>
        </section>

        {/* 9. Featured realizácia */}
        <section className="bg-white py-24">
          <div className={`${wrap} grid items-center gap-10 md:grid-cols-2`}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl"><Image src="/images/lips.jpg" alt="Ilustračná fotografia: líčenie očí a pier" fill sizes="(max-width:768px) 90vw, 560px" className="object-cover" loading="lazy" /></div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#b3472f]">Ukážka · demo</p>
              <h2 className={h2} style={serif}>Výrazné oči a pery</h2>
              <p className="mt-5 text-[#4a3943]">Demonštračná ukážka scenára: dekoratívna očná linka (160 €) v kombinácii s plnovytieňovanými perami (350 €). Fotografia je ilustračná a nezobrazuje reálnu realizáciu firmy.</p>
              <a href="#konfigurator" className={`${btn} mt-7`}>Vyskúšať v konfigurátore</a>
            </div>
          </div>
        </section>

        {/* 10. Galéria / portfólio */}
        <section id="galeria" className={`${wrap} py-24`}>
          <h2 className={h2} style={serif}>Galéria</h2>
          <p className="mt-3 text-[#4a3943]">Ilustračné fotografie (Unsplash). Filtrujte a kliknutím zväčšite.</p>
          <Gallery />
        </section>

        {/* 11. Before / After slider */}
        <section className="bg-[#f3dcd6] py-24">
          <div className={wrap}>
            <h2 className={`${h2} text-center`} style={serif}>Pred a po</h2>
            <p className="mx-auto mb-10 mt-3 max-w-lg text-center text-[#4a3943]">Posúvajte posuvník a porovnajte.</p>
            <BeforeAfter />
          </div>
        </section>

        {/* 12. Referencie */}
        <section className={`${wrap} py-24`}>
          <h2 className={h2} style={serif}>Referencie <span className="text-lg text-[#a0262f]">(fiktívne, demo)</span></h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {demoReviews.map((r) => (<figure key={r.name} className="rounded-3xl bg-white p-7"><blockquote className="text-lg leading-snug" style={serif}>„{r.text}“</blockquote><figcaption className="mt-4 text-sm text-[#4a3943]">{r.name}</figcaption></figure>))}
          </div>
        </section>

        {/* 13. Priebežné CTA */}
        <section className="bg-[#b3472f] py-14 text-center text-white">
          <h2 className="px-6 text-3xl md:text-4xl" style={serif}>Máte otázky k tvaru či odtieňu?</h2>
          <a href={biz.phoneHref} className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-[#8f3722]"><Phone size={16} aria-hidden />Zavolať {biz.phone}</a>
        </section>

        {/* 14. O nás / tím */}
        <section id="o-nas" className={`${wrap} grid items-center gap-10 py-24 md:grid-cols-2`}>
          <div>
            <h2 className={h2} style={serif}>O nás a tím</h2>
            <p className="mt-5 text-[#4a3943]">Bratislavskú prevádzku na Palisádach vedie elite linergistka s 23-ročnou praxou. Pracujeme metódou Conture® – pomaly, presne a s dôrazom na prirodzený výsledok.</p>
            <div className="mt-7 flex items-center gap-4 rounded-2xl bg-white p-5"><div className="grid h-14 w-14 place-items-center rounded-full bg-[#e8c4c0] text-xl" style={serif} aria-hidden>CM</div><div><p className="font-medium">Elite linergistka</p><p className="text-sm text-[#4a3943]">Prevádzka Bratislava · 23 rokov praxe</p></div></div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl"><Image src="/images/studio.jpg" alt="Ilustračná fotografia: svetlý štúdiový interiér" fill sizes="(max-width:768px) 90vw, 600px" className="object-cover grayscale" loading="lazy" /></div>
        </section>

        {/* 15. Technológie / vybavenie / materiály */}
        <section className="bg-white py-24">
          <div className={wrap}>
            <h2 className={h2} style={serif}>Technológie a vybavenie</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[["Conture MED 2000", "Prístroj na implantáciu farieb podľa popisu na pôvodnom webe."], ["Long-Time-Liner®", "Prístroj na pigmentáciu jemných vlások obočia."], ["Farebná ceruzka", "Na predkreslenie a úpravu kontúr pred pigmentáciou."]].map(([t, d]) => (<div key={t} className="rounded-3xl bg-[#fbf1ee] p-7"><h3 className="text-2xl" style={serif}>{t}</h3><p className="mt-2 text-sm text-[#4a3943]">{d}</p></div>))}
            </div>
          </div>
        </section>

        {/* 16. Interaktívny konfigurátor */}
        <section id="konfigurator" className={`${wrap} py-24`}>
          <h2 className={h2} style={serif}>Konfigurátor ošetrenia</h2>
          <p className="mt-3 text-[#4a3943]">Vyskladajte si ošetrenie a uvidíte cenu.</p>
          <Configurator />
        </section>

        {/* 17. Cenník / balíčky */}
        <section id="cennik" className="bg-[#2a1a24] py-24 text-white">
          <div className={wrap}>
            <h2 className={h2} style={serif}>Cenník a balíčky</h2>
            <p className="mt-3 text-white/75">Ceny prevádzky Bratislava podľa cenníka z {biz.priceUpdated}. Balíčky sú demonštračné a predstavujú súčet cien z cenníka.</p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[["Obočie", "250 €", ["Čiarkované, púdrové alebo kombo", "Predkreslenie a konzultácia"]], ["Oči a obočie", "370 €", ["Obočie + jemné očné linky", "Súčet 250 + 120 €"]], ["Kompletný look", "760 €", ["Obočie + dekoratívne linky + pery", "Súčet 250 + 160 + 350 €"]]].map(([t, p, l], k) => (
                <div key={t as string} className={`rounded-3xl p-8 ${k === 1 ? "bg-[#f2b8a6] text-[#2a1a24]" : "bg-white/10"}`}>
                  <h3 className="text-2xl" style={serif}>{t as string}</h3><p className="mt-3 text-5xl" style={serif}>{p as string}</p>
                  <ul className="mt-5 grid gap-2 text-sm">{(l as string[]).map((x) => (<li key={x} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0" aria-hidden />{x}</li>))}</ul>
                  <a href="#kontakt" className={`mt-7 inline-flex rounded-full px-6 py-2.5 text-sm font-medium ${k === 1 ? "bg-[#2a1a24] text-white" : "bg-white text-[#2a1a24]"}`}>Objednať</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 18. Kalkulačka */}
        <section id="kalkulacka" className={`${wrap} py-24`}>
          <h2 className={h2} style={serif}>Kalkulačka ceny</h2>
          <Calculator />
        </section>

        {/* 19. Lokality / mapa */}
        <section id="lokality" className="bg-white py-24">
          <div className={`${wrap} grid gap-10 md:grid-cols-2`}>
            <div>
              <h2 className={h2} style={serif}>Prevádzka</h2>
              <p className="mt-4 text-[#4a3943]">Návrh sa týka výlučne prevádzky v Bratislave.</p>
              <p className="mt-6 flex gap-3"><MapPin className="shrink-0 text-[#b3472f]" aria-hidden />{biz.address}</p>
              <p className="mt-3 flex gap-3"><Phone className="shrink-0 text-[#b3472f]" aria-hidden /><a href={biz.phoneHref} className="underline">{biz.phone}</a></p>
              <p className="mt-6 text-sm text-[#4a3943]">Otváracie hodiny na pôvodnom webe nie sú uvedené – objednávajte telefonicky.</p>
            </div>
            <iframe title="Mapa: Palisády, Bratislava (približná poloha)" loading="lazy" className="h-80 w-full rounded-3xl border-0" src="https://www.openstreetmap.org/export/embed.html?bbox=17.1000%2C48.1420%2C17.1200%2C48.1500&amp;layer=mapnik" />
          </div>
        </section>

        {/* 20. FAQ */}
        <section id="faq" className={`${wrap} max-w-3xl py-24`}>
          <h2 className={h2} style={serif}>Časté otázky</h2>
          <div className="mt-8"><Accordion items={faq} idPrefix="n3" item="border-b border-[#d9c2bb]" btn="flex w-full items-center justify-between gap-4 py-5 text-left text-lg" panel="pb-5 text-[#4a3943]" icons /></div>
        </section>

        {/* 21. Novinky / insighty */}
        <section className="bg-[#f3dcd6] py-24"><div className={wrap}><h2 className={h2} style={serif}>Novinky a tipy</h2><News items={news} /></div></section>

        {/* 22. Lead magnet */}
        <section className="bg-[#2a1a24] py-20 text-white">
          <div className={`${wrap} grid items-center gap-8 md:grid-cols-2`}>
            <div><h2 className="text-3xl md:text-5xl" style={serif}>Checklist: príprava na konzultáciu</h2><p className="mt-3 text-white/80">Zadajte e-mail a zobrazí sa vám ukážka checklistu (demo, nič sa neodosiela).</p></div>
            <LeadMagnet />
          </div>
        </section>

        {/* 23. Záverečná konverzná a kontaktná sekcia */}
        <section id="kontakt" className={`${wrap} grid gap-10 py-24 md:grid-cols-2`}>
          <div>
            <h2 className={h2} style={serif}>Objednajte sa</h2>
            <p className="mt-4 text-[#4a3943]">Zavolajte alebo vyplňte formulár.</p>
            <ul className="mt-8 grid gap-4">
              <li className="flex gap-3"><Phone className="text-[#b3472f]" aria-hidden /><a href={biz.phoneHref} className="underline">{biz.phone}</a></li>
              <li className="flex gap-3"><Mail className="text-[#b3472f]" aria-hidden /><a href={`mailto:${biz.email}`} className="underline">{biz.email}</a></li>
              <li className="flex gap-3"><MapPin className="text-[#b3472f]" aria-hidden />{biz.address}</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-8"><ContactForm s={formStyle} idPrefix="n3" /></div>
        </section>
      </main>

      {/* 24. Rozšírený footer */}
      <footer className="bg-[#2a1a24] text-white/80">
        <div className={`${wrap} grid gap-10 py-14 md:grid-cols-4`}>
          <div><p className="text-2xl text-white" style={serif}>Conture Make-Up</p><p className="mt-3 text-sm">Permanentný make-up v Bratislave.</p></div>
          <nav aria-label="Pätička – navigácia"><p className="font-medium text-white">Navigácia</p><ul className="mt-3 grid gap-2 text-sm"><li><a href="#sluzby" className="hover:underline">Služby</a></li><li><a href="#cennik" className="hover:underline">Cenník</a></li><li><a href="#faq" className="hover:underline">FAQ</a></li><li><a href="#kontakt" className="hover:underline">Kontakt</a></li></ul></nav>
          <div><p className="font-medium text-white">Kontakt</p><ul className="mt-3 grid gap-2 text-sm"><li>{biz.address}</li><li><a href={biz.phoneHref} className="hover:underline">{biz.phone}</a></li><li><a href={`mailto:${biz.email}`} className="hover:underline">{biz.email}</a></li></ul></div>
          <div><p className="font-medium text-white">Sociálne siete</p><p className="mt-3 flex gap-3" aria-label="Sociálne siete (demo, bez odkazov)"><span>Instagram</span><span>Facebook</span></p><p className="mt-2 text-xs">Pôvodný web neuvádza sociálne siete – ikony sú len ukážka.</p></div>
        </div>
        <p className="border-t border-white/10 px-6 py-5 text-center text-xs">Demonštračný návrh na interné testovanie. Fotografie ilustračné (Unsplash), recenzie, články a balíčky sú demo. Zdroj údajov: {biz.source}</p>
      </footer>
    </div>
  );
}
