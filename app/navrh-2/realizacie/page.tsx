import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { demoReviews } from "@/data/business";
import { Cta, PageHero } from "@/components/n2/Blocks";
import { BASE, serif, eyebrow } from "@/components/n2/ui";

export const metadata: Metadata = {
  title: "Realizácie a referencie",
  description: "Ilustračné ukážky a demonštračné referencie klientok štúdia Conture Make-Up v Bratislave.",
  alternates: { canonical: `${BASE}/realizacie` },
};

const photos = [
  { src: "/images/portrait-red.jpg", alt: "Ilustračná fotografia: portrét s výraznými perami", href: "pery", label: "Pery" },
  { src: "/images/portrait-dark.jpg", alt: "Ilustračná fotografia: portrét s upraveným obočím", href: "obocie", label: "Obočie" },
  { src: "/images/lips.jpg", alt: "Ilustračná fotografia: líčenie očí a pier", href: "ocne-linky", label: "Očné linky" },
];

export default function Realizacie() {
  return (
    <>
      <PageHero kicker="Realizácie · demo" title="Realizácie a referencie" lead="Fotografie sú ilustračné (Unsplash) a nezobrazujú reálne práce firmy. Referencie sú fiktívne." />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-3xl md:text-4xl" style={serif}>Ukážky podľa služby</h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {photos.map((p) => (
            <li key={p.src}>
              <Link href={`${BASE}/sluzby#${p.href}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden"><Image src={p.src} alt={p.alt} fill sizes="(max-width:768px) 90vw, 400px" className="object-cover transition duration-500 group-hover:scale-105" loading="lazy" /></div>
                <p className="mt-3 flex justify-between text-sm"><span style={serif} className="text-xl">{p.label}</span><span className="text-[#0f6b57]">Služba a cena →</span></p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-[#07241f] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className={eyebrow}>Referencie · demo</p>
          <h2 className="mt-3 text-4xl md:text-5xl" style={serif}>Čo hovoria klientky</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {demoReviews.map((r) => (
              <figure key={r.name} className="border border-white/20 p-7">
                <blockquote className="leading-relaxed text-white/90">„{r.text}“</blockquote>
                <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-[#7fd1b9]">{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
