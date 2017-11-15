const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
var browser = client.page.twitter_home_page();

defineSupportCode(({Given, Then, When}) => {
    Given(/^user is at twitter homepage$/, () => {
        return browser.navigateToTwitterHomePage();
    });

    Then(/^user will see twitter page$/, () => {
        return browser.assertPageTitleTwitter();
    });
});
