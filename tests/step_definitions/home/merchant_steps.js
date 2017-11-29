const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');
const browser = client.page.merchant_home();

Given(/^user is at merchant homepage$/, () => {
    return browser.navigateToMerchantHomePage();
  });

Then(/^user will see merchant page$/, () => {
  return browser.assertPageTextMerchant();
});
When(/^user click "([^"]*)" button in merchant home$/, (button) => {
  return browser.clickButtonMerchantHome(button);
});

Then(/^user will see login page$/, () => {
  return browser.assertheaderLogin();
});
Then(/^user will see text Masuk dengan Akun Bizzy Anda$/,() => {
  return browser.assertheaderLogin();
});