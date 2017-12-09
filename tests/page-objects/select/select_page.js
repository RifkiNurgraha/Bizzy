const env = require('dotenv').config();
const base = require('nightwatch-base-page');

var select = {
  elements: {
    pageTitleBizzySelect: 'Bizzy Select - Exclusive Procurement Solution - Bizzy'
  },
  commands: [{
    assertPageTitleBizzySelect: function() {
      return base.assertPageTitle(this, select.elements.pageTitleBizzySelect)
    }
  }]
}

module.exports = select;
