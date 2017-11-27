const env = require('dotenv').config();
var base = require('./../../helper/base_page.js');

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
