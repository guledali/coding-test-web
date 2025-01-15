import { test, expect } from "@playwright/test";
import { COMPANIES } from "@/app/lib/mock";
import { listOfCompanies } from "@/app/lib/helpers";

test.describe("Homepage", () => {
  test("should find the banner, display the correct company count in banner", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page.getByText("Companies listed")).toBeVisible();

    const totalCompanies = listOfCompanies(COMPANIES).toString();

    await expect(page.locator(".stat-number").first()).toHaveText(
      totalCompanies
    );
  });
});

test.describe("Companies", () => {
  test("should navigate to companies page when clicking Browse Companies button", async ({
    page,
  }) => {
    await page.goto("/");

    await page.getByText("Browse Companies").click();

    await expect(page).toHaveURL("/companies");
    await expect(page).toHaveTitle("Companies - list");
  });

  test("should display first company name correctly", async ({ page }) => {
    await page.goto("/companies");

    const firstCompany = COMPANIES[0];

    await expect(page.getByTestId("company-name").first()).toHaveText(
      firstCompany.displayName
    );
  });

  test("should display last company names correctly", async ({ page }) => {
    await page.goto("/companies");

    const lastCompany = COMPANIES[COMPANIES.length - 1];

    await expect(page.getByTestId("company-name").last()).toHaveText(
      lastCompany.displayName
    );
  });

  test("should not show back button on companies list page", async ({
    page,
  }) => {
    await page.goto("/companies");

    await expect(page.getByText("← Back to Companies")).not.toBeVisible();
  });

  test("should navigate to company detail page when clicking Show Detail", async ({
    page,
  }) => {
    await page.goto("/companies");

    const detailButton = page
      .getByRole("button", { name: /show detail/i })
      .first();
    await detailButton.click();

    await expect(page).toHaveURL("/companies/1");
  });
});
