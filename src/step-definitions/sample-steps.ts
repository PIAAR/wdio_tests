import { Given } from '@wdio/cucumber-framework'


Given(/^I open Google Homepage$/, async function () {
    await this.app.client.waitUntilWindowLoaded()
    await this.app.client.url('http://www.google.com')
})

// Given(/^I open Google Homepage too$/, async () => { 
//     await browser.url('https://www.google.com/);
// })