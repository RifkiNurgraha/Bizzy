// set and acccess set_url
var setURL = function(baseURL) {
  var url = process.env.BASE_URL_FACEBOOK;
  console.log('====================');
  console.log('Accessing ' + baseURL);
  console.log('====================');
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

// get text from element
var getStringText = function(page, elementSelector) {
  waitElementVisible(page, elementSelector);
  return page.getText(selector);
}

// assert page title
var assertPageTitle = function(page, elementSelector) {
  return page.assert.title(elementSelector);
}

// var scrollPage = function(page, elementSelector) {
//   page.getLocationInView(elementSelector, funtion(result) {
//     this.assert.equal(typeof result, "object");
//     this.assert.equal(result.status, 0);
//     this.assert.equal(result.value.x, 200);
//     this.assert.equal(result.value.y, 200);
//   })
// }

// sleep/pause page
var pauseSleep = function(page, timeSleep) {
  return page.pause(timeSleep);
}

module.exports = {
  setURL: setURL,
  clickElement: clickElement,
  waitElementPresent: waitElementPresent,
  waitElementVisible: waitElementVisible,
  setValueElement: setValueElement,
  getStringText: getStringText,
  assertPageTitle: assertPageTitle,
  pauseSleep: pauseSleep
  // scrollPage: scrollPage
}
