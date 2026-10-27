import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import BackToHub from "@/components/BackToHub";
import { SmartHeader } from "@/components/n3/Interactive";
import { Footer } from "@/components/n3/Blocks";

const serif = DM_Serif_Display({ subsets: ["latin", "latin-ext"], weight: "400", variable: "--f-serif" });
const sans = DM_Sans({ subsets: ["latin", "latin-ext"], variable: "--f-sans" });

export const metadata: Metadata = {
  title: { default: "Conture Make-Up – interaktívny web, kalkulačka cien | Návrh 3", template: "%s | Conture Make-Up – Návrh 3" },
  description: "Rozsiahly viacstránkový návrh webu pre permanentný make-up v Bratislave. Demonštračný návrh.",
  openGraph: { title: "Conture Make-Up – interaktívny návrh", description: "Vyskladajte si ošetrenie a spočítajte cenu online.", locale: "sk_SK", type: "website", images: ["/images/portrait-dark.jpg"] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${serif.variable} ${sans.variable} bg-[#fbf1ee] text-[#2a1a24]`} style={{ fontFamily: "var(--f-sans)" }}>
      <a href="#obsah" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[90] focus:bg-white focus:p-2">Preskočiť na obsah</a>
      <SmartHeader />
      <main id="obsah">{children}</main>
      <Footer />
      <BackToHub />
    </div>
  );
}
