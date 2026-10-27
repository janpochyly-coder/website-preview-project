import Link from "next/link";
import { Phone, ChevronRight } from "lucide-react";
import { biz } from "@/data/business";
import { BASE, serif, btn, btnGhost, NAV } from "./ui";

export function PageHero({ kicker, title, lead, crumbs }: { kicker: string; title: string; lead: string; crumbs?: { href?: string; label: string }[] }) {
  return (
    <section className="bg-[#2a1a24] pt-28 text-white">
      <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
        {crumbs && (
          <nav aria-label="Omrvinková navigácia" className="mb-6 text-sm text-white/70">
            <ol className="flex flex-wrap items-center gap-1">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1">
                  {c.href ? <Link href={c.href} className="hover:text-white hover:underline">{c.label}</Link> : <span aria-current="page" className="text-white">{c.label}</span>}
                  {i < crumbs.length - 1 && <ChevronRight size={14} aria-hidden />}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p className="text-xs uppercase tracking-[0.35em] text-[#f2b8a6]">{kicker}</p>
        <h1 className="mt-4 max-w-4xl text-4xl leading-[1.05] md:text-7xl" style={serif}>{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-white/80">{lead}</p>
      </div>
    </section>
  );
}

export function Cta({ title = "Máte otázky k tvaru či odtieňu?", text }: { title?: string; text?: string }) {
  return (
    <section className="bg-[#b3472f] py-14 text-center text-white">
      <h2 className="px-6 text-3xl md:text-4xl" style={serif}>{title}</h2>
      {text && <p className="mx-auto mt-3 max-w-xl px-6 text-white/90">{text}</p>}
      <div className="mt-6 flex flex-wrap justify-center gap-4 px-6">
        <Link href={`${BASE}/kontakt`} className="inline-flex rounded-full bg-white px-7 py-3 text-sm font-medium text-[#8f3722]">Objednať sa</Link>
        <a href={biz.phoneHref} className={`${btnGhost} gap-2`}><Phone size={16} aria-hidden />{biz.phone}</a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#2a1a24] text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div><p className="text-2xl text-white" style={serif}>Conture Make-Up</p><p className="mt-3 text-sm">Permanentný make-up v Bratislave.</p></div>
        <nav aria-label="Pätička – navigácia"><p className="font-medium text-white">Navigácia</p><ul className="mt-3 grid gap-2 text-sm">{NAV.map(([h, l]) => (<li key={h}><Link href={h} className="hover:underline">{l}</Link></li>))}</ul></nav>
        <nav aria-label="Pätička – služby"><p className="font-medium text-white">Služby</p><ul className="mt-3 grid gap-2 text-sm"><li><Link href={`${BASE}/sluzby/obocie`} className="hover:underline">Obočie</Link></li><li><Link href={`${BASE}/sluzby/ocne-linky`} className="hover:underline">Očné linky</Link></li><li><Link href={`${BASE}/sluzby/pery`} className="hover:underline">Pery</Link></li></ul></nav>
        <div><p className="font-medium text-white">Kontakt</p><ul className="mt-3 grid gap-2 text-sm"><li>{biz.address}</li><li><a href={biz.phoneHref} className="hover:underline">{biz.phone}</a></li><li><a href={`mailto:${biz.email}`} className="hover:underline">{biz.email}</a></li></ul></div>
      </div>
      <p className="border-t border-white/10 px-6 py-5 text-center text-xs">Demonštračný návrh na interné testovanie. Fotografie ilustračné (Unsplash), recenzie, články, balíčky a texty podstránok služieb sú demo. Zdroj údajov: {biz.source}</p>
    </footer>
  );
}

export { btn };
