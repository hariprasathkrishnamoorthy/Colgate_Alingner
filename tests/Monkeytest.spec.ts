import { test } from '@playwright/test';
const gremlins = require('gremlins');


test('run gremlins.js', async ({ page }) => {
    await page.addInitScript({
        path: './node_modules/gremlins.js/dist/gremlins.min.js',
    });
    await page.goto('https://playwright.dev');
    await page.evaluate(() => gremlins.createHorde().unleash());
});