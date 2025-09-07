import { test, expect } from "@playwright/test";
import { login } from "../utils/commons";
const domain = require("../fixtures/domains.json");
const user = require("../fixtures/users.json");

test.describe("Suíte de testes de cadastro", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(domain.domain.automationDemo);
    await page.locator('#btn2').click();
  });

  test("WEB-002: Submeter formulário de cadastro sem preencher campos obrigatórios", async ({ page }) => {
    await page.locator('#submitbtn').click();

    const nameInput = page.locator('input[ng-model="FirstName"]');
    const isValid = await nameInput.evaluate((el) => el.checkValidity());
    expect(isValid).toBeFalsy();
  });
});