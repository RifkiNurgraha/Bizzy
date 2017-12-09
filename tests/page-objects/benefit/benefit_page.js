const env = require('dotenv').config();
const base = require('nightwatch-base-page');

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
