import {test as setup, expect} from "@playwright/test";

setup("create customer 01 auth", async ({ page , context }) => {
    const email = "customer@practicesoftwaretesting.com";
    const password ="welcome01";
    const customer01AuthFile = ".auth/customer01.json";

    await page.goto("https://practicesoftwaretesting.com/auth/login");
    
})