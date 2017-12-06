const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');
const registration = client.page.growth.account_reg_page();

Given(/^user is at account registration page$/, () => {
    return registration.navigateToPage();
});

Then(/^user can see account registration page$/, () => {
    return registration.verifyPage();
});

When(/^user input first name "([^"]*)"$/, (firstName) => {
    return registration.inputFirstName(firstName);
});

When(/^user input last name "([^"]*)"$/, (lastName) => {
    return registration.inputLastName(lastName);
});

When(/^user input office email "([^"]*)"$/, (officeEmail) => {
    return registration.inputOfficeEmail(officeEmail);
});

When(/^user input password "([^"]*)"$/, (password) => {
    return registration.inputPassword(password);
});

When(/^user click create account button$/, () => {
    return registration.clickCreateAccountBtn();
});

Then(/^user can create account successfully$/, () => {
    
});