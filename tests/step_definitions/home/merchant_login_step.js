const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');
const browser = client.page.merchant_login();

Given(/^user is at merchant login page$/, () => {
  return browser.navigateToMerchantLoginPage();
});

Then(/^user will see merchant login page$/, () => {
return browser.assertPageTextLogin();
});

When(/^user enter email and password$/, () => {
  return browser.setUserPass();
});

Then(/^user click "([^"]*)" button in Login page$/, (button) => {
  return browser.clickButtonMerchantLogin(button);
});

Then(/^user will go to dashboard$/, () => {
  return browser.assertUserPage();
});