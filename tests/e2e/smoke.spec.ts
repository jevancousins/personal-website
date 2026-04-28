import { test, expect } from "./fixtures";

const PAGES = [
  { path: "/", title: /Jevan Cousins/i },
  { path: "/about", title: /Bio/i },
  { path: "/now", title: /Now/i },
  { path: "/writing", title: /Writing/i },
  { path: "/projects", title: /Projects/i },
  { path: "/projects/earnings-call-analyser", title: /Jevan Cousins/i },
  { path: "/projects/jobhunter", title: /JobHunter/i },
  { path: "/projects/lineup", title: /Lineup/i },
  { path: "/projects/nutriplan", title: /NutriPlan/i },
];

for (const p of PAGES) {
  test(`${p.path} renders without errors`, async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });

    const response = await page.goto(p.path);
    expect(response?.status(), `expected 2xx for ${p.path}`).toBeLessThan(400);

    await expect(page).toHaveTitle(p.title);
    await expect(page.locator("h1").first()).toBeVisible();
    await expect(page.locator("nav").first()).toBeVisible();
    await expect(page.locator("footer").first()).toBeVisible();

    expect(
      consoleErrors,
      `unexpected console errors on ${p.path}:\n${consoleErrors.join("\n")}`
    ).toEqual([]);
  });
}
