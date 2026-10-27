// Údaje z https://conturemakeup.sk/ (kontakt, cenník – stav k 19. 11. 2024). Texty označené "demo" sú demonštračné.
export const biz = {
  name: "Conture Make-Up",
  tagline: "Permanentný make-up v Bratislave",
  address: "Kuzmányho 4, Bratislava – Palisády",
  phone: "0903 687 696",
  phoneHref: "tel:+421903687696",
  email: "info@conturemakeup.sk",
  experience: "23 rokov praxe",
  specialist: "Elite linergistin",
  guarantee: "Bezplatné dopigmentovanie do 3 mesiacov po prvom ošetrení",
  priceUpdated: "19. 11. 2024",
  source: "https://conturemakeup.sk/",
};

export type Service = { id: string; title: string; text: string; image: string; items: { name: string; price: number }[] };

export const services: Service[] = [
  {
    id: "obocie", title: "Obočie", image: "/images/portrait-dark.jpg",
    text: "Najprv konzultácia a predkreslenie obočia farebnou ceruzkou, kde je možné tvar kedykoľvek upraviť. Až potom sa pigment implantuje prístrojom Long-Time-Liner®.",
    items: [{ name: "Čiarkované obočie", price: 250 }, { name: "Púdrové obočie", price: 250 }, { name: "Kombo (čiarkované + vytieňované)", price: 250 }],
  },
  {
    id: "ocne-linky", title: "Očné linky", image: "/images/lips.jpg",
    text: "Jemná alebo výraznejšia linka v línii mihalníc. Ráno sa nemusíte maľovať a linka drží.",
    items: [{ name: "Očné linky jemné", price: 120 }, { name: "Očné linky dekoratívne", price: 160 }, { name: "Očné linky spodné jemné", price: 100 }],
  },
  {
    id: "pery", title: "Pery", image: "/images/portrait-red.jpg",
    text: "Plnovytieňované pery pre zvýraznený tvar a sýtejšiu farbu s prirodzeným vzhľadom.",
    items: [{ name: "Plnovytieňované pery", price: 350 }],
  },
];

export const faq = [
  { q: "Ako prebieha ošetrenie?", a: "Začíname konzultáciou a predkreslením tvaru špeciálnou farebnou ceruzkou. Kontúry možno kedykoľvek opraviť. Pigment sa implantuje až po vašom odsúhlasení tvaru." },
  { q: "Čo ak je výsledok po prvom ošetrení príliš jemný?", a: "Podľa informácií na pôvodnom webe je možné dopigmentovanie do troch mesiacov bezplatne. Presné podmienky vám upresníme pri objednaní." },
  { q: "Koľko ošetrenie stojí?", a: "Cenník Bratislava: obočie 250 €, očné linky od 100 €, pery 350 €. Zmena cien vyhradená, údaje z 19. 11. 2024." },
  { q: "Kde nájdem prevádzku?", a: "Kuzmányho 4, Bratislava – Palisády. Na objednanie zavolajte na 0903 687 696." },
  { q: "Je tento web oficiálny?", a: "Nie. Ide o demonštračný návrh redizajnu vytvorený na interné testovanie. Fotografie sú ilustračné." },
];

export const demoReviews = [
  { name: "Martina (demo)", text: "Demonštračná recenzia: pokojná atmosféra a precízne predkreslenie tvaru ešte pred samotným ošetrením." },
  { name: "Jana (demo)", text: "Demonštračná recenzia: oceňujem, že som mohla tvar obočia v prvej fáze upraviť." },
  { name: "Lucia (demo)", text: "Demonštračná recenzia: prirodzený výsledok, žiadne prehnané tvary." },
];
