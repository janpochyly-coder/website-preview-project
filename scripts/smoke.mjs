// Dymový test viacstránkového projektu. Spustenie: BASE_URL=http://localhost:3000 node scripts/smoke.mjs
import { chromium } from "playwright";

const base = process.env.BASE_URL ?? "http://localhost:3000";
const b = await chromium.launch();
const out = [];
let failed = 0;
const ok = (name, cond) => { if (!cond) failed++; out.push(`${cond ? "OK  " : "FAIL"} ${name}`); };

const pages = [
  "/", "/navrh-1",
  "/navrh-2", "/navrh-2/sluzby", "/navrh-2/realizacie", "/navrh-2/o-nas", "/navrh-2/kontakt",
  "/navrh-3", "/navrh-3/sluzby", "/navrh-3/sluzby/obocie", "/navrh-3/sluzby/ocne-linky", "/navrh-3/sluzby/pery",
  "/navrh-3/realizacie", "/navrh-3/cennik", "/navrh-3/o-nas", "/navrh-3/poradna", "/navrh-3/kontakt",
];

// 1) Každá stránka na desktope aj mobile: stav 200, jedno h1, title, description, bez pretekania, bez chýb v konzole, lang=sk
for (const [w, label] of [[1440, "desktop"], [375, "mobile"]]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  const errors = [];
  p.on("pageerror", (e) => errors.push(e.message));
  p.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  for (const path of pages) {
    const r = await p.goto(base + path, { waitUntil: "networkidle" });
    const info = await p.evaluate(() => ({
      over: document.documentElement.scrollWidth > window.innerWidth + 1,
      h1: document.querySelectorAll("h1").length,
      title: document.title,
      desc: !!document.querySelector('meta[name="description"]')?.content,
      canon: !!document.querySelector('link[rel="canonical"]'),
      lang: document.documentElement.lang,
      brokenImg: [...document.images].filter((i) => i.complete && i.naturalWidth === 0 && i.loading !== "lazy").length,
    }));
    const tag = `${path} ${label}`;
    ok(`${tag}: HTTP 200`, r.status() === 200);
    ok(`${tag}: jedno h1`, info.h1 === 1);
    ok(`${tag}: title + description`, info.title.length > 10 && info.desc);
    if (path !== "/") ok(`${tag}: canonical`, info.canon);
    ok(`${tag}: lang=sk`, info.lang === "sk");
    ok(`${tag}: bez horizontálneho preťekania`, !info.over);
    if (path !== "/") ok(`${tag}: odkaz na rozcestník`, (await p.locator('a[href="/"]').count()) >= 1);
  }
  ok(`${label}: bez chýb v konzole (${errors.length})`, errors.length === 0);
  errors.forEach((e) => out.push("   " + e));
  await p.close();
}

// 2) Unikátne titles v rámci návrhu 3 a 2 (nie rovnaké texty)
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
const titles = [];
for (const path of pages) { await p.goto(base + path); titles.push(await p.title()); }
ok("všetky title sú unikátne", new Set(titles).size === titles.length);

// 3) Navigácia: hlavička vedie na podstránky, aktívna položka je zvýraznená, mobilné menu
for (const [n, items] of [[2, ["Služby", "Realizácie", "O nás", "Kontakt"]], [3, ["Služby", "Realizácie", "Cenník", "O nás", "Poradňa", "Kontakt"]]]) {
  for (const label of items) {
    await p.goto(`${base}/navrh-${n}`);
    await p.getByRole("navigation", { name: "Hlavná navigácia" }).getByRole("link", { name: label, exact: true }).click();
    await p.waitForURL(new RegExp(`/navrh-${n}/.+`));
    ok(`navrh-${n}: navigácia „${label}“ → ${new URL(p.url()).pathname}`, new URL(p.url()).pathname.startsWith(`/navrh-${n}/`));
    const cur = await p.getByRole("navigation", { name: "Hlavná navigácia" }).locator('[aria-current="page"]').innerText();
    ok(`navrh-${n}: aktívna položka „${label}“`, cur.trim().toLowerCase() === label.toLowerCase());
  }
}
const m = await b.newPage({ viewport: { width: 375, height: 800 } });
for (const n of [2, 3]) {
  await m.goto(`${base}/navrh-${n}`, { waitUntil: "networkidle" });
  await m.getByRole("button", { name: "Otvoriť menu" }).click();
  await m.getByRole("navigation", { name: "Mobilné menu" }).getByRole("link", { name: "Služby" }).first().click();
  await m.waitForURL(`**/navrh-${n}/sluzby`);
  ok(`navrh-${n}: mobilné menu naviguje`, new URL(m.url()).pathname === `/navrh-${n}/sluzby`);
}
// BASIC mobilné menu
await m.goto(`${base}/navrh-1`, { waitUntil: "networkidle" });
await m.getByRole("button", { name: "Otvoriť menu" }).click();
ok("navrh-1: mobilné menu", await m.getByRole("navigation", { name: "Mobilné menu" }).isVisible());

