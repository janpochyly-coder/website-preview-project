import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import BackToHub from "@/components/BackToHub";
import Header from "@/components/n2/Header";
import Footer from "@/components/n2/Footer";
import { biz } from "@/data/business";

const serif = Playfair_Display({ subsets: ["latin", "latin-ext"], weight: ["400", "500", "700"], variable: "--f-serif" });
const sans = Manrope({ subsets: ["latin", "latin-ext"], weight: ["300", "400", "500", "700"], variable: "--f-sans" });

export const metadata: Metadata = {
  title: { default: "Conture Make-Up – prémiový permanentný make-up Bratislava | Návrh 2", template: "%s | Conture Make-Up – Návrh 2" },
  description: "Prémiový permanentný make-up obočia, očných liniek a pier v Bratislave. Demonštračný návrh.",
  openGraph: { title: "Conture Make-Up – Bratislava", description: "Presnosť, diskrétnosť a prirodzený výsledok.", locale: "sk_SK", type: "website", images: ["/images/portrait-dark.jpg"] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${serif.variable} ${sans.variable} bg-white text-[#10201d]`} style={{ fontFamily: "var(--f-sans)" }}>
      <a href="#obsah" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[70] focus:bg-white focus:p-2">Preskočiť na obsah</a>
      <Header phone={biz.phone} phoneHref={biz.phoneHref} />
      <main id="obsah">{children}</main>
      <Footer />
      <BackToHub dark />
    </div>
  );
}
