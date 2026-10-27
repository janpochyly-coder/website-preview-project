import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import BackToHub from "@/components/BackToHub";

const serif = Cormorant_Garamond({ subsets: ["latin", "latin-ext"], weight: ["400", "500", "600"], variable: "--f-serif" });
const sans = Jost({ subsets: ["latin", "latin-ext"], weight: ["300", "400", "500"], variable: "--f-sans" });

export const metadata: Metadata = {
  title: "Conture Make-Up – jemný permanentný make-up v Bratislave | Návrh 1",
  description: "Prirodzené obočie, očné linky a pery. Permanentný make-up s 23-ročnou praxou na Palisádach v Bratislave. Demonštračný návrh webu.",
  alternates: { canonical: "/navrh-1" },
  openGraph: { title: "Conture Make-Up – Bratislava", description: "Jemný permanentný make-up pre prirodzený výsledok.", locale: "sk_SK", type: "website", images: ["/images/rose-wall.jpg"] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${serif.variable} ${sans.variable}`} style={{ fontFamily: "var(--f-sans)" }}>
      {children}
      <BackToHub />
    </div>
  );
}
