import { test, expect } from "@playwright/test";

const PAGES = [
  "/",
  "/about",
  "/now",
  "/writing",
  "/projects",
  "/projects/earnings-call-analyser",
  "/projects/jobhunter",
  "/projects/lineup",
  "/projects/nutriplan",
];

for (const path of PAGES) {
  test(`${path} has valid SEO metadata`, async ({ page }) => {
    await page.goto(path);

    const title = await page.title();
    expect(title.length, `${path} title should be non-empty`).toBeGreaterThan(0);
    expect(title.length, `${path} title should be under 70 chars`).toBeLessThan(80);

    const description = await page
      .locator('meta[name="description"]')
      .getAttribute("content");
    expect(description, `${path} should have a meta description`).toBeTruthy();
    expect(
      description!.length,
      `${path} description should be under 200 chars`
    ).toBeLessThan(200);

    const ogTitle = await page
      .locator('meta[property="og:title"]')
      .getAttribute("content");
    expect(ogTitle, `${path} should have og:title`).toBeTruthy();

    const ogDescription = await page
      .locator('meta[property="og:description"]')
      .getAttribute("content");
    expect(ogDescription, `${path} should have og:description`).toBeTruthy();

    const ogType = await page
      .locator('meta[property="og:type"]')
      .getAttribute("content");
    expect(ogType, `${path} should have og:type=website`).toBe("website");

    const viewport = await page
      .locator('meta[name="viewport"]')
      .getAttribute("content");
    expect(viewport, `${path} should have a viewport meta`).toContain("width=device-width");
  });
}
