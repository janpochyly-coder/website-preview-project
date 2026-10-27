import Image from "next/image";
import { Phone, MapPin, Mail, Leaf, Heart, ShieldCheck, Clock } from "lucide-react";
import { biz, services } from "@/data/business";
import ContactForm, { type FormStyle } from "@/components/ContactForm";
import MobileNav from "@/components/MobileNav";

const links = [
  { href: "#sluzby", label: "Služby" },
  { href: "#o-nas", label: "O mne" },
  { href: "#doveryhodnost", label: "Istota" },
  { href: "#kontakt", label: "Kontakt" },
];

const formStyle: FormStyle = {
  form: "grid gap-5", field: "grid gap-1.5", label: "text-sm tracking-wide text-[#5b4a45]",
  input: "w-full rounded-none border-0 border-b border-[#b9a79c] bg-transparent px-0 py-2 text-[#3b2f2c] focus:border-[#8f4f5a] focus:outline-none focus:ring-0",
  error: "text-sm text-[#a0343f]", button: "mt-2 rounded-full bg-[#8f4f5a] px-8 py-3 text-sm tracking-[0.15em] text-white uppercase transition hover:bg-[#763f49]",
  ok: "rounded-2xl bg-[#f1e3de] p-6 text-[#3b2f2c]",
};

const serif = { fontFamily: "var(--f-serif)" };

