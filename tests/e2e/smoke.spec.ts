import { expect, test } from '@playwright/test';

test('application foundation is reachable', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('ASRI APP');
  await expect(
    page.getByRole('heading', { name: 'Foundation is ready.' }),
  ).toBeVisible();
});
