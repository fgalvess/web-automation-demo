import { test, expect } from "@playwright/test";
import { uploadFile } from "../utils/commons";
const domain = require("../fixtures/domains.json");

test.describe("Suíte de testes de upload de arquivos", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(domain.domain.automationDemo);
    await page.locator('#btn2').click();
    await page.locator('//a[contains(.,"More")]').click();
    await page.locator('//a[contains(.,"File Upload")]').click();
  });

  test("WEB-005: Upload de arquivo", async ({ page }) => {
   await uploadFile(page, 'input[name="input4[]"]', 'upload1.webp');
   await page.locator('(//button[@title="View Details"])[1]').click();
   await expect(page.locator('.modal-title')).toBeVisible();

   const imgSrc = await page.locator('.file-zoom-detail').getAttribute('title');
   expect(imgSrc).toContain('upload1.webp');
  });
});