const env = require('dotenv').config();
var base = require('./../helper/base_page.js');

var facebookHome = {
    url: function set_url() {
      return 'https://www.facebook.com/';
    },
    elements: {
      pageTitleFacebook: 'Facebook - Masuk atau Daftar'
    },
    commands: [{
      navigateToFacebookHomePage: function() {
        return this.navigate();
      },
      assertPageTitleFacebook: function() {
        return base.assertPageTitle(this, facebookHome.elements.pageTitleFacebook);
      }
    }]
  }

  module.exports = facebookHome;
