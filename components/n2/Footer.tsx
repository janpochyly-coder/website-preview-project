import Link from "next/link";
import { biz } from "@/data/business";
import { NAV, serif } from "./ui";

export default function Footer() {
  return (
    <footer className="bg-[#07241f] py-12 text-sm text-white/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
        <div><p className="text-lg tracking-[0.12em] text-white" style={serif}>CONTURE MAKE-UP</p><p className="mt-2">{biz.tagline}</p></div>
        <nav aria-label="Pätička – navigácia"><ul className="grid gap-2">{NAV.map((l) => (<li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>))}</ul></nav>
        <div><p>{biz.address}</p><p className="mt-1"><a href={biz.phoneHref} className="hover:text-white">{biz.phone}</a> · <a href={`mailto:${biz.email}`} className="hover:text-white">{biz.email}</a></p></div>
      </div>
      <p className="mx-auto mt-8 max-w-3xl px-6 text-center text-xs">Demonštračný návrh na interné testovanie. Fotografie ilustračné (Unsplash), recenzie fiktívne. Zdroj údajov: {biz.source}</p>
    </footer>
  );
}
