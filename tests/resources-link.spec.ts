import { test, expect } from "@playwright/test";

test("nav Resources link navigates to resources page", async ({ page }) => {
  await page.goto("/");
  await page.locator("nav a", { hasText: "Resources" }).first().click();
  await expect(page).toHaveURL("/resources");
});

test("home page Resources paragraph link navigates to resources page", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByText("Downloads and reference links for this workshop are on the")
    .getByRole("link", { name: "Resources" })
    .click();
  await expect(page).toHaveURL("/resources");
});
