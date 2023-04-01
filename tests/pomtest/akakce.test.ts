import { expect, test } from "@playwright/test";
import RegisterPage from "../akace/registerPage"
import LoginPage from "../akace/loginPage"
import HomePage from "../akace/homePage"
import SonAltiAyinPage from "../akace/sonAltiAyinPage";

const email = "pofimog49732@huvacliq.com";
const password = "AbAbAb111132";

test.describe("Register Login SelectItem Tests", async() => {

test("Akakce test_01", async ({ page, baseURL }) => {

    const register = new RegisterPage(page);
    await page.goto(`${baseURL}akakcem/giris/?m=1&s=1`);
    await register.enterFirstName("James");
    await register.enterLastName("Woodland");
    await register.enterRegisterEmail(email);
    await register.repeatRegisterEmail(email);
    await register.enterResisterPassword(password);
    await register.repeatRegisterPassword(password);
    await register.genderChecked();
    await register.selectCities();
    await register.selectSubCities();
    await register.selectDay();
    await register.selectMonth();
    await register.selectYear();
    await register.clickTermAndCondition();
    await register.clickOpenAccount();    

})

test ("Login test_02", async ({page, baseURL})=> {

const login = new LoginPage(page);
await page.goto(`${baseURL}akakcem/giris/`);

await login.enterLoginEmail(email);
await login.enterLoginPassword(password);
await login.clickLoginBtn();


})

test("Add to cart test_03", async ({page, baseURL}) =>{
    const login = new LoginPage(page);
    const homepage = new HomePage(page);
    const sonaltiayinpage = new SonAltiAyinPage(page);

    await page.goto(`${baseURL}akakcem/giris/`);
    await login.login(email, password);

    await homepage.clickAltiAyinEn();

    await sonaltiayinpage.chooseFirstItem();
    await sonaltiayinpage.goToSellerSite();  


})

})