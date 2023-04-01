import test, { Page } from "@playwright/test";

export default class SonAltiAyinPage {

    constructor(public page: Page) { }

    async chooseFirstItem() {
        await this.page.click("(//h3[@class='pn_v8'])[1]");
    }

    async goToSellerSite() {
        await this.page.click("(//b[text()='Satıcıya Git'])[1]");
    }

}

