import type { Page } from "@playwright/test";

/**
 * Page Object for the Homepage
 * Encapsulates homepage-specific interactions and selectors
 */
export class HomePage {
  constructor(private page: Page) {}

  /**
   * Navigate to the homepage
   */
  async goto() {
    await this.page.goto("/");
  }

  /**
   * Get the page title
   */
  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * Navigate to the contact page
   */
  async navigateToContact() {
    await this.page.getByRole("link", { name: /contact/i }).click();
  }

  /**
   * Navigate to the about page
   */
  async navigateToAbout() {
    await this.page.getByRole("link", { name: /about/i }).click();
  }

  /**
   * Navigate to the services page
   */
  async navigateToServices() {
    await this.page.getByRole("link", { name: /services/i }).click();
  }
}
