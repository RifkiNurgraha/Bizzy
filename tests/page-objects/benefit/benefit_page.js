const env = require('dotenv').config();
var base = require('./../../helper/base_page.js');

var benefit = {
  elements: {
    pageTitleBizzyBenefit: 'Bizzy Benefit - Bizzy'
  },
  commands: [{
    assertPageTitleBizzyBenefit: function() {
      return base.assertPageTitle(this, benefit.elements.pageTitleBizzyBenefit);
    }
  }]
}

module.exports = benefit;
