const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');
const browser = client.page.basic_demo_page();

Given(/^user goto basicdemo page$/, () => {
    return browser.navigateToBasicDemoPage();
});
 
When(/^user see title "([^"]*)"$/, (text) => {
    return browser.assertPageSectionTitle(text);
});

Then(/^user enter "([^"]*)"$/, (text) => {
    return browser.setMessageSection1(text);
});

When(/^click "([^"]*)" button$/, (button) => {
    return browser.clickButton(button);
});

Then(/^user will see text result "([^"]*)"$/, (text) => {
    return browser.assertresultData1(text);
});

Then(/^user enter "([^"]*)" and "([^"]*)"$/, (numberA, numberB) => {
    return browser.setMessageSection2(numberA, numberB);
});

Then(/^user will see text result "([^"]*)" and "([^"]*)"$/, (numberA, numberB) => {
    return browser.assertresultData2(numberA, numberB);
});

  