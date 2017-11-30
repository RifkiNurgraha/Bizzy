const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
var browser = client.page.merchant_registration_page();

defineSupportCode(({Given, Then, When}) => {

  Then(/^user will see merchant registration page$/, () => {
    return browser.assertPageTitleMerchantRegistration();
  });

  When(/^user set "([^"]*)"$/, (text) => {
    return browser.setValueMerchantRegistration(text);
  });

  When(/^user click on register button$/, () => {
    return browser.clickRegisterButton();
  });

  Then(/^user will see registration form$/, () => {
    return browser.setValueLastName();
  });

});
