import Image from "next/image";
import { Phone, MapPin, Mail, ShieldCheck, Award, Sparkles, PenLine, Check } from "lucide-react";
import { biz, services, faq, demoReviews } from "@/data/business";
import ContactForm, { type FormStyle } from "@/components/ContactForm";
import MobileNav from "@/components/MobileNav";
import Accordion from "@/components/Accordion";

const links = [
  { href: "#ponuka", label: "Ponuka" },
  { href: "#proces", label: "Proces" },
  { href: "#referencie", label: "Referencie" },
  { href: "#o-nas", label: "O nás" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

const serif = { fontFamily: "var(--f-serif)" };
const eyebrow = "text-[11px] font-medium uppercase tracking-[0.35em] text-[#7fd1b9]";

const formStyle: FormStyle = {
  form: "grid gap-5", field: "grid gap-1.5", label: "text-xs uppercase tracking-[0.2em] text-white/80",
  input: "w-full border border-white/30 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-[#7fd1b9] focus:outline-none",
  error: "text-sm text-[#ffb4b4]", button: "bg-[#7fd1b9] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.25em] text-[#07241f] transition hover:bg-white",
  ok: "border border-[#7fd1b9] p-6 text-white",
};

export default function Navrh2() {
  return (
    <div className="bg-white text-[#10201d]">
      <a href="#obsah" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[70] focus:bg-white focus:p-2">Preskočiť na obsah</a>

      {/* 1. Header */}
      <header className="sticky top-0 z-50 bg-[#07241f]/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl tracking-[0.12em]" style={serif}>CONTURE <span className="text-[#7fd1b9]">MAKE-UP</span></a>
          <nav aria-label="Hlavná navigácia" className="hidden gap-7 text-xs uppercase tracking-[0.2em] lg:flex">
            {links.map((l) => (<a key={l.href} href={l.href} className="transition hover:text-[#7fd1b9]">{l.label}</a>))}
          </nav>
          <a href={biz.phoneHref} className="hidden items-center gap-2 border border-[#7fd1b9] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#7fd1b9] transition hover:bg-[#7fd1b9] hover:text-[#07241f] lg:flex"><Phone size={14} aria-hidden />{biz.phone}</a>
          <div className="lg:hidden">
            <MobileNav links={links} btn="p-2" panel="absolute inset-x-0 top-full grid bg-[#07241f] px-6 py-4" link="py-3 text-sm uppercase tracking-[0.2em]" />
          </div>
        </div>
      </header>

      <main id="obsah">
        {/* 2. Hero a hlavný hodnotový prísľub */}
        <section className="relative overflow-hidden bg-[#07241f] text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_.9fr] md:py-24">
            <div className="rise self-center">
              <p className={eyebrow}>Permanentný make-up · Bratislava</p>
              <h1 className="mt-6 text-5xl leading-[1.05] md:text-7xl" style={serif}>Presnosť, ktorú <span className="text-[#7fd1b9]">nikto nevidí.</span> Výsledok, ktorý vidia všetci.</h1>
              <p className="mt-6 max-w-lg text-lg font-light text-white/80">Obočie, očné linky a pery metódou Conture®. Tvar najprv predkreslíme, odsúhlasíme – a až potom pigmentujeme.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#kontakt" className="bg-[#7fd1b9] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.25em] text-[#07241f] transition hover:bg-white">Rezervovať konzultáciu</a>
                <a href="#ponuka" className="border border-white/40 px-8 py-3.5 text-xs uppercase tracking-[0.25em] transition hover:border-[#7fd1b9]">Cenník</a>
              </div>
            </div>
            <div className="relative aspect-[3/4] w-full">
              <div className="absolute inset-0 translate-x-4 translate-y-4 border border-[#7fd1b9]" aria-hidden />
              <Image src="/images/portrait-dark.jpg" alt="Ilustračná fotografia: portrét ženy s upraveným obočím" fill priority sizes="(max-width:768px) 90vw, 500px" className="object-cover" />
            </div>
          </div>
        </section>

        {/* 3. Trust strip */}
        <section aria-label="Prehľad istôt" className="bg-[#123a5c] text-white">
          <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-6 text-center text-xs uppercase tracking-[0.2em] md:grid-cols-4">
            <li>23 rokov praxe</li><li>Elite linergistka</li><li>Predkreslenie pred pigmentáciou</li><li>Dopigmentovanie do 3 mesiacov</li>
          </ul>
        </section>

        {/* 4. Ponuka / služby */}
        <section id="ponuka" className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#0f6b57]">Ponuka</p>
          <h2 className="mt-3 text-4xl md:text-5xl" style={serif}>Služby a cenník</h2>
          <p className="mt-3 text-[#3d524d]">Prevádzka Bratislava · stav k {biz.priceUpdated} · zmena cien vyhradená</p>
          <div className="mt-12 grid gap-px bg-[#cfe0dc] md:grid-cols-3">
            {services.map((s) => (
              <article key={s.id} className="bg-white">
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

        {/* 5. Prečo si vybrať nás */}
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

        {/* 6. Proces spolupráce */}
        <section id="proces" className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-4xl md:text-5xl" style={serif}>Ako prebieha spolupráca</h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-4">
            {["Objednanie telefonicky alebo cez formulár", "Konzultácia a výber tvaru a odtieňa", "Predkreslenie a odsúhlasenie kontúr", "Pigmentácia a prípadné dopigmentovanie"].map((t, i) => (
              <li key={t} className="relative border border-[#cfe0dc] p-6">
                <span className="text-5xl text-[#123a5c]/25" style={serif}>0{i + 1}</span>
                <p className="mt-3 font-medium">{t}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 7. Referencie / realizácie */}
        <section id="referencie" className="bg-[#07241f] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <p className={eyebrow}>Referencie · demo</p>
            <h2 className="mt-3 text-4xl md:text-5xl" style={serif}>Čo hovoria klientky</h2>
            <p className="mt-3 text-sm text-white/70">Demonštračný obsah: recenzie sú fiktívne a fotografie ilustračné, nezobrazujú reálne práce firmy.</p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {demoReviews.map((r) => (
                <figure key={r.name} className="border border-white/20 p-7">
                  <blockquote className="leading-relaxed text-white/90">„{r.text}“</blockquote>
                  <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-[#7fd1b9]">{r.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 8. O nás */}
        <section id="o-nas" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div className="relative aspect-[4/3]"><Image src="/images/studio.jpg" alt="Ilustračná fotografia: svetlý kozmetický štúdiový interiér" fill sizes="(max-width:768px) 90vw, 600px" className="object-cover grayscale" loading="lazy" /></div>
          <div>
            <h2 className="text-4xl md:text-5xl" style={serif}>O nás</h2>
            <p className="mt-5 leading-relaxed text-[#3d524d]">Conture Make-Up je štúdio permanentného make-upu s prevádzkou na Palisádach v Bratislave. Pracujeme metódou Conture®, kde je presnosť tvaru dôležitejšia než rýchlosť.</p>
            <ul className="mt-6 grid gap-3 text-sm">
              {["Konzultácia a predkreslenie pred každým ošetrením", "Individuálny tvar a odtieň", "Jedna prevádzka v Bratislave"].map((t) => (<li key={t} className="flex gap-3"><Check size={18} className="shrink-0 text-[#0f6b57]" aria-hidden />{t}</li>))}
            </ul>
          </div>
        </section>

        {/* 9. FAQ */}
        <section id="faq" className="bg-[#eef5f3] py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-4xl md:text-5xl" style={serif}>Časté otázky</h2>
            <div className="mt-10">
              <Accordion items={faq} idPrefix="n2" item="border-b border-[#bcd3cd]" btn="flex w-full items-center justify-between gap-4 py-5 text-left text-lg" panel="pb-5 text-[#3d524d]" icons />
            </div>
          </div>
        </section>

        {/* 10. Konverzná a kontaktná sekcia */}
        <section id="kontakt" className="bg-[#123a5c] py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
            <div>
              <p className={eyebrow}>Kontakt</p>
              <h2 className="mt-3 text-4xl md:text-5xl" style={serif}>Rezervujte si konzultáciu</h2>
              <ul className="mt-8 grid gap-4">
                <li className="flex items-center gap-3"><Phone size={18} className="text-[#7fd1b9]" aria-hidden /><a href={biz.phoneHref} className="hover:underline">{biz.phone}</a></li>
                <li className="flex items-center gap-3"><Mail size={18} className="text-[#7fd1b9]" aria-hidden /><a href={`mailto:${biz.email}`} className="hover:underline">{biz.email}</a></li>
                <li className="flex items-center gap-3"><MapPin size={18} className="text-[#7fd1b9]" aria-hidden />{biz.address}</li>
              </ul>
            </div>
            <ContactForm s={formStyle} idPrefix="n2" />
          </div>
        </section>
      </main>

      {/* 11. Footer */}
      <footer className="bg-[#07241f] py-10 text-center text-sm text-white/70">
        <p className="text-lg tracking-[0.12em] text-white" style={serif}>CONTURE MAKE-UP</p>
        <p className="mt-2">{biz.address} · {biz.phone}</p>
        <p className="mx-auto mt-4 max-w-xl px-6 text-xs">Demonštračný návrh na interné testovanie. Fotografie ilustračné (Unsplash), recenzie fiktívne. Zdroj údajov: {biz.source}</p>
      </footer>
    </div>
  );
}
