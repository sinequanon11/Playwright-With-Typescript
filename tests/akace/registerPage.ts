import { Page } from "@playwright/test";

export default class registerPage {

    constructor(public page: Page) {

    }

    async enterFirstName(firstname: string) {
        await this.page.locator("#rnufn").type(firstname);
    }

    async enterLastName(lastname: string) {
        await this.page.locator("#rnufs").type(lastname);
    }

    async enterRegisterEmail(registeremail: string) {
        await this.page.locator("#rnufe1").type(registeremail);
    }

    async repeatRegisterEmail(repeatemail: string) {
        await this.page.locator("#rnufe2").type(repeatemail);
    }

    async enterResisterPassword(registerpassword: string) {
        await this.page.locator("#rnufp1").type(registerpassword);
    }

    async repeatRegisterPassword(repeatpassword: string) {
        await this.page.locator("#rnufp2").type(repeatpassword);
    }
    async genderChecked() {
        await this.page.click("#rngm");
    }

    async selectCities() {
        const cities = await this.page.locator("#locpr");
        cities?.selectOption("6");
    }

    async selectSubCities() {
        const subcities = await this.page.locator("#locds");
        subcities?.selectOption("64");
    }

    async selectDay() {
        const day = await this.page.locator("#bd");
        day?.selectOption("1");
    }

    async selectMonth() {
        const month = await this.page.locator("#bm");
        month?.selectOption("1");
    }

    async selectYear() {
        const year = await this.page.locator("#by");
        year?.selectOption("2000");
    }

    async clickTermAndCondition() {
        await this.page.click("#rnufpca");
    }

    async clickOpenAccount() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click("#rfb")
        ])


    }




}


