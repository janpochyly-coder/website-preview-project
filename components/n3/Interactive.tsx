"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Plus, Minus, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/data/business";
import { BASE, NAV, btn, serif } from "./ui";


/* 1. Smart header: skrýva sa pri skrolovaní nadol, ukazuje progres a aktívnu stránku */
export function SmartHeader() {
  const path = usePathname();
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const last = useRef(0);
  const isActive = (h: string) => path === h || path.startsWith(h + "/");
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > last.current && y > 200 && !open);
      last.current = y;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (y / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-[#2a1a24]/95 text-white backdrop-blur transition-transform duration-300 ${hidden ? "-translate-y-full" : ""}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href={BASE} className="text-2xl" style={serif}>Conture<span className="text-[#f2b8a6]">.</span></Link>
        <nav aria-label="Hlavná navigácia" className="hidden gap-7 text-sm xl:flex">
          {NAV.map(([h, l]) => (<Link key={h} href={h} aria-current={isActive(h) ? "page" : undefined} className={`transition hover:text-[#f2b8a6] ${isActive(h) ? "text-[#f2b8a6] underline underline-offset-8" : ""}`}>{l}</Link>))}
        </nav>
        <Link href={`${BASE}/kontakt`} className={`${btn} hidden !py-2 xl:inline-flex`}>Objednať sa</Link>
        <button type="button" className="p-2 xl:hidden" aria-expanded={open} aria-controls="n3-menu" aria-label={open ? "Zavrieť menu" : "Otvoriť menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (<nav id="n3-menu" aria-label="Mobilné menu" className="grid border-t border-white/10 px-6 py-3 xl:hidden">{NAV.map(([h, l]) => (<Link key={h} href={h} aria-current={isActive(h) ? "page" : undefined} className={`py-3 text-lg ${isActive(h) ? "text-[#f2b8a6]" : ""}`} onClick={() => setOpen(false)}>{l}</Link>))}<Link href={`${BASE}/kontakt`} className={`${btn} my-3`} onClick={() => setOpen(false)}>Objednať sa</Link></nav>)}
      <div className="h-0.5 bg-[#f2b8a6]" style={{ width: `${progress}%` }} aria-hidden />
    </header>
  );
}

/* 5. Interaktívne služby – záložky */
export function ServiceTabs() {
  const [i, setI] = useState(0);
  const s = services[i];
  return (
    <div className="mt-10 grid gap-8 md:grid-cols-[220px_1fr]">
      <div role="tablist" aria-label="Služby" className="flex gap-2 md:flex-col">
        {services.map((x, k) => (
          <button key={x.id} role="tab" id={`tab-${x.id}`} aria-selected={i === k} aria-controls={`panel-${x.id}`} onClick={() => setI(k)}
            onKeyDown={(e) => { if (e.key === "ArrowRight" || e.key === "ArrowDown") setI((k + 1) % services.length); if (e.key === "ArrowLeft" || e.key === "ArrowUp") setI((k + services.length - 1) % services.length); }}
            className={`flex flex-1 items-center justify-between rounded-2xl px-5 py-4 text-left transition md:flex-none ${i === k ? "bg-[#2a1a24] text-white" : "bg-white hover:bg-[#f3dcd6]"}`}>
            {x.title}<ChevronRight size={16} aria-hidden className="hidden md:block" />
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`panel-${s.id}`} aria-labelledby={`tab-${s.id}`} className="grid overflow-hidden rounded-3xl bg-white md:grid-cols-2">
        <div className="relative min-h-64"><Image src={s.image} alt={`Ilustračná fotografia – ${s.title.toLowerCase()}`} fill sizes="(max-width:768px) 90vw, 400px" className="object-cover" loading="lazy" /></div>
        <div className="p-7">
          <h3 className="text-3xl" style={serif}>{s.title}</h3>
          <p className="mt-3 text-[#4a3943]">{s.text}</p>
          <ul className="mt-5 divide-y divide-[#ecd9d3] text-sm">{s.items.map((it) => (<li key={it.name} className="flex justify-between py-2"><span>{it.name}</span><strong>{it.price} €</strong></li>))}</ul>
          <Link href={`${BASE}/sluzby/${s.id}`} className={`${btn} mt-6`}>Detail služby</Link>
        </div>
      </div>
    </div>
  );
}

/* 7. Kľúčové výsledky – animované čísla */
export function Counters({ items }: { items: { to: number; suffix: string; label: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(items.map(() => 0));
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      if (reduce) { setV(items.map((x) => x.to)); return; }
      const t0 = performance.now();
      const tick = (t: number) => { const p = Math.min((t - t0) / 1200, 1); setV(items.map((x) => Math.round(x.to * (1 - Math.pow(1 - p, 3))))); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el); return () => io.disconnect();
  }, [items]);
  return (
    <div ref={ref} className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {items.map((x, k) => (<div key={x.label} className="rounded-3xl bg-white/5 p-6 text-center"><p className="text-5xl text-[#f2b8a6]" style={serif} aria-label={`${x.to}${x.suffix}`}>{v[k]}{x.suffix}</p><p className="mt-2 text-sm text-white/80">{x.label}</p></div>))}
    </div>
  );
}

/* 10. Interaktívne portfólio – filter + lightbox */
const GAL = [
  { src: "/images/portrait-red.jpg", cat: "Portréty", alt: "Ilustračná fotografia: portrét s výraznými perami" },
  { src: "/images/portrait-dark.jpg", cat: "Portréty", alt: "Ilustračná fotografia: portrét s upraveným obočím" },
  { src: "/images/lips.jpg", cat: "Portréty", alt: "Ilustračná fotografia: líčenie očí a pier" },
  { src: "/images/palette.jpg", cat: "Produkty", alt: "Ilustračná fotografia: paleta a štetce" },
  { src: "/images/flatlay.jpg", cat: "Produkty", alt: "Ilustračná fotografia: kozmetické produkty na béžovom podklade" },
  { src: "/images/powder.jpg", cat: "Produkty", alt: "Ilustračná fotografia: púdre a štetce" },
  { src: "/images/studio.jpg", cat: "Štúdio", alt: "Ilustračná fotografia: svetlý štúdiový interiér" },
  { src: "/images/facial.jpg", cat: "Štúdio", alt: "Ilustračná fotografia: kozmetické ošetrenie tváre" },
];
export function Gallery() {
  const cats = ["Všetko", "Portréty", "Produkty", "Štúdio"];
  const [cat, setCat] = useState("Všetko");
  const [sel, setSel] = useState<number | null>(null);
  const list = GAL.filter((g) => cat === "Všetko" || g.cat === cat);
  useEffect(() => {
    if (sel === null) return;
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setSel(null); if (e.key === "ArrowRight") setSel((s) => (s === null ? s : (s + 1) % list.length)); if (e.key === "ArrowLeft") setSel((s) => (s === null ? s : (s + list.length - 1) % list.length)); };
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  }, [sel, list.length]);
  return (
    <div>
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter galérie">
        {cats.map((c) => (<button key={c} type="button" aria-pressed={cat === c} onClick={() => { setCat(c); setSel(null); }} className={`rounded-full px-5 py-2 text-sm transition ${cat === c ? "bg-[#2a1a24] text-white" : "bg-white hover:bg-[#f3dcd6]"}`}>{c}</button>))}
      </div>
      <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {list.map((g, k) => (
          <li key={g.src}><button type="button" onClick={() => setSel(k)} aria-label={`Zväčšiť: ${g.alt}`} className="group relative block aspect-[3/4] w-full overflow-hidden rounded-2xl">
            <Image src={g.src} alt={g.alt} fill sizes="(max-width:768px) 45vw, 280px" className="object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
          </button></li>
        ))}
      </ul>
      {sel !== null && list[sel] && (
        <div role="dialog" aria-modal="true" aria-label="Zväčšená fotografia" className="fixed inset-0 z-[80] grid place-items-center bg-black/85 p-4" onClick={() => setSel(null)}>
          <div className="relative h-[80vh] w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <Image src={list[sel].src} alt={list[sel].alt} fill sizes="90vw" className="object-contain" />
          </div>
          <button type="button" autoFocus className="absolute right-4 top-4 rounded-full bg-white p-3" aria-label="Zavrieť" onClick={() => setSel(null)}><X size={20} /></button>
          <p className="absolute bottom-4 text-sm text-white/80">Ilustračná fotografia · šípky ← → prepínajú · Esc zavrie</p>
        </div>
      )}
    </div>
  );
}

/* 11. Before / After slider (ilustračný: rovnaká fotografia s filtrom "pred") */
export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <div className="mx-auto max-w-xl">
      <div className="relative aspect-[3/4] select-none overflow-hidden rounded-3xl bg-[#2a1a24]">
        <Image src="/images/portrait-dark.jpg" alt="Po úprave (ilustračná simulácia)" fill sizes="(max-width:768px) 90vw, 560px" className="object-cover" loading="lazy" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src="/images/portrait-dark.jpg" alt="Pred úpravou (ilustračná simulácia)" fill sizes="(max-width:768px) 90vw, 560px" className="object-cover" style={{ filter: "grayscale(.7) brightness(1.12) contrast(.75)" }} loading="lazy" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow" style={{ left: `${pos}%` }} aria-hidden><span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-xs font-bold text-[#2a1a24]">↔</span></div>
        <span className="absolute left-3 top-3 rounded bg-black/60 px-2 py-1 text-xs text-white">Pred</span>
        <span className="absolute right-3 top-3 rounded bg-black/60 px-2 py-1 text-xs text-white">Po</span>
        <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(+e.target.value)} aria-label="Posunúť porovnanie pred a po" className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
      </div>
      <p className="mt-3 text-center text-sm text-[#4a3943]">Demonštračná simulácia na ilustračnej fotografii – nejde o reálnu realizáciu firmy.</p>
    </div>
  );
}