// 4) Detaily služieb: breadcrumbs, späť, súvisiace
await p.goto(`${base}/navrh-3/sluzby/pery`);
ok("detail: breadcrumbs", (await p.getByRole("navigation", { name: "Omrvinková navigácia" }).count()) === 1);
await p.getByRole("link", { name: "← Späť na všetky služby" }).click();
await p.waitForURL("**/navrh-3/sluzby");
ok("detail: späť na služby", new URL(p.url()).pathname === "/navrh-3/sluzby");
await p.getByRole("tab", { name: "Obočie" }).click();
await p.getByRole("link", { name: "Detail služby" }).click();
await p.waitForURL("**/sluzby/obocie");
ok("služby: záložka → detail", new URL(p.url()).pathname === "/navrh-3/sluzby/obocie");
const res404 = await p.goto(`${base}/navrh-3/sluzby/neexistuje`);
ok("neexistujúci detail → 404", res404.status() === 404);

// 5) Formuláre (kontakt oboch návrhov + BASIC)
for (const [path, id] of [["/navrh-1", "n1"], ["/navrh-2/kontakt", "n2"], ["/navrh-3/kontakt", "n3"]]) {
  await p.goto(base + path);
  await p.getByRole("button", { name: /Odoslať dopyt/ }).click();
  ok(`${path}: validácia ukáže chyby`, (await p.getByText("Zadajte meno").count()) === 1);
  await p.locator(`#${id}-name`).fill("Test Test");
  await p.locator(`#${id}-phone`).fill("0903 123 456");
  await p.locator(`#${id}-email`).fill("test@example.com");
  await p.locator(`#${id}-message`).fill("Dobrý deň, mám záujem.");
  await p.getByRole("button", { name: /Odoslať dopyt/ }).click();
  ok(`${path}: potvrdenie po odoslaní (demo)`, (await p.getByText("Ide o demonštračný formulár").count()) === 1);
}

// 6) FAQ
await p.goto(`${base}/navrh-2/sluzby`);
await p.getByRole("button", { name: /Čo ak je výsledok/ }).click();
ok("navrh-2/sluzby: FAQ akordeón", await p.getByText("dopigmentovanie do troch mesiacov").first().isVisible());
await p.goto(`${base}/navrh-3/poradna`);
await p.getByRole("button", { name: /Koľko ošetrenie stojí/ }).click();
ok("navrh-3/poradna: FAQ akordeón", await p.getByText("Zmena cien vyhradená").first().isVisible());
await p.getByRole("button", { name: /Čítať viac/ }).first().click();
ok("navrh-3/poradna: rozbaliteľné novinky", (await p.getByRole("button", { name: /Zbaliť/ }).count()) === 1);
await p.getByPlaceholder("Váš e-mail").fill("zle");
await p.getByRole("button", { name: "Získať checklist" }).click();
ok("lead magnet validácia", await p.getByText("Zadajte platný e-mail.").first().isVisible());
await p.getByPlaceholder("Váš e-mail").fill("a@b.sk");
await p.getByRole("button", { name: "Získať checklist" }).click();
ok("lead magnet úspech", await p.getByText("Demo: e-mail sa neodosielal").isVisible());

// 7) Realizácie MAX: filter, lightbox, before/after
await p.goto(`${base}/navrh-3/realizacie`, { waitUntil: "networkidle" });
await p.getByRole("button", { name: "Štúdio", exact: true }).click();
ok("filter galérie", (await p.locator("#galeria ul li").count()) === 2);
await p.locator("#galeria ul li button").first().click();
ok("lightbox", await p.getByRole("dialog").isVisible());
await p.keyboard.press("Escape");
ok("lightbox sa zavrie", (await p.getByRole("dialog").count()) === 0);
const before = await p.locator("#pred-po [style*=clip-path]").getAttribute("style");
await p.getByLabel("Posunúť porovnanie pred a po").fill("80");
const after = await p.locator("#pred-po [style*=clip-path]").getAttribute("style");
ok("before/after slider mení výrez", before !== after);

// 8) Cenník: spojený konfigurátor + kalkulačka
await p.goto(`${base}/navrh-3/cennik`, { waitUntil: "networkidle" });
await p.getByLabel(/Čiarkované obočie/).check();
await p.getByLabel(/Plnovytieňované pery/).check();
await p.getByLabel(/Sýty/).check({ force: true });
ok("cenník: výpočet 600 €", await p.locator("#kalkulacka").getByText("600 €").first().isVisible());
ok("cenník: odtieň v súhrne", await p.locator("#kalkulacka").getByText("Odtieň: sýty").isVisible());
await p.getByRole("link", { name: "Pokračovať na objednávku" }).click();
await p.waitForURL("**/navrh-3/kontakt");
ok("cenník → kontakt", new URL(p.url()).pathname === "/navrh-3/kontakt");

// 9) CTA odkazy vedú na kontakt, rozcestník odkazuje na hlavné stránky návrhov
await p.goto(`${base}/navrh-2`);
await p.getByRole("link", { name: "Objednať sa" }).first().click();
await p.waitForURL("**/navrh-2/kontakt");
ok("navrh-2: CTA → kontakt", new URL(p.url()).pathname === "/navrh-2/kontakt");
await p.goto(base + "/");
const hrefs = await p.getByRole("link", { name: /Zobraziť návrh/ }).evaluateAll((els) => els.map((e) => new URL(e.href).pathname));
ok(`rozcestník: odkazy ${hrefs.join(", ")}`, JSON.stringify(hrefs) === JSON.stringify(["/navrh-1", "/navrh-2", "/navrh-3"]));

console.log(out.join("\n"));
console.log(failed ? `\n${failed} FAIL` : "\nVšetko OK");
await b.close();
process.exit(failed ? 1 : 0);
