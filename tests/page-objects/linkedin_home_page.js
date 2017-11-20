const env = require('dotenv').config();
var base = require('./../helper/base_page.js');

var linkedinHome = {
    url: function set_url() {
      var url = process.env.BASE_URL_FACEBOOK;
      console.log(url);
      return url;
    },
    elements: {
      pageTitleLinkedin: 'LinkedIn: Log In or Sign Up'
    },
    commands: [{
      navigateToLinkedinHomePage: function() {
        return this.navigate();
      },
      assertPageTitleLinkedin: function() {
        return base.assertPageTitle(this, linkedinHome.elements.pageTitleLinkedin);
      }
    }]
  }

  module.exports = linkedinHome;
