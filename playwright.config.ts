import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testMatch: ["tests/pomtest/akakce.test.ts"],
    use: {
        baseURL: "https://www.akakce.com/",
        headless: false,
        screenshot: "on",
        video: "on",
        launchOptions: {
            slowMo: 700
        }
    },
    retries: 0,
    reporter: [["dot"], ["json", {
        outputFile: "jsonReports/jsonReport.json"
    }], ["html", {
        open: "never"
    }]]
};

export default config; 
