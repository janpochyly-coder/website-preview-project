import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const designs = [
  { n: 1, name: "Conture Make-Up", tpl: "BASIC · jednostránková prezentácia (7 blokov)", style: "Minimalistický + elegantný + prírodný", colors: [["#f7f1e8", "Béžová"], ["#ffffff", "Biela"], ["#8f4f5a", "Staroružová"]], href: "/navrh-1" },
  { n: 2, name: "Conture Make-Up", tpl: "PRO · štandardný viacstránkový web (5 stránok)", style: "Moderný + luxusný", colors: [["#07241f", "Zelená"], ["#ffffff", "Biela"], ["#123a5c", "Modrá"]], href: "/navrh-2" },
  { n: 3, name: "Conture Make-Up", tpl: "MAX · rozšírený viacstránkový web s pokročilými funkciami (10 stránok)", style: "Editoriálny glam s interaktivitou (zvolené AI)", colors: [["#2a1a24", "Slivková"], ["#fbf1ee", "Blush"], ["#b3472f", "Koralová"]], href: "/navrh-3" },
];

export default function Hub() {
  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-16 text-neutral-900">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">Demonštračné návrhy · interné testovanie</p>
        <h1 className="mt-3 text-4xl font-semibold md:text-6xl">Tri návrhy webu pre Conture Make-Up</h1>
        <p className="mt-4 max-w-2xl text-neutral-600">Permanentný make-up, prevádzka Bratislava. Názov, kontakty a cenník pochádzajú z conturemakeup.sk, recenzie sú fiktívne a fotografie ilustračné.</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {designs.map((d) => (
            <article key={d.n} className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] bg-neutral-200">
                <Image src={`/screenshots/navrh-${d.n}.png`} alt={`Screenshot návrhu ${d.n}`} fill sizes="(max-width:768px) 90vw, 380px" className="object-cover object-top" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm font-medium text-neutral-500">Návrh {d.n}</p>
                <h2 className="mt-1 text-2xl font-semibold">{d.name}</h2>
                <dl className="mt-4 grid gap-2 text-sm">
                  <div><dt className="inline font-medium">Šablóna: </dt><dd className="inline">{d.tpl}</dd></div>
                  <div><dt className="inline font-medium">Štýl: </dt><dd className="inline">{d.style}</dd></div>
                </dl>
                <ul className="mt-4 flex flex-wrap gap-3 text-xs" aria-label="Farby">
                  {d.colors.map(([c, l]) => (<li key={l} className="flex items-center gap-1.5"><span className="h-4 w-4 rounded-full border border-neutral-300" style={{ background: c }} aria-hidden />{l}</li>))}
                </ul>
                <Link href={d.href} className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700">Zobraziť návrh <ArrowRight size={16} aria-hidden /></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
