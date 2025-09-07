import { test, expect } from "@playwright/test";
import { login } from "../utils/commons";
const domain = require("../fixtures/domains.json");
const user = require("../fixtures/users.json");

test.describe("Suíte de testes de Login", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(domain.domain.automationDemo);
  });

  test("WEB-004: Login com dados inválidos", async ({ page }) => {
    await login(page, user.user.invalidUser, user.password.invalidPassword);
    await expect(page.locator('#errormsg')).toHaveText(" Invalid User Name or PassWord ");
  });
});