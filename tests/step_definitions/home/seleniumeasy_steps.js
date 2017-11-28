const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');
var seleniumeasy_dropdown= client.page.seleniumeasy_dropdown();
var day = 'Wednesday';

defineSupportCode(({Given, Then, When}) => {
    Given(/^user is at seleniumeasy dropdown list demo page$/, () => {
        return seleniumeasy_dropdown.navigateToDropDownPage();
    });

    When(/^user choose Wednesday on day dropdown list$/, () => {
        return seleniumeasy_dropdown.chooseDay(day);
    });

    Then(/^user can see day selected Wednesday$/, () => {
        return seleniumeasy_dropdown.verifySelectedDay(day);
    });
});