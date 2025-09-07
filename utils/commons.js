import path from "path";

export async function login(page, email, password) {
    await page.locator('#btn1').click();
    await page.locator('//input[@ng-model="Email"]').fill(email);
    await page.locator('//input[@ng-model="Password"]').fill(password);
    await page.locator('#enterbtn').click();
}

export async function uploadFile(page, element, fileName) {
  const filePath = path.join(process.cwd(), "fixtures/files", fileName);
  await page.locator(element).setInputFiles(filePath);
}