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
  page.waitForElementPresent(elementSelector, 5000);
}

// wait until element is visible
var waitElementVisible = function(page, elementSelector) {
  waitElementPresent(page, elementSelector);
  page.waitForElementVisible(elementSelector, 5000);
}

// set value to element
var setValueElement =  function(page, elementSelector, value) {
  waitElementVisible(page, elementSelector);
  page.clearValue();
  page.setValue(elementSelector, value);
}

// get text from element
var getStringText = function(page, elementSelector) {
  waitElementVisible(page, elementSelector);
  return page.getText(selector);
}

// assert page title
var assertPageTitle = function(page, elementSelector) {
  return page.assert.title(elementSelector);
}

module.exports = {
  clickElement: clickElement,
  waitElementPresent: waitElementPresent,
  waitElementVisible: waitElementVisible,
  setValueElement: setValueElement,
  getStringText: getStringText,
  assertPageTitle: assertPageTitle

}
