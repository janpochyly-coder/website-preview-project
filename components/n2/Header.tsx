"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV, BASE, serif } from "./ui";

export default function Header({ phone, phoneHref }: { phone: string; phoneHref: string }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === BASE ? path === BASE : path.startsWith(href));
  return (
    <header className="sticky top-0 z-50 bg-[#07241f]/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href={BASE} className="text-xl tracking-[0.12em]" style={serif}>CONTURE <span className="text-[#7fd1b9]">MAKE-UP</span></Link>
        <nav aria-label="Hlavná navigácia" className="hidden gap-8 text-xs uppercase tracking-[0.2em] lg:flex">
          {NAV.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined} className={`border-b pb-1 transition hover:text-[#7fd1b9] ${isActive(l.href) ? "border-[#7fd1b9] text-[#7fd1b9]" : "border-transparent"}`}>{l.label}</Link>
          ))}
        </nav>
        <a href={phoneHref} className="hidden items-center gap-2 border border-[#7fd1b9] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#7fd1b9] transition hover:bg-[#7fd1b9] hover:text-[#07241f] lg:flex"><Phone size={14} aria-hidden />{phone}</a>
        <button type="button" className="p-2 lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Zavrieť menu" : "Otvoriť menu"} onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobilné menu" className="absolute inset-x-0 top-full grid bg-[#07241f] px-6 py-4 lg:hidden">
          {NAV.map((l) => (<Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined} className={`py-3 text-sm uppercase tracking-[0.2em] ${isActive(l.href) ? "text-[#7fd1b9]" : ""}`} onClick={() => setOpen(false)}>{l.label}</Link>))}
          <a href={phoneHref} className="py-3 text-sm uppercase tracking-[0.2em] text-[#7fd1b9]">Zavolať {phone}</a>
        </nav>
      )}
    </header>
  );
}
