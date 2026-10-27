"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export type NavLink = { href: string; label: string };
export default function MobileNav({ links, btn, panel, link }: { links: NavLink[]; btn: string; panel: string; link: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className={btn} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Zavrieť menu" : "Otvoriť menu"} onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      {open && (
        <nav id="mobile-menu" aria-label="Mobilné menu" className={panel}>
          {links.map((l) => (<a key={l.href} href={l.href} className={link} onClick={() => setOpen(false)}>{l.label}</a>))}
        </nav>
      )}
    </>
  );
}
