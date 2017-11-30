const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
var browser = client.page.phoenix_template_page();

defineSupportCode(({Given, Then, When}) => {

  Given(/^user is at phoenix homepage$/, () => {
    return browser.navigateToPhoenixTemplateHomepage();   
  });
  Then(/^the phoenix homepage is correct$/, () => {
    return browser.assertPageTittlePhoenixTemplateHomepage();   
  });
  Then(/^the content header is correct$/, () => {
    return browser.assertContentHeaderPhoenix();   
  });
  
});
