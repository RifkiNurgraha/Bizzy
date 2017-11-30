const env = require('dotenv').config();
var base = require('./../../helper/base_page.js');

var home = {
  url: function set_url() {
    var url = process.env.BASE_URL_SELENIUMEASY_PRACTICE+'basic-select-dropdown-demo.html';
    console.log(url);
    return url;
  },
  elements: {
    dayList: '#select-demo',
    dayDisplay: 'p.selected-value'
  },
  commands: [{
    navigateToDropDownPage: function() {
        return this.navigate();
    },
    chooseDay: function(selectedOption) {
        //return base.chooseOptionValue(this,home.elements.dayList,selectedOption);
        return base.chooseOptionValue(this,'@dayList',selectedOption);
    },
    verifySelectedDay: function(selectedDay) {
        base.waitElementVisible(this,'@dayDisplay');
        base.expectVisible(this,'@dayDisplay');
        return base.assertContainsText(this, '@dayDisplay', selectedDay);
    },
  }]
}

module.exports = home;
