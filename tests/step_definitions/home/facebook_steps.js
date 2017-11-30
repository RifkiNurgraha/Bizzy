const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');
const browser = client.page.facebook_home_page();

Given(/^user is at facebook homepage$/, () => {
    return browser.navigateToFacebookHomePage();
  });

Then(/^user will see facebook page$/, () => {
  return browser.assertPageTitleFacebook();
});

When(/^user click "([^"]*)" button$/, (button) => {
  return browser.clickButtonFacebookHome(button);
});

Then(/^user will see facebook halaman page$/, () => {
  return browser.assertPageTitleFacebookHalaman();
});

Then(/^user will see text gratis$/, () => {
  return browser.assertGratisText();
});

When(/^user fill username and password$/, () => {
  return browser.setUserPass();
});

Then(/^user will see user page$/, () => {
  return browser.assertUserPage();
});
