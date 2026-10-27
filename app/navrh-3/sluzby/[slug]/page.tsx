import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { serviceDetails, getService } from "@/data/services-detail";
import Accordion from "@/components/Accordion";
import { Cta, PageHero } from "@/components/n3/Blocks";
import { BASE, serif, btn, h2, wrap } from "@/components/n3/ui";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return { title: s.title + " – cena a priebeh", description: s.metaDescription, alternates: { canonical: `${BASE}/sluzby/${s.slug}` } };
}

export default async function Detail({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) notFound();
  return (
    <>
      <PageHero kicker="Služba" title={s.h1} lead={s.lead} crumbs={[{ href: BASE, label: "Domov" }, { href: `${BASE}/sluzby`, label: "Služby" }, { label: s.title }]} />

      <section className={`${wrap} grid gap-12 py-24 md:grid-cols-2`}>
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl"><Image src={s.image} alt={s.gallery[0].alt} fill priority sizes="(max-width:768px) 90vw, 560px" className="object-cover" /></div>
        <div>
          <h2 className="text-3xl md:text-4xl" style={serif}>Pre koho je vhodná</h2>
          <ul className="mt-5 grid gap-3">{s.forWhom.map((t) => (<li key={t} className="flex gap-3"><Check size={18} className="mt-1 shrink-0 text-[#b3472f]" aria-hidden />{t}</li>))}</ul>
          <h2 className="mt-10 text-3xl md:text-4xl" style={serif}>Metóda</h2>
          <p className="mt-4 text-[#4a3943]">{s.method}</p>
          <h2 className="mt-10 text-3xl md:text-4xl" style={serif}>Výsledky</h2>
          <ul className="mt-4 grid gap-2 text-[#4a3943]">{s.results.map((t) => (<li key={t} className="flex gap-3"><Check size={18} className="mt-1 shrink-0 text-[#b3472f]" aria-hidden />{t}</li>))}</ul>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className={wrap}>
          <h2 className={h2} style={serif}>Priebeh ošetrenia</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-4">
            {s.steps.map((st, i) => (<li key={st.t} className="rounded-3xl bg-[#fbf1ee] p-7"><span className="text-6xl text-[#e8c4c0]" style={serif}>{i + 1}</span><h3 className="mt-2 text-2xl" style={serif}>{st.t}</h3><p className="mt-2 text-sm text-[#4a3943]">{st.d}</p></li>))}
          </ol>
        </div>
      </section>

      <section className={`${wrap} grid items-start gap-10 py-24 md:grid-cols-2`}>
        <div>
          <h2 className="text-4xl md:text-5xl" style={serif}>Cena</h2>
          <p className="mt-3 text-sm text-[#4a3943]">Cenník Bratislava k 19. 11. 2024, zmena cien vyhradená.</p>
          <ul className="mt-6 divide-y divide-[#e8d2cc] rounded-3xl bg-white px-6">
            {s.prices.map((p) => (<li key={p.name} className="flex items-center justify-between gap-4 py-4"><span><span className="block font-medium">{p.name}</span><span className="text-sm text-[#4a3943]">{p.note}</span></span><strong className="text-2xl" style={serif}>{p.price} €</strong></li>))}
          </ul>
          <Link href={`${BASE}/cennik`} className={`${btn} mt-6`}>Spočítať cenu</Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {s.gallery.map((g) => (<div key={g.src} className="relative aspect-[3/4] overflow-hidden rounded-2xl"><Image src={g.src} alt={g.alt} fill sizes="(max-width:768px) 45vw, 280px" className="object-cover" loading="lazy" /></div>))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className={h2} style={serif}>Otázky k službe</h2>
          <div className="mt-8"><Accordion items={s.faq} idPrefix={`faq-${s.slug}`} item="border-b border-[#d9c2bb]" btn="flex w-full items-center justify-between gap-4 py-5 text-left text-lg" panel="pb-5 text-[#4a3943]" icons /></div>
          <p className="mt-6 text-sm text-[#4a3943]">Texty tejto podstránky sú demonštračné; ceny a postup vychádzajú z conturemakeup.sk.</p>
        </div>
      </section>

      <section className={`${wrap} py-16`}>
        <h2 className="text-3xl" style={serif}>Súvisiace služby</h2>
        <ul className="mt-6 flex flex-wrap gap-4">
          {s.related.map((r) => { const rs = getService(r)!; return (<li key={r}><Link href={`${BASE}/sluzby/${r}`} className="inline-flex rounded-full border border-[#2a1a24]/40 px-6 py-3 hover:border-[#b3472f]">{rs.title}</Link></li>); })}
          <li><Link href={`${BASE}/sluzby`} className="inline-flex rounded-full px-6 py-3 underline">← Späť na všetky služby</Link></li>
        </ul>
      </section>

      <Cta title={`Chcete ${s.title.toLowerCase()}? Objednajte sa.`} />
    </>
  );
}
