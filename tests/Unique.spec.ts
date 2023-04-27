import { chromium, Browser, Page } from "playwright";
import { BrowserContext, test } from "@playwright/test";

let browser: Browser;
let context: BrowserContext;
let page: Page;

const setup = async () => 
{
  browser = await chromium.launch();
  context = await browser.newContext();
};

const teardown = async () => 
{
  await browser.close();
};

test.describe("my test suite", () => {
  

  test.beforeAll(async () => {
    await setup();
    page = await context.newPage();
  });

  test.afterAll(async () => {
    await teardown();
  });

  test("my test1", async () => {
    await page.goto("https://playwright.dev/docs/test-parallel");
    console.log("hi 1");
  });

  test("my test2", async () => {
    await page.goto("https://www.yahoo.com");
    console.log("hi 2");
  });

  test("my test3", async () => {
    await page.goto("https://www.bing.com");
    console.log("hi 3");
  });
});
