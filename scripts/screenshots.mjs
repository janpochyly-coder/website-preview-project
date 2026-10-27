// Spustenie: npm run build && npm start (v inom termináli), potom npm run screenshots
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const base = process.env.BASE_URL ?? "http://localhost:3000";
mkdirSync("public/screenshots", { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
for (const n of [1, 2, 3]) {
  await page.goto(`${base}/navrh-${n}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `public/screenshots/navrh-${n}.png` });
  console.log("screenshot navrh-" + n);
}
await browser.close();
