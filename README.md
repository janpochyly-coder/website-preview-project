# Tri návrhy webu – Conture Make-Up (Bratislava)

Demonštračný projekt na **interné testovanie**: tri vizuálne odlišné landing pages a rozcestník. Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, Lucide.

| Cesta | Šablóna | Štýl | Farby |
|---|---|---|---|
| `/` | rozcestník | – | – |
| `/navrh-1` | BASIC (7 blokov) | minimalistický + elegantný + prírodný (oblúky, serif Cormorant, veľa priestoru) | béžová, biela, staroružová |
| `/navrh-2` | PRO (11 blokov) | moderný + luxusný (tmavé plochy, ostré hrany, tenké linky, Playfair + Manrope) | zelená, biela, modrá |
| `/navrh-3` | MAX (24 blokov) | editoriálny „glam“ s interaktivitou – zvolené AI | slivková, blush, koralová |

**Zdôvodnenie štýlu návrhu 3:** klientkami permanentného make-upu sú ženy, ktoré hľadajú istotu a „premium“ pocit. Tmavá slivková s teplou koralovou a blush plochami pôsobí ako beauty magazín, zaobleným kartám a veľkému serifu pristane kombinácia kalkulačky, konfigurátora a galérie.

## Spustenie

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run lint       # type-check (tsc --noEmit)
```

Screenshoty pre rozcestník (Playwright, vyžaduje beh servera a `npx playwright install chromium`):

```bash
BASE_URL=http://localhost:3000 npm run screenshots
BASE_URL=http://localhost:3000 node scripts/smoke.mjs   # dymový test sekcií a interakcií
```

## Zdroje a pôvod údajov

- Analyzované: <https://conturemakeup.sk/> (úvodná stránka, Cenník, Obočie, Pery, Očné linky) – názov, kontakt na prevádzku Bratislava (Kuzmányho 4, 0903 687 696), cenník Bratislava (stav 19. 11. 2024), popis postupu a záruky dopigmentovania.
- Stránka „Ukážky prác“ bola na webe nedostupná (404), preto sa neanalyzovala. Otváracie hodiny, sociálne siete ani referencie web neuvádza.
- Prevádzka Žilina sa v návrhoch nepoužíva (zadanie: len Bratislava).
- **Demonštračné údaje:** všetky recenzie (označené „demo“), články v Novinkách, balíčky v cenníku návrhu 3 (súčet cien z cenníka), checklist, simulácia pred/po. Nie sú to overené fakty.
- Mapa v návrhu 3 je OpenStreetMap s **približnou** polohou.
- Formuláre majú lokálnu validáciu a **nič neodosielajú** (demo).

## Obrázky

Všetky fotografie pochádzajú z Unsplash, sú **ilustračné** a nezobrazujú reálne práce firmy. Pôvod je v [`data/image-credits.json`](data/image-credits.json). Fotografie na pôvodnom webe sú príliš malé (~7 kB), preto sa nepoužili. Licenčné podmienky a autorov je potrebné overiť pred produkčným použitím. Screenshoty v `public/screenshots/` sú vytvorené Playwrightom z reálnych stránok.

## Poznámky

- `next.config.mjs` definuje webpack alias `@` (alias z `tsconfig` sa v tomto prostredí nerozpoznal).
- Port 3000 môže byť obsadený; použite `-p`.
