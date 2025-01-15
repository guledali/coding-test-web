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

test.describe("Company Detail Page", () => {
  test("should show company name on company detail page", async ({ page }) => {
    const firstCompany = COMPANIES[0];

    await page.goto(`/companies/${firstCompany.companyId}`);

    await expect(page).toHaveTitle(
      `${firstCompany.companyName} | Company Profile`
    );

    await expect(
      page.getByRole("heading", { name: firstCompany.displayName })
    ).toBeVisible();

    await expect(page.getByText(firstCompany.description)).toBeVisible();
  });

  test("should show back button on company detail page", async ({ page }) => {
    await page.goto("/companies/1");

    await page.getByText("← Back to Companies").click();

    await expect(page.getByText("← Back to Companies")).toBeVisible();
  });

  test("should show 'not-found' page if company not existed", async ({
    page,
  }) => {
    const notExistedCompany = COMPANIES.length + 1;

    await page.goto(`/companies/${notExistedCompany}`);

    await expect(page).toHaveTitle("Company Not Found");

    await expect(
      page.getByRole("heading", { name: "404 Not Found" })
    ).toBeVisible();

    await expect(page.getByRole("link", { name: "Go Back" })).toBeVisible();
  });
});
