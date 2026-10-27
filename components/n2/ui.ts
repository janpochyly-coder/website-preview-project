import type { FormStyle } from "@/components/ContactForm";

export const BASE = "/navrh-2";
export const serif = { fontFamily: "var(--f-serif)" };
export const eyebrow = "text-[11px] font-medium uppercase tracking-[0.35em] text-[#7fd1b9]";
export const eyebrowLight = "text-[11px] font-medium uppercase tracking-[0.35em] text-[#0f6b57]";
export const btnPrimary = "inline-flex bg-[#7fd1b9] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.25em] text-[#07241f] transition hover:bg-white";
export const btnGhost = "inline-flex border border-white/40 px-8 py-3.5 text-xs uppercase tracking-[0.25em] transition hover:border-[#7fd1b9]";

export const NAV = [
  { href: BASE, label: "Domov" },
  { href: `${BASE}/sluzby`, label: "Služby" },
  { href: `${BASE}/realizacie`, label: "Realizácie" },
  { href: `${BASE}/o-nas`, label: "O nás" },
  { href: `${BASE}/kontakt`, label: "Kontakt" },
];

export const formStyle: FormStyle = {
  form: "grid gap-5", field: "grid gap-1.5", label: "text-xs uppercase tracking-[0.2em] text-white/80",
  input: "w-full border border-white/30 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:border-[#7fd1b9] focus:outline-none",
  error: "text-sm text-[#ffb4b4]", button: "bg-[#7fd1b9] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.25em] text-[#07241f] transition hover:bg-white",
  ok: "border border-[#7fd1b9] p-6 text-white",
};
