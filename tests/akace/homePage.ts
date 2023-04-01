import { Page } from "@playwright/test";

export default class HomePage {

    constructor(public page: Page) { }

    async clickAltiAyinEn() {

        await this.page.click("//span[text()='6 Ayın En Ucuz Fiyatları']");
    }



}