export default function Navrh1() {
  return (
    <div className="bg-[#f7f1e8] text-[#3b2f2c]">
      <a href="#obsah" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[70] focus:bg-white focus:p-2">Preskočiť na obsah</a>

      {/* 1. Header */}
      <header className="sticky top-0 z-50 border-b border-[#e6d9cb] bg-[#f7f1e8]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-2xl tracking-wide" style={serif}>Conture <span className="text-[#8f4f5a]">Make-Up</span></a>
          <nav aria-label="Hlavná navigácia" className="hidden gap-8 text-sm tracking-wide md:flex">
            {links.map((l) => (<a key={l.href} href={l.href} className="transition hover:text-[#8f4f5a]">{l.label}</a>))}
          </nav>
          <a href="#kontakt" className="hidden rounded-full border border-[#8f4f5a] px-5 py-2 text-sm text-[#8f4f5a] transition hover:bg-[#8f4f5a] hover:text-white md:block">Objednať sa</a>
          <div className="md:hidden">
            <MobileNav links={links} btn="p-2" panel="absolute inset-x-0 top-full grid border-b border-[#e6d9cb] bg-[#f7f1e8] px-6 py-4" link="py-3 text-lg" />
          </div>
        </div>
      </header>

      <main id="obsah">
        {/* 2. Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="rise">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#8f4f5a]">Bratislava · Palisády</p>
            <h1 className="text-5xl leading-[1.05] md:text-7xl" style={serif}>Krása, ktorá pôsobí <em className="text-[#8f4f5a]">prirodzene</em></h1>
            <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-[#5b4a45]">Permanentný make-up obočia, očných liniek a pier. Najprv predkreslíme, spolu odsúhlasíme tvar – a až potom začneme.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#kontakt" className="rounded-full bg-[#8f4f5a] px-8 py-3 text-sm uppercase tracking-[0.15em] text-white transition hover:bg-[#763f49]">Objednať konzultáciu</a>
              <a href="#sluzby" className="rounded-full border border-[#b9a79c] px-8 py-3 text-sm uppercase tracking-[0.15em] transition hover:border-[#8f4f5a]">Služby a cenník</a>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-[#ead7d2]">
            <Image src="/images/portrait-red.jpg" alt="Ilustračná fotografia: žena s výraznými perami a upraveným obočím" fill priority sizes="(max-width:768px) 90vw, 450px" className="object-cover" />
          </div>
        </section>

        {/* 3. Služby / ponuka */}
        <section id="sluzby" className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-4xl md:text-5xl" style={serif}>Služby a cenník</h2>
            <p className="mt-3 max-w-xl text-[#5b4a45]">Prevádzka Bratislava. Ceny podľa cenníka z {biz.priceUpdated}, zmena cien vyhradená.</p>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {services.map((s) => (
                <article key={s.id} className="rounded-[2rem] bg-[#f7f1e8] p-3">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                    <Image src={s.image} alt={`Ilustračná fotografia – ${s.title.toLowerCase()}`} fill sizes="(max-width:768px) 90vw, 360px" className="object-cover" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-3xl" style={serif}>{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5b4a45]">{s.text}</p>
                    <ul className="mt-4 divide-y divide-[#e6d9cb] text-sm">
                      {s.items.map((i) => (
                        <li key={i.name} className="flex justify-between gap-4 py-2"><span>{i.name}</span><strong className="font-medium text-[#8f4f5a]">{i.price} €</strong></li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. O nás / prečo my */}
        <section id="o-nas" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-full bg-[#ead7d2]">
            <Image src="/images/rose-wall.jpg" alt="Ilustračná fotografia: pastelová ružová stena" fill sizes="(max-width:768px) 90vw, 520px" className="object-cover" loading="lazy" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl" style={serif}>Prečo Conture Make-Up</h2>
            <p className="mt-5 leading-relaxed text-[#5b4a45]">V Bratislave pracuje {biz.specialist.toLowerCase()} s {biz.experience}. Metóda Conture® stavia na predkreslení a konzultácii – tvar si môžete pred samotným pigmentovaním upraviť.</p>
            <ul className="mt-8 grid gap-5">
              {[
                [Leaf, "Prirodzený výsledok", "Jemné vlásky obočia sa pigmentujú prístrojom Long-Time-Liner®."],
                [Heart, "Osobný prístup", "Jedna prevádzka, jedna špecialistka, individuálna konzultácia."],
                [Clock, "Bez zhonu", "Čas na konzultáciu a predkreslenie je súčasťou ošetrenia."],
              ].map(([Icon, t, d]) => {
                const I = Icon as typeof Leaf;
                return (
                  <li key={t as string} className="flex gap-4">
                    <I className="mt-1 shrink-0 text-[#8f4f5a]" size={22} aria-hidden />
                    <div><h3 className="text-xl" style={serif}>{t as string}</h3><p className="text-sm text-[#5b4a45]">{d as string}</p></div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* 5. Dôveryhodnosť */}
        <section id="doveryhodnost" className="bg-[#efe3d8] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-4xl md:text-5xl" style={serif}>Istota pred aj po ošetrení</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-white p-8"><ShieldCheck className="text-[#8f4f5a]" aria-hidden /><h3 className="mt-4 text-2xl" style={serif}>Záruka dopigmentovania</h3><p className="mt-2 text-sm text-[#5b4a45]">{biz.guarantee}.</p></div>
              <div className="rounded-3xl bg-white p-8"><p className="text-5xl text-[#8f4f5a]" style={serif}>23</p><h3 className="mt-2 text-2xl" style={serif}>rokov praxe</h3><p className="mt-2 text-sm text-[#5b4a45]">Prevádzka Bratislava vedená elite linergistkou.</p></div>
              <figure className="rounded-3xl bg-white p-8"><blockquote className="text-lg italic" style={serif}>„Demonštračná recenzia: pokojná atmosféra a precízne predkreslenie tvaru.“</blockquote><figcaption className="mt-3 text-sm text-[#5b4a45]">Martina – fiktívna referencia (demo)</figcaption></figure>
            </div>
          </div>
        </section>

        {/* 6. Kontakt a záverečné CTA */}
        <section id="kontakt" className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-4xl md:text-5xl" style={serif}>Objednajte sa na konzultáciu</h2>
            <p className="mt-4 text-[#5b4a45]">Zavolajte alebo nechajte správu – ozveme sa vám.</p>
            <ul className="mt-8 grid gap-4">
              <li className="flex items-center gap-3"><Phone size={18} className="text-[#8f4f5a]" aria-hidden /><a href={biz.phoneHref} className="underline-offset-4 hover:underline">{biz.phone}</a></li>
              <li className="flex items-center gap-3"><Mail size={18} className="text-[#8f4f5a]" aria-hidden /><a href={`mailto:${biz.email}`} className="underline-offset-4 hover:underline">{biz.email}</a></li>
              <li className="flex items-center gap-3"><MapPin size={18} className="text-[#8f4f5a]" aria-hidden />{biz.address}</li>
            </ul>
          </div>
          <div className="rounded-[2rem] bg-white p-8"><ContactForm s={formStyle} idPrefix="n1" /></div>
        </section>
      </main>

      {/* 7. Footer */}
      <footer className="border-t border-[#e6d9cb] py-10 text-center text-sm text-[#5b4a45]">
        <p style={serif} className="text-xl text-[#3b2f2c]">Conture Make-Up</p>
        <p className="mt-2">{biz.address} · <a href={biz.phoneHref} className="underline">{biz.phone}</a></p>
        <p className="mx-auto mt-4 max-w-xl px-6 text-xs">Demonštračný návrh webu na interné testovanie. Fotografie sú ilustračné (Unsplash), recenzie sú fiktívne. Údaje o firme: {biz.source}</p>
      </footer>
    </div>
  );
}
