const env = require('dotenv').config();
const {client} = require('nightwatch-cucumber');
var base = require('./../helper/base_page.js');

var linkedinHome = {
    url: function set_url() {
      var url = base.setURL(process.env.BASE_URL_LINKEDIN);
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
