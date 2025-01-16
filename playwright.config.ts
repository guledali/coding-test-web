import { defineConfig, devices } from "@playwright/test";
import { BASE_URL } from "@/app/lib/constant";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./e2e",
  // Maximum time one test can run for
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  // Run tests in files in parallel
  fullyParallel: true,
  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,
  // Retry on CI only
  retries: process.env.CI ? 2 : 0,
  // Reporter to use
  reporter: [
    ["list"], // Show running tests in terminal
    ["html"], // Generate HTML report
  ],

  // Run your local dev server before starting the tests
  webServer: {
    command: "npm run dev",
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000, // 120 seconds
  },

  use: {
    // Base URL to use in actions like `await page.goto('/')`
    baseURL: BASE_URL,
    trace: "on-first-retry",
    headless: process.env.CI ? true : false,
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
