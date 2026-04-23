import type { Page } from "@playwright/test";

/**
 * Page Object for the Contact Page
 * Encapsulates contact form interactions and selectors
 */
export class ContactPage {
  constructor(private page: Page) {}

  /**
   * Navigate to the contact page
   */
  async goto() {
    await this.page.goto("/contact");
  }

  /**
   * Fill the name field
   */
  async fillName(name: string) {
    await this.page.getByLabel(/name/i).fill(name);
  }

  /**
   * Fill the email field
   */
  async fillEmail(email: string) {
    await this.page.getByLabel(/email/i).fill(email);
  }

  /**
   * Fill the message field
   */
  async fillMessage(message: string) {
    await this.page.getByLabel(/message/i).fill(message);
  }

  /**
   * Select a service from the dropdown
   */
  async selectService(service: string) {
    await this.page.getByLabel(/service/i).selectOption(service);
  }

  /**
   * Fill the company field (optional)
   */
  async fillCompany(company: string) {
    await this.page.getByLabel(/company/i).fill(company);
  }

  /**
   * Fill the phone field (optional)
   */
  async fillPhone(phone: string) {
    await this.page.getByLabel(/phone/i).fill(phone);
  }

  /**
   * Submit the contact form
   */
  async submitForm() {
    await this.page.getByRole("button", { name: /send message/i }).click();
  }

  /**
   * Get the submit button element
   */
  getSubmitButton() {
    return this.page.getByRole("button", { name: /send message/i });
  }

  /**
   * Check if success message is visible
   */
  async isSuccessMessageVisible(): Promise<boolean> {
    const successMessage = this.page.getByText(/message sent|thank you/i);
    return await successMessage.isVisible().catch(() => false);
  }

  /**
   * Check if error message is visible
   */
  async isErrorMessageVisible(): Promise<boolean> {
    const errorMessage = this.page.getByText(/error|failed/i);
    return await errorMessage.isVisible().catch(() => false);
  }
}
