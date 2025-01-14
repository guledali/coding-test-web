import { test, expect } from "@playwright/test";
import { COMPANIES } from "@/app/lib/mock";
import { listOfCompanies } from "@/app/lib/helpers";

test("should find the banner, display the correct company count in banner", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.getByText("Companies listed")).toBeVisible();

  const totalCompanies = listOfCompanies(COMPANIES).toString();

  await expect(page.locator(".stat-number").first()).toHaveText(totalCompanies);
});
