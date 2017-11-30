const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
var browser = client.page.merchant_home_page();

defineSupportCode(({Given, Then, When}) => {

  Given(/^user is at merchant center homepage$/, () => {
    return browser.navigateToMerchantHomePage();   
  });
  Given(/^the merchant center hompepage tittle is correct$/, () => {
    return browser.assertPageTitleMerchantCenter();   
  });
  
});
