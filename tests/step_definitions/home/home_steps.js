const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
var browser = client.page.home_page();

defineSupportCode(({Given, Then, When}) => {

  Given(/^user is at homepage$/, () => {
    return browser.navigateToHomePage(); 
  });

  When(/^user scroll to the bottom$/, () => {
    return browser.scrollDownHomePage();
  });

  When(/^user click on Bizzy Select$/, () => {
    return browser.clickBizzySelectLinkText();
  });

  When(/^user click on Bizzy Benefit$/, () => {
    return browser.clickBizzyBenefitLinkText();
  });

  Then(/^the homepage title is correct$/, () => {
    return browser.assertPageTitleBizzy();
  });

  When(/^user click on "([^"]*)"$/, (link_text) => {
    return browser.clickBizzyLinkText(link_text);
  });

  Then(/^user will see "([^"]*)" page$/, (pages) => {
    return browser.assertPageTitleBizzyBenefit(pages);

  });

});
