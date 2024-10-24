const { test, expect } = require("@playwright/test");


test.describe('web UI Demo', () => {
    test('TC-1 Web UI test saucedemo', async ({ page }) => {

        //User success login
        await page.goto('https://www.saucedemo.com/')
        await page.getByPlaceholder('Username').fill('standard_user')
        await page.locator('[id= "password"]').fill('secret_sauce')
        await page.getByText('Login').click()

        //Validate user berada di dashboard setelah login
        await expect(page.getByText('Swag Labs')).toBeVisible()
        await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible()

        //Add item to cart
        await expect(page.getByText('Swag Labs')).toBeVisible()
        await expect(page.getByText('Sauce Labs Backpack')).toBeVisible()
        await page.getByRole('button', { name: 'Add to cart' }).first().click()
        await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1')

        //Validate item sukses ditambahkan ke cart
        await page.goto('https://www.saucedemo.com/cart.html')
        await expect(page.getByText('Sauce Labs Backpack')).toBeVisible()
    });
});