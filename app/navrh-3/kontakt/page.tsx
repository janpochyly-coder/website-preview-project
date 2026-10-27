import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { biz } from "@/data/business";
import ContactForm from "@/components/ContactForm";
import { PageHero } from "@/components/n3/Blocks";
import { BASE, serif, formStyle, h2, wrap } from "@/components/n3/ui";

export const metadata: Metadata = {
  title: "Kontakt a objednanie",
  description: "Objednajte sa na konzultáciu: Kuzmányho 4, Bratislava – Palisády, tel. 0903 687 696.",
  alternates: { canonical: `${BASE}/kontakt` },
};

export default function Kontakt() {
  return (
    <>
      <PageHero kicker="Kontakt" title="Objednajte sa" lead="Zavolajte alebo vyplňte formulár." />

      <section className={`${wrap} grid gap-10 py-24 md:grid-cols-2`}>
        <div>
          <h2 className={h2} style={serif}>Prevádzka Bratislava</h2>
          <ul className="mt-8 grid gap-4">
            <li className="flex gap-3"><Phone className="text-[#b3472f]" aria-hidden /><a href={biz.phoneHref} className="underline">{biz.phone}</a></li>
            <li className="flex gap-3"><Mail className="text-[#b3472f]" aria-hidden /><a href={`mailto:${biz.email}`} className="underline">{biz.email}</a></li>
            <li className="flex gap-3"><MapPin className="text-[#b3472f]" aria-hidden />{biz.address}</li>
          </ul>
          <p className="mt-6 text-sm text-[#4a3943]">Otváracie hodiny pôvodný web neuvádza – objednávajte telefonicky.</p>
          <p className="mt-6"><Link href={`${BASE}/cennik#kalkulacka`} className="underline">Najprv si spočítajte cenu v kalkulačke →</Link></p>
        </div>
        <div className="rounded-3xl bg-white p-8"><ContactForm s={formStyle} idPrefix="n3" /></div>
      </section>

      <section aria-label="Mapa" className={`${wrap} pb-24`}>
        <iframe title="Mapa: Palisády, Bratislava (približná poloha)" loading="lazy" className="h-80 w-full rounded-3xl border-0" src="https://www.openstreetmap.org/export/embed.html?bbox=17.1000%2C48.1420%2C17.1200%2C48.1500&amp;layer=mapnik" />
        <p className="mt-2 text-xs text-[#4a3943]">Približná poloha: Palisády, Bratislava (OpenStreetMap).</p>
      </section>
    </>
  );
}
