import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import BackToHub from "@/components/BackToHub";

const serif = DM_Serif_Display({ subsets: ["latin", "latin-ext"], weight: "400", variable: "--f-serif" });
const sans = DM_Sans({ subsets: ["latin", "latin-ext"], variable: "--f-sans" });

export const metadata: Metadata = {
  title: "Conture Make-Up – interaktívny web, kalkulačka a konfigurátor | Návrh 3",
  description: "Rozsiahly interaktívny návrh webu pre permanentný make-up v Bratislave: konfigurátor, kalkulačka cien, galéria a before/after slider. Demonštračný návrh.",
  alternates: { canonical: "/navrh-3" },
  openGraph: { title: "Conture Make-Up – interaktívny návrh", description: "Vyskladajte si ošetrenie a spočítajte cenu online.", locale: "sk_SK", type: "website", images: ["/images/portrait-dark.jpg"] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${serif.variable} ${sans.variable}`} style={{ fontFamily: "var(--f-sans)" }}>
      {children}
      <BackToHub />
    </div>
  );
}
