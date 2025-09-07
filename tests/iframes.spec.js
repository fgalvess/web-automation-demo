import { test, expect } from "@playwright/test";
const domain = require("../fixtures/domains.json");

test.describe("Suíte de testes de interação iframes", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(domain.domain.automationDemo);
    await page.locator('#btn2').click();
    await page.locator('//a[contains(.,"SwitchTo")]').click();
    await page.locator('//a[contains(.,"Frames")]').click();
  });

  test("WEB-007: Interação com iframes", async ({ page }) => { 
    await expect(page.frameLocator('#singleframe').locator('h5')).toHaveText("iFrame Demo");

    await page.frameLocator('#singleframe').locator('input[type="text"]').fill('Teste iframe');
    await expect(page.frameLocator('#singleframe').locator('input[type="text"]')).toHaveValue('Teste iframe');

    await page.locator('//a[contains(.,"Iframe with in an Iframe")]').click();

    const nestedFrame = page.frameLocator('iframe[src="MultipleFrames.html"]').frameLocator('iframe[src="SingleFrame.html"]');
    await expect(nestedFrame.locator('h5')).toHaveText("iFrame Demo");

    await nestedFrame.locator('input[type="text"]').fill('Teste iframe nested');
    await expect(nestedFrame.locator('input[type="text"]')).toHaveValue('Teste iframe nested');
  });
});