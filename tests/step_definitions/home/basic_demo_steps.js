const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');
const browser = client.page.basic_demo_page();

Given(/^user goto basicdemo page$/, () => {
    return browser.navigateToBasicDemoPage();
});
 
When(/^user see title "([^"]*)"$/, (text) => {
    return browser.assertPageSectionTitle(text);
});

Then(/^user enter message$/, () => {
    return browser.setMessageSection1();
});

When(/^click "([^"]*)" button$/, (button) => {
    return browser.clickButton(button);
});

Then(/^user will see text result "([^"]*)"$/, (text) => {
    return browser.assertresultData(text);
});

Then(/^user enter A and B$/, () => {
    return browser.setMessageSection2();
});
  