const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
var seleniumeasy_message=client.page.seleniumeasy.seleniumeasy_message();

defineSupportCode(({Given, Then, When}) => {
    Given(/^user is at seleniumeasy first demo$/, () => {
        return seleniumeasy_message.navigateToBasicFirstDemo();
    });

    When(/^user input message$/, () => {
        return seleniumeasy_message.inputMessage();
    });
    Then(/^user click show message$/,() => {
        return seleniumeasy_message.clickShowMessage();
    });
    Then(/^user can see message inputed$/, () => {
        return seleniumeasy_message.verifyMessage();
    });
    When (/^user input "([^"]*)" for first value$/,(valueA) => {
        return seleniumeasy_message.inputValuePertama(valueA);
    });
    When (/^user input "([^"]*)" for second value$/,(valueB) => {
        return seleniumeasy_message.inputValueKedua(valueB);
    });
    Then (/^user click button total$/,() => {
        return seleniumeasy_message.clickTotalValue();
    });
    Then (/^insert "([^"]*)" "([^"]*)" you can see total value$/,(valueA, valueB) =>{
        return seleniumeasy_message.verifyTotalValue(valueA, valueB);
    });

});