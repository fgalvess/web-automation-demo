import { test, expect } from "@playwright/test";
const domain = require("../fixtures/domains.json");

test.describe("Suíte de testes de interação com alertas JS", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(domain.domain.automationDemo);
    await page.locator('#btn2').click();
    await page.locator('//a[contains(.,"SwitchTo")]').click();
    await page.locator('//a[contains(.,"Alerts")]').click();
    await page.locator('//a[contains(.,"Alert with OK & Cancel")]').click();
  });

  test("WEB-006: Interação com alertas JS", async ({ page }) => {
    page.once('dialog', async (dialog) => {
        console.log(dialog.message());
    await dialog.accept();
    });

    await page.locator('.btn-primary').click();
    await expect(page.locator('#demo')).toHaveText("You pressed Ok");
    
    page.once('dialog', async (dialog) => {
        console.log(dialog.message());
    await dialog.dismiss();
    });

    await page.locator('.btn-primary').click();
    await expect(page.locator('#demo')).toHaveText("You Pressed Cancel");
  });  
}); 