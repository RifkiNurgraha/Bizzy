const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
var browser = client.page.facebook_home_page();

defineSupportCode(({Given, Then, When}) => {
    Given(/^user is at facebook homepage$/, () => {
        return browser.navigateToFacebookHomePage();
      });

    Then(/^user will see facebook page$/, () => {
    return browser.assertPageTitleFacebook();
    });
});
