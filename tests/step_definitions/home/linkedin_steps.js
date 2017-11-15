const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
var browser = client.page.linkedin_home_page();

defineSupportCode(({Given, Then, When}) => {
    Given(/^user is at linkedin homepage$/, () => {
        return browser.navigateToLinkedinHomePage();
    });

    Then(/^user will see linkedin page$/, () => {
        return browser.assertPageTitleLinkedin();
    });
});
