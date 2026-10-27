// Detailné texty pre podstránky služieb návrhu 3. Ceny a základný popis postupu pochádzajú z conturemakeup.sk,
// ostatné texty (pre koho, výsledky, FAQ) sú demonštračné a treba ich overiť s firmou.
export type ServiceDetail = {
  slug: "obocie" | "ocne-linky" | "pery";
  title: string;
  h1: string;
  metaDescription: string;
  lead: string;
  image: string;
  gallery: { src: string; alt: string }[];
  forWhom: string[];
  method: string;
  steps: { t: string; d: string }[];
  results: string[];
  prices: { name: string; price: number; note: string }[];
  faq: { q: string; a: string }[];
  related: ("obocie" | "ocne-linky" | "pery")[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "obocie",
    title: "Obočie",
    h1: "Permanentný make-up obočia v Bratislave",
    metaDescription: "Čiarkované, púdrové alebo kombo obočie metódou Conture® v Bratislave. Predkreslenie, postup, cena 250 € a časté otázky.",
    lead: "Tvar obočia je to, čo najviac mení výraz tváre. Preto ho najprv nakreslíme, spolu upravíme a až potom pigmentujeme.",
    image: "/images/portrait-dark.jpg",
    gallery: [{ src: "/images/portrait-dark.jpg", alt: "Ilustračná fotografia: portrét s upraveným obočím" }, { src: "/images/palette.jpg", alt: "Ilustračná fotografia: paleta odtieňov a štetce" }],
    forWhom: ["Ak si obočie každé ráno kreslíte a chcete ušetriť čas.", "Ak máte riedke alebo nesymetrické obočie a hľadáte vyrovnaný tvar.", "Ak chcete prirodzený výsledok bez výrazného „namaľovaného“ efektu."],
    method: "Jemné vlásky sa pigmentujú prístrojom Long-Time-Liner®, farby sa implantujú prístrojom Conture MED 2000 (podľa popisu na pôvodnom webe).",
    steps: [
      { t: "Konzultácia", d: "Prejdeme tvar tváre, vaše predstavy a výber techniky: čiarkované, púdrové alebo kombo." },
      { t: "Predkreslenie", d: "Obočie nakreslíme špeciálnou farebnou ceruzkou. Kontúry môžete kedykoľvek upraviť." },
      { t: "Pigmentácia", d: "Po odsúhlasení tvaru nanesieme pigment tak, aby výsledok pôsobil prirodzene." },
      { t: "Dopigmentovanie", d: "Ak je výsledok po prvom ošetrení príliš jemný, možno ho do troch mesiacov bezplatne dopigmentovať." },
    ],
    results: ["Čiarkované: imituje jednotlivé vlásky.", "Púdrové: jemné vytieňovanie, ako keby ste použili tieň.", "Kombo: kombinácia oboch techník pre plnší vzhľad."],
    prices: [{ name: "Čiarkované obočie", price: 250, note: "Imitácia vlások" }, { name: "Púdrové obočie", price: 250, note: "Jemné vytieňovanie" }, { name: "Kombo (čiarkované + vytieňované)", price: 250, note: "Kombinácia techník" }],
    faq: [
      { q: "Môžem tvar obočia pred pigmentáciou zmeniť?", a: "Áno. Tvar sa najprv predkreslí ceruzkou a môžete ho upravovať, kým nebudete spokojná." },
      { q: "Čo ak je obočie po prvom ošetrení príliš nevýrazné?", a: "Podľa pôvodného webu ho možno do troch mesiacov bezplatne dopigmentovať." },
      { q: "Ktorú techniku si vybrať?", a: "Odporučíme vám na konzultácii podľa vášho obočia a štýlu líčenia." },
    ],
    related: ["ocne-linky", "pery"],
  },
  {
    slug: "ocne-linky",
    title: "Očné linky",
    h1: "Permanentné očné linky v Bratislave",
    metaDescription: "Jemné, dekoratívne a spodné očné linky v Bratislave. Ceny od 100 €, priebeh ošetrenia a odpovede na časté otázky.",
    lead: "Zvýraznená línia mihalníc bez ranného líčenia. Zvolíte si jemný prirodzený efekt alebo výraznejšiu dekoratívnu linku.",
    image: "/images/lips.jpg",
    gallery: [{ src: "/images/lips.jpg", alt: "Ilustračná fotografia: líčenie očí a pier" }, { src: "/images/brushes.jpg", alt: "Ilustračná fotografia: štetce na líčenie" }],
    forWhom: ["Ak vás ráno zdržuje kreslenie očných liniek.", "Ak chcete jemne zahustiť líniu mihalníc.", "Ak hľadáte výraznejšiu líniu na pravidelné každodenné nosenie."],
    method: "Pigmentuje sa v línii mihalníc, rozsah a hrúbku linky určíme spoločne pri konzultácii.",
    steps: [
      { t: "Konzultácia", d: "Určíme, či chcete jemnú, dekoratívnu alebo len spodnú linku." },
      { t: "Predkreslenie", d: "Navrhneme tvar a hrúbku linky tak, aby ladila s tvarom očí." },
      { t: "Pigmentácia", d: "Po odsúhlasení linku pigmentujeme." },
    ],
    results: ["Jemná linka: nenápadné zvýraznenie.", "Dekoratívna linka: výraznejší efekt s „ťahom“.", "Spodná jemná linka: doplnenie dolnej línie oka."],
    prices: [{ name: "Očné linky jemné", price: 120, note: "Nenápadné zvýraznenie" }, { name: "Očné linky dekoratívne", price: 160, note: "Výraznejšia linka" }, { name: "Očné linky spodné jemné", price: 100, note: "Spodná línia" }],
    faq: [
      { q: "Aký je rozdiel medzi jemnou a dekoratívnou linkou?", a: "Jemná linka je nenápadná a prirodzená, dekoratívna je výraznejšia a viac zvýrazní tvar oka." },
      { q: "Dá sa objednať iba spodná linka?", a: "Áno, spodná jemná linka je samostatná položka cenníka za 100 €." },
      { q: "Ako dlho výsledok vydrží?", a: "Pôvodný web trvanie neuvádza, individuálne ho upresníme pri konzultácii." },
    ],
    related: ["obocie", "pery"],
  },
  {
    slug: "pery",
    title: "Pery",
    h1: "Permanentný make-up pier v Bratislave",
    metaDescription: "Plnovytieňované pery v Bratislave, cena 350 €. Pre koho je vhodný, priebeh a časté otázky.",
    lead: "Sýtejšia farba a jasnejší tvar pier. Plnovytieňovaná technika dodá perám farbu v celej ploche.",
    image: "/images/portrait-red.jpg",
    gallery: [{ src: "/images/portrait-red.jpg", alt: "Ilustračná fotografia: portrét s výraznými perami" }, { src: "/images/flatlay.jpg", alt: "Ilustračná fotografia: kozmetické produkty na béžovom podklade" }],
    forWhom: ["Ak máte bledé pery a chcete trvalejšiu farbu.", "Ak chcete jasnejšie definovaný tvar pier.", "Ak sa vám rtenka rýchlo stráca a hľadáte pohodlnejšie riešenie."],
    method: "Plnovytieňovaná technika vyplní farbou celú plochu pier, odtieň volíme spoločne.",
    steps: [
      { t: "Konzultácia", d: "Prejdeme tvar a odtieň, ktorý vám pristane." },
      { t: "Predkreslenie", d: "Obrys a farbu pier navrhneme a môžeme upraviť pred pigmentáciou." },
      { t: "Pigmentácia", d: "Po odsúhlasení plnovytieňujeme pery zvoleným odtieňom." },
    ],
    results: ["Sýtejšia a rovnomernejšia farba.", "Jasnejšia kontúra pier.", "Odtieň od prirodzeného po výraznejší, podľa vášho výberu."],
    prices: [{ name: "Plnovytieňované pery", price: 350, note: "Celá plocha pier" }],
    faq: [
      { q: "Môžem si vybrať odtieň?", a: "Áno, odtieň volíme spoločne na konzultácii a predkreslení." },
      { q: "Koľko stojí ošetrenie pier?", a: "Plnovytieňované pery stoja 350 € (cenník Bratislava k 19. 11. 2024)." },
      { q: "Dá sa kombinovať s inými službami?", a: "Áno, v cenníku nájdete orientačný výpočet viacerých služieb." },
    ],
    related: ["obocie", "ocne-linky"],
  },
];

export const getService = (slug: string) => serviceDetails.find((s) => s.slug === slug);
