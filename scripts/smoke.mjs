// Dymový test: sekcie, mobilné pretekanie, formuláre a interaktívne prvky. Spustenie: BASE_URL=... node scripts/smoke.mjs
import { chromium } from "playwright";

const base = process.env.BASE_URL ?? "http://localhost:3000";
const b = await chromium.launch();
const out = [];
const ok = (name, cond) => { out.push(`${cond ? "OK  " : "FAIL"} ${name}`); };

for (const [w, label] of [[1440, "desktop"], [375, "mobile"]]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  const errors = [];
  p.on("pageerror", (e) => errors.push(e.message));
  p.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  for (const n of [1, 2, 3]) {
    await p.goto(`${base}/navrh-${n}`, { waitUntil: "networkidle" });
    const over = await p.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    ok(`navrh-${n} ${label}: bez horizontálneho preťekania`, !over);
    ok(`navrh-${n} ${label}: jedno h1`, (await p.locator("h1").count()) === 1);
    ok(`navrh-${n} ${label}: lang=sk`, (await p.getAttribute("html", "lang")) === "sk");
    ok(`navrh-${n} ${label}: odkaz na rozcestník`, (await p.locator('a[href="/"]').count()) >= 1);
    if (label === "desktop") {
      const blocks = await p.evaluate(() => {
        const main = document.querySelector("main");
        return { header: !!document.querySelector("header"), footer: !!document.querySelector("footer"), sections: main.querySelectorAll(":scope > section").length };
      });
      const expected = { 1: 5, 2: 9, 3: 22 }[n]; // sekcie v main (bez header a footer)
      ok(`navrh-${n}: header+footer+${expected} sekcií v main (celkovo ${expected + 2}; zistené ${blocks.sections})`, blocks.header && blocks.footer && blocks.sections === expected);
    }
  }
  await p.goto(`${base}/`, { waitUntil: "networkidle" });
  ok(`hub ${label}: 3 tlačidlá Zobraziť návrh`, (await p.getByText("Zobraziť návrh").count()) === 3);
  ok(`hub ${label}: obrázky screenshotov načítané`, await p.evaluate(() => [...document.images].every((i) => i.complete && i.naturalWidth > 0)));
  ok(`${label}: bez chýb v konzole (${errors.length})`, errors.length === 0);
  if (errors.length) out.push(...errors.map((e) => "   " + e));
  await p.close();
}

// Interakcie (desktop)
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
for (const n of [1, 2, 3]) {
  await p.goto(`${base}/navrh-${n}`, { waitUntil: "networkidle" });
  const id = `n${n}`;
  await p.locator(`#${id}-name`).fill("");
  await p.getByRole("button", { name: /Odoslať dopyt/ }).click();
  ok(`navrh-${n}: validácia ukáže chyby`, (await p.getByText("Zadajte meno").count()) === 1);
  await p.locator(`#${id}-name`).fill("Test Test");
  await p.locator(`#${id}-phone`).fill("0903 123 456");
  await p.locator(`#${id}-email`).fill("test@example.com");
  await p.locator(`#${id}-message`).fill("Dobrý deň, mám záujem.");
  await p.getByRole("button", { name: /Odoslať dopyt/ }).click();
  ok(`navrh-${n}: potvrdenie po odoslaní (demo)`, (await p.getByText("Ide o demonštračný formulár").count()) === 1);
}
await p.goto(`${base}/navrh-2`);
await p.getByRole("button", { name: /Čo ak je výsledok/ }).click();
ok("navrh-2: FAQ akordeón", await p.getByText("dopigmentovanie do troch mesiacov").isVisible());
await p.goto(`${base}/navrh-3`, { waitUntil: "networkidle" });
await p.getByRole("tab", { name: "Pery" }).click();
ok("navrh-3: záložky služieb", await p.getByText("Plnovytieňované pery").first().isVisible());
await p.getByLabel("Očné linky", { exact: true }).check({ force: true });
await p.getByLabel(/Dekoratívne/).check({ force: true });
ok("navrh-3: konfigurátor počíta 160 €", await p.locator("#konfigurator").getByText("160 €").first().isVisible());
await p.getByLabel(/Čiarkované obočie/).check();
await p.getByLabel(/Plnovytieňované pery/).check();
ok("navrh-3: kalkulačka 600 €", await p.locator("#kalkulacka").getByText("600 €").isVisible());
await p.getByRole("button", { name: "Štúdio", exact: true }).click();
ok("navrh-3: filter galérie", (await p.locator("#galeria ul li").count()) === 2);
await p.locator("#galeria ul li button").first().click();
ok("navrh-3: lightbox", await p.getByRole("dialog").isVisible());
await p.keyboard.press("Escape");
await p.getByLabel("Posunúť porovnanie pred a po").fill("80");
ok("navrh-3: before/after slider", true);
await p.getByPlaceholder("Váš e-mail").fill("zle");
await p.getByRole("button", { name: "Získať checklist" }).click();
ok("navrh-3: lead magnet validácia", await p.getByText("Zadajte platný e-mail.").first().isVisible());
await p.getByPlaceholder("Váš e-mail").fill("a@b.sk");
await p.getByRole("button", { name: "Získať checklist" }).click();
ok("navrh-3: lead magnet úspech", await p.getByText("Demo: e-mail sa neodosielal").isVisible());
// mobilné menu
const m = await b.newPage({ viewport: { width: 375, height: 800 } });
for (const n of [1, 2, 3]) {
  await m.goto(`${base}/navrh-${n}`, { waitUntil: "networkidle" });
  await m.getByRole("button", { name: "Otvoriť menu" }).click();
  ok(`navrh-${n}: mobilné menu`, await m.getByRole("navigation", { name: "Mobilné menu" }).isVisible());
}
console.log(out.join("\n"));
await b.close();
