import {Page} from "@playwright/test";
export default class LoginPage{

constructor(public page: Page){}

    async enterLoginEmail(loginemail: string) {
        await this.page.locator("#life").type(loginemail);
    }

    async login (email: string, password: string){

        await this.enterLoginEmail(email);
        await this.enterLoginPassword(password);
        await this.clickLoginBtn();

    }

    async enterLoginPassword(loginpassword: string) {
        await this.page.locator("#lifp").type(loginpassword);
    }

    async clickLoginBtn() {
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("#lfb")
        ])      
      }

}