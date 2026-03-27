import { chromium } from "@playwright/test";

const sites = [
  { name: "studio9inc", url: "https://studio9inc.com/" },
  { name: "iambicnana", url: "https://iambicnana.com/" },
  { name: "realignapparel", url: "https://realignapparel.store/" },
  { name: "rollfunkydice", url: "https://rollfunkydice.com/" },
  { name: "nelsonscomputerhelp", url: "https://nelsonscomputerhelp.com/" },
  { name: "cornyntherapeutics", url: "https://www.cornyntherapeutics.ltd/" },
  { name: "charmsgame", url: "https://www.charmsgame.com/" },
];

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });

  for (const site of sites) {
    const page = await context.newPage();
    try {
      console.log(`Screenshotting ${site.name} (${site.url})...`);
      await page.goto(site.url, { waitUntil: "networkidle", timeout: 30000 });
      await page.screenshot({
        path: `public/images/${site.name}.png`,
        clip: { x: 0, y: 0, width: 1280, height: 800 },
      });
      console.log(`  Done: ${site.name}.png`);
    } catch (err) {
      console.error(`  Failed ${site.name}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("All screenshots complete.");
})();
