import {test, expect} from "@playwright/test"

test("Home page", async({page }) =>{
    await page.goto("https://practicesoftwaretesting.com");

   
    await expect(page.getByTestId('nav-sign-in')).toHaveText("Sign in");

     //check page title
     await expect(page).toHaveTitle("Login - Practice Software Testing - Toolshop - v5.0");     


    //check count of items display

    //check result
})