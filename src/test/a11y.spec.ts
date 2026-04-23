import { test, expect } from "./fixtures/a11y";

test.describe("Accessibility Tests", () => {
  test("homepage should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("about page should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/about");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("contact page should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/contact");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("blog index should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/blog");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("work index should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/work");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("services index should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/services");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("team page should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/team");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("pricing page should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/pricing");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("faq page should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/faq");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
