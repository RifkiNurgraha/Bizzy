const env = require('dotenv').config();
var base = require('./../../helper/base_page.js');

var select = {
  url: function set_url() {
    return '/select';
  },
  elements: {
    pageTitleBizzySelect: 'Bizzy Select - Exclusive Procurement Solution - Bizzy'
  },
  commands: [{
    assertPageTitleBizzySelect: function() {
      return this.assert.title(select.elements.pageTitleBizzySelect);
      return base.assertPageTitle(this, select.elements.pageTitleBizzySelect)
    }
  }]
}

module.exports = select;
