import type { Metadata } from "next";
import { Phone, MapPin, Mail } from "lucide-react";
import { biz } from "@/data/business";
import ContactForm from "@/components/ContactForm";
import { PageHero } from "@/components/n2/Blocks";
import { BASE, serif, eyebrow, formStyle } from "@/components/n2/ui";

export const metadata: Metadata = {
  title: "Kontakt a objednanie",
  description: "Objednajte sa na konzultáciu: Kuzmányho 4, Bratislava – Palisády, tel. 0903 687 696.",
  alternates: { canonical: `${BASE}/kontakt` },
};

export default function Kontakt() {
  return (
    <>
      <PageHero kicker="Kontakt" title="Objednajte sa na konzultáciu" lead="Zavolajte alebo vyplňte formulár – ozveme sa vám." />

      <section className="bg-[#123a5c] py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div>
            <p className={eyebrow}>Prevádzka Bratislava</p>
            <h2 className="mt-3 text-3xl md:text-4xl" style={serif}>Kde nás nájdete</h2>
            <ul className="mt-8 grid gap-4">
              <li className="flex items-center gap-3"><Phone size={18} className="text-[#7fd1b9]" aria-hidden /><a href={biz.phoneHref} className="hover:underline">{biz.phone}</a></li>
              <li className="flex items-center gap-3"><Mail size={18} className="text-[#7fd1b9]" aria-hidden /><a href={`mailto:${biz.email}`} className="hover:underline">{biz.email}</a></li>
              <li className="flex items-center gap-3"><MapPin size={18} className="text-[#7fd1b9]" aria-hidden />{biz.address}</li>
            </ul>
            <p className="mt-6 text-sm text-white/70">Otváracie hodiny pôvodný web neuvádza – objednávajte telefonicky.</p>
          </div>
          <ContactForm s={formStyle} idPrefix="n2" />
        </div>
      </section>

      <section aria-label="Mapa" className="mx-auto max-w-7xl px-6 py-16">
        <iframe title="Mapa: Palisády, Bratislava (približná poloha)" loading="lazy" className="h-80 w-full border-0" src="https://www.openstreetmap.org/export/embed.html?bbox=17.1000%2C48.1420%2C17.1200%2C48.1500&amp;layer=mapnik" />
        <p className="mt-2 text-xs text-[#3d524d]">Približná poloha: Palisády, Bratislava.</p>
      </section>
    </>
  );
}
