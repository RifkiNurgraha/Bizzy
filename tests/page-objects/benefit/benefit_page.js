const env = require('dotenv').config();
var base = require('./../../helper/base_page.js');

var benefit = {
  url: function set_url() {
    return '/select';
  },
  elements: {
    pageTitleBizzyBenefit: 'Bizzy Benefit - Bizzy'
  },
  commands: [{
    assertPageTitleBizzyBenefit: function() {
      // return this.assert.title(benefit.elements.pageTitleBizzyBenefit);
      return base.assertPageTitle(this, benefit.elements.pageTitleBizzyBenefit);
    }
  }]
}

module.exports = benefit;