/* 16+18. Spojený nástroj: konfigurátor + kalkulačka cien (jeden tok: výber služieb → odtieň → súhrn) */
const CALC = [["Čiarkované obočie", 250], ["Púdrové obočie", 250], ["Kombo obočie", 250], ["Očné linky jemné", 120], ["Očné linky dekoratívne", 160], ["Očné linky spodné jemné", 100], ["Plnovytieňované pery", 350]] as [string, number][];
const SHADES = [["Prirodzený", "#9b6b58"], ["Jemný", "#c99c8b"], ["Sýty", "#6f3b33"], ["Chladný", "#5a4a4d"]];
export function PriceBuilder() {
  const [sel, setSel] = useState<Record<string, boolean>>({});
  const [shade, setShade] = useState(0);
  const items = CALC.filter(([n]) => sel[n]);
  const sum = items.reduce((a, [, p]) => a + p, 0);
  return (
    <div className="mt-10 grid gap-8 md:grid-cols-[1.3fr_1fr]">
      <div className="grid gap-8">
        <fieldset className="grid gap-3"><legend className="mb-3 text-sm font-medium">1. Vyberte služby</legend>
          {CALC.map(([n, p]) => (<label key={n} className="flex cursor-pointer items-center justify-between rounded-2xl bg-white px-5 py-4 has-[:focus-visible]:outline has-[:focus-visible]:outline-2"><span className="flex items-center gap-3"><input type="checkbox" className="h-5 w-5 accent-[#b3472f]" checked={!!sel[n]} onChange={(e) => setSel({ ...sel, [n]: e.target.checked })} />{n}</span><strong>{p} €</strong></label>))}
        </fieldset>
        <fieldset><legend className="mb-3 text-sm font-medium">2. Odtieň (orientačne)</legend><div className="flex flex-wrap gap-3">{SHADES.map(([n, c], k) => (<label key={n} className={`flex cursor-pointer items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm has-[:focus-visible]:outline has-[:focus-visible]:outline-2 ${shade === k ? "border-2 border-[#2a1a24]" : "border-[#d9c2bb]"}`}><input type="radio" name="shade" className="sr-only" checked={shade === k} onChange={() => setShade(k)} /><span className="h-5 w-5 rounded-full" style={{ background: c }} aria-hidden />{n}</label>))}</div></fieldset>
      </div>
      <div className="h-fit rounded-3xl bg-[#2a1a24] p-7 text-white" aria-live="polite">
        <p className="text-xs uppercase tracking-[0.25em] text-[#f2b8a6]">3. Váš výber a orientačná cena</p>
        <p className="mt-3 text-6xl" style={serif}>{sum} €</p>
        <p className="mt-2 text-sm text-white/80">{items.length ? `Vybrané položky: ${items.length}` : "Vyberte aspoň jednu službu."}</p>
        {items.length > 0 && (<ul className="mt-3 grid gap-1 text-sm text-white/90">{items.map(([n, p]) => (<li key={n} className="flex justify-between"><span>{n}</span><span>{p} €</span></li>))}</ul>)}
        <p className="mt-3 flex items-center gap-2 text-sm text-white/80"><span className="h-4 w-4 rounded-full" style={{ background: SHADES[shade][1] }} aria-hidden />Odtieň: {SHADES[shade][0].toLowerCase()}</p>
        <button type="button" onClick={() => setSel({})} className="mt-4 text-sm underline">Vynulovať</button>
        <Link href={`${BASE}/kontakt`} className={`${btn} mt-5 w-full`}>Pokračovať na objednávku</Link>
        <p className="mt-4 text-xs text-white/70">Orientačný súčet podľa cenníka z 19. 11. 2024, zmena cien vyhradená. Tvar a odtieň sa potvrdzujú pri konzultácii.</p>
      </div>
    </div>
  );
}

