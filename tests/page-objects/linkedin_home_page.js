const env = require('dotenv').config();
var base = require('./../helper/base_page.js');

var linkedinHome = {
    url: function set_url() {
      return 'https://www.linkedin.com/';
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
