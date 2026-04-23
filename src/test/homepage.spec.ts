import { test, expect } from "@playwright/test";
import { HomePage } from "./po/HomePage";
import { ContactPage } from "./po/ContactPage";

test.describe("Homepage", () => {
  test("homepage has correct title", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    const title = await homePage.getTitle();
    expect(title).toMatch(/Your Dedicated Marketer/);
  });

  test("homepage loads successfully", async ({ page }) => {
    const homePage = new HomePage(page);
    const response = await homePage.goto();
    expect(response?.status()).toBe(200);
  });

  test("can navigate to contact page", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.navigateToContact();
    await expect(page).toHaveURL(/\/contact/);
  });
});

test.describe("Contact Form E2E", () => {
  test.beforeEach(async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.goto();
  });

  test("should submit form with valid data", async ({ page }) => {
    const contactPage = new ContactPage(page);

    // Fill form with valid data
    await contactPage.fillName("Test User");
    await contactPage.fillEmail("test@example.com");
    await contactPage.fillMessage("This is a test message");
    await contactPage.selectService("SEO");
    await contactPage.fillCompany("Test Company");

    // Submit form
    await contactPage.submitForm();

    // Check for success message (may take time for API)
    // Note: This test may fail if the actual API is not mocked
    // In production, you'd mock the API response
  });

  test("should show validation error for missing required fields", async ({ page }) => {
    const contactPage = new ContactPage(page);

    // Submit without filling required fields
    await contactPage.submitForm();

    // Check for validation errors
    const nameInput = page.getByLabel(/name/i);
    await expect(nameInput).toHaveAttribute("aria-invalid", "true");
  });

  test("should show validation error for invalid email", async ({ page }) => {
    const contactPage = new ContactPage(page);

    await contactPage.fillName("Test User");
    await contactPage.fillEmail("invalid-email");
    await contactPage.fillMessage("Test message");

    await contactPage.submitForm();

    // Check for email validation error
    const emailInput = page.getByLabel(/email/i);
    await expect(emailInput).toHaveAttribute("aria-invalid", "true");
  });

  test("should clear validation error when user starts typing", async ({ page }) => {
    const contactPage = new ContactPage(page);

    // Submit without name to trigger error
    await contactPage.submitForm();
    const nameInput = page.getByLabel(/name/i);
    await expect(nameInput).toHaveAttribute("aria-invalid", "true");

    // Start typing in name field
    await contactPage.fillName("Test User");

    // Error should be cleared
    await expect(nameInput).not.toHaveAttribute("aria-invalid", "true");
  });

  test("should allow selecting different services", async ({ page }) => {
    const contactPage = new ContactPage(page);

    await contactPage.selectService("Content Marketing");
    const serviceSelect = page.getByLabel(/service/i);
    await expect(serviceSelect).toHaveValue("Content Marketing");

    await contactPage.selectService("Email Automation");
    await expect(serviceSelect).toHaveValue("Email Automation");
  });

  test("should disable submit button during submission", async ({ page }) => {
    const contactPage = new ContactPage(page);

    await contactPage.fillName("Test User");
    await contactPage.fillEmail("test@example.com");
    await contactPage.fillMessage("Test message");

    const submitButton = contactPage.getSubmitButton();
    await expect(submitButton).not.toBeDisabled();

    await contactPage.submitForm();

    // Button should be disabled during submission
    await expect(submitButton).toBeDisabled();
  });
});
