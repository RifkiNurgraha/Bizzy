const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');
var browser = client.page.phoenix.phoenix_catalog_page();

Given(/^user is at phoenixHome homepage$/, () => {
    return browser.navigateTophoenixHomePage();
});

Then(/^user can see phoenixHome page$/, () => {
    return browser.verifyPage();
});

When(/^user search with keyword "([^"]*)"$/, (keyword) => {
    return browser.inputKeyword(keyword);
});

When(/^user click select button$/, () => {
    return browser.clickSelectProductBtn();
});