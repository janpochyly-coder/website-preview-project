import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import BackToHub from "@/components/BackToHub";

const serif = Playfair_Display({ subsets: ["latin", "latin-ext"], weight: ["400", "500", "700"], variable: "--f-serif" });
const sans = Manrope({ subsets: ["latin", "latin-ext"], weight: ["300", "400", "500", "700"], variable: "--f-sans" });

export const metadata: Metadata = {
  title: "Conture Make-Up – prémiový permanentný make-up Bratislava | Návrh 2",
  description: "Prémiový permanentný make-up obočia, očných liniek a pier v Bratislave. Predkreslenie, konzultácia a záruka dopigmentovania. Demonštračný návrh.",
  alternates: { canonical: "/navrh-2" },
  openGraph: { title: "Conture Make-Up – Bratislava", description: "Presnosť, diskrétnosť a prirodzený výsledok.", locale: "sk_SK", type: "website", images: ["/images/portrait-red.jpg"] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${serif.variable} ${sans.variable}`} style={{ fontFamily: "var(--f-sans)" }}>
      {children}
      <BackToHub dark />
    </div>
  );
}
