// set and acccess set_url
var setURL = function(baseURL) {
  console.log('========================================');
  console.log('|| Accessing ' + baseURL + ' ||');
  console.log('========================================');
  return baseURL;
}

// click element wait for present and visible
var clickElement = function(page, elementSelector) {
  waitElementVisible(page, elementSelector)
  page.click(elementSelector);
}

// click element without wait
var clickElementWithoutWait = function(page, elementSelector) {
  page.click(elementSelector);
}

// wait until element is present
var waitElementPresent = function(page, elementSelector) {
  page.waitForElementPresent(elementSelector, 30000);
}

// wait until element is visible
var waitElementVisible = function(page, elementSelector) {
  waitElementPresent(page, elementSelector);
  page.waitForElementVisible(elementSelector, 30000);
}

// set value to element
var setValueElement =  function(page, elementSelector, value) {
  waitElementVisible(page, elementSelector);
  page.clearValue(elementSelector);
  page.setValue(elementSelector, value);
}

// set value to element then press ENTER
var setValueElementThenEnter =  function(page, elementSelector, value, browser) {
  waitElementVisible(page, elementSelector);
  page.clearValue(elementSelector);
  page.setValue(elementSelector, [value,browser.Keys.ENTER]);
}

// get text from element
var getStringText = function(page, elementSelector) {
  waitElementVisible(page, elementSelector);
  return page.getText(elementSelector);
}

// check if the given element contains the specific text
var assertContainsText = function(page, elementSelector, expectedText){
  waitElementVisible(page, elementSelector);
  return page.assert.containsText(elementSelector,expectedText);
}

// check if the given element equals the specific text
var expectEqualsTextFromElement = function(page,elementSelector, expectedText){
  waitElementVisible(page, elementSelector);
  return page.expect.element(elementSelector).text.to.equal(expectedText);
}

// assert page title
var assertPageTitle = function(page, elementSelector) {
  return page.assert.title(elementSelector);
}

// scroll to element
var scrollToElement =  function(page,elementSelector){
  return page.moveToElement(elementSelector,0,0)
}

// sleep/pause page
var pauseSleep = function(page, timeSleep) {
  return page.pause(timeSleep);
}

// expect to be visible
var expectVisible = function(page,elementSelector){
  return page.expect.element(elementSelector).to.be.visible;
}

// choose an option from dropdown list
var chooseOptionValue = function(page,elementSelector,selectedOption){
  return page.click(elementSelector,()=>{
    page.click("option[value="+selectedOption+"]");
  })
}

var expectElementSelected = function(page,elementSelector){
  return page.expect.element(elementSelector).to.be.selected;
}

module.exports = {
  setURL: setURL,
  clickElement: clickElement,
  waitElementPresent: waitElementPresent,
  waitElementVisible: waitElementVisible,
  setValueElement: setValueElement,
  getStringText: getStringText,
  assertPageTitle: assertPageTitle,
  pauseSleep: pauseSleep,
  scrollToElement: scrollToElement,
  setValueElementThenEnter: setValueElementThenEnter,
  expectVisible: expectVisible,
  chooseOptionValue: chooseOptionValue,
  assertContainsText: assertContainsText,
  expectElementSelected: expectElementSelected,
  expectEqualsTextFromElement: expectEqualsTextFromElement
  // scrollPage: scrollPage
}
