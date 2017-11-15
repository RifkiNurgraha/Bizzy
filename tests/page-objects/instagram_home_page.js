const env = require('dotenv').config();
var base = require('./../helper/base_page.js');

var instagramHome = {
    url: function set_url() {
      return 'https://www.instagram.com/';
    },
    elements: {
      pageTitleInstagram: 'Instagram'
    },
    commands: [{
      navigateToInstagramHomePage: function() {
        return this.navigate();
      },
      assertPageTitleInstagram: function() {
        return base.assertPageTitle(this, instagramHome.elements.pageTitleInstagram);
      }
    }]
  }

  module.exports = instagramHome;
