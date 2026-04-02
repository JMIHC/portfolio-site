import { test, expect } from "@playwright/test";

test("footer contact link navigates to contact page", async ({ page }) => {
  await page.goto("/");
  const footerLink = page.locator("footer a[aria-label='Contact']");
  await footerLink.click();
  await expect(page).toHaveURL("/contact");
  await expect(page.locator("h1")).toHaveText("Contact");
});
