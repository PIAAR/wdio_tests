import { Given, Then } from '@wdio/cucumber-framework'

Given(/^I open the Google page$/, async function () {
    await this.browser.url('https://www.google.com')
}

Given(/^I open the PS Family Recommender page$/, async function () {
    await this.app.client.waitUntilWindowLoaded()
    await this.app.client.url('/products/photoshop/app-recommender.html')
})

// Then I should be on the Google page', async function () {
//     await this.app.client.waitUntilWindowLoaded()
//     console.log(await this.app.client.getWindowCount())
// }
Then(/^I should see"(*)" in the page title $/, async function getTitle(expectedTitle: string)=> {
    await this.app.client.waitUntilWindowLoaded()
    const actualTitle = await this.app.client.getTitle()
    expect(actualTitle).to.equal(expectedTitle)
} )
    
Then(/^I should see "(.*)" in the page title$/, async (expectedPageTitle: string) {
    const actualPageTitle = await this.browser.app.client.getTitle()
    expect(actualPageTitle).to.equal(expectedPageTitle)
        // const url = await browser.getTitle();
    console.log(url);
})

Then(/^the page title contains the text "(.*)"$/, async (expectedPageTitle: string) {
    const actualPageTitle = await this.app.client.getTitle()
    expect(actualPageTitle).to.equal(expectedPageTitle)
})

// Given(/^I open Google Homepage too$/, async () => { 
//     await browser.url('https://www.google.com/);
// })
