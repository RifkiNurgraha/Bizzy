const env = require('dotenv').config();
var base = require('./../../helper/base_page.js');

var home = {
  url: function set_url() {
    var url = process.env.BASE_URL_SELENIUMEASY_PRACTICE+'basic-radiobutton-demo.html';
    console.log(url);
    return url;
  },
  elements: {
    sexOption: 'input',
    dayDisplay: 'p.selected-value',
    checkValueButton: '#buttoncheck',
    textDisplayed: 'p.radiobutton'
  },
  commands: [{
    navigateToRadioButtonPage: function() {
      return this.navigate();
    },
    chooseSex: function(sex) {
      return base.clickElement(this,home.elements.sexOption+"[value="+sex+"]");
    },
    verifyChoosenSex: function(choosenSex) {
      return base.expectElementSelected(this,home.elements.sexOption+"[value="+choosenSex+"]");
    },
    clickGetCheckedValueButton: function() {
      return base.clickElement(this,'@checkValueButton');
    },
    sexTextDisplayed: function(choosenSex) {
      var expectedText= "Radio button '"+choosenSex+"' is checked";
      return base.expectEqualsTextFromElement(this,'@textDisplayed',expectedText);
    }
  }]
}

module.exports = home;
