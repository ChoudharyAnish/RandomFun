import { test, expect } from '@playwright/test';

test('Homepage should load and show joke button', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('text=Click me for a joke!')).toBeVisible();
  await expect(page).toHaveTitle(/Random Fun Web App/i);
});
