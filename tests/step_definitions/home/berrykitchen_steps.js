const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');
var browser = client.page.berrykitchen_home_page();

Given(/^user is at berrykitchen homepage$/, () => {
    return browser.navigateToBerrykitchenHomePage();
});

Then(/^user will see berrykitchen page$/, () => {
    return browser.assertpageTitleBerrykitchen();
});