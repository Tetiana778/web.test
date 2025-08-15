import { test, expect } from '@playwright/test';

test('Login Positive', async ({ page }) => {
  await page.goto('http://localhost:5000/');
await page.locator('input#login').fill('test');
await page.locator('input#password').fill('newyork1');
await page.locator('button#login').click();

await expect( page.getByText('calculate')).toBeVisible();
});
