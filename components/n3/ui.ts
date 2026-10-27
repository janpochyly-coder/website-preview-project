import type { FormStyle } from "@/components/ContactForm";

export const BASE = "/navrh-3";
export const serif = { fontFamily: "var(--f-serif)" };
export const btn = "inline-flex items-center justify-center rounded-full bg-[#b3472f] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#8f3722]";
export const btnGhost = "inline-flex items-center justify-center rounded-full border border-white/50 px-7 py-3 text-sm text-white transition hover:border-[#f2b8a6]";
export const h2 = "text-4xl md:text-6xl";
export const wrap = "mx-auto max-w-7xl px-6";

export const NAV: [string, string][] = [
  [`${BASE}/sluzby`, "Služby"],
  [`${BASE}/realizacie`, "Realizácie"],
  [`${BASE}/cennik`, "Cenník"],
  [`${BASE}/o-nas`, "O nás"],
  [`${BASE}/poradna`, "Poradňa"],
  [`${BASE}/kontakt`, "Kontakt"],
];

export const formStyle: FormStyle = {
  form: "grid gap-4", field: "grid gap-1.5", label: "text-sm text-[#2a1a24]",
  input: "w-full rounded-2xl border border-[#d9c2bb] bg-white px-4 py-3 text-[#2a1a24] focus:border-[#b3472f] focus:outline-none",
  error: "text-sm text-[#a0262f]", button: btn + " mt-2", ok: "rounded-2xl bg-white p-6 text-[#2a1a24]",
};
