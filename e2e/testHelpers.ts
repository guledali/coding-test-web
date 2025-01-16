import { Page } from "@playwright/test";

/**
 * Takes you to any page in the app by providing the URL path
 * For example: navigateTo(page, "/companies") goes to companies page
 *
 */
export async function navigateTo(page: Page, path: string) {
  await page.goto(path);
}
/**
 * Clicks a link by its text content
 * can be used to click any link in the app
 *
 */
export async function clickLink(page: Page, linkText: string) {
  await page.getByText(linkText).click();
}
