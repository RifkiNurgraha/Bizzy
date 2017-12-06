const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');
const login = client.page.growth.account_login_page();

Given(/^user is at login page$/, () => {
    return login.navigateToPage();
});

Then(/^user can see login page$/, () => {
    return login.verifyPage();
});

When(/^user input office email "([^"]*)" on user login textfield$/, (userLogin) => {
    return login.inputOfficeEmail(userLogin);
});

When(/^user input password "([^"]*)" on password textfield$/, (password) => {
    return login.inputPassword(password);
});

When(/^user click submit login button$/, () => {
    return login.clickBtnLogin();
});

Then(/^user can login successfully$/, () => {
    
});