import { defineConfig } from "@playwright/test";

const baseURL = (process.env.BASE_URL || "http://127.0.0.1:4173").replace(/\/$/, "");

export default defineConfig({
  testDir: "tests",
  fullyParallel: true,
  forbidOnly: true,
  retries: 0,
  reporter: [
    ["list"],
    ["html", { open: "never", outputFolder: "verify-results/report" }],
  ],
  outputDir: "verify-results/output",
  use: {
    baseURL,
    reducedMotion: "reduce",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  webServer: process.env.BASE_URL
    ? undefined
    : {
        command: "node verify/server.mjs",
        url: `${baseURL}/`,
        reuseExistingServer: false,
        timeout: 15_000,
      },
});
