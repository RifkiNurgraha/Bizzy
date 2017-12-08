const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');
var browser = client.page.merchantcenter.merchantcenter_home_page();

Given(/^user is at merchantCenter homepage$/, () => {
    return browser.navigateTomerchantCenterHomePage();
});

Then(/^user will see merchantCenter page$/, () => {
    return browser.assertpageTitlemerchantCenter();
});

When(/^user click button masuk mc$/, () => {
    return browser.clickmerchantCenterSelectButtonMasuk();
});

Then(/^user fill email and password mc$/, () => {
    return browser.setUserPass();
});

Then(/^user will see user page mc$/, () => {
    return browser.assertUserPage();
});

Then(/^user click button dropdown profile mc$/, () => {
    return browser.clickmerchantCenterSelectDropdownProfile();
});

Then(/^user click link signout mc$/, () => {
    return browser.clickmerchantCenterSelectLinkSignout();
});

Then(/^user will see homepage mc$/, () => {
    return browser.assertHomePage();
});