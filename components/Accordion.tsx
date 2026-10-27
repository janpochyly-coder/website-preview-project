"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Accordion({ items, item, btn, panel, icons, idPrefix = "acc" }: { items: { q: string; a: string }[]; item: string; btn: string; panel: string; icons?: boolean; idPrefix?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      {items.map((it, i) => (
        <div key={it.q} className={item}>
          <h3>
            <button type="button" aria-expanded={open === i} aria-controls={`${idPrefix}-${i}`} id={`${idPrefix}-b-${i}`} className={btn} onClick={() => setOpen(open === i ? null : i)}>
              <span>{it.q}</span>
              {icons && (open === i ? <Minus size={18} aria-hidden /> : <Plus size={18} aria-hidden />)}
            </button>
          </h3>
          <div id={`${idPrefix}-${i}`} role="region" aria-labelledby={`${idPrefix}-b-${i}`} hidden={open !== i} className={panel}>{it.a}</div>
        </div>
      ))}
    </div>
  );
}
