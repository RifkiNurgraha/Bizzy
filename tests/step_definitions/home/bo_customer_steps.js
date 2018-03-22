const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');
const browser = client.page.phoenix.home_bo_page();

Given(/^user is at bizzy page$/, () => {
  return browser.navigateToBOHomePage();
});

Then(/^user will see bizzy page$/, () => {
  return browser.assertPageTitleBO();
});

When(/^user click "([^"]*)" tombol$/, (tombol) => {
  return browser.clickButtonBOHome(tombol);
});

Then(/^user will see bizzy login page$/, () => {
  return browser.assertPageTitleLogin();
});

When(/^user set username and password$/, () => {
  return browser.setUserPassword();
});

Then(/^user will see back office page$/, () => {
  return browser.assertDashboardPage();
});
When(/^user go to menu "([^"]*)" page$/,(tabMenu)=>{
  return browser.goToMenu(tabMenu);
});
When(/^user search "([^"]*)" in list of product$/,(namaProduk)=>{
  return browser.inputSearchProduct(namaProduk);
});
Then(/^user can see product "([^"]*)" found$/,(namaProduk)=>{
  browser.verifyNameProduct(namaProduk);
});
Then(/^user can verify stok "([^"]*)"$/,(jumlahStok)=>{
  return browser.verifyJumlahStok(jumlahStok);
});
