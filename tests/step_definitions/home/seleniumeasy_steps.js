const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
var seleniumeasy_dropdown= client.page.seleniumeasy.seleniumeasy_dropdown();
var seleniumeasy_radiobutton= client.page.seleniumeasy.seleniumeasy_radiobutton();

defineSupportCode(({Given, Then, When}) => {
    Given(/^user is at seleniumeasy dropdown list demo page$/, () => {
        return seleniumeasy_dropdown.navigateToDropDownPage();
    });

    When(/^user choose "([^"]*)" on day dropdown list$/, (day) => {
        return seleniumeasy_dropdown.chooseDay(day);
    });

    Then(/^user can see day selected "([^"]*)"$/, (day) => {
        return seleniumeasy_dropdown.verifySelectedDay(day);
    });

    Given(/^user is at seleniumeasy radio button demo page$/, () => {
        return seleniumeasy_radiobutton.navigateToRadioButtonPage();
    });

    When(/^user choose "([^"]*)" on sex list$/, (sex) => {
        return seleniumeasy_radiobutton.chooseSex(sex);
    });

    Then(/^user can see sex choosen "([^"]*)"$/, (sex) => {
        return seleniumeasy_radiobutton.verifyChoosenSex(sex);
    });

    When(/^user click get checked value button$/, () => {
        return seleniumeasy_radiobutton.clickGetCheckedValueButton();
    });

    Then(/^user can see sex text "([^"]*)" displayed$/, (sex) => {
        return seleniumeasy_radiobutton.sexTextDisplayed(sex);
    });
});