import { test, expect } from "./fixtures";

const PAGES = [
  { path: "/", title: /Jevan Cousins/i },
  { path: "/about", title: /About/i },
  { path: "/journal", title: /Lab journal/i },
  { path: "/notes", title: /Notes/i },
  { path: "/reading", title: /Reading/i },
  { path: "/papers", title: /Papers/i },
  { path: "/past-work", title: /Past work/i },
  { path: "/papers/lineup", title: /Lineup/i },
  { path: "/papers/nutriplan", title: /NutriPlan/i },
  { path: "/papers/jobhunter", title: /JobHunter/i },
  { path: "/papers/earnings-call-analyser", title: /Earnings-call/i },
  { path: "/papers/personal-ai-layer", title: /personal AI layer/i },
  { path: "/papers/personalised-learning-system", title: /adaptive learning/i },
  { path: "/papers/smb-ai-discovery", title: /SMB AI/i },
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
