const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
var browser = client.page.select.select_page();

defineSupportCode(({Given, Then, When}) => {

  Then(/^user will see Bizzy Select page$/, () => {
    return browser.assertPageTitleBizzySelect();
  });

});
