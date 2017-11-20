const env = require('dotenv').config();
var base = require('./../helper/base_page.js');

var instagramHome = {
    url: function set_url() {
      var url = process.env.BASE_URL_INSTAGRAM;
      console.log(url);
      return url;
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
