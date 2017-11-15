const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
var browser = client.page.instagram_home_page();

defineSupportCode(({Given, Then, When}) => {
    Given(/^user is at instagram homepage$/, () => {
        return browser.navigateToInstagramHomePage();
      });

    Then(/^user will see instagram page$/, () => {
    return browser.assertPageTitleInstagram();
    });
});
