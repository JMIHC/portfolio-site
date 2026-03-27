import { chromium } from "@playwright/test";

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    ignoreHTTPSErrors: true,
  });

  const page = await context.newPage();
  try {
    console.log("Screenshotting cornyntherapeutics...");
    await page.goto("https://www.cornyntherapeutics.ltd/", {
      waitUntil: "networkidle",
      timeout: 30000,
    });
    await page.screenshot({
      path: "public/images/cornyntherapeutics.png",
      clip: { x: 0, y: 0, width: 1280, height: 800 },
    });
    console.log("Done.");
  } catch (err) {
    console.error(`Failed: ${err.message}`);
  }

  await browser.close();
})();