/* 21. Novinky – rozbaliteľné články (demo) */
export function News({ items }: { items: { t: string; d: string; body: string }[] }) {
  const [o, setO] = useState<number | null>(null);
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-3">
      {items.map((n, k) => (
        <article key={n.t} className="rounded-3xl bg-white p-6">
          <p className="text-xs uppercase tracking-widest text-[#b3472f]">{n.d} · demo</p>
          <h3 className="mt-2 text-2xl" style={serif}>{n.t}</h3>
          {o === k && <p className="mt-3 text-sm text-[#4a3943]">{n.body}</p>}
          <button type="button" aria-expanded={o === k} onClick={() => setO(o === k ? null : k)} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#b3472f] underline-offset-4 hover:underline">{o === k ? <>Zbaliť <Minus size={14} /></> : <>Čítať viac <Plus size={14} /></>}</button>
        </article>
      ))}
    </div>
  );
}

/* 22. Lead magnet */
export function LeadMagnet() {
  const [err, setErr] = useState("");
  const [ok, setOk] = useState(false);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const em = String(new FormData(e.currentTarget).get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)) { setErr("Zadajte platný e-mail."); return; }
    setErr(""); setOk(true);
  }
  if (ok) return (
    <div role="status" className="rounded-2xl bg-white p-6 text-[#2a1a24]">
      <p className="font-medium">Demo: e-mail sa neodosielal. Tu je ukážka checklistu:</p>
      <ul className="mt-3 list-disc pl-5 text-sm">
        <li>Pripravte si referenčné fotografie tvaru, ktorý sa vám páči.</li>
        <li>Napíšte si otázky k postupu a starostlivosti, prediskutujeme ich na konzultácii.</li>
        <li>Povedzte nám o alergiách a zdravotných obmedzeniach.</li>
        <li>Naplánujte si čas na konzultáciu a predkreslenie.</li>
      </ul>
    </div>
  );
  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-3 sm:flex-row">
      <div className="flex-1">
        <label htmlFor="lead-email" className="sr-only">E-mail</label>
        <input id="lead-email" name="email" type="email" autoComplete="email" placeholder="Váš e-mail" aria-invalid={!!err} aria-describedby={err ? "lead-err" : undefined} className="w-full rounded-full px-6 py-3 text-[#2a1a24]" />
        {err && <p id="lead-err" className="mt-2 pl-4 text-sm text-[#ffd2c6]">{err}</p>}
      </div>
      <button type="submit" className={btn}>Získať checklist</button>
    </form>
  );
}
