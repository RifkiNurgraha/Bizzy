const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
var browser = client.page.benefit.benefit_page();

defineSupportCode(({Given, Then, When}) => {

  Then(/^user will see Bizzy Benefit page$/, () => {
    return browser.assertPageTitleBizzyBenefit();
  });

});
