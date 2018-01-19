const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');
const browser = client.page.bbc_home_page();

Given(/^user is at bbc homepage$/, () => {
    return browser.navigateToBBCPage();
})

Then(/^user will see bbc homepage$/, () => {
    return browser.assertPageTitleBBC();
})