import Link from "next/link";
import { Phone } from "lucide-react";
import { biz } from "@/data/business";
import { BASE, serif, eyebrow, btnPrimary, btnGhost } from "./ui";

export function PageHero({ kicker, title, lead }: { kicker: string; title: string; lead: string }) {
  return (
    <section className="bg-[#07241f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className={eyebrow}>{kicker}</p>
        <h1 className="mt-5 max-w-3xl text-4xl leading-tight md:text-6xl" style={serif}>{title}</h1>
        <p className="mt-5 max-w-2xl text-lg font-light text-white/80">{lead}</p>
      </div>
    </section>
  );
}

export function Cta({ title = "Rezervujte si konzultáciu", text = "Tvar najprv predkreslíme a odsúhlasíme. Objednať sa môžete telefonicky alebo cez formulár." }: { title?: string; text?: string }) {
  return (
    <section className="bg-[#123a5c] py-20 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
        <div><h2 className="text-3xl md:text-4xl" style={serif}>{title}</h2><p className="mt-3 max-w-xl text-white/80">{text}</p></div>
        <div className="flex flex-wrap gap-4">
          <Link href={`${BASE}/kontakt`} className={btnPrimary}>Objednať sa</Link>
          <a href={biz.phoneHref} className={`${btnGhost} items-center gap-2`}><Phone size={14} aria-hidden />{biz.phone}</a>
        </div>
      </div>
    </section>
  );
}